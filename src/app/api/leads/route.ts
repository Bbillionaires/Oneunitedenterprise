import { NextRequest, NextResponse } from 'next/server'

const AZOTH_URL    = process.env.AZOTH_URL    || 'http://localhost:3002'
const AZOTH_SECRET = process.env.AZOTH_API_SECRET!
const WORKSPACE_ID = process.env.AZOTH_WORKSPACE_ID!
const PIPELINE_ID  = process.env.AZOTH_PIPELINE_ID!
const STAGE_ID     = process.env.AZOTH_DEFAULT_STAGE_ID!

// ── Pipeline cache ───────────────────────────────────────────────────
const pipelineCache = new Map<string, { pipeline_id: string; stage_id: string }>()

async function resolvePipeline(sector: string): Promise<{ pipeline_id: string; stage_id: string }> {
  if (pipelineCache.has(sector)) return pipelineCache.get(sector)!
  try {
    const res = await fetch(
      `${AZOTH_URL}/api/pipeline?workspace_id=${WORKSPACE_ID}&name=${encodeURIComponent(sector)}`,
      { headers: { 'Authorization': `Bearer ${AZOTH_SECRET}` } }
    )
    if (res.ok) {
      const json = await res.json()
      if (json.pipeline && json.default_stage_id) {
        const result = { pipeline_id: json.pipeline.id, stage_id: json.default_stage_id }
        pipelineCache.set(sector, result)
        return result
      }
    }
  } catch (err) {
    console.error('[leads] pipeline lookup failed:', err)
  }
  return { pipeline_id: PIPELINE_ID, stage_id: STAGE_ID }
}

// ── Rate limiting ───────────────────────────────────────────────────
const RATE_WINDOW  = 60 * 60 * 1000  // 1 hour in ms
const RATE_MAX     = 5               // max 5 submissions per IP per window
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): boolean {
  const now   = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return true
  }
  if (entry.count >= RATE_MAX) return false
  entry.count++
  return true
}

// ── Email notification ───────────────────────────────────────────────
async function notifyNewLead(data: {
  name:     string
  email:    string
  company?: string
  phone?:   string
  sector?:  string
  service?: string
  message?: string
}) {
  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) return

  const to   = process.env.ADMIN_EMAIL       || 'greenwood100inc@gmail.com'
  const from = process.env.NOTIFICATION_FROM || 'noreply@oneunitedenterprise.com'
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://oneunitedenterprise.vercel.app'

  const rows: [string, string][] = [
    ['Name',  data.name],
    ['Email', data.email],
    ...(data.phone   ? [['Phone',   data.phone]   as [string, string]] : []),
    ...(data.company ? [['Company', data.company] as [string, string]] : []),
    ...(data.sector  ? [['Sector',  data.sector]  as [string, string]] : []),
    ...(data.service ? [['Service', data.service] as [string, string]] : []),
    ...(data.message ? [['Message', data.message] as [string, string]] : []),
  ]

  const tableRows = rows
    .map(([k, v]) =>
      `<tr>` +
      `<td style="padding:6px 0;color:rgba(245,240,232,0.5);font-size:13px;width:90px">${k}</td>` +
      `<td style="padding:6px 0;font-size:13px">${v}</td>` +
      `</tr>`
    )
    .join('')

  await fetch('https://api.resend.com/emails', {
    method:  'POST',
    headers: {
      'Authorization': `Bearer ${resendKey}`,
      'Content-Type':  'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject: `New lead: ${data.name}${data.sector ? ` — ${data.sector}` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#12121F;color:#F5F0E8;border-radius:12px">
          <h2 style="color:#C9A84C;margin:0 0 8px">New Lead</h2>
          <p style="color:rgba(245,240,232,0.5);font-size:13px;margin:0 0 24px">
            Someone submitted the contact form on oneunitedenterprise.com
          </p>
          <table style="width:100%;border-collapse:collapse">${tableRows}</table>
          <a href="${base}/admin/leads"
             style="display:inline-block;margin-top:24px;padding:10px 20px;background:#C9A84C;color:#07070F;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600">
            View in Admin
          </a>
          <p style="margin:24px 0 0;color:rgba(245,240,232,0.3);font-size:11px">
            One United Enterprise LLC — Lead Notification
          </p>
        </div>
      `,
    }),
  }).catch(err => console.error('[leads] email send failed:', err))
}

// ── Handlers ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many submissions. Please wait before trying again.' },
      { status: 429 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, phone, company, sector, service, message, plan, affiliate_code } =
    body as Record<string, string>

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 422 })
  }

  const tags: string[] = ['oue-website']
  if (sector)  tags.push(sector)
  if (service) tags.push(service)
  if (plan)    tags.push(`plan:${plan}`)

  const { pipeline_id, stage_id } = sector
    ? await resolvePipeline(sector)
    : { pipeline_id: PIPELINE_ID, stage_id: STAGE_ID }

  const contact = {
    name,
    email,
    phone:       phone   || undefined,
    company:     company || undefined,
    source:      'one-united-enterprise',
    pipeline_id,
    stage_id,
    tags,
    notes: message || undefined,
  }

  try {
    const res  = await fetch(`${AZOTH_URL}/api/contacts`, {
      method:  'POST',
      headers: {
        'Content-Type':   'application/json',
        'Authorization':  `Bearer ${AZOTH_SECRET}`,
        'x-workspace-id': WORKSPACE_ID,
      },
      body: JSON.stringify(contact),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('[leads] Azoth error:', data)
      return NextResponse.json({ error: 'CRM unavailable', details: data }, { status: 502 })
    }

    if (affiliate_code) {
      fetch(`${AZOTH_URL}/api/affiliate/lead`, {
        method:  'POST',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': `Bearer ${AZOTH_SECRET}`,
        },
        body: JSON.stringify({
          affiliate_code,
          workspace_id:   WORKSPACE_ID,
          contact_name:   name,
          contact_email:  email,
          source_project: 'one-united-enterprise',
          metadata: { sector, service, plan },
        }),
      }).catch(err => console.error('[leads] affiliate record failed:', err))
    }

    notifyNewLead({ name, email, company, phone, sector, service, message })
      .catch(err => console.error('[leads] notify error:', err))

    return NextResponse.json({ success: true, id: data.contact?.id }, { status: 201 })
  } catch (err) {
    console.error('[leads] fetch failed:', err)
    return NextResponse.json({ error: 'CRM unreachable' }, { status: 503 })
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const stage    = searchParams.get('stage')    || STAGE_ID
  const pipeline = searchParams.get('pipeline') || PIPELINE_ID
  const limit    = searchParams.get('limit')    || '50'
  const offset   = searchParams.get('offset')   || '0'

  const params = new URLSearchParams({ pipeline, stage, limit, offset })

  try {
    const res = await fetch(`${AZOTH_URL}/api/contacts?${params}`, {
      headers: {
        'Authorization':  `Bearer ${AZOTH_SECRET}`,
        'x-workspace-id': WORKSPACE_ID,
      },
    })

    const data = await res.json()
    if (!res.ok) return NextResponse.json({ error: 'CRM error' }, { status: 502 })
    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'CRM unreachable' }, { status: 503 })
  }
}
