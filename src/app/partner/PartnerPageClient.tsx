'use client'

import { useState } from 'react'
import { BRAND } from '@/data/config'

const GOLD = '#e8a045'

const REST_SNIPPET = `curl -X POST https://oneunitedenterprise.vercel.app/api/leads \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Jane Smith","email":"jane@example.com","sector":"consulting","service":"strategy-advisory"}'`

const MCP_SNIPPET = `{
  "mcpServers": {
    "azoth": {
      "type": "http",
      "url": "https://azoth-platform.vercel.app/api/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_AZOTH_KEY",
        "x-workspace-id": "YOUR_WORKSPACE_ID"
      }
    }
  }
}`

const EMBED_SNIPPET = `<script src="https://azoth-platform.vercel.app/api/embed?key=YOUR_KEY&workspace=YOUR_WORKSPACE_ID&color=%23e8a045&source=partner-site"></script>`

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        background: copied ? 'rgba(232,160,69,0.2)' : 'rgba(255,255,255,0.07)',
        color: copied ? GOLD : 'rgba(255,255,255,0.5)',
        border: `1px solid ${copied ? 'rgba(232,160,69,0.4)' : 'rgba(255,255,255,0.1)'}`,
      }}
      className="text-xs px-3 py-1.5 rounded-md font-mono transition-all duration-200 hover:bg-white/10 whitespace-nowrap"
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  )
}

function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.6)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
      }}
      className="relative overflow-hidden"
    >
      <div
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        className="flex items-center justify-between px-4 py-2"
      >
        <span className="text-xs text-gray-900/30 font-mono">{language}</span>
        <CopyButton text={code} />
      </div>
      <pre className="px-4 py-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code style={{ color: 'rgba(255,255,255,0.75)' }}>{code}</code>
      </pre>
    </div>
  )
}

