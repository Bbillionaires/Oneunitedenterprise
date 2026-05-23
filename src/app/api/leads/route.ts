import { NextRequest, NextResponse } from 'next/server'

const AZOTH_URL    = process.env.AZOTH_URL || 'http://localhost:3002'
const AZOTH_SECRET = process.env.AZOTH_API_SECRET!
const WORKSPACE_ID = process.env.AZOTH_WORKSPACE_ID!
const PIPELINE_ID  = process.env.AZOTH_PIPELINE_ID!
const STAGE_ID     = process.env.AZOTH_DEFAULT_STAGE_ID!

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const { name, email, phone, company, sector, service, message, plan, affiliate_code } = body as Record<string, string>

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 422 })
  }

  const tags: string[] = ['oue-website']
  if (sector)  tags.push(sector)
  if (service) tags.push(service)
  if (plan)    tags.push(`plan:${plan}`)

  const contact = {
    name,
    email,
    phone:       phone   || undefined,
    company:     company || undefined,
    source:      'one-united-enterprise',
    pipeline_id: PIPELINE_ID,
    stage_id:    STAGE_ID,
    tags,
    notes: message || undefined,
  }

  try {
    const res = await fetch(`${AZOTH_URL}/api/contacts`, {
      method:  'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${AZOTH_SECRET}`,
        'x-workspace-id': WORKSPACE_ID,
      },
      body: JSON.stringify(contact),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('[leads] Azoth error:', data)
      return NextResponse.json({ error: 'CRM unavailable', details: data }, { status: 502 })
    }

    // If an affiliate code was passed, record the lead against that affiliate
    if (affiliate_code) {
      fetch(`${AZOTH_URL}/api/affiliate/lead`, {
        method: 'POST',
        headers: {
          'Content-Type':   'application/json',
          'Authorization':  `Bearer ${AZOTH_SECRET}`,
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
