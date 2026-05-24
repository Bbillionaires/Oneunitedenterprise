import PartnerPageClient from './PartnerPageClient'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partner API & Developer Resources',
  description:
    'Connect your platform, AI assistant, or application to One United Enterprise. REST API, MCP integration, embed widgets, and affiliate program.',
}

export default function PartnerPage() {
  return <PartnerPageClient />
}