export default function PartnerPageClient() {
  return (
    <main
      style={{ background: 'transparent', color: '#fff', minHeight: '100vh' }}
      className="font-body"
    >
      {/* ── Hero ── */}
      <section
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,160,69,0.12) 0%, transparent 70%), #0a0a0a',
          paddingTop: '120px',
          paddingBottom: '80px',
        }}
        className="px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <div
            style={{
              background: 'rgba(232,160,69,0.1)',
              border: '1px solid rgba(232,160,69,0.25)',
              color: GOLD,
            }}
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
          >
            Developer Resources
          </div>
          <h1
            style={{ color: '#fff' }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-5 leading-tight"
          >
            Build With{' '}
            <span style={{ color: GOLD }}>One United Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-900/55 leading-relaxed max-w-2xl mx-auto">
            Connect your platform, AI, or application to OUE&apos;s ecosystem — submit
            leads, check services, and integrate our capabilities directly into your
            workflow.
          </p>
        </div>
      </section>

      {/* ── Integration Methods ── */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <h2 className="text-center text-xs tracking-[0.25em] uppercase text-gray-900/30 mb-12">
          Choose Your Integration Method
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A — REST API */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
            }}
            className="p-6 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🔌</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">REST API</h3>
                <p className="text-sm text-gray-900/50 leading-relaxed">
                  Submit leads, check availability, and integrate OUE services directly
                  into your platform using standard HTTP requests.
                </p>
              </div>
            </div>
            <CodeBlock code={REST_SNIPPET} language="bash" />
          </div>

          {/* Card B — MCP */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid rgba(232,160,69,0.15)`,
              borderRadius: '16px',
            }}
            className="p-6 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🤖</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  AI Assistant Integration{' '}
                  <span style={{ color: GOLD }} className="text-sm font-normal">
                    (MCP)
                  </span>
                </h3>
                <p className="text-sm text-gray-900/50 leading-relaxed">
                  Connect Claude or any MCP-compatible AI directly to OUE. Your AI can
                  submit leads, check services, and interact with our ecosystem using
                  natural language.
                </p>
              </div>
            </div>
            <CodeBlock code={MCP_SNIPPET} language="json" />
          </div>

          {/* Card C — Embed */}
          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
            }}
            className="p-6 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🪄</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">One-Line Embed</h3>
                <p className="text-sm text-gray-900/50 leading-relaxed">
                  Add a lead capture form to any website with a single script tag.
                  Visitors can contact OUE directly from your site.
                </p>
              </div>
            </div>
            <CodeBlock code={EMBED_SNIPPET} language="html" />
          </div>

          {/* Card D — Affiliate */}
          <div
            style={{
              background: 'rgba(232,160,69,0.04)',
              border: `1px solid rgba(232,160,69,0.2)`,
              borderRadius: '16px',
            }}
            className="p-6 flex flex-col gap-5"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl">🤝</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Become an Affiliate
                </h3>
                <p className="text-sm text-gray-900/50 leading-relaxed">
                  Earn commissions by referring clients to OUE. Get your unique tracking
                  link, access marketing materials, and track your earnings in real-time.
                </p>
              </div>
            </div>

            <div
              style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '10px' }}
              className="flex flex-wrap gap-3 p-4"
            >
              {[
                '10% commission on closed deals',
                '30-day cookie',
                'Real-time dashboard',
              ].map((badge) => (
                <span
                  key={badge}
                  style={{
                    background: 'rgba(232,160,69,0.1)',
                    border: '1px solid rgba(232,160,69,0.2)',
                    color: GOLD,
                  }}
                  className="text-xs px-3 py-1 rounded-full font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href={`mailto:${BRAND.email}?subject=Affiliate Program Application`}
              style={{
                background: `linear-gradient(135deg, #c47b20, ${GOLD}, #f0b86a)`,
                color: '#000',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '0.875rem',
                textAlign: 'center',
                padding: '12px 24px',
                display: 'block',
                transition: 'opacity 0.2s',
              }}
              className="hover:opacity-90"
            >
              Apply to Affiliate Program
            </a>
          </div>
        </div>
      </section>

      {/* ── API Reference Table ── */}
      <section
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
        className="px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
            API Reference
          </h2>
          <p className="text-gray-900/40 text-sm mb-10">
            Base URL:{' '}
            <code
              style={{
                color: GOLD,
                background: 'rgba(232,160,69,0.08)',
                padding: '2px 6px',
                borderRadius: '4px',
              }}
            >
              https://oneunitedenterprise.vercel.app
            </code>
          </p>

          {/* Endpoints table */}
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
            className="mb-10"
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Endpoint
                  </th>
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Method
                  </th>
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-5 py-4">
                    <code style={{ color: GOLD }} className="font-mono text-sm">
                      /api/leads
                    </code>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      style={{
                        background: 'rgba(16,201,143,0.1)',
                        color: '#10c98f',
                        border: '1px solid rgba(16,201,143,0.25)',
                      }}
                      className="text-xs font-bold px-2 py-0.5 rounded font-mono"
                    >
                      POST
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-900/55">Submit a new lead</td>
                </tr>
                <tr>
                  <td className="px-5 py-4">
                    <code style={{ color: GOLD }} className="font-mono text-sm">
                      /api/leads
                    </code>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      style={{
                        background: 'rgba(79,142,247,0.1)',
                        color: '#4F8EF7',
                        border: '1px solid rgba(79,142,247,0.25)',
                      }}
                      className="text-xs font-bold px-2 py-0.5 rounded font-mono"
                    >
                      GET
                    </span>
                  </td>
                  <td className="px-5 py-4 text-gray-900/55">
                    List leads{' '}
                    <span className="text-gray-900/25 text-xs">(auth required)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* POST /api/leads fields */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            POST{' '}
            <code style={{ color: GOLD }} className="font-mono text-base">
              /api/leads
            </code>{' '}
            — Request Body
          </h3>
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Field
                  </th>
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Type
                  </th>
                  <th className="text-left px-5 py-3 text-gray-900/40 font-semibold tracking-wider text-xs uppercase">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { field: 'name', type: 'string', note: 'Required', required: true },
                  { field: 'email', type: 'string', note: 'Required', required: true },
                  { field: 'phone', type: 'string', note: 'Optional' },
                  { field: 'company', type: 'string', note: 'Optional' },
                  {
                    field: 'sector',
                    type: 'string',
                    note: 'film · consulting · nonprofit · medical · investment · founder · team',
                  },
                  { field: 'service', type: 'string', note: 'Service slug' },
                  { field: 'message', type: 'string', note: 'Optional' },
                  {
                    field: 'affiliate_code',
                    type: 'string',
                    note: 'Optional — for affiliate tracking',
                  },
                ].map((row, i, arr) => (
                  <tr
                    key={row.field}
                    style={
                      i < arr.length - 1
                        ? { borderBottom: '1px solid rgba(255,255,255,0.05)' }
                        : {}
                    }
                  >
                    <td className="px-5 py-4">
                      <code className="font-mono text-gray-900/80">{row.field}</code>
                    </td>
                    <td className="px-5 py-4 text-gray-900/30 font-mono text-xs">
                      {row.type}
                    </td>
                    <td className="px-5 py-4">
                      {row.required ? (
                        <span style={{ color: GOLD }} className="text-xs font-semibold">
                          Required
                        </span>
                      ) : (
                        <span className="text-gray-900/35 text-xs">{row.note}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Ready to integrate?
          </h2>
          <p className="text-gray-900/50 text-lg mb-8 leading-relaxed">
            Get your API key and start connecting to the OUE ecosystem today.
          </p>
          <a
            href="mailto:oneunitedenterprisellc@gmail.com?subject=API Integration Request"
            style={{
              background: `linear-gradient(135deg, #c47b20, ${GOLD}, #f0b86a)`,
              color: '#000',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '16px 36px',
              borderRadius: '12px',
              display: 'inline-block',
              transition: 'opacity 0.2s, box-shadow 0.2s',
              boxShadow: `0 0 32px rgba(232,160,69,0.25)`,
            }}
            className="hover:opacity-90"
          >
            Get Your API Key &rarr;
          </a>
          <p className="mt-5 text-gray-900/25 text-sm">
            Questions?{' '}
            <a
              href={`mailto:${BRAND.email}`}
              style={{ color: GOLD }}
              className="hover:underline"
            >
              {BRAND.email}
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
