import { NextRequest, NextResponse } from 'next/server'

const COOKIE_NAME    = 'oue_admin'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7

export async function POST(req: NextRequest) {
  let password: string
  try { const body = await req.json(); password = body.password }
  catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }) }

  if (!password) return NextResponse.json({ error: 'Password required' }, { status: 400 })

  const secret = process.env.ADMIN_SECRET
  if (!secret) return NextResponse.json({ error: 'Admin access not configured' }, { status: 503 })

  if (password !== secret) {
    await new Promise(r => setTimeout(r, 800))
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, secret, {
    httpOnly: true,
    secure:   process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge:   COOKIE_MAX_AGE,
    path:     '/',
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, '', { maxAge: 0, path: '/' })
  return res
}
