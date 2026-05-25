// ================================================================
//  ONE UNITED ENTERPRISE — Central Content Configuration
//  Edit this file to update any text, services, pricing, or data.
//  Each sector → 3 services → full funnel page content.
// ================================================================

export type Package = { name: string; price: string; period: string; highlight: boolean; features: string[]; cta: string }
export type Testimonial = { name: string; title: string; company: string; quote: string; result: string; avatar: string }
export type FAQ = { q: string; a: string }
export type ProcessStep = { step: number; title: string; desc: string; duration: string }
export type PainPoint = { icon: string; title: string; desc: string }
export type Service = {
  id: string; name: string; tagline: string; heroHeadline: string; heroSub: string
  painPoints: PainPoint[]; solution: string; process: ProcessStep[]
  packages: Package[]; testimonials: Testimonial[]; faq: FAQ[]
  metrics: { label: string; value: string }[]; calendlyUrl: string
}
export type Sector = {
  id: string; name: string; shortName: string; tagline: string; heroHeadline: string; heroSub: string
  color: string; colorDark: string; colorBg: string; glow: string
  gradient: string; cardGradient: string; icon: string
  stats: { label: string; value: string; prefix?: string; suffix?: string }[]
  services: Service[]
  testimonials: Testimonial[]
  caseStudies: { title: string; industry: string; result: string; description: string }[]
  partnerships: string[]
}

// ── Brand ──────────────────────────────────────────────────
export const BRAND = {
  name: 'One United Enterprise',
  tagline: 'One Vision. Five Industries. Limitless Impact.',
  sub: 'An elite business ecosystem built for those who refuse to settle for ordinary.',
  company: 'One United Enterprise LLC',
  email: 'hello@oneunitedenterprise.com',    // UPDATE
  phone: '',                                   // UPDATE
  address: '',                                 // UPDATE
  calendly: 'https://calendly.com/oneunitedenterprise', // UPDATE
}

// ── Sector Color Map ───────────────────────────────────────
const FILM = { color: '#D4A217', dark: '#7A5800', bg: 'rgba(212,162,23,0.08)', glow: 'rgba(212,162,23,0.25)' }
const CONS = { color: '#4F8EF7', dark: '#1A3A8F', bg: 'rgba(79,142,247,0.08)', glow: 'rgba(79,142,247,0.25)' }
const NPRO = { color: '#A855F7', dark: '#5B1FA8', bg: 'rgba(168,85,247,0.08)', glow: 'rgba(168,85,247,0.25)' }
const MEDI = { color: '#10C98F', dark: '#047A56', bg: 'rgba(16,201,143,0.08)', glow: 'rgba(16,201,143,0.25)' }
const INVT = { color: '#F97316', dark: '#8B3A00', bg: 'rgba(249,115,22,0.08)', glow: 'rgba(249,115,22,0.25)' }
const FOUN = { color: '#C4845A', dark: '#7A3E18', bg: 'rgba(196,132,90,0.08)', glow: 'rgba(196,132,90,0.25)' }
const TEAM = { color: '#5BA8A0', dark: '#1C5E58', bg: 'rgba(91,168,160,0.08)', glow: 'rgba(91,168,160,0.25)' }
const TECH = { color: '#00C8FF', dark: '#006B87', bg: 'rgba(0,200,255,0.08)', glow: 'rgba(0,200,255,0.22)' }
const EDUC = { color: '#F5C518', dark: '#8B6A00', bg: 'rgba(245,197,24,0.08)', glow: 'rgba(245,197,24,0.22)' }
const INFR = { color: '#94A3B8', dark: '#334155', bg: 'rgba(148,163,184,0.08)', glow: 'rgba(148,163,184,0.22)' }
const LEGL = { color: '#818CF8', dark: '#3730A3', bg: 'rgba(129,140,248,0.08)', glow: 'rgba(129,140,248,0.22)' }
const AGRI = { color: '#6DBE6B', dark: '#166534', bg: 'rgba(109,190,107,0.08)', glow: 'rgba(109,190,107,0.22)' }
const ENRG = { color: '#FF6B35', dark: '#9A2500', bg: 'rgba(255,107,53,0.08)', glow: 'rgba(255,107,53,0.22)' }

// ── Shared placeholder testimonials ───────────────────────
const t = (name: string, title: string, company: string, quote: string, result: string): Testimonial =>
  ({ name, title, company, quote, result, avatar: name.split(' ').map(n => n[0]).join('') })

// ================================================================
//  SECTORS
// ================================================================
export const SECTORS: Sector[] = [

  // ─────────────────────────────────────────────────────────────
  // 1. FILM & ENTERTAINMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'film', name: 'Media & Creative Arts', shortName: 'Media',
    tagline: 'Story-driven content, film, podcasts, and creative production that build brands and move culture.',
    heroHeadline: 'Your Brand Deserves a Standing Ovation.',
    heroSub: 'Premium video production, media systems, and ad content that stops the scroll, builds authority, and drives revenue.',
    color: FILM.color, colorDark: FILM.dark, colorBg: FILM.bg, glow: FILM.glow,
    gradient: 'from-amber-950 via-yellow-950 to-black',
    cardGradient: 'from-amber-900/40 via-yellow-900/20 to-transparent',
    icon: '🎬',
    stats: [
      { label: 'Videos Produced', value: '500', suffix: '+' },
      { label: 'Views Generated', value: '3.2', suffix: 'M+' },
      { label: 'Avg. ROAS Increase', value: '4.7', suffix: 'x' },
      { label: 'Client Satisfaction', value: '97', suffix: '%' },
    ],
    services: [
      // ── Service 1 ──────────────────────────────────────────
      {
        id: 'ai-commercial',
        name: 'AI Commercial & Brand Video Production',
        tagline: 'Stop-Scroll Videos That Build Brands and Print Revenue',
        heroHeadline: 'Your Competitors Are Already Using AI Video. Are You Falling Behind?',
        heroSub: 'We produce premium AI-enhanced commercial and brand videos that stop the scroll, build authority, and drive high-ticket sales — in a fraction of the time.',
        painPoints: [
          { icon: '💸', title: 'Wasting Budget on Low-ROI Videos', desc: 'Generic agencies charge premium prices for forgettable content that never moves the needle on revenue.' },
          { icon: '⏰', title: 'Weeks of Production Delays', desc: 'Traditional video production eats 6–12 weeks. Your competitors are already running while you wait.' },
          { icon: '📉', title: 'Ads That Don\'t Convert', desc: 'Beautiful videos with zero strategy behind them. No hook. No CTA architecture. No results.' },
        ],
        solution: 'Our AI-enhanced production pipeline combines cinematic storytelling with data-driven creative strategy — delivering premium brand videos in 14 days that are engineered to convert.',
        process: [
          { step: 1, title: 'Brand Discovery & Creative Brief', desc: 'Deep-dive into your brand identity, target audience, competitive landscape, and revenue goals.', duration: 'Day 1–2' },
          { step: 2, title: 'AI Script & Storyboard Generation', desc: 'AI-assisted scriptwriting optimized for your funnel stage, combined with human creative direction.', duration: 'Day 3–5' },
          { step: 3, title: 'Cinematic Production', desc: 'Professional filming, motion graphics, and visual effects that match your brand standards.', duration: 'Day 6–10' },
          { step: 4, title: 'AI Enhancement & Color Grade', desc: 'AI-powered post-production refinement, color grading, and audio mastering.', duration: 'Day 11–13' },
          { step: 5, title: 'Launch-Ready Delivery', desc: 'Platform-optimized exports for every channel: YouTube, Meta, LinkedIn, CTV, and more.', duration: 'Day 14' },
        ],
        packages: [
          { name: 'Starter', price: '2,997', period: 'per video', highlight: false, cta: 'Get Started',
            features: ['1 Commercial Video (60–90 sec)', 'AI Script & Storyboard', '2 Revision Rounds', 'Platform-Optimized Export (3 formats)', '14-Day Turnaround', 'Commercial License'] },
          { name: 'Growth', price: '7,497', period: 'per project', highlight: true, cta: 'Apply Now',
            features: ['3 Videos (30/60/90-second cuts)', 'AI-Enhanced Production', 'Brand Story Narrative', 'Motion Graphics Package', 'Unlimited Revisions', 'Social Ad Cut-Downs (6 formats)', 'CRM-Ready Video Funnels', 'Priority 10-Day Turnaround'] },
          { name: 'Enterprise', price: 'Custom', period: 'monthly retainer', highlight: false, cta: 'Book a Call',
            features: ['Monthly Video Content Suite', 'Dedicated Creative Director', 'AI-Powered A/B Testing', 'Full Ad Campaign Management', 'Quarterly Brand Films', 'Cross-Platform Strategy', 'Analytics & Performance Reporting', 'White-Glove Service'] },
        ],
        testimonials: [
          t('Marcus J.', 'CEO', 'Apex Brands LLC', 'Our ad ROAS jumped from 1.8x to 6.2x within 30 days of launching the new video suite. The quality is unlike anything we\'ve produced before.', '+344% ROAS in 30 Days'),
          t('Tanya R.', 'CMO', 'ElevateX Corp', 'We\'ve worked with 4 agencies before. One United is the first to actually understand brand storytelling AND conversion. Game changer.', '$420K in attributed video revenue'),
          t('Derek P.', 'Founder', 'NovaTech Solutions', 'Delivered a cinematic brand video in 12 days. My investor pitch closed a $2M round partly because of that video.', '$2M Funding Round Closed'),
        ],
        faq: [
          { q: 'How long does a video project take?', a: 'Our standard turnaround is 14 days for the Starter package. Growth packages run 10 days with priority handling. Enterprise clients get dedicated scheduling.' },
          { q: 'Do I need to be on camera?', a: 'Not necessarily. We produce both on-camera and voiceover-driven videos. We\'ll recommend the best format based on your goals and brand personality.' },
          { q: 'What if I need revisions?', a: 'Starter includes 2 revision rounds. Growth includes unlimited revisions. We work until you\'re fully satisfied.' },
          { q: 'Can you handle both the video AND the ad campaign?', a: 'Yes. Our Growth and Enterprise packages include ad campaign strategy and can be bundled with our Lead Generation service for full-funnel execution.' },
          { q: 'What industries do you serve?', a: 'We serve B2B service providers, e-commerce brands, SaaS companies, real estate, healthcare, professional services, and high-ticket coaches.' },
          { q: 'What\'s the minimum investment?', a: 'Our Starter package begins at $2,997. For clients serious about video ROI, we recommend the Growth package as the starting point for measurable results.' },
        ],
        metrics: [{ label: 'Avg. Production Time', value: '14 Days' }, { label: 'Avg. ROAS Lift', value: '4.7x' }, { label: 'Videos Delivered', value: '500+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/film-strategy',
      },
      // ── Service 2 ──────────────────────────────────────────
      {
        id: 'podcast-media',
        name: 'Podcast & Media Production Systems',
        tagline: 'Build Your Media Empire. We Handle the Production.',
        heroHeadline: 'Your Expertise Deserves an Audience of Thousands — Not Just Your Existing Network.',
        heroSub: 'Full-service podcast and media production systems that position you as the authority in your industry, grow your audience, and convert listeners into clients.',
        painPoints: [
          { icon: '🎙️', title: 'No Consistent Content Strategy', desc: 'You know you need content but lack the system to produce it consistently without burning out.' },
          { icon: '🔊', title: 'Poor Audio & Visual Quality', desc: 'Amateur production quality destroys credibility before your message even lands.' },
          { icon: '📊', title: 'Growing Audience Without Growing Revenue', desc: 'Downloads go up but pipeline stays flat. Your podcast isn\'t converting to clients.' },
        ],
        solution: 'We build and manage end-to-end podcast and media production systems — from studio setup and recording to editing, distribution, and monetization strategy.',
        process: [
          { step: 1, title: 'Media Brand Architecture', desc: 'Define your show concept, target audience persona, positioning, and monetization model.', duration: 'Week 1' },
          { step: 2, title: 'Studio & Tech Setup', desc: 'Equipment recommendations, recording environment optimization, remote recording integration.', duration: 'Week 1–2' },
          { step: 3, title: 'Content Calendar & Guest Strategy', desc: 'Build a 90-day content calendar with episode frameworks and high-value guest outreach strategy.', duration: 'Week 2' },
          { step: 4, title: 'Production & Post-Production System', desc: 'Record, edit, master audio, create video clips, design show notes, and prepare social assets.', duration: 'Ongoing' },
          { step: 5, title: 'Distribution & Growth Engine', desc: 'Distribute across all major platforms, implement SEO, and execute listener acquisition campaigns.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Launch', price: '1,997', period: 'setup + $997/mo', highlight: false, cta: 'Get Started',
            features: ['Show Brand & Concept Development', 'Equipment Guide & Setup Support', '4 Episodes/Month (Audio)', 'Editing & Mastering', 'Show Notes & Transcriptions', 'Distribution to 12+ Platforms'] },
          { name: 'Authority', price: '3,997', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['Everything in Launch', 'Video Podcast Production', '8 Episodes/Month', 'Social Media Clip Package (20 clips)', 'Guest Research & Outreach', 'Episode SEO Optimization', 'Monthly Growth Reporting', 'Sponsorship Strategy'] },
          { name: 'Empire', price: 'Custom', period: 'monthly', highlight: false, cta: 'Book a Call',
            features: ['Full Media Brand Management', 'Unlimited Episodes', 'Live Event Production', 'YouTube Channel Management', 'Newsletter Integration', 'Audience Monetization Consulting', 'Branded Video Show', 'Dedicated Production Team'] },
        ],
        testimonials: [
          t('Janelle M.', 'Business Coach', 'Clarity Coaching Group', 'I went from 200 downloads per episode to 12,000 in 4 months. The production quality alone doubled my coaching inquiries.', '60x Growth in 4 Months'),
          t('Raymond L.', 'CEO', 'Sterling Financial', 'Our podcast became our #1 lead gen channel. We close $50K+ clients who listen to 3+ episodes before booking a call.', '$180K in Podcast-Attributed Revenue'),
          t('Sofia V.', 'Founder', 'Healthcare Innovators Network', 'Professional, strategic, and deeply invested in our success. Our show launched to #2 in our category on day one.', '#2 Category Launch'),
        ],
        faq: [
          { q: 'Do I need existing recording equipment?', a: 'No. We provide a complete equipment guide for every budget, and for local clients we can set up your studio environment entirely.' },
          { q: 'How quickly can we launch?', a: 'Most shows are ready to launch within 2–3 weeks of signing. We move fast.' },
          { q: 'Can you help with remote/virtual recording?', a: 'Absolutely. We use professional remote recording software (Riverside, Squadcast) and handle all technical coordination for you.' },
          { q: 'Will you help book guests for my show?', a: 'Yes — our Authority and Empire packages include guest research and outreach. We target guests who bring audiences, credibility, and strategic value.' },
          { q: 'How do you measure success?', a: 'We track downloads, listener growth, engagement rate, and critically — how many leads and clients can be attributed to your podcast each month.' },
          { q: 'What\'s the contract length?', a: 'We start with a 3-month commitment to give the system time to gain traction. Most clients stay 12+ months.' },
        ],
        metrics: [{ label: 'Avg. Episode Growth', value: '8x' }, { label: 'Shows Launched', value: '80+' }, { label: 'Avg. Time to First Sponsor', value: '60 Days' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/podcast-strategy',
      },
      // ── Service 3 ──────────────────────────────────────────
      {
        id: 'social-ad-content',
        name: 'Social Media Ad Content Production',
        tagline: 'Creatives That Capture Attention and Convert at Scale',
        heroHeadline: 'Your Ads Are Costing You Money. The Problem Isn\'t Your Budget — It\'s Your Creatives.',
        heroSub: 'Data-driven social media ad content engineered for maximum engagement, lowest cost per lead, and highest ROAS across Meta, TikTok, YouTube, and LinkedIn.',
        painPoints: [
          { icon: '🔥', title: 'Ad Fatigue Destroying Performance', desc: 'Running the same creatives month after month? Your audience is tuning you out.' },
          { icon: '💰', title: 'High CPL with No Clear Solution', desc: 'Costs keep climbing while conversions stay flat. You\'re paying more for less.' },
          { icon: '🎨', title: 'Generic Creatives That Look Like Everyone Else', desc: 'When your ads look like your competitors, price becomes the only differentiator.' },
        ],
        solution: 'We produce a constant stream of fresh, high-converting ad creatives specifically engineered for your target audience, funnel stage, and platform — tested and optimized weekly.',
        process: [
          { step: 1, title: 'Creative Audit & Competitive Analysis', desc: 'Analyze your current ad performance and reverse-engineer what\'s working in your market.', duration: 'Day 1–3' },
          { step: 2, title: 'Creative Strategy & Hook Development', desc: 'Develop 10+ tested hook formulas tailored to your audience psychology.', duration: 'Day 4–7' },
          { step: 3, title: 'Batch Production', desc: 'Produce 15–30 unique ad creatives per batch: video, static, and carousel.', duration: 'Day 8–14' },
          { step: 4, title: 'A/B Testing Framework', desc: 'Deploy with a structured testing protocol to identify winning creatives fast.', duration: 'Week 3–4' },
          { step: 5, title: 'Optimize & Scale', desc: 'Double down on winners, kill losers, and continuously refresh the creative pipeline.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Spark', price: '2,497', period: '/month', highlight: false, cta: 'Get Started',
            features: ['15 Ad Creatives/Month', 'Video + Static Formats', '3 Hook Variations', 'Platform Optimization (1 platform)', 'Monthly Performance Brief'] },
          { name: 'Scale', price: '4,997', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['30 Ad Creatives/Month', 'Multi-Platform (Meta + TikTok + YouTube)', '10+ Hook Variations', 'UGC-Style + Brand Videos', 'Weekly Creative Refresh', 'A/B Testing Reports', 'Dedicated Creative Strategist'] },
          { name: 'Dominate', price: 'Custom', period: 'monthly', highlight: false, cta: 'Book a Call',
            features: ['Unlimited Creatives', 'Full Platform Coverage', 'Creative + Media Buying Package', 'AI-Generated Hook Testing', 'Creative War Room Access', 'Weekly Strategy Calls', 'Live Dashboard Access'] },
        ],
        testimonials: [
          t('David K.', 'E-Commerce Director', 'Luxe Living Co.', 'Our Meta CPL dropped from $84 to $18 in 6 weeks. We scaled from $10K/month to $85K/month in ad spend profitably.', 'CPL -78%, Revenue +850%'),
          t('Ashley N.', 'Founder', 'FitLife Supplements', 'Fresh creatives every week changed everything. We went from creative exhaustion to our best-performing month ever.', 'Best Revenue Month Ever'),
          t('Michael T.', 'CMO', 'Atlas SaaS', 'These aren\'t just pretty videos. Every creative has a clear strategy behind it. Our trial signups tripled in 90 days.', '3x Trial Signups in 90 Days'),
        ],
        faq: [
          { q: 'How many creatives do we get?', a: 'Spark: 15/month. Scale: 30/month. Dominate: unlimited. We also deliver multiple format sizes for each creative.' },
          { q: 'Do you run the ads too or just produce the creatives?', a: 'We specialize in creative production. We can bundle with our Lead Generation service for full-funnel management.' },
          { q: 'What platforms do you produce for?', a: 'Meta (Facebook/Instagram), TikTok, YouTube, LinkedIn, Snapchat, Pinterest, and connected TV.' },
          { q: 'How fast do you turn around creatives?', a: 'Initial batch: 14 days. Ongoing monthly refreshes: delivered by the 1st of each month.' },
          { q: 'What if the creatives don\'t perform?', a: 'We optimize based on real performance data. If a creative isn\'t working, we iterate fast. Our team reviews data weekly.' },
          { q: 'Do I need to provide footage/photos?', a: 'For brand-specific content, yes. We provide shot lists and direction. We also produce stock-asset-based creatives that require nothing from you.' },
        ],
        metrics: [{ label: 'Avg. CPL Reduction', value: '61%' }, { label: 'Creatives Produced', value: '10K+' }, { label: 'Avg. Client ROAS', value: '5.1x' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/ad-content-strategy',
      },
    ],
    testimonials: [
      t('Marcus J.', 'CEO', 'Apex Brands', 'Working with One United transformed how we think about content. This isn\'t an agency — it\'s a growth partner.', '+344% ROAS'),
      t('Tanya R.', 'CMO', 'ElevateX', 'The production quality, speed, and strategic thinking are in a class of their own.', '$420K Attributed Revenue'),
    ],
    caseStudies: [
      { title: 'E-Commerce Brand Scales to $1.2M/Mo', industry: 'E-Commerce', result: '12x Revenue in 6 Months', description: 'Produced 45 ad creatives and a flagship brand video that became the top-performing ad in their vertical.' },
      { title: 'SaaS Company Cuts CAC by 67%', industry: 'SaaS', result: '67% CAC Reduction', description: 'AI-enhanced video funnel series reduced customer acquisition cost from $3,200 to $1,058.' },
    ],
    partnerships: ['Meta Business Partner', 'Google Partner', 'TikTok Creative Exchange', 'YouTube Certified'],
  },

  // ─────────────────────────────────────────────────────────────
  // 2. BIZ CONSULTING
  // ─────────────────────────────────────────────────────────────
  {
    id: 'consulting', name: 'Business & Commerce & Distribution', shortName: 'Commerce',
    tagline: 'AI-powered systems, automation, and intelligence that scale revenue and optimize how business operates.',
    heroHeadline: 'Stop Running a Business. Start Running a System.',
    heroSub: 'We install AI automation, lead generation engines, and competitive intelligence frameworks that grow your revenue predictably — whether you\'re working or not.',
    color: CONS.color, colorDark: CONS.dark, colorBg: CONS.bg, glow: CONS.glow,
    gradient: 'from-blue-950 via-indigo-950 to-black',
    cardGradient: 'from-blue-900/40 via-indigo-900/20 to-transparent',
    icon: '⚡',
    stats: [
      { label: 'Businesses Transformed', value: '200', suffix: '+' },
      { label: 'Avg. Revenue Increase', value: '3.8', suffix: 'x' },
      { label: 'Hours Automated Monthly', value: '50K', suffix: '+' },
      { label: 'Client Retention Rate', value: '94', suffix: '%' },
    ],
    services: [
      {
        id: 'ai-automation',
        name: 'AI Automation & CRM Systems',
        tagline: 'Automate Your Revenue Machine',
        heroHeadline: 'Your Business Is Leaking Revenue Every Day You Operate Without Automation.',
        heroSub: 'We build custom AI automation systems and CRM pipelines that follow up instantly, nurture leads 24/7, and close deals while you sleep.',
        painPoints: [
          { icon: '🕳️', title: 'Leads Falling Through the Cracks', desc: 'Manual follow-up is inconsistent. Leads go cold. Revenue leaks out of your pipeline silently.' },
          { icon: '⚙️', title: 'Team Drowning in Repetitive Tasks', desc: 'Your best people spend 60% of their day on tasks a machine could do. That\'s expensive and demoralizing.' },
          { icon: '📊', title: 'No Visibility Into Your Pipeline', desc: 'Without a proper CRM, you\'re guessing what\'s working. Decisions based on gut instead of data.' },
        ],
        solution: 'We design, build, and deploy custom AI automation ecosystems and CRM systems tailored to your business — instantly responding to leads, nurturing prospects, and closing more deals without adding headcount.',
        process: [
          { step: 1, title: 'Systems Audit', desc: 'Map every tool, workflow, and manual process in your business to identify automation opportunities.', duration: 'Week 1' },
          { step: 2, title: 'CRM Architecture Design', desc: 'Design your pipeline stages, custom fields, automations, and reporting dashboards.', duration: 'Week 1–2' },
          { step: 3, title: 'AI Build & Integration', desc: 'Build AI workflows, integrate your tech stack, and deploy instant lead response systems.', duration: 'Week 2–4' },
          { step: 4, title: 'Team Training & SOP Creation', desc: 'Train your team on the new system and document all processes for scale.', duration: 'Week 4–5' },
          { step: 5, title: 'Optimization & Support', desc: 'Monitor performance, optimize automations, and expand the system as you grow.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Foundation', price: '4,997', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['CRM Setup & Configuration', 'Lead Pipeline Design (5 stages)', 'Email Automation Sequences (3)', 'Lead Capture Form Integration', 'Basic Reporting Dashboard', '30-Day Support'] },
          { name: 'Accelerator', price: '9,997', period: 'one-time + $997/mo', highlight: true, cta: 'Apply Now',
            features: ['Custom AI Chatbot Integration', 'SMS + Email Automation Sequences (10)', 'Full CRM Build with Custom Fields', 'AI Lead Scoring System', 'Zapier/n8n Workflow Automation', 'Analytics & Revenue Dashboard', 'Monthly Optimization Calls', '90-Day Priority Support'] },
          { name: 'Enterprise', price: 'Custom', period: 'retainer', highlight: false, cta: 'Book a Call',
            features: ['Full Business OS Build', 'Multi-Location CRM', 'AI Sales Assistant Deployment', 'Custom API Integrations', 'Dedicated Automation Engineer', 'Unlimited Workflows', 'Real-Time Revenue Dashboards', 'Weekly Strategy Reviews'] },
        ],
        testimonials: [
          t('Patricia H.', 'CEO', 'Horizon Consulting Group', 'We were manually following up with 200+ leads per week. The AI system now handles all of it — and our close rate went up 40%.', '40% Higher Close Rate'),
          t('James W.', 'Founder', 'Westbrook Law', 'Our intake process used to take 3 days. It\'s now instant. We never lose a lead. Revenue is up $28K/month.', '+$28K Monthly Revenue'),
          t('Keisha D.', 'Operations Director', 'MedFirst Group', 'The visibility we have into our pipeline now is incredible. We finally know exactly where every dollar is coming from.', '300% Pipeline Visibility'),
        ],
        faq: [
          { q: 'What CRM platforms do you build in?', a: 'We primarily build in GoHighLevel, HubSpot, and Salesforce. We can also work with Pipedrive, Monday.com, or custom solutions.' },
          { q: 'How long does it take to see results?', a: 'Most clients see measurable improvements within the first 30 days — primarily in response speed and lead follow-up consistency.' },
          { q: 'Do you migrate our existing data?', a: 'Yes. Full data migration is included in Accelerator and Enterprise packages.' },
          { q: 'What if we already have a CRM?', a: 'We work with what you have whenever possible — optimizing, automating, and expanding your existing system rather than starting over.' },
          { q: 'Does this require a big tech team?', a: 'Not at all. We build systems designed for non-technical teams and provide thorough training.' },
          { q: 'What tools do you integrate with?', a: 'We integrate with 500+ tools via Zapier, n8n, and direct APIs: Stripe, QuickBooks, Google, Meta, Calendly, Zoom, Slack, and more.' },
        ],
        metrics: [{ label: 'Avg. Response Time', value: '< 90 sec' }, { label: 'Manual Hours Saved', value: '40+/week' }, { label: 'Avg. Close Rate Increase', value: '38%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/ai-automation',
      },
      {
        id: 'lead-generation',
        name: 'Lead Generation & Outreach Systems',
        tagline: 'A Predictable Pipeline of Qualified, Ready-to-Buy Prospects',
        heroHeadline: 'Stop Waiting for Referrals. Start Building a Lead Machine.',
        heroSub: 'We deploy multi-channel outbound and inbound lead generation systems that deliver qualified prospects into your pipeline every single week — on autopilot.',
        painPoints: [
          { icon: '🎲', title: 'Revenue Dependent on Referrals', desc: 'Referrals are great — until they stop. Unpredictable revenue is the #1 threat to business growth.' },
          { icon: '⏳', title: 'Spending Hours on Prospecting', desc: 'You or your team manually hunting for leads is the most expensive use of high-value time in your business.' },
          { icon: '🎯', title: 'Reaching the Wrong Prospects', desc: 'High volume of leads means nothing if they\'re not qualified. You need quality at scale.' },
        ],
        solution: 'We build multi-channel lead generation systems — combining AI-powered outbound, SEO-driven inbound, and paid acquisition — that deliver a predictable flow of qualified prospects every week.',
        process: [
          { step: 1, title: 'ICP Definition & Market Mapping', desc: 'Precisely define your Ideal Client Profile and map where they live online.', duration: 'Day 1–3' },
          { step: 2, title: 'Multi-Channel System Design', desc: 'Architect your LinkedIn, cold email, SEO, and paid channels into a unified outreach system.', duration: 'Day 4–7' },
          { step: 3, title: 'Sequence & Copy Development', desc: 'Write high-converting outreach sequences, landing pages, and ad copy.', duration: 'Day 8–14' },
          { step: 4, title: 'System Launch & Initial Data', desc: 'Launch campaigns, collect initial performance data, and begin optimization.', duration: 'Week 3' },
          { step: 5, title: 'Scale & Optimize', desc: 'Double down on highest-performing channels, continuously A/B test, and expand reach.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Pipeline', price: '3,997', period: '/month', highlight: false, cta: 'Get Started',
            features: ['LinkedIn Outreach System', 'Cold Email Sequences', '500 Qualified Prospects/Month', 'Weekly Lead Reports', 'CRM Integration', '3-Month Minimum'] },
          { name: 'Growth Engine', price: '7,997', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['Multi-Channel Outreach (Email + LinkedIn + SMS)', '2,000 Qualified Prospects/Month', 'Paid Ad Lead Campaigns', 'AI-Powered Personalization', 'Dedicated Lead Manager', 'Real-Time Lead Dashboard', 'Weekly Strategy Call', 'CRM Automation Integration'] },
          { name: 'Full Funnel', price: 'Custom', period: 'monthly', highlight: false, cta: 'Book a Call',
            features: ['Everything in Growth Engine', 'Inbound SEO Content System', 'Paid Media Management', 'Sales Team Integration', 'SDR-As-A-Service Option', 'Revenue Attribution Tracking'] },
        ],
        testimonials: [
          t('Carlos M.', 'Founder', 'Meridian Capital Advisors', 'We went from 3 new leads per week to 47. 90 days in, we\'ve closed $380K from pipeline that didn\'t exist before.', '$380K New Pipeline'),
          t('Rachel B.', 'CEO', 'BrightSpace Coaching', 'The outreach sequences are so personalized they don\'t even feel like automation. Our response rate is insane.', '31% Reply Rate'),
          t('Nathan F.', 'VP Sales', 'Pinnacle SaaS', 'Turned on the system in October. By December we hit our full-year revenue target. Unbelievable.', 'Full-Year Target Hit in 2 Months'),
        ],
        faq: [
          { q: 'How many leads will we get?', a: 'It depends on your market, offer, and budget. Pipeline clients average 15–25 qualified conversations/month. Growth Engine clients average 40–80.' },
          { q: 'What counts as a "qualified" lead?', a: 'We define qualification criteria with you: industry, revenue, role, budget, and pain point — then only pursue prospects that match.' },
          { q: 'Is this spam?', a: 'No. Our outreach is highly personalized, permission-compliant, and strategically targeted. We prioritize quality and reputation.' },
          { q: 'Do you work in my industry?', a: 'We work in B2B services, professional services, SaaS, real estate, finance, healthcare, and e-commerce.' },
          { q: 'What channels do you use?', a: 'LinkedIn, cold email, Meta/Google paid acquisition, retargeting, and SMS depending on your target market.' },
          { q: 'When do results start?', a: 'First leads typically arrive in weeks 3–4. By month 2, the system is fully optimized and delivering consistent volume.' },
        ],
        metrics: [{ label: 'Avg. Monthly Leads (Growth)', value: '60+' }, { label: 'Avg. Reply Rate', value: '18%' }, { label: 'Avg. Time to First Lead', value: '21 Days' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/lead-gen-strategy',
      },
      {
        id: 'market-intelligence',
        name: 'Competitor Intelligence & Market Research',
        tagline: 'Know Your Market. Out-Position Your Competition. Win.',
        heroHeadline: 'The Businesses That Win Don\'t Just Work Harder — They Know More.',
        heroSub: 'Deep competitor intelligence and market research that gives you the strategic clarity to position perfectly, price confidently, and capture market share faster.',
        painPoints: [
          { icon: '🌫️', title: 'Operating Without Market Clarity', desc: 'Making strategic decisions without real data is guessing — and guessing is expensive.' },
          { icon: '🏁', title: 'Losing to Competitors You Don\'t Fully Understand', desc: 'Your competitors\' weaknesses are your biggest opportunities. Do you know what they are?' },
          { icon: '💲', title: 'Leaving Revenue on the Table with Wrong Pricing', desc: 'Underpricing from fear or overpricing from ego — both cost you. Data-driven pricing changes everything.' },
        ],
        solution: 'We deliver comprehensive competitor intelligence reports and market research frameworks that reveal exactly where to position, how to price, and which opportunities your market is under-serving.',
        process: [
          { step: 1, title: 'Market Landscape Mapping', desc: 'Identify all key competitors, market leaders, and emerging threats in your space.', duration: 'Day 1–3' },
          { step: 2, title: 'Competitor Deep-Dive Analysis', desc: 'Analyze pricing, positioning, messaging, traffic, reviews, and growth signals for each competitor.', duration: 'Day 4–8' },
          { step: 3, title: 'Customer Voice Research', desc: 'Mine reviews, forums, social media, and surveys for unmet needs and buying motivations.', duration: 'Day 9–12' },
          { step: 4, title: 'Opportunity Matrix', desc: 'Map white-space opportunities: underserved segments, positioning gaps, and pricing windows.', duration: 'Day 13–15' },
          { step: 5, title: 'Strategic Recommendations Delivery', desc: 'Present findings with actionable recommendations and a 90-day execution roadmap.', duration: 'Day 16' },
        ],
        packages: [
          { name: 'Market Snapshot', price: '1,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Top 5 Competitor Analysis', 'Pricing Benchmark Report', 'Positioning Gap Analysis', 'Market Opportunity Summary', 'Executive Report Delivery'] },
          { name: 'Intelligence Suite', price: '4,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Top 15 Competitor Deep-Dive', 'Customer Voice Research (300+ data points)', 'Full Market Landscape Map', 'White-Space Opportunity Matrix', 'SEO & Traffic Intelligence', 'Pricing Strategy Recommendations', '90-Day Strategic Roadmap', 'Executive Presentation + Q&A Call'] },
          { name: 'Ongoing Intelligence', price: 'Custom', period: '/quarter', highlight: false, cta: 'Book a Call',
            features: ['Quarterly Market Updates', 'Competitor Monitoring Dashboard', 'Real-Time Alert System', 'Monthly Strategy Briefing', 'Dedicated Research Analyst', 'Investor-Ready Reporting'] },
        ],
        testimonials: [
          t('Lisa C.', 'CEO', 'Veridian Wellness', 'The intelligence report revealed a segment none of our competitors were serving well. We repositioned and 3x\'d our close rate.', 'Close Rate 3x After Repositioning'),
          t('Bryan A.', 'Founder', 'Atlas Digital', 'We raised prices by 40% based on the pricing benchmarks. Not a single client complained. We just left that money on the table for years.', '40% Price Increase, 0% Churn'),
          t('Michelle P.', 'CMO', 'CorePath Consulting', 'The competitor messaging analysis was eye-opening. We rewrote our entire website. Conversions went up 78%.', '+78% Website Conversions'),
        ],
        faq: [
          { q: 'How is this different from something I could do on my own?', a: 'Depth, speed, and objectivity. We use professional research tools, structured frameworks, and an outside perspective that eliminates blind spots.' },
          { q: 'What tools and data sources do you use?', a: 'SEMrush, Ahrefs, SimilarWeb, SensorTower, G2, Trustpilot, social listening platforms, and primary research.' },
          { q: 'How long does research take?', a: 'Market Snapshot: 7 days. Intelligence Suite: 16 days. Ongoing Intelligence: continuous.' },
          { q: 'Is this useful for investors/fundraising?', a: 'Absolutely. Our reports are formatted for investor decks and include market sizing, competitive positioning, and opportunity narratives.' },
          { q: 'Will you help us act on the findings?', a: 'Yes. Every report includes actionable recommendations. We also offer strategy consulting to implement findings.' },
          { q: 'Can you research international markets?', a: 'Yes. We have research capabilities across North America, Europe, LATAM, and MENA.' },
        ],
        metrics: [{ label: 'Avg. Revenue Impact', value: '$280K+' }, { label: 'Reports Delivered', value: '300+' }, { label: 'Avg. Research Turnaround', value: '16 Days' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/intelligence-briefing',
      },
    ],
    testimonials: [
      t('Patricia H.', 'CEO', 'Horizon Group', 'One United didn\'t just consult — they built us a business machine.', '+40% Close Rate'),
      t('Carlos M.', 'Founder', 'Meridian Capital', 'We had a revenue problem. Now we have a revenue system.', '$380K New Pipeline'),
    ],
    caseStudies: [
      { title: 'Law Firm Automates Intake & Grows 180%', industry: 'Legal Services', result: '+180% Revenue in 12 Months', description: 'Full AI automation + CRM + lead gen system eliminated manual intake and generated 52 qualified leads/month.' },
      { title: 'SaaS Company Repositions and Triples ARR', industry: 'SaaS', result: 'ARR 3x in 18 Months', description: 'Market intelligence report revealed underserved enterprise segment. Repositioned, repriced, and won 14 enterprise contracts.' },
    ],
    partnerships: ['HubSpot Solutions Partner', 'GoHighLevel Certified', 'Google Ads Partner', 'Meta Business Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 3. GLOBAL NON PROFIT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'nonprofit', name: 'Community & Global Social Impact', shortName: 'Community',
    tagline: 'Workforce development, community programs, and grant strategy that transform lives and build lasting legacies.',
    heroHeadline: 'Real Change Requires Real Infrastructure.',
    heroSub: 'Greenwood 100 Inc — a global 501(c)(3) building pathways to education, employment, and economic independence for communities worldwide.',
    color: NPRO.color, colorDark: NPRO.dark, colorBg: NPRO.bg, glow: NPRO.glow,
    gradient: 'from-purple-950 via-violet-950 to-black',
    cardGradient: 'from-purple-900/40 via-violet-900/20 to-transparent',
    icon: '🌍',
    stats: [
      { label: 'Lives Impacted', value: '10K', suffix: '+' },
      { label: 'Jobs Placed', value: '1,200', suffix: '+' },
      { label: 'Grant Dollars Raised', value: '$4.2', suffix: 'M+' },
      { label: 'Countries Served', value: '14', suffix: '' },
    ],
    services: [
      {
        id: 'community-development',
        name: 'Community Development Programs',
        tagline: 'Building the Infrastructure That Communities Need to Thrive',
        heroHeadline: 'Every Thriving Community Was Once Built by Someone Who Cared Enough to Start.',
        heroSub: 'Greenwood 100\'s community development programs create the social, economic, and educational infrastructure that empowers individuals and transforms neighborhoods.',
        painPoints: [
          { icon: '🏚️', title: 'Communities Left Behind by Economic Progress', desc: 'Generational poverty persists when systemic support systems are absent or inaccessible.' },
          { icon: '📚', title: 'Educational Gaps Limiting Potential', desc: 'Without access to quality education and mentorship, talent goes undiscovered and potential is wasted.' },
          { icon: '🤝', title: 'Organizations with Passion but No Framework', desc: 'Many community leaders have vision but lack the organizational structure to create lasting impact.' },
        ],
        solution: 'We partner with communities, local organizations, and government agencies to design and deploy comprehensive development programs that address root causes — not symptoms.',
        process: [
          { step: 1, title: 'Community Needs Assessment', desc: 'Data-driven analysis of community demographics, resource gaps, existing assets, and priority needs.', duration: 'Month 1' },
          { step: 2, title: 'Program Architecture', desc: 'Design evidence-based program models tailored to the specific community\'s needs and strengths.', duration: 'Month 1–2' },
          { step: 3, title: 'Partnership Development', desc: 'Build relationships with local organizations, businesses, government agencies, and funders.', duration: 'Month 2–3' },
          { step: 4, title: 'Program Launch & Implementation', desc: 'Deploy programs with trained staff, clear KPIs, and community accountability structures.', duration: 'Month 3–6' },
          { step: 5, title: 'Impact Measurement & Expansion', desc: 'Track outcomes rigorously and expand successful programs to additional communities.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Community Partner', price: 'Grant-Funded', period: '', highlight: false, cta: 'Apply to Partner',
            features: ['Needs Assessment Support', 'Program Design Consultation', 'Resource Connection', 'Community Events', 'Volunteer Coordination'] },
          { name: 'Strategic Alliance', price: 'Custom', period: 'annual partnership', highlight: true, cta: 'Inquire Now',
            features: ['Full Program Design & Implementation', 'Dedicated Program Manager', 'Data Tracking & Impact Reports', 'Grant Writing Support', 'Staff Training', 'Multi-Year Partnership Framework', 'Quarterly Impact Presentations'] },
          { name: 'Corporate CSR Partnership', price: 'Custom', period: '', highlight: false, cta: 'Contact Us',
            features: ['Named Corporate Partnership', 'Employee Volunteer Programs', 'Co-Branded Community Initiatives', 'Tax-Deductible Contribution Structure', 'Annual Impact Report', 'PR & Media Collaboration', 'Board Advisory Seat Option'] },
        ],
        testimonials: [
          t('Rev. Thomas L.', 'Executive Director', 'Hope Center Ministries', 'Greenwood 100 brought structure to our passion. We went from helping 50 families to over 800 in 18 months.', 'Served 16x More Families'),
          t('Councilwoman J. Brooks', '', 'City of Atlanta', 'This is exactly the kind of community infrastructure our city needs. They deliver real results, not just promises.', 'City Partnership Secured'),
          t('Dr. Alicia M.', 'Principal', 'Westside Academy', 'The mentorship and tutoring programs lifted our students\' academic performance measurably. These programs save lives.', 'Student Performance Up 34%'),
        ],
        faq: [
          { q: 'Is Greenwood 100 a 501(c)(3)?', a: 'Yes. Greenwood 100 Inc is a registered 501(c)(3) nonprofit organization. All qualifying donations are tax-deductible.' },
          { q: 'How can my organization partner with Greenwood 100?', a: 'Contact us to discuss a Strategic Alliance or Corporate CSR Partnership. We tailor every partnership to maximize mutual impact.' },
          { q: 'How do you measure community impact?', a: 'We track quantitative outcomes: individuals served, jobs placed, educational milestones achieved, housing stability improvements, and economic mobility indicators.' },
          { q: 'Do you operate internationally?', a: 'Yes. We currently serve communities in 14 countries across North America, Africa, and the Caribbean.' },
          { q: 'How can I donate?', a: 'Visit our donation portal or contact us directly. We accept individual donations, corporate contributions, and in-kind support.' },
          { q: 'Can you help my organization get grant funding?', a: 'Yes — through our Grant & Sponsorship Development service, we help partner organizations identify and secure funding.' },
        ],
        metrics: [{ label: 'Families Served Annually', value: '2,400+' }, { label: 'Program Graduation Rate', value: '89%' }, { label: 'Partner Organizations', value: '60+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/nonprofit-partnership',
      },
      {
        id: 'workforce-empowerment',
        name: 'Workforce & Economic Empowerment',
        tagline: 'Skills That Pay. Jobs That Last. Futures That Grow.',
        heroHeadline: 'A Job Doesn\'t Just Pay Bills — It Restores Dignity and Rewrites a Family\'s Story.',
        heroSub: 'Comprehensive workforce development and economic empowerment programs that equip individuals with in-demand skills, connect them with employers, and build pathways to financial independence.',
        painPoints: [
          { icon: '🎓', title: 'Skills Gap Blocking Employment', desc: 'Many individuals have the motivation but lack the technical skills employers demand in today\'s economy.' },
          { icon: '🔗', title: 'Employer-Community Disconnect', desc: 'Businesses need talent. Communities have talent. The bridge between them is missing.' },
          { icon: '💼', title: 'Short-Term Training Without Long-Term Support', desc: 'Certificate programs without job placement support leave graduates stranded at the finish line.' },
        ],
        solution: 'End-to-end workforce empowerment: skills training in high-demand fields, certification programs, job placement partnerships, and 12-month career coaching for sustainable employment.',
        process: [
          { step: 1, title: 'Skills Assessment & Career Mapping', desc: 'Identify each participant\'s existing skills, interests, and highest-probability career paths.', duration: 'Week 1' },
          { step: 2, title: 'Training Program Enrollment', desc: 'Connect participants with our in-house training programs or vetted certification partners.', duration: 'Week 2–12' },
          { step: 3, title: 'Professional Development', desc: 'Resume building, interview preparation, professional communication, and workplace readiness.', duration: 'Week 8–12' },
          { step: 4, title: 'Employer Connection & Placement', desc: 'Direct connection to our employer partner network for job interviews and placement.', duration: 'Week 10–14' },
          { step: 5, title: '12-Month Career Coaching', desc: 'Ongoing support, check-ins, and advancement planning for the first year of employment.', duration: '12 Months Post-Placement' },
        ],
        packages: [
          { name: 'Individual Participant', price: 'Subsidized', period: '', highlight: false, cta: 'Apply Now',
            features: ['Skills Assessment', 'Training Program Access', 'Resume & Interview Prep', 'Employer Introductions', '6-Month Job Coaching'] },
          { name: 'Employer Partner', price: 'Custom', period: '', highlight: true, cta: 'Partner With Us',
            features: ['Pre-Screened Candidate Pipeline', 'Diversity Hiring Programs', 'On-Site Recruitment Events', 'Retention Support', 'Tax Credit Assistance', 'Custom Training Programs'] },
          { name: 'Government / Foundation', price: 'Custom', period: 'contract/grant', highlight: false, cta: 'Contact Us',
            features: ['Full Program Design & Delivery', 'Outcome Tracking & Reporting', 'WIOA-Compliant Programming', 'Multi-Year Program Contracts', 'Community Co-Design Process', 'Quarterly Impact Presentations'] },
        ],
        testimonials: [
          t('Marcus D.', 'Program Graduate', 'IT Career Track', 'I was unemployed for 14 months. After the IT certification program and job coaching, I landed a $62K role in 3 weeks.', 'Hired at $62K in 3 Weeks'),
          t('Tamara N.', 'HR Director', 'Pinnacle Healthcare', 'Greenwood 100 is our preferred hiring partner. Every candidate they send is job-ready and motivated. Exceptional.', '94% Retention of Placed Hires'),
          t('Jennifer K.', 'Foundation Director', 'Empowerment Fund', 'The data they provide on outcomes is best-in-class. We\'ve funded 3 consecutive grant cycles based on their results.', '3 Consecutive Grant Cycles Funded'),
        ],
        faq: [
          { q: 'Who qualifies for workforce programs?', a: 'Programs are available to adults 18+ facing employment barriers: those recently incarcerated, veterans, individuals experiencing homelessness, and long-term unemployed.' },
          { q: 'Are programs free for participants?', a: 'Most programs are fully subsidized through grants and employer partnerships. Some advanced tracks have sliding-scale fees.' },
          { q: 'What industries do you train for?', a: 'IT/Tech, healthcare support, construction trades, hospitality, logistics, administrative, and entrepreneurship.' },
          { q: 'How do you connect participants with jobs?', a: 'We maintain active employer partnerships and conduct regular hiring events. Our placement rate is 78% within 90 days of program completion.' },
          { q: 'Can employers partner with you for hiring?', a: 'Yes. We actively seek employer partners who want access to our talent pipeline and are committed to inclusive hiring.' },
          { q: 'Do you have programs for entrepreneurs?', a: 'Yes — our entrepreneurship track includes business plan development, access to small business funding, and 6-month mentorship.' },
        ],
        metrics: [{ label: '90-Day Placement Rate', value: '78%' }, { label: 'Avg. Starting Salary', value: '$48K' }, { label: 'Employer Partners', value: '120+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/workforce-partnership',
      },
      {
        id: 'grant-development',
        name: 'Grant & Sponsorship Development',
        tagline: 'Fund the Mission. Scale the Impact.',
        heroHeadline: 'Your Organization Has the Passion. We Help You Secure the Funding to Match It.',
        heroSub: 'Professional grant writing, foundation relationship management, and corporate sponsorship development that transforms mission-driven organizations into fully-funded impact machines.',
        painPoints: [
          { icon: '📝', title: 'Grant Applications That Keep Getting Rejected', desc: 'Strong programs with weak grant applications leave critical funding on the table year after year.' },
          { icon: '🔍', title: 'Not Knowing Where to Find Funding', desc: 'Thousands of foundations and government programs exist. Most nonprofits access fewer than 5% of their eligible sources.' },
          { icon: '⏳', title: 'Grant Writing Consuming Program Staff Time', desc: 'Your program team shouldn\'t be writing grants. That\'s expensive and pulls focus from mission delivery.' },
        ],
        solution: 'Full-service grant writing, foundation relations, and corporate sponsorship development — from prospect research and application writing to reporting and relationship management.',
        process: [
          { step: 1, title: 'Funding Landscape Analysis', desc: 'Comprehensive research of government, foundation, and corporate funding aligned with your mission and geography.', duration: 'Week 1–2' },
          { step: 2, title: 'Organization Readiness Review', desc: 'Audit your financials, programs, and reporting infrastructure to ensure grant-readiness.', duration: 'Week 2' },
          { step: 3, title: 'Prospect List & Strategy', desc: 'Prioritized list of 25–50 funding prospects with application timelines and relationship strategies.', duration: 'Week 3' },
          { step: 4, title: 'Grant Writing & Application Submission', desc: 'Professional grant writing, proposal review, and submission management.', duration: 'Week 4+, ongoing' },
          { step: 5, title: 'Relationship Management & Reporting', desc: 'Funder stewardship, interim reports, final reports, and renewal strategy.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Foundation', price: '2,997', period: '/month', highlight: false, cta: 'Get Started',
            features: ['Prospect Research (25 funders)', 'Grant Calendar Management', '2 Applications/Month', 'Letter of Inquiry Writing', 'Application Review & Editing', 'Monthly Reporting'] },
          { name: 'Full-Service', price: '5,997', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['Unlimited Prospect Research', 'Priority Grant Calendar', '5 Applications/Month', 'Foundation Relationship Management', 'Government Grant Support', 'Corporate Sponsorship Development', 'Funder Reporting & Renewal', 'Quarterly Fundraising Strategy Call'] },
          { name: 'Capital Campaign', price: 'Custom', period: 'project-based', highlight: false, cta: 'Book a Call',
            features: ['Major Capital Campaign Planning', 'Individual Major Donor Strategy', 'Board Engagement Training', 'Campaign Materials Development', 'Multi-Year Funding Strategy', 'Investor-Grade Impact Reporting'] },
        ],
        testimonials: [
          t('Sandra T.', 'Executive Director', 'Rising Stars Youth', 'We secured $1.2M in new grant funding in our first year working together. They know how to tell our story compellingly.', '$1.2M Secured in Year 1'),
          t('Marcus B.', 'CEO', 'Urban Renewal Alliance', 'Our federal grant success rate went from 8% to 43%. The writing quality and strategic positioning is on another level.', 'Grant Win Rate from 8% to 43%'),
          t('Denise W.', 'Director', 'Legacy Foundation', 'They secured a $500K corporate sponsorship from a company we\'d approached unsuccessfully for 3 years. Game-changing.', '$500K Corporate Sponsorship'),
        ],
        faq: [
          { q: 'Do you guarantee grant awards?', a: 'No ethical grant writer guarantees awards — that\'s up to the funder. We guarantee high-quality, strategic applications that maximize your probability of success.' },
          { q: 'What is your success rate?', a: 'Our managed clients average a 38% grant award rate, compared to the sector average of 12–15%.' },
          { q: 'Do you write government grants?', a: 'Yes — including federal (HRSA, HUD, DOL, DOJ), state, and local government grants.' },
          { q: 'How long before we see funding?', a: 'Most government grants have 90–180 day review periods. Foundation grants vary from 30 to 180 days. We prioritize quick-turnaround opportunities early.' },
          { q: 'Do we need to have existing programs?', a: 'Yes. Most funders require established programs with data on populations served. We can help strengthen your documentation.' },
          { q: 'Can you help with individual major donor fundraising?', a: 'Yes — our Capital Campaign package includes major donor strategy and board engagement training.' },
        ],
        metrics: [{ label: 'Grant Success Rate', value: '38%' }, { label: 'Total Funding Secured', value: '$4.2M+' }, { label: 'Funders in Network', value: '800+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/grant-consultation',
      },
    ],
    testimonials: [
      t('Rev. Thomas L.', 'Executive Director', 'Hope Center', 'Greenwood 100 changed our organization\'s trajectory permanently.', '16x Families Served'),
      t('Sandra T.', 'ED', 'Rising Stars Youth', '$1.2M secured in year one. Unmatched.', '$1.2M in New Funding'),
    ],
    caseStudies: [
      { title: 'Youth Organization Secures $2M Capital Grant', industry: 'Youth Development', result: '$2M Federal Grant Awarded', description: 'Comprehensive grant strategy and application resulted in HUD Community Development Block Grant for new facility construction.' },
      { title: 'Workforce Program Places 340 Adults in 18 Months', industry: 'Workforce Development', result: '340 Jobs Placed, 81% Retention', description: 'Full workforce development program design and employer partnership network generated 340 sustainable job placements.' },
    ],
    partnerships: ['501(c)(3) Certified', 'HUD Community Partner', 'Department of Labor WIOA', 'United Way Affiliate'],
  },

  // ─────────────────────────────────────────────────────────────
  // 4. HEALTH & MEDICAL
  // ─────────────────────────────────────────────────────────────
  {
    id: 'medical', name: 'Health & Life Sciences', shortName: 'Health',
    tagline: 'Care coordination, housing, and staffing solutions built on dignity, access, and measurable outcomes.',
    heroHeadline: 'Healthcare Isn\'t Just a Service. It\'s a Right.',
    heroSub: 'Specialized health and medical services supporting veterans, persons with disabilities, and vulnerable populations — connecting people to the care, housing, and support they deserve.',
    color: MEDI.color, colorDark: MEDI.dark, colorBg: MEDI.bg, glow: MEDI.glow,
    gradient: 'from-emerald-950 via-teal-950 to-black',
    cardGradient: 'from-emerald-900/40 via-teal-900/20 to-transparent',
    icon: '⚕️',
    stats: [
      { label: 'Individuals Served', value: '5K', suffix: '+' },
      { label: 'Provider Network', value: '200', suffix: '+ Partners' },
      { label: 'States Served', value: '18', suffix: '' },
      { label: 'Satisfaction Rate', value: '96', suffix: '%' },
    ],
    services: [
      {
        id: 'medicaid-coordination',
        name: 'Medicaid Support Coordination',
        tagline: 'Navigating the System So You Don\'t Have To',
        heroHeadline: 'Medicaid Benefits Are Complex. Your Access to Care Shouldn\'t Be.',
        heroSub: 'Expert Medicaid support coordination that ensures individuals receive every benefit they\'re entitled to — navigating the system, managing paperwork, and coordinating services with dignity and respect.',
        painPoints: [
          { icon: '📋', title: 'Overwhelming Paperwork and Bureaucracy', desc: 'Medicaid applications and renewals involve complex documentation that causes many eligible individuals to give up.' },
          { icon: '🔄', title: 'Disconnected Care with No Coordinator', desc: 'Without a single point of coordination, patients fall through gaps between providers, specialists, and services.' },
          { icon: '⚠️', title: 'Benefits Lapses and Coverage Gaps', desc: 'Missed renewals and paperwork errors cause sudden coverage losses for people who can\'t afford them.' },
        ],
        solution: 'Dedicated Medicaid support coordinators who manage the entire process — from application and approval through ongoing plan management and care coordination.',
        process: [
          { step: 1, title: 'Eligibility Assessment', desc: 'Comprehensive review of financial situation, medical needs, and Medicaid program eligibility.', duration: 'Week 1' },
          { step: 2, title: 'Application & Enrollment', desc: 'Complete and submit all required applications with supporting documentation.', duration: 'Week 1–2' },
          { step: 3, title: 'Benefits Optimization', desc: 'Identify all available supplemental benefits and ensure full utilization.', duration: 'Week 2–4' },
          { step: 4, title: 'Care Coordination Setup', desc: 'Establish connections between all providers, specialists, and support services.', duration: 'Week 3–5' },
          { step: 5, title: 'Ongoing Management & Renewals', desc: 'Annual renewal management, plan changes, appeals, and continuous care coordination.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Application Support', price: 'Sliding Scale', period: '', highlight: false, cta: 'Get Help Now',
            features: ['Eligibility Screening', 'Application Completion', 'Document Preparation', 'Submission & Tracking', '90-Day Follow-Up Support'] },
          { name: 'Full Coordination', price: 'Insurance-Billed', period: 'ongoing', highlight: true, cta: 'Enroll Now',
            features: ['Dedicated Care Coordinator', 'Annual Renewal Management', 'Provider Network Access', 'Specialist Referral Coordination', 'Transportation Assistance', 'Mental Health Service Coordination', 'Monthly Check-In Calls', 'Appeals & Grievance Support'] },
          { name: 'Provider Partnership', price: 'Custom', period: '', highlight: false, cta: 'Partner With Us',
            features: ['Referral Partnership Agreement', 'Care Coordination Integration', 'Shared Patient Management', 'Outcome Reporting', 'Quality Metrics Tracking'] },
        ],
        testimonials: [
          t('Maria G.', 'Client Family Member', '', 'My mother had been without her medication for 6 weeks because of a coverage lapse. They got it resolved in 48 hours. I cannot thank them enough.', 'Coverage Restored in 48 Hours'),
          t('James T.', 'Veteran', '', 'I didn\'t know I qualified for half the benefits they found for me. My coordinator handles everything. I just focus on my health.', '8 New Benefits Unlocked'),
          t('Dr. Sandra L.', 'Medical Director', 'Coastal Health Network', 'Having care coordinators who truly know the Medicaid system has dramatically improved outcomes for our shared patients.', 'Readmissions Reduced 31%'),
        ],
        faq: [
          { q: 'Who qualifies for Medicaid support coordination?', a: 'Individuals with Medicaid coverage, particularly those with chronic conditions, disabilities, mental health needs, or complex care situations.' },
          { q: 'Is there a cost for coordination services?', a: 'In most states, care coordination is a covered Medicaid benefit at no cost to the individual. We assess your specific coverage at enrollment.' },
          { q: 'How quickly can you help someone in a crisis?', a: 'For urgent situations — coverage lapses, medication access — we prioritize same-day or next-day response.' },
          { q: 'Do you serve veterans specifically?', a: 'Yes. We have specialists in VA-Medicaid coordination and dual-eligible benefit optimization for veterans.' },
          { q: 'Which states do you serve?', a: 'We currently serve 18 states. Contact us to confirm service availability in your state.' },
          { q: 'Can providers refer patients to your program?', a: 'Yes. We welcome provider referrals and have formal partnership agreements with healthcare networks.' },
        ],
        metrics: [{ label: 'Avg. Benefits Secured', value: '$8,400/yr' }, { label: 'Application Approval Rate', value: '91%' }, { label: 'Avg. Resolution Time', value: '14 Days' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/medicaid-consultation',
      },
      {
        id: 'transitional-housing',
        name: 'Transitional Housing Assistance',
        tagline: 'Stable Housing is the Foundation of Everything Else',
        heroHeadline: 'You Cannot Heal, Work, or Thrive Without a Safe Place to Come Home To.',
        heroSub: 'Comprehensive transitional housing support connecting individuals experiencing housing instability with immediate placement, financial assistance, and the pathway to permanent stable housing.',
        painPoints: [
          { icon: '🏠', title: 'Crisis Housing with No Clear Path Forward', desc: 'Emergency shelters address tonight — not next month. Transitional support is the bridge that\'s usually missing.' },
          { icon: '💸', title: 'Financial Barriers to Stable Housing', desc: 'Security deposits, first month\'s rent, and credit barriers keep individuals trapped in housing insecurity.' },
          { icon: '🔗', title: 'Fragmented Services with No Case Manager', desc: 'Healthcare, employment, benefits, and housing are managed separately. Coordination failures cost people their stability.' },
        ],
        solution: 'Holistic transitional housing services that combine immediate placement support, financial assistance coordination, case management, and a structured 12-month pathway to permanent housing.',
        process: [
          { step: 1, title: 'Housing Crisis Assessment', desc: 'Immediate assessment of housing situation, safety, financial resources, and support needs.', duration: 'Day 1' },
          { step: 2, title: 'Emergency Placement & Stabilization', desc: 'Connect with transitional housing resources and stabilize the immediate living situation.', duration: 'Day 1–7' },
          { step: 3, title: 'Benefits & Financial Assistance', desc: 'Apply for rental assistance, utility assistance, and housing vouchers.', duration: 'Week 2–4' },
          { step: 4, title: 'Case Management & Support Services', desc: 'Integrated case management connecting housing with healthcare, employment, and recovery services.', duration: 'Month 1–6' },
          { step: 5, title: 'Permanent Housing Transition', desc: 'Secured permanent housing placement with 6-month stability monitoring.', duration: 'Month 6–12' },
        ],
        packages: [
          { name: 'Emergency Support', price: 'Needs-Based', period: '', highlight: false, cta: 'Get Help Now',
            features: ['Same-Day Housing Assessment', 'Emergency Shelter Connection', 'Crisis Financial Assistance', 'Basic Needs Support', '30-Day Follow-Up'] },
          { name: 'Transitional Program', price: 'Program-Funded', period: '6–12 months', highlight: true, cta: 'Apply Now',
            features: ['Dedicated Case Manager', 'Transitional Housing Placement', 'Rental Assistance Navigation', 'Employment Support Integration', 'Healthcare Coordination', 'Life Skills Training', 'Permanent Housing Pathway', '12-Month Stability Monitoring'] },
          { name: 'Institutional Partnership', price: 'Custom', period: '', highlight: false, cta: 'Contact Us',
            features: ['Hospital Discharge Planning', 'Corrections Re-Entry Partnership', 'Veterans Housing Partnership', 'Referral Integration', 'Outcome Data Sharing', 'Co-Case Management'] },
        ],
        testimonials: [
          t('Robert M.', 'Veteran, Program Completer', '', 'After 14 months on the streets after discharge, they found me a place within a week and supported me for a full year. I\'m stable. I have a job. I\'m myself again.', 'Housed and Employed After 14 Months'),
          t('Angela P.', 'Program Graduate', '', 'They didn\'t just give me a roof. They gave me a plan, a case manager who actually cared, and the skills to keep my housing.', 'Permanent Housing Achieved in 8 Months'),
          t('Dr. Kevin W.', 'Hospital Social Work Director', 'Regional Medical Center', 'Our discharge-to-homelessness rate dropped significantly after partnering with this team. Real outcomes.', 'Discharge-to-Homelessness -62%'),
        ],
        faq: [
          { q: 'Who do you serve?', a: 'Veterans, individuals with disabilities, those leaving incarceration, individuals experiencing domestic violence, and adults exiting hospital or psychiatric care.' },
          { q: 'Is there a waitlist?', a: 'Emergency assessments are same-day. Transitional program enrollment depends on funding and capacity. Contact us to check current availability.' },
          { q: 'Do you provide housing directly?', a: 'We coordinate placements in partner transitional housing facilities and connect individuals with rental assistance programs. We do not own housing directly.' },
          { q: 'How long does the program last?', a: 'Standard program length is 6–12 months from transitional placement to permanent housing stability.' },
          { q: 'Do you help with rental application issues like poor credit?', a: 'Yes. We work with partner landlords who accept program participants and provide financial assistance that addresses security deposit and first month barriers.' },
          { q: 'Can hospitals or corrections facilities refer individuals?', a: 'Yes. Institutional partnerships are a core component of our program model. Contact us about a formal referral agreement.' },
        ],
        metrics: [{ label: 'Permanent Housing Rate', value: '74%' }, { label: 'Avg. Time to Placement', value: '7 Days' }, { label: 'Program Completion Rate', value: '82%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/housing-intake',
      },
      {
        id: 'medical-staffing',
        name: 'Medical Staffing & Care Coordination',
        tagline: 'The Right Care. The Right Professionals. At the Right Time.',
        heroHeadline: 'Healthcare Doesn\'t Stop When a Position Goes Unfilled.',
        heroSub: 'Specialized medical staffing solutions and integrated care coordination for healthcare organizations serving veterans, disabled individuals, and underserved populations.',
        painPoints: [
          { icon: '👩‍⚕️', title: 'Critical Staffing Gaps Impacting Care', desc: 'Understaffed healthcare teams compromise patient outcomes, burn out remaining staff, and create compliance risk.' },
          { icon: '🔄', title: 'Coordination Failures Between Providers', desc: 'Siloed care teams with no coordination system create dangerous gaps in patient management.' },
          { icon: '📋', title: 'Compliance and Documentation Burden', desc: 'Complex Medicaid/Medicare billing, documentation requirements, and regulatory compliance strain administrative teams.' },
        ],
        solution: 'Specialized medical staffing for healthcare organizations serving vulnerable populations, combined with integrated care coordination systems that improve outcomes and reduce administrative burden.',
        process: [
          { step: 1, title: 'Staffing Needs Assessment', desc: 'Evaluate current team composition, patient census, care model, and regulatory requirements.', duration: 'Day 1–3' },
          { step: 2, title: 'Candidate Sourcing & Vetting', desc: 'Source, credential-verify, and screen candidates from our specialized talent network.', duration: 'Week 1–2' },
          { step: 3, title: 'Placement & Onboarding', desc: 'Facilitate placement, compliance onboarding, and smooth integration into the care team.', duration: 'Week 2–4' },
          { step: 4, title: 'Care Coordination System Integration', desc: 'Implement coordination workflows and communication protocols across the care team.', duration: 'Week 3–6' },
          { step: 5, title: 'Performance Monitoring & Support', desc: 'Ongoing performance tracking, replacement guarantee, and system optimization.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Staffing Only', price: 'Fee-Based', period: 'per placement', highlight: false, cta: 'Submit Staffing Request',
            features: ['Licensed Professional Sourcing', 'Full Credential Verification', '90-Day Replacement Guarantee', 'Compliance Documentation', 'Quick Turnaround'] },
          { name: 'Integrated Staffing + Coordination', price: 'Custom', period: 'monthly', highlight: true, cta: 'Request Proposal',
            features: ['Ongoing Staffing Partnership', 'Priority Placement Pipeline', 'Care Coordination System Design', 'Staff Training & Protocols', 'QA & Compliance Support', 'Monthly Performance Reporting', 'Dedicated Account Manager'] },
          { name: 'Full-Service Healthcare Partner', price: 'Custom', period: 'contract', highlight: false, cta: 'Book a Call',
            features: ['Full Staffing Management', 'Care Team Coordination', 'Billing & Documentation Support', 'Regulatory Compliance Consulting', 'Quality Improvement Programs', 'Outcome Measurement & Reporting'] },
        ],
        testimonials: [
          t('Dr. Pamela J.', 'Medical Director', 'Veterans Care Clinic', 'They placed 4 qualified support coordinators within 2 weeks. No other staffing agency had candidates with the right background.', '4 Placements in 2 Weeks'),
          t('Terrence B.', 'COO', 'Ability First Services', 'Our care coordination has never been tighter. Patient outcomes improved. Staff satisfaction improved. These people know what they\'re doing.', 'Patient Outcomes Up 28%'),
          t('Lisa M.', 'CEO', 'Cornerstone Home Health', 'The 90-day replacement guarantee matters. They back their placements. It\'s a real partnership.', 'Zero Staffing Gaps in 6 Months'),
        ],
        faq: [
          { q: 'What roles do you staff for?', a: 'Care coordinators, support coordinators, social workers, case managers, home health aides, LPNs, RNs, and administrative support roles.' },
          { q: 'How quickly can you make placements?', a: 'Standard placements: 7–14 days. Urgent needs: 48–72 hours for short-term placements from our active pipeline.' },
          { q: 'Do your candidates have specialized training?', a: 'Yes. We specialize in candidates with experience serving veterans, individuals with disabilities, and Medicaid/Medicare populations.' },
          { q: 'What\'s your credential verification process?', a: 'Full license verification, background checks, reference checks, and confirmation of all certifications required by the role and state.' },
          { q: 'Do you offer temp, temp-to-perm, and permanent placements?', a: 'Yes — all three models. We tailor the engagement structure to your needs and budget.' },
          { q: 'What geographic areas do you serve?', a: 'We serve healthcare organizations in 18 states with nationwide capability for remote/telehealth roles.' },
        ],
        metrics: [{ label: 'Avg. Time to Placement', value: '11 Days' }, { label: 'Retention Rate (90-day)', value: '88%' }, { label: 'Providers in Network', value: '200+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/staffing-request',
      },
    ],
    testimonials: [
      t('Dr. Pamela J.', 'Medical Director', 'Veterans Care Clinic', 'A true partner in delivering better care. Professional, fast, and deeply knowledgeable.', '4 Placements in 2 Weeks'),
      t('Maria G.', 'Client', '', 'They restored my mother\'s coverage in 48 hours when our family was in crisis. We are forever grateful.', 'Coverage Restored in 48 Hours'),
    ],
    caseStudies: [
      { title: 'Veterans Clinic Eliminates Staffing Gaps', industry: 'Veterans Healthcare', result: 'Zero Staffing Gaps for 6 Months', description: 'Ongoing staffing partnership filled 12 critical positions and reduced patient wait times by 44%.' },
      { title: 'Medicaid Coordination Unlocks $2.4M in Benefits', industry: 'Medicaid Services', result: '$2.4M Benefits Secured', description: 'Program-wide coordination enrolled 285 individuals, securing an average of $8,400/year in benefits per participant.' },
    ],
    partnerships: ['CMS Medicaid Certified', 'VA Community Care Network', 'HRSA Health Center Partner', 'HIPAA Compliant Operator'],
  },

  // ─────────────────────────────────────────────────────────────
  // 5. INVESTMENT & ACQUISITION
  // ─────────────────────────────────────────────────────────────
  {
    id: 'investment', name: 'Funding & Investment Opportunities', shortName: 'Investment',
    tagline: 'Strategic capital deployment, acquisition advisory, and real estate that builds generational wealth.',
    heroHeadline: 'Capital Doesn\'t Create Opportunity. Vision Does.',
    heroSub: 'Multi-industry investment and acquisition expertise that identifies, evaluates, and closes deals other investors miss — from business acquisitions and capital raises to real estate and strategic assets.',
    color: INVT.color, colorDark: INVT.dark, colorBg: INVT.bg, glow: INVT.glow,
    gradient: 'from-orange-950 via-red-950 to-black',
    cardGradient: 'from-orange-900/40 via-red-900/20 to-transparent',
    icon: '📈',
    stats: [
      { label: 'Transactions Closed', value: '50', suffix: '+' },
      { label: 'Capital Deployed', value: '$40', suffix: 'M+' },
      { label: 'Average IRR', value: '31', suffix: '%' },
      { label: 'Portfolio Exits', value: '18', suffix: '' },
    ],
    services: [
      {
        id: 'acquisition-advisory',
        name: 'Business Acquisition Advisory',
        tagline: 'Find the Right Business. Structure the Right Deal. Close with Confidence.',
        heroHeadline: 'Buying a Business is the Fastest Path to Wealth — When You Do It Right.',
        heroSub: 'Expert business acquisition advisory for buyers and sellers: deal sourcing, valuation, due diligence, negotiation, and integration — from LOI to close.',
        painPoints: [
          { icon: '🔍', title: 'Can\'t Find the Right Deal', desc: 'Most quality businesses never hit brokers\' marketplaces. Without relationships and deal flow, you\'re limited to what everyone else sees.' },
          { icon: '⚖️', title: 'Overpaying or Undervaluing', desc: 'Without deep valuation expertise, buyers overpay and sellers undervalue. Both leave significant money on the table.' },
          { icon: '📋', title: 'Due Diligence Blind Spots', desc: 'Missing a liability in due diligence can turn a great deal into a disaster. You need experts who\'ve been through hundreds of deals.' },
        ],
        solution: 'Full-cycle business acquisition advisory — from deal sourcing and qualification through valuation, due diligence, negotiation, and post-close integration support.',
        process: [
          { step: 1, title: 'Acquisition Criteria & Strategy', desc: 'Define your ideal acquisition profile: industry, size, geography, cash flow, and strategic fit.', duration: 'Week 1' },
          { step: 2, title: 'Deal Sourcing & Proprietary Flow', desc: 'Access off-market opportunities through our proprietary network of business owners, brokers, and intermediaries.', duration: 'Week 2–8' },
          { step: 3, title: 'Valuation & Financial Analysis', desc: 'Comprehensive business valuation, cash flow analysis, and risk-adjusted pricing.', duration: 'Week 3–5 per deal' },
          { step: 4, title: 'Due Diligence Management', desc: 'Financial, legal, operational, and market due diligence coordination and risk assessment.', duration: 'Week 5–8 per deal' },
          { step: 5, title: 'Negotiation & Close', desc: 'LOI drafting, price negotiation, deal structure optimization, and closing coordination.', duration: 'Week 8–12 per deal' },
        ],
        packages: [
          { name: 'Advisory Only', price: '2,500', period: '/month + success fee', highlight: false, cta: 'Apply Now',
            features: ['Acquisition Strategy Session', 'Deal Evaluation Support', 'Due Diligence Review', 'Negotiation Advisory', 'Success Fee: 3% of deal value'] },
          { name: 'Full-Service Advisory', price: '5,000', period: '/month + success fee', highlight: true, cta: 'Apply Now',
            features: ['Proprietary Deal Flow Access', 'Full Valuation Services', 'End-to-End Due Diligence', 'LOI & Negotiation Management', 'Integration Planning', 'Financing Sourcing', 'Monthly Strategy Sessions', 'Success Fee: 2.5% of deal value'] },
          { name: 'Family Office / Institutional', price: 'Custom', period: '', highlight: false, cta: 'Request Proposal',
            features: ['Dedicated Deal Origination Team', 'Custom Deal Flow Platform', 'Portfolio Company Support', 'Board Advisory Available', 'LP Co-Investment Opportunities', 'Quarterly Portfolio Reviews'] },
        ],
        testimonials: [
          t('Kevin T.', 'CEO', 'KT Capital Holdings', 'They sourced a business I never would have found on any marketplace. Closed at a 4.2x EBITDA multiple. Exceptional advisory.', 'Acquired at 4.2x EBITDA'),
          t('Simone A.', 'Seller', 'Precision Services Inc.', 'They got me 28% more than I thought my business was worth and handled the entire process. I just signed at the end.', '+28% Above Expected Valuation'),
          t('Raymond L.', 'Portfolio Manager', 'Lynbrook Capital', 'Our last 3 acquisitions have been sourced through this team. Off-market deals with exceptional due diligence. We won\'t buy without them.', '3 Deals Closed, 0 Surprises'),
        ],
        faq: [
          { q: 'What size businesses do you work with?', a: 'We work with transactions from $500K to $50M+ in deal value. Our sweet spot is $1M–$15M revenue businesses.' },
          { q: 'Do you help with financing?', a: 'Yes. We work with SBA lenders, private credit funds, seller financing structures, and equity partners to optimize your deal financing.' },
          { q: 'Can you help me sell my business?', a: 'Yes. We represent sellers seeking strategic buyers, private equity acquirers, and management buyout structures.' },
          { q: 'What industries do you specialize in?', a: 'Healthcare services, business services, construction, manufacturing, technology, and real estate-adjacent businesses.' },
          { q: 'How long does an acquisition typically take?', a: 'From deal identification to close: typically 60–180 days depending on deal complexity and financing.' },
          { q: 'Is your success fee negotiable?', a: 'Our success fee structure is outlined per package and is competitive with standard M&A advisory rates.' },
        ],
        metrics: [{ label: 'Deals Sourced Off-Market', value: '68%' }, { label: 'Avg. Time to Close', value: '94 Days' }, { label: 'Avg. Price Premium vs. Listing', value: '-14%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/acquisition-strategy',
      },
      {
        id: 'capital-raising',
        name: 'Capital Raising & Investor Strategy',
        tagline: 'Raise the Capital Your Business Deserves — Without Giving Away the Store',
        heroHeadline: 'Great Businesses Don\'t Fail from Bad Ideas. They Fail from Undercapitalization.',
        heroSub: 'Strategic capital raising advisory that positions your business to attract the right investors, structure the right deals, and close funding rounds — from seed to growth equity.',
        painPoints: [
          { icon: '🚪', title: 'No Access to the Right Investors', desc: 'Most founders pitch the wrong investors at the wrong time with the wrong materials. Access and positioning are everything.' },
          { icon: '📑', title: 'Weak Investor Materials', desc: 'A pitch deck that doesn\'t tell a compelling story or a financial model that doesn\'t hold up in diligence kills raises before they start.' },
          { icon: '⚠️', title: 'Structuring Mistakes That Cost Equity', desc: 'Poor deal structures, excessive dilution, and unfavorable terms can haunt a company for years after the raise.' },
        ],
        solution: 'End-to-end capital raising advisory: investment thesis development, materials creation, investor targeting, introduction management, negotiation, and close.',
        process: [
          { step: 1, title: 'Capital Strategy & Readiness', desc: 'Define raise size, structure (equity/debt/SAFE), valuation, and investor profile. Assess readiness gaps.', duration: 'Week 1–2' },
          { step: 2, title: 'Materials Development', desc: 'Create investor deck, financial model, executive summary, and data room preparation.', duration: 'Week 2–4' },
          { step: 3, title: 'Investor Targeting & Outreach', desc: 'Build targeted investor list and manage warm introductions through our network.', duration: 'Week 4–6' },
          { step: 4, title: 'Investor Meeting Management', desc: 'Prepare for meetings, manage follow-up, and maintain momentum throughout the process.', duration: 'Week 6–12' },
          { step: 5, title: 'Term Sheet & Negotiation', desc: 'Evaluate term sheets, negotiate favorable terms, coordinate due diligence, and close.', duration: 'Week 10–16' },
        ],
        packages: [
          { name: 'Materials & Strategy', price: '7,500', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['Investment Thesis Development', 'Pitch Deck (20 slides)', 'Financial Model Build', 'Raise Structure Advisory', '3 Strategy Sessions'] },
          { name: 'Full Raise Advisory', price: '12,500', period: 'upfront + 3% success fee', highlight: true, cta: 'Apply Now',
            features: ['Everything in Materials & Strategy', 'Data Room Setup', 'Investor Targeting List (50+)', 'Warm Introduction Facilitation', 'Meeting Preparation & Coaching', 'Term Sheet Evaluation', 'Negotiation Advisory', 'Close Coordination'] },
          { name: 'Growth Equity & PE', price: 'Custom', period: '', highlight: false, cta: 'Book a Call',
            features: ['Growth Equity Raise ($5M–$50M)', 'PE Process Management', 'CIM & Management Presentation', 'Management Buyout Advisory', 'Recapitalization Strategy', 'Family Office Access'] },
        ],
        testimonials: [
          t('Aria N.', 'CEO', 'NexaHealth', 'We closed our $3.2M seed round in 68 days working with this team. Their investor relationships and materials made us look like a Series B company.', '$3.2M Raised in 68 Days'),
          t('Darius P.', 'Founder', 'BuildForce Technologies', 'The pitch deck they built was completely different from our original. Completely different outcome too — we got 4 term sheets.', '4 Term Sheets Received'),
          t('Michelle W.', 'CFO', 'Catalyst Energy Partners', 'They saved us 8 points of equity by negotiating term sheet terms we would have accepted. Worth 10x the advisory fee.', '8 Points of Equity Saved'),
        ],
        faq: [
          { q: 'What raise sizes do you work with?', a: 'We work on raises from $500K to $50M. Our sweet spot is $1M–$10M growth-stage raises.' },
          { q: 'Do you guarantee a successful raise?', a: 'No ethical advisor guarantees fundraising outcomes — that\'s up to investors. We guarantee institutional-quality preparation and active process management.' },
          { q: 'What investor types do you have relationships with?', a: 'Angel networks, family offices, venture capital, private equity, real estate funds, impact investors, and strategic corporate investors.' },
          { q: 'How do you charge?', a: 'Materials & Strategy: flat fee. Full Raise Advisory: upfront retainer plus a 3% success fee on capital closed. Growth Equity: custom.' },
          { q: 'Do you work with non-profits seeking funding?', a: 'For non-profit grant and foundation funding, see our Grant & Sponsorship Development service in the Global Non Profit sector.' },
          { q: 'How long does a typical raise take?', a: 'Seed rounds: 60–120 days. Growth equity: 90–180 days. It depends heavily on market conditions and investor sentiment.' },
        ],
        metrics: [{ label: 'Capital Raised (Portfolio)', value: '$40M+' }, { label: 'Avg. Time to Close', value: '84 Days' }, { label: 'Avg. Terms Improved vs. First Offer', value: '22%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/capital-strategy',
      },
      {
        id: 'real-estate-acquisition',
        name: 'Real Estate & Asset Acquisition',
        tagline: 'Acquire Assets That Work While You Sleep',
        heroHeadline: 'The Wealth Gap Isn\'t Closed by Working Harder. It\'s Closed by Owning More.',
        heroSub: 'Strategic real estate and hard asset acquisition advisory — from identifying undervalued properties and structuring deals to portfolio optimization and exit strategy.',
        painPoints: [
          { icon: '🏘️', title: 'Can\'t Find Deals in a Competitive Market', desc: 'Off-market deals, distressed assets, and value-add opportunities require relationships and systems most investors don\'t have.' },
          { icon: '💰', title: 'Overleveraged or Under-Capitalized', desc: 'Wrong capital structure turns good properties into financial burdens. Most investors get this wrong.' },
          { icon: '🔧', title: 'No Clear Portfolio Strategy', desc: 'Buying individual properties without a portfolio strategy leads to a collection of assets, not a wealth-building engine.' },
        ],
        solution: 'Strategic real estate acquisition advisory — identifying assets that match your criteria, structuring deals for maximum return, and building a coherent portfolio strategy for long-term wealth.',
        process: [
          { step: 1, title: 'Investment Criteria & Portfolio Strategy', desc: 'Define asset classes, geographic markets, return targets, risk tolerance, and capital structure.', duration: 'Week 1' },
          { step: 2, title: 'Market Analysis & Deal Sourcing', desc: 'Analyze target markets and access off-market deal flow through our network.', duration: 'Week 2–6' },
          { step: 3, title: 'Underwriting & Due Diligence', desc: 'Full financial underwriting, physical due diligence coordination, and risk assessment.', duration: 'Week 3–6 per deal' },
          { step: 4, title: 'Financing & Capital Stack', desc: 'Optimize the capital stack: senior debt, mezzanine, equity, and preferred structures.', duration: 'Week 4–8 per deal' },
          { step: 5, title: 'Close & Asset Management', desc: 'Close the acquisition and implement the value-add or hold strategy.', duration: 'Week 8–12 per deal' },
        ],
        packages: [
          { name: 'Acquisition Advisory', price: '3,500', period: '/month + success fee', highlight: false, cta: 'Apply Now',
            features: ['Market Analysis', 'Deal Evaluation Support', 'Underwriting Review', 'Offer & Negotiation Advisory', 'Success Fee: 1.5% of acquisition price'] },
          { name: 'Portfolio Builder', price: '6,500', period: '/month + success fee', highlight: true, cta: 'Apply Now',
            features: ['Portfolio Strategy Development', 'Off-Market Deal Sourcing', 'Full Underwriting & Due Diligence', 'Capital Stack Optimization', 'Financing Sourcing & Negotiation', 'Asset Management Support', 'Quarterly Portfolio Reviews', 'Success Fee: 1% of acquisition price'] },
          { name: 'Fund / Institutional Partner', price: 'Custom', period: '', highlight: false, cta: 'Request Proposal',
            features: ['Dedicated Acquisition Team', 'Fund Strategy & Structure', 'LP Capital Raise Support', 'Multi-Market Portfolio Execution', 'Full Asset Management', 'Investor Reporting'] },
        ],
        testimonials: [
          t('Byron M.', 'Real Estate Investor', '', 'They found me an off-market 24-unit apartment building at 27% below market. That deal changed my financial life.', 'Acquired 27% Below Market'),
          t('Sandra W.', 'Family Office', 'Westbrook Capital Group', 'We\'ve deployed $12M through this team over 3 years. Our average cash-on-cash return is 18.4%. Exceptional.', '18.4% Avg. CoC Return'),
          t('Jamal L.', 'First-Time Investor', '', 'I was nervous about my first acquisition. They walked me through every step, found the deal, and structured the financing. Perfect experience.', 'First Property, Zero Headaches'),
        ],
        faq: [
          { q: 'What asset classes do you work with?', a: 'Multifamily (5–500+ units), commercial (retail, office, industrial), mixed-use, mobile home parks, self-storage, and distressed single-family portfolios.' },
          { q: 'What markets do you cover?', a: 'We source deals nationally with deep relationships in the Southeast, Midwest, and Sun Belt markets.' },
          { q: 'How do you find off-market deals?', a: 'Direct mail, owner relationships, distressed property databases, broker networks, and proprietary off-market sourcing systems.' },
          { q: 'Can you help me refinance or restructure an existing portfolio?', a: 'Yes. We provide portfolio optimization advisory including refinancing, disposition strategy, and 1031 exchange planning.' },
          { q: 'Do you offer co-investment opportunities?', a: 'Selected clients with existing relationships may be presented co-investment opportunities in our deal flow. Contact us to discuss.' },
          { q: 'What\'s the minimum deal size?', a: 'We work on acquisitions from $500K and up. For value-add multifamily, our sweet spot is $2M–$20M.' },
        ],
        metrics: [{ label: 'Transactions Closed', value: '50+' }, { label: 'Off-Market Deal Rate', value: '71%' }, { label: 'Avg. Cash-on-Cash Return', value: '16.8%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/real-estate-strategy',
      },
    ],
    testimonials: [
      t('Kevin T.', 'CEO', 'KT Capital Holdings', 'The best deal advisory team I\'ve worked with. Period.', 'Acquired at 4.2x EBITDA'),
      t('Sandra W.', 'Family Office', 'Westbrook Capital', '$12M deployed at 18.4% average CoC. Results speak.', '18.4% Avg. CoC Return'),
    ],
    caseStudies: [
      { title: 'Tech Founder Raises $6.8M Series A', industry: 'B2B SaaS', result: '$6.8M Raised in 95 Days', description: 'Complete raise advisory from materials through close — 4 term sheets received, final deal structured at $22M pre-money.' },
      { title: 'Real Estate Portfolio Scaled to $18M AUM', industry: 'Multifamily', result: '$18M AUM in 24 Months', description: '8 acquisitions across 3 markets. 100% off-market deal sourcing. 21% average cash-on-cash return.' },
    ],
    partnerships: ['CCIM Member', 'NAI Global Partner', 'Private Equity Network Member', 'Angel Capital Association'],
  },

  // ─────────────────────────────────────────────────────────────
  // 6. TECHNOLOGY & RESEARCH DATA
  // ─────────────────────────────────────────────────────────────
  {
    id: 'technology', name: 'Technology & Research Data', shortName: 'Technology',
    tagline: 'Data intelligence, AI solutions, and research-driven technology that powers every sector of a modern economy.',
    heroHeadline: 'The Civilization That Controls Data Controls the Future.',
    heroSub: 'We build the data infrastructure, AI systems, and research frameworks that give organizations an unfair advantage — turning raw information into precision decisions.',
    color: TECH.color, colorDark: TECH.dark, colorBg: TECH.bg, glow: TECH.glow,
    gradient: 'from-cyan-950 via-sky-950 to-black',
    cardGradient: 'from-cyan-900/40 via-sky-900/20 to-transparent',
    icon: '🔬',
    stats: [
      { label: 'Data Points Processed', value: '1.2', suffix: 'B+' },
      { label: 'AI Models Deployed', value: '80', suffix: '+' },
      { label: 'Avg. Decision Speed', value: '94', suffix: '% faster' },
      { label: 'Research Projects', value: '200', suffix: '+' },
    ],
    services: [
      // ── Service 1 ──────────────────────────────────────────
      {
        id: 'data-analytics',
        name: 'Data Analytics & Business Intelligence',
        tagline: 'Turn Raw Data Into Revenue-Generating Decisions',
        heroHeadline: 'Your Competitors Are Reading the Future. Are You Still Guessing?',
        heroSub: 'We design and deploy custom data analytics pipelines, dashboards, and BI systems that transform scattered data into clear, actionable intelligence — so every decision is backed by evidence.',
        painPoints: [
          { icon: '🌊', title: 'Drowning in Data, Starving for Insights', desc: 'Your business generates thousands of data points daily but none of it connects into a coherent picture that drives action.' },
          { icon: '⏳', title: 'Decisions Made on Gut Feeling', desc: 'Without real-time dashboards and predictive models, leadership is flying blind and reacting to problems instead of anticipating them.' },
          { icon: '🔀', title: 'Siloed Systems That Don\'t Talk', desc: 'CRM, finance, ops, and marketing all live in separate tools with no unified view — leaving massive blind spots in performance.' },
        ],
        solution: 'We architect end-to-end data systems — from ingestion and warehousing to visualization and predictive analytics — giving your leadership team a single source of truth and the intelligence to act on it.',
        process: [
          { step: 1, title: 'Data Audit & Source Mapping', desc: 'We map every data source across your organization and identify gaps, redundancies, and untapped intelligence opportunities.', duration: 'Week 1' },
          { step: 2, title: 'Pipeline Architecture', desc: 'Design and build automated data pipelines that consolidate, clean, and enrich your data in real time.', duration: 'Week 2–3' },
          { step: 3, title: 'Warehouse & Modeling', desc: 'Stand up a cloud data warehouse and build semantic data models aligned to your KPIs and business questions.', duration: 'Week 3–4' },
          { step: 4, title: 'Dashboard & Visualization', desc: 'Deliver executive dashboards, departmental scorecards, and drill-down reports that surface the metrics that matter.', duration: 'Week 5–6' },
          { step: 5, title: 'Predictive Layer & Training', desc: 'Add forecasting models, anomaly detection, and team training so your organization can sustain and extend the system.', duration: 'Week 7–8' },
        ],
        packages: [
          { name: 'Insight', price: '4,997', period: 'one-time setup', highlight: false, cta: 'Get Started',
            features: ['Data Audit (up to 5 sources)', 'Automated ETL Pipeline', 'Cloud Data Warehouse Setup', 'Executive Dashboard (10 KPIs)', '2 Department Scorecards', '30-Day Hypercare Support'] },
          { name: 'Intelligence', price: '9,997', period: 'one-time + $1,497/mo', highlight: true, cta: 'Apply Now',
            features: ['Unlimited Data Sources', 'Real-Time Streaming Pipelines', 'Predictive Forecasting Models', 'Unlimited Dashboards & Reports', 'Anomaly Detection Alerts', 'Monthly Model Retraining', 'Dedicated Data Analyst', 'Quarterly Strategy Reviews'] },
          { name: 'Enterprise', price: 'Custom', period: 'annual contract', highlight: false, cta: 'Book a Call',
            features: ['Full Data Platform Build-Out', 'AI-Powered BI Layer', 'Custom ML Model Development', 'Data Governance Framework', 'Embedded Analytics in Products', 'Dedicated Data Engineering Team', 'SLA-Backed Uptime & Support', 'C-Suite Data Strategy Advisory'] },
        ],
        testimonials: [
          t('Priya S.', 'VP of Operations', 'LogiCore Systems', 'We went from monthly Excel reports to real-time dashboards in 6 weeks. Leadership now makes decisions in hours that used to take weeks.', '10x faster decision cycles'),
          t('James O.', 'CFO', 'Meridian Health Group', 'The predictive model they built forecasted our Q3 revenue within 2% accuracy. We restructured our hiring plan based on it and saved $800K.', '$800K in avoided overhire costs'),
          t('Alicia M.', 'Director of Growth', 'NovaSpark Retail', 'Finally, one dashboard that shows everything — sales, inventory, marketing, and customer behavior — all in one place. Game changing.', '360° business visibility achieved'),
        ],
        faq: [
          { q: 'What data tools do you work with?', a: 'We work across the major stack: BigQuery, Snowflake, Databricks, dbt, Fivetran, Airbyte, Looker, Metabase, Power BI, Tableau, and custom solutions.' },
          { q: 'Do we need a data team to maintain this?', a: 'No. Our Intelligence package includes a dedicated analyst. For the Insight package we document everything and provide training so your team can manage it.' },
          { q: 'How long until we see results?', a: 'Most clients have a working dashboard within 3–4 weeks of kickoff. Full predictive layers are live within 8 weeks.' },
          { q: 'Can you integrate with our existing CRM and tools?', a: 'Yes. We\'ve integrated with Salesforce, HubSpot, Stripe, QuickBooks, Shopify, and 50+ other platforms via native connectors and custom APIs.' },
          { q: 'Is our data secure?', a: 'All data is encrypted in transit and at rest. We implement role-based access controls, audit logging, and comply with SOC 2, HIPAA, and GDPR requirements as needed.' },
        ],
        metrics: [{ label: 'Setup Time', value: '6–8 Weeks' }, { label: 'Avg. ROI', value: '8.3x Year 1' }, { label: 'Data Sources Supported', value: '50+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/technology-strategy',
      },
      // ── Service 2 ──────────────────────────────────────────
      {
        id: 'ai-solutions',
        name: 'AI Solutions & Custom Technology',
        tagline: 'Purpose-Built AI That Solves Real Problems and Scales With You',
        heroHeadline: 'Off-the-Shelf AI Won\'t Give You an Edge. Custom AI Will.',
        heroSub: 'We design, build, and deploy custom artificial intelligence systems — from machine learning models and NLP pipelines to computer vision and intelligent automation — engineered specifically for your industry and use case.',
        painPoints: [
          { icon: '🤖', title: 'Generic AI Tools Don\'t Fit Your Workflow', desc: 'ChatGPT and off-the-shelf tools create buzz but can\'t be trained on your proprietary data or integrated deeply into your operations.' },
          { icon: '📉', title: 'Manual Processes Eating Profit Margins', desc: 'Repetitive, high-volume tasks are consuming your team\'s time and introducing costly human error at scale.' },
          { icon: '🔒', title: 'Falling Behind AI-Native Competitors', desc: 'Every quarter you delay building AI capabilities is another quarter competitors use to widen the gap in speed, cost, and output quality.' },
        ],
        solution: 'We build AI systems from scratch on your data, integrated into your stack, solving your specific bottlenecks — not generic problems. From model training to deployment and monitoring, we own the full lifecycle.',
        process: [
          { step: 1, title: 'Use Case Discovery & ROI Modeling', desc: 'Identify the highest-impact AI opportunities across your organization and model the expected return on each.', duration: 'Week 1' },
          { step: 2, title: 'Data Preparation & Model Architecture', desc: 'Prepare training data, select model architecture, and define evaluation metrics tied to business outcomes.', duration: 'Week 2–4' },
          { step: 3, title: 'Model Training & Validation', desc: 'Train, test, and validate models against held-out data. Iterate until accuracy and reliability benchmarks are met.', duration: 'Week 4–7' },
          { step: 4, title: 'Integration & Deployment', desc: 'Deploy models to production via API or embedded in your existing software. Full CI/CD pipeline for model updates.', duration: 'Week 7–9' },
          { step: 5, title: 'Monitoring & Continuous Improvement', desc: 'Ongoing model performance monitoring, drift detection, retraining schedules, and capability expansion.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Build', price: '14,997', period: 'per project', highlight: false, cta: 'Get Started',
            features: ['1 Custom AI Model', 'Data Preparation & Cleaning', 'Model Training & Validation', 'REST API Deployment', 'Integration with 1 System', '90-Day Post-Launch Support', 'Model Performance Dashboard'] },
          { name: 'Scale', price: '29,997', period: 'per project', highlight: true, cta: 'Apply Now',
            features: ['Up to 5 AI Models', 'Custom Training Data Pipeline', 'Fine-Tuning on Proprietary Data', 'Multi-System Integration', 'Real-Time Inference API', 'Automated Retraining Pipeline', 'Dedicated ML Engineer', 'Quarterly Capability Reviews'] },
          { name: 'Enterprise', price: 'Custom', period: 'retainer', highlight: false, cta: 'Book a Call',
            features: ['Unlimited AI System Development', 'On-Premise or Private Cloud Deploy', 'Custom LLM Fine-Tuning', 'Computer Vision & NLP Systems', 'Embedded AI Product Features', 'AI Governance Framework', 'Dedicated Engineering Pod', 'Board-Level AI Strategy Advisory'] },
        ],
        testimonials: [
          t('Devon K.', 'CTO', 'FinPath Capital', 'Their underwriting AI reduced our loan review time from 4 days to 23 minutes while improving accuracy by 31%. That\'s a completely different business model.', '23-min underwriting vs 4 days'),
          t('Nadia T.', 'CEO', 'Omni Logistics', 'The route optimization model they built saves us $180K per month in fuel and labor. It paid for itself in 11 days.', '$180K/month in cost savings'),
          t('Marcus W.', 'Head of Product', 'Strata Health', 'We embedded their clinical NLP into our EHR. Physicians now get AI-generated SOAP notes in real time. Patient throughput is up 40%.', '+40% patient throughput'),
        ],
        faq: [
          { q: 'Do we need our own data to build a custom AI?', a: 'Yes, in most cases. We help you identify, collect, and prepare the training data. If your dataset is small, we use transfer learning and synthetic data augmentation strategies.' },
          { q: 'How is this different from using OpenAI or Google AI?', a: 'Those are foundation models. We fine-tune them on your proprietary data or build entirely custom models — giving you IP you own, results tuned to your use case, and security you control.' },
          { q: 'What industries do you serve?', a: 'Healthcare, finance, logistics, legal, real estate, manufacturing, retail, and media. If you have data and a repeatable problem, AI can help.' },
          { q: 'How do you handle data privacy?', a: 'All client data is isolated. We use on-premise training for highly sensitive use cases and implement full data governance policies aligned to HIPAA, GDPR, and SOC 2.' },
          { q: 'What if the model underperforms after launch?', a: 'Our support window covers retraining and performance remediation. Long-term clients on retainer get continuous improvement included in their contract.' },
        ],
        metrics: [{ label: 'Avg. Automation Rate', value: '73%' }, { label: 'Models in Production', value: '80+' }, { label: 'Avg. Accuracy', value: '94.2%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/technology-strategy',
      },
      // ── Service 3 ──────────────────────────────────────────
      {
        id: 'research-strategy',
        name: 'Research & Innovation Strategy',
        tagline: 'Evidence-Based Research That Powers Smarter Products, Policy, and Investment',
        heroHeadline: 'Strategy Without Research Is Just Opinion.',
        heroSub: 'We conduct rigorous primary and secondary research — market studies, competitive landscapes, technology assessments, policy analysis — and translate findings into clear strategic direction for enterprises, institutions, and investors.',
        painPoints: [
          { icon: '🎲', title: 'Decisions Based on Incomplete Information', desc: 'Leadership is making million-dollar calls on market entry, product direction, or capital deployment without a research foundation to back them up.' },
          { icon: '🔍', title: 'No Visibility Into Emerging Technologies', desc: 'The pace of technological change means your industry is being disrupted before you even know where to look — leaving you reactive instead of strategic.' },
          { icon: '📊', title: 'Data Without Context Is Noise', desc: 'You may have access to data but lack the analytical frameworks to extract strategic meaning and translate it into a clear action plan.' },
        ],
        solution: 'We combine academic rigor with strategic consulting to deliver research that doesn\'t just describe the landscape — it tells you exactly what to do next, with the evidence to back every recommendation.',
        process: [
          { step: 1, title: 'Research Scoping & Hypothesis Design', desc: 'Define research questions, success criteria, and the analytical frameworks that will drive meaningful conclusions.', duration: 'Week 1' },
          { step: 2, title: 'Primary Research', desc: 'Surveys, expert interviews, field studies, and ethnographic research gathering first-party data directly from your target population.', duration: 'Week 2–4' },
          { step: 3, title: 'Secondary Research & Synthesis', desc: 'Deep review of academic literature, industry reports, regulatory filings, patent databases, and competitive intelligence sources.', duration: 'Week 3–5' },
          { step: 4, title: 'Analytical Modeling', desc: 'Statistical analysis, trend modeling, scenario planning, and competitive benchmarking to extract strategic signals from the data.', duration: 'Week 5–6' },
          { step: 5, title: 'Strategic Report & Briefing', desc: 'Delivery of executive research report with ranked recommendations, implementation roadmap, and live briefing with Q&A.', duration: 'Week 7' },
        ],
        packages: [
          { name: 'Rapid Report', price: '3,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Focused Research Brief (1 topic)', 'Secondary Research & Analysis', 'Competitive Landscape Snapshot', 'Executive Summary (20–30 pages)', '5 Strategic Recommendations', '1 Briefing Session'] },
          { name: 'Deep Research', price: '8,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full-Scope Research Study', 'Primary + Secondary Research', 'Expert Interview Program (10+)', 'Statistical Data Modeling', 'Scenario & Risk Analysis', 'Full Report (60–100 pages)', 'Implementation Roadmap', '3 Executive Briefings'] },
          { name: 'Ongoing Intelligence', price: 'Custom', period: 'quarterly retainer', highlight: false, cta: 'Book a Call',
            features: ['Continuous Market Monitoring', 'Quarterly Research Briefings', 'Technology Horizon Scanning', 'Regulatory & Policy Watch', 'Competitive Intelligence Updates', 'Custom Research on Demand', 'Dedicated Research Director', 'Board Presentation Support'] },
        ],
        testimonials: [
          t('Claire B.', 'Managing Partner', 'Apex Ventures', 'Their technology landscape report on health-tech was the most comprehensive I\'ve seen outside of a top-tier consulting firm — at a fraction of the price.', 'Informed $12M investment decision'),
          t('Tariq A.', 'Chief Strategy Officer', 'MedCore Alliance', 'The market entry research they conducted saved us from a $3M mistake. The competitive dynamics were completely different from our assumptions.', '$3M in avoided market entry losses'),
          t('Yasmin L.', 'Director of Innovation', 'City of Atlanta (Partner)', 'We commissioned a workforce technology study for our economic development plan. The findings shaped a $40M municipal grant application.', 'Informed $40M grant application'),
        ],
        faq: [
          { q: 'How is this different from hiring a research analyst?', a: 'We bring a multidisciplinary research team — economists, data scientists, industry specialists, and strategists — for the duration of the project, without the overhead of a full-time hire.' },
          { q: 'What topics do you research?', a: 'Market sizing & entry, technology assessment, competitive intelligence, consumer behavior, policy & regulation, workforce & labor, industry disruption, and investment due diligence.' },
          { q: 'How do you ensure research quality?', a: 'All findings are peer-reviewed internally before delivery. We cite every source, document our methodology, and our work can withstand board-level scrutiny.' },
          { q: 'Can research be used for grant applications or investor materials?', a: 'Yes. Many clients commission research specifically to support grant applications, investor decks, regulatory filings, or strategic plans.' },
          { q: 'How quickly can you deliver?', a: 'Rapid Reports are delivered in 3 weeks. Deep Research studies take 6–8 weeks. Rush timelines are available for critical decisions.' },
        ],
        metrics: [{ label: 'Avg. Delivery Time', value: '6–7 Weeks' }, { label: 'Research Projects', value: '200+' }, { label: 'Avg. Client NPS', value: '91' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/technology-strategy',
      },
    ],
    testimonials: [
      t('Devon K.', 'CTO', 'FinPath Capital', 'Their AI and data work completely transformed how we underwrite. We\'re 3 years ahead of where we would have been otherwise.', 'Full technology transformation'),
      t('Priya S.', 'VP Operations', 'LogiCore Systems', 'Every major decision we make now starts with the dashboards they built. Data is no longer a department — it\'s our operating system.', 'Data-first organization achieved'),
    ],
    caseStudies: [
      { title: 'AI Underwriting Reduces Review Time 97%', industry: 'FinTech', result: '4 days → 23 minutes', description: 'Custom ML model trained on 50K historical loan decisions. Deployed in 9 weeks. 31% improvement in default prediction accuracy.' },
      { title: 'Unified BI Platform for 8-Brand Retailer', industry: 'Retail', result: '$2.4M in recovered revenue', description: 'Consolidated 14 data sources into a single warehouse. Real-time inventory and margin dashboards surfaced $2.4M in pricing leakage within 60 days.' },
    ],
    partnerships: ['AWS Advanced Partner', 'Google Cloud Partner', 'Snowflake Partner', 'Databricks Partner', 'OpenAI API Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. EDUCATION & JOB PLACEMENT
  // ─────────────────────────────────────────────────────────────
  {
    id: 'education', name: 'Education & Job Placement', shortName: 'Education',
    tagline: 'Tutoring, vocational training, and career placement that close the skills gap and open economic doors.',
    heroHeadline: 'The Right Education Changes a Life. The Right Job Changes a Community.',
    heroSub: 'We connect people to learning, skills, and opportunity — from academic tutoring and professional certifications to workforce readiness and direct job placement programs.',
    color: EDUC.color, colorDark: EDUC.dark, colorBg: EDUC.bg, glow: EDUC.glow,
    gradient: 'from-yellow-950 via-amber-950 to-black',
    cardGradient: 'from-yellow-900/40 via-amber-900/20 to-transparent',
    icon: '🎓',
    stats: [
      { label: 'Students Served', value: '5,000', suffix: '+' },
      { label: 'Job Placements', value: '1,200', suffix: '+' },
      { label: 'Avg. Wage Increase', value: '42', suffix: '%' },
      { label: 'Employer Partners', value: '300', suffix: '+' },
    ],
    services: [
      {
        id: 'academic-tutoring',
        name: 'Academic & Professional Tutoring',
        tagline: 'Personalized Learning That Closes Gaps and Builds Confidence',
        heroHeadline: 'Every Student Can Excel — With the Right Support System.',
        heroSub: 'One-on-one and group tutoring for K–12, college, and professional certifications. Our educators meet students where they are and move them to where they need to be.',
        painPoints: [
          { icon: '📉', title: 'Falling Behind in Critical Subjects', desc: 'Without targeted intervention, small academic gaps compound into major deficits that limit future opportunity.' },
          { icon: '🧱', title: 'One-Size-Fits-All Classrooms', desc: 'Traditional education doesn\'t accommodate different learning styles, paces, or starting points — leaving many students behind.' },
          { icon: '💼', title: 'Unprepared for Professional Certifications', desc: 'Industry certifications are the fast track to higher-paying careers, but most candidates lack structured prep and accountability.' },
        ],
        solution: 'We match each learner with a dedicated educator who assesses their gaps, builds a personalized learning plan, and holds them accountable to measurable progress — in person or online.',
        process: [
          { step: 1, title: 'Learner Assessment', desc: 'Diagnostic evaluation to identify knowledge gaps, learning style, and specific goals.', duration: 'Session 1' },
          { step: 2, title: 'Personalized Learning Plan', desc: 'Custom curriculum built around the student\'s schedule, pace, and target outcomes.', duration: 'Week 1' },
          { step: 3, title: 'Weekly Sessions', desc: 'Consistent tutoring sessions with progress tracking and parent/employer reporting.', duration: 'Ongoing' },
          { step: 4, title: 'Milestone Assessments', desc: 'Regular check-in exams and mock tests aligned to real standardized tests or certification exams.', duration: 'Monthly' },
          { step: 5, title: 'Goal Achievement & Next Steps', desc: 'Celebrate milestones and map the next phase of the learner\'s academic or career journey.', duration: 'As needed' },
        ],
        packages: [
          { name: 'Foundational', price: '297', period: '/month', highlight: false, cta: 'Enroll Now',
            features: ['4 Sessions/Month (1 hr each)', 'K–12 Core Subjects', 'Progress Reports', 'Parent Check-Ins', 'Online or In-Person'] },
          { name: 'Accelerator', price: '597', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['8 Sessions/Month', 'All Subjects + Test Prep', 'Certification Exam Prep', 'Weekly Progress Dashboard', 'Dedicated Educator', 'Study Resources Library'] },
          { name: 'Intensive', price: 'Custom', period: 'per program', highlight: false, cta: 'Book a Call',
            features: ['Unlimited Sessions', 'Group & 1-on-1 Hybrid', 'Corporate Workforce Training', 'Custom Curriculum Design', 'Employer Reporting', 'LMS Integration'] },
        ],
        testimonials: [
          t('Danielle R.', 'Parent', 'Atlanta, GA', 'My son went from a D in Algebra to a B+ in one semester. His confidence completely changed. Worth every dollar.', 'D → B+ in one semester'),
          t('Marcus A.', 'IT Professional', 'Dallas, TX', 'Passed my AWS Solutions Architect exam on the first try after 6 weeks of prep. The structured approach made all the difference.', 'AWS cert on first attempt'),
          t('Linda K.', 'HR Director', 'TechPath Corp', 'We enrolled 40 employees in professional development tutoring. Productivity scores are up 28% across the cohort.', '+28% team productivity'),
        ],
        faq: [
          { q: 'What grade levels and subjects do you cover?', a: 'K–12 all core subjects, SAT/ACT/GRE test prep, college-level courses, and professional certifications (AWS, PMP, CompTIA, real estate licensing, and more).' },
          { q: 'Is tutoring available online?', a: 'Yes. All sessions are available in-person (select markets) or fully online via our virtual classroom platform.' },
          { q: 'How quickly will I see results?', a: 'Most students show measurable improvement within 4–6 sessions. Certification prep timelines depend on the exam and starting knowledge level.' },
          { q: 'Can you train our corporate workforce?', a: 'Yes. Our Intensive package is designed for corporate upskilling, onboarding acceleration, and compliance training programs.' },
          { q: 'Do you offer financial assistance?', a: 'Sliding-scale pricing is available for qualifying families. We also partner with nonprofit workforce programs that fund training for eligible participants.' },
        ],
        metrics: [{ label: 'Avg. Grade Improvement', value: '1.4 Letters' }, { label: 'Cert Pass Rate', value: '91%' }, { label: 'Students Served', value: '5,000+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/education-strategy',
      },
      {
        id: 'vocational-training',
        name: 'Vocational Training & Skills Development',
        tagline: 'Trade Skills and Industry Certifications That Pay Immediately',
        heroHeadline: 'A Trade Is a Business. Let Us Help You Build It.',
        heroSub: 'Hands-on vocational training programs in high-demand trades — HVAC, electrical, plumbing, construction, CDL, medical coding, and more — with certification support and employment partnerships built in.',
        painPoints: [
          { icon: '🔧', title: 'Skilled Trades Shortage Is a Crisis', desc: 'America is short 500,000+ skilled trade workers. Employers are desperate. This is the most reliable path to a six-figure income without a four-year degree.' },
          { icon: '💸', title: 'College Debt With No Job Guarantee', desc: 'Four-year degrees leave graduates with $37K+ in debt and no guarantee of employment. Vocational certification delivers jobs in 6–18 months.' },
          { icon: '🗺️', title: 'No Clear Pathway or Mentor', desc: 'Most people who want to enter the trades have no roadmap, no network, and no access to experienced professionals willing to guide them.' },
        ],
        solution: 'We partner with licensed trade instructors and industry employers to deliver accelerated vocational programs that combine hands-on training, certification prep, and direct employer introductions upon graduation.',
        process: [
          { step: 1, title: 'Career Pathway Assessment', desc: 'Identify the trade or skill that matches your aptitude, market demand in your region, and income goals.', duration: 'Day 1' },
          { step: 2, title: 'Program Enrollment', desc: 'Enroll in your vocational track and receive your materials, schedule, and assigned instructor.', duration: 'Week 1' },
          { step: 3, title: 'Hands-On Training', desc: 'Practical, instructor-led training sessions covering both foundational theory and real-world application.', duration: 'Weeks 2–16' },
          { step: 4, title: 'Certification Prep & Exam', desc: 'Focused exam preparation and scheduling support to earn your industry-recognized credential.', duration: 'Final 4 Weeks' },
          { step: 5, title: 'Employer Introduction', desc: 'Warm introductions to our employer partner network actively hiring in your trade category.', duration: 'Upon Graduation' },
        ],
        packages: [
          { name: 'Foundations', price: '1,997', period: 'per program', highlight: false, cta: 'Enroll Now',
            features: ['Trade Fundamentals Course (8 wks)', 'Digital Learning Materials', 'Certification Study Guide', 'Practice Exams', 'Career Coaching Session'] },
          { name: 'Full Certification', price: '3,997', period: 'per program', highlight: true, cta: 'Apply Now',
            features: ['Full Vocational Program (16 wks)', 'Live Instructor-Led Sessions', 'Certification Exam Fee Included', 'Employer Network Access', 'Job Placement Support', '6-Month Post-Grad Mentorship'] },
          { name: 'Corporate Cohort', price: 'Custom', period: 'per cohort', highlight: false, cta: 'Book a Call',
            features: ['Custom Workforce Training', 'On-Site or Virtual Delivery', 'Cohort Size 10–200', 'Custom Curriculum', 'Progress Reporting to HR', 'Continuing Education Credits'] },
        ],
        testimonials: [
          t('Jamal T.', 'Graduate', 'HVAC Program', 'I was making $14/hr in retail. After 4 months of training I got my HVAC cert and landed a $58K job. Life changed.', '$14/hr → $58K/yr in 4 months'),
          t('Keisha B.', 'Graduate', 'Medical Coding Program', 'Single mom, no degree. Now a certified medical coder working remotely at $52K. Best investment I ever made.', '$52K remote career, no degree needed'),
          t('Raymond O.', 'Workforce Director', 'City of Memphis', 'We placed 200 residents through their CDL program. 94% employment rate within 90 days of graduation.', '94% employment within 90 days'),
        ],
        faq: [
          { q: 'What trades do you train for?', a: 'HVAC, electrical, plumbing, carpentry, CDL/commercial driving, medical coding, medical billing, solar installation, cybersecurity fundamentals, and more.' },
          { q: 'Do I need any prior experience?', a: 'No. Most of our programs start from zero and build to job-ready in 16 weeks or less.' },
          { q: 'Are programs accredited?', a: 'Certification programs are aligned to nationally recognized credentials (EPA 608, NCCER, AAPC, CompTIA, etc.).' },
          { q: 'Do you guarantee job placement?', a: 'We do not guarantee employment, but our employer partner network gives graduates direct access to hiring managers in high-demand fields. Our placement rate exceeds 90%.' },
          { q: 'Is financial aid available?', a: 'Yes. We work with Pell Grants, WIA/WIOA funding, employer tuition assistance, and payment plans for qualifying participants.' },
        ],
        metrics: [{ label: 'Programs Offered', value: '20+' }, { label: 'Avg. Program Length', value: '16 Weeks' }, { label: 'Placement Rate', value: '91%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/education-strategy',
      },
      {
        id: 'career-placement',
        name: 'Career Placement & Workforce Readiness',
        tagline: 'From Resume to Offer Letter — We Manage the Full Job Search',
        heroHeadline: 'The Right Job Isn\'t Found. It\'s Engineered.',
        heroSub: 'Professional career coaching, resume building, interview preparation, and direct employer introductions — designed to get qualified candidates into the right roles faster than traditional job searching.',
        painPoints: [
          { icon: '📄', title: 'Resumes That Never Get Callbacks', desc: 'Most resumes are rejected by ATS software before a human ever reads them. Generic templates and poor keyword strategy are career killers.' },
          { icon: '🎭', title: 'Interview Anxiety Kills Opportunities', desc: 'Qualified candidates lose offers to less-qualified peers who simply present themselves better. Interview skill is learnable — but only with practice and coaching.' },
          { icon: '🔗', title: 'No Network, No Access', desc: 'The majority of jobs are filled through networks, not job boards. Without the right connections, talented people compete in a broken open market.' },
        ],
        solution: 'We combine career coaching, professional branding, and our employer partner network to position candidates for success — from the first application to the negotiated offer.',
        process: [
          { step: 1, title: 'Career Audit & Goal Setting', desc: 'Assess work history, skills, salary targets, and identify the ideal target roles and companies.', duration: 'Week 1' },
          { step: 2, title: 'Resume & LinkedIn Overhaul', desc: 'ATS-optimized resume and a LinkedIn profile that attracts recruiters and communicates value clearly.', duration: 'Week 1–2' },
          { step: 3, title: 'Interview Preparation', desc: 'Mock interviews, behavioral question coaching, salary negotiation training, and confidence building.', duration: 'Week 2–3' },
          { step: 4, title: 'Job Search Strategy & Outreach', desc: 'Targeted application strategy, recruiter outreach scripts, and warm introductions to our employer network.', duration: 'Week 3–8' },
          { step: 5, title: 'Offer Review & Negotiation', desc: 'Review job offers, negotiate total compensation, and ensure the role aligns with long-term career goals.', duration: 'As needed' },
        ],
        packages: [
          { name: 'Launch', price: '497', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['Resume Rewrite', 'LinkedIn Optimization', '1 Mock Interview Session', 'Job Search Strategy Guide', '30-Day Email Support'] },
          { name: 'Accelerate', price: '1,497', period: 'per engagement', highlight: true, cta: 'Apply Now',
            features: ['Full Career Audit', 'Resume + Cover Letter + LinkedIn', '4 Mock Interview Sessions', 'Salary Negotiation Coaching', 'Employer Network Introductions', '90-Day Active Support'] },
          { name: 'Executive Search', price: 'Custom', period: 'per placement', highlight: false, cta: 'Book a Call',
            features: ['C-Suite & Director-Level Roles', 'Headhunting & Executive Search', 'Compensation Benchmarking', 'Board Presentation Coaching', 'Retained Search Service', 'NDA-Protected Process'] },
        ],
        testimonials: [
          t('Tanya M.', 'Marketing Manager', 'Fortune 500 Co.', 'After 6 months of job searching alone, I hired them and had an offer in 5 weeks. The resume rewrite and network introductions were the difference.', 'Offer in 5 weeks after 6 months stalled'),
          t('Bryan L.', 'Software Engineer', 'Tech Startup', 'Negotiated $22K more than the initial offer because of their salary coaching. That\'s $220K over 10 years.', '+$22K salary negotiated'),
          t('Melissa G.', 'HR VP', 'Regional Healthcare', 'We use their placement service to fill mid-level roles. Quality of candidates is significantly higher than job boards. Retention is up 35%.', '+35% new hire retention'),
        ],
        faq: [
          { q: 'How long does job placement typically take?', a: 'Most candidates receive an offer within 6–10 weeks of starting the program, depending on their industry and target role level.' },
          { q: 'Do you work with entry-level candidates?', a: 'Yes. We serve candidates at all levels — from entry-level and recent graduates to senior executives and C-suite transitions.' },
          { q: 'What industries do you place candidates in?', a: 'Healthcare, technology, finance, real estate, logistics, education, government, nonprofit, and professional services.' },
          { q: 'What makes your resumes different?', a: 'Every resume is hand-crafted by a certified professional resume writer, optimized for ATS parsing, and tailored to your specific target role.' },
          { q: 'Do you offer employer partnerships for hiring?', a: 'Yes. Employers can join our talent network to access pre-screened, placement-ready candidates for open roles.' },
        ],
        metrics: [{ label: 'Avg. Time to Offer', value: '6.5 Weeks' }, { label: 'Salary Increase', value: '+31% avg.' }, { label: 'Placements Made', value: '1,200+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/education-strategy',
      },
    ],
    testimonials: [
      t('Raymond O.', 'Workforce Director', 'City of Memphis', 'The combination of vocational training and placement services created a complete pipeline. 200 residents placed in 90 days.', 'Full workforce pipeline delivered'),
      t('Danielle R.', 'Parent', 'Atlanta, GA', 'Both my kids went through tutoring and my eldest is now college-ready with a scholarship. Education changes everything.', 'Scholarship achieved'),
    ],
    caseStudies: [
      { title: 'Municipal Workforce Program: 200 Placements in 90 Days', industry: 'Government / Workforce', result: '94% employment rate', description: 'CDL and trade certification cohort funded by WIOA. 200 residents trained and placed with 94% employment within 90 days of graduation.' },
      { title: 'Corporate Upskilling Program: +28% Productivity', industry: 'Corporate HR', result: '+28% team output', description: '40-employee professional development cohort across 3 divisions. Skills gap closed within one quarter.' },
    ],
    partnerships: ['Department of Labor WIOA', 'Pell Grant Eligible', 'NCCER Certified', 'AAPC Aligned', 'Chamber of Commerce Workforce Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 8. INFRASTRUCTURE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'infrastructure', name: 'Infrastructure', shortName: 'Infrastructure',
    tagline: 'Construction consulting, urban development, and logistics infrastructure that builds the physical backbone of a thriving economy.',
    heroHeadline: 'Every Great City Is Built Twice — First in the Mind, Then in Steel.',
    heroSub: 'We consult, plan, and manage infrastructure projects — from construction and development to smart city systems and supply chain logistics — turning vision into physical reality.',
    color: INFR.color, colorDark: INFR.dark, colorBg: INFR.bg, glow: INFR.glow,
    gradient: 'from-slate-900 via-gray-900 to-black',
    cardGradient: 'from-slate-700/30 via-gray-800/20 to-transparent',
    icon: '🏗️',
    stats: [
      { label: 'Projects Managed', value: '180', suffix: '+' },
      { label: 'Capital Deployed', value: '$220', suffix: 'M+' },
      { label: 'On-Time Delivery', value: '89', suffix: '%' },
      { label: 'Square Feet Developed', value: '4.2', suffix: 'M+' },
    ],
    services: [
      {
        id: 'construction-consulting',
        name: 'Construction & Project Management Consulting',
        tagline: 'Expert Oversight That Keeps Projects On Time, On Budget, and On Standard',
        heroHeadline: 'Construction Projects Fail Without the Right Expertise in the Room.',
        heroSub: 'We provide owner\'s representation, project management consulting, and construction oversight for commercial, residential, and public infrastructure projects — protecting your investment from groundbreak to ribbon-cutting.',
        painPoints: [
          { icon: '⏰', title: 'Cost Overruns Destroy Margins', desc: 'The average construction project runs 80% over budget. Without expert oversight and procurement management, costs spiral fast.' },
          { icon: '📋', title: 'Contractor Management Is Full-Time Work', desc: 'Managing GCs, subs, inspections, and compliance without a dedicated project manager is a second job — one most owners aren\'t equipped to handle.' },
          { icon: '⚖️', title: 'Regulatory Compliance Delays', desc: 'Permitting, zoning, environmental review, and code compliance can halt projects for months without experienced navigation.' },
        ],
        solution: 'We serve as your Owner\'s Representative — bringing construction expertise, contractor accountability, procurement strategy, and regulatory know-how to protect your timeline and budget from day one.',
        process: [
          { step: 1, title: 'Project Scoping & Feasibility', desc: 'Evaluate project scope, site conditions, permitting requirements, and realistic budget and timeline projections.', duration: 'Week 1–2' },
          { step: 2, title: 'Procurement & Contractor Selection', desc: 'Develop bid documents, evaluate contractor proposals, and negotiate contracts that protect your interests.', duration: 'Week 2–6' },
          { step: 3, title: 'Construction Oversight', desc: 'On-site and remote monitoring of construction progress, quality standards, and safety compliance.', duration: 'Construction Phase' },
          { step: 4, title: 'Budget & Schedule Management', desc: 'Track costs against budget, manage change orders, and enforce schedule milestones with contractors.', duration: 'Construction Phase' },
          { step: 5, title: 'Closeout & Commissioning', desc: 'Punch list management, final inspections, certificate of occupancy, and systems commissioning.', duration: 'Final Phase' },
        ],
        packages: [
          { name: 'Advisory', price: '4,997', period: '/month', highlight: false, cta: 'Get Started',
            features: ['Monthly Project Reviews', 'Budget Tracking Support', 'Contractor Guidance', 'Risk Assessment Reports', 'Email & Phone Advisory'] },
          { name: 'Owner\'s Rep', price: '9,997', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['Full Owner\'s Representation', 'Weekly Site Visits', 'Contractor Management', 'Budget & Schedule Control', 'Permitting Navigation', 'Change Order Review', 'Dedicated Project Manager'] },
          { name: 'Full Management', price: 'Custom', period: 'per project', highlight: false, cta: 'Book a Call',
            features: ['End-to-End PM Delivery', 'GC Procurement & Oversight', 'Design Coordination', 'Public Works Expertise', 'Multi-Site Programs', 'Government & Municipal Projects'] },
        ],
        testimonials: [
          t('Conrad B.', 'Developer', 'Apex Real Estate Group', 'They stepped in mid-project and saved a $4.2M commercial build that was 6 months behind. Delivered on time and $180K under budget.', '$4.2M project rescued and delivered'),
          t('Pastor A.', 'Senior Pastor', 'Kingdom Assembly', 'Our 18,000 sq ft church expansion came in on time and $90K under budget. Their contractor oversight was invaluable.', 'On-time, under-budget delivery'),
          t('Maria S.', 'City Planner', 'City of Birmingham', 'They managed our community center construction from design through CO. Clean process, no surprises, excellent communication.', 'Public project — zero budget overrun'),
        ],
        faq: [
          { q: 'What size projects do you manage?', a: 'We work on projects from $500K to $50M+. Both ground-up construction and major renovations or tenant improvements.' },
          { q: 'Do you work on public/government projects?', a: 'Yes. We have experience with municipal, school district, and public housing projects including prevailing wage and Davis-Bacon compliance.' },
          { q: 'Do you manage residential projects?', a: 'We focus primarily on commercial, mixed-use, and multi-family. High-end custom homes are considered on a case-by-case basis.' },
          { q: 'How do you handle contractor disputes?', a: 'We document everything from day one. If disputes arise, we have established protocols for resolution and maintain contract leverage throughout the project.' },
          { q: 'Can you come in mid-project if it\'s already in trouble?', a: 'Yes. Project rescue is one of our specialties. Early assessment determines the path to recovery.' },
        ],
        metrics: [{ label: 'Avg. Cost Savings', value: '14%' }, { label: 'On-Time Rate', value: '89%' }, { label: 'Projects Managed', value: '180+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/infrastructure-strategy',
      },
      {
        id: 'urban-development',
        name: 'Smart Infrastructure & Urban Development',
        tagline: 'Technology-Driven Urban Planning That Builds Cities Worth Living In',
        heroHeadline: 'The Cities of the Future Are Being Planned Right Now. Where Are You?',
        heroSub: 'We advise municipalities, developers, and institutions on smart city technology integration, sustainable urban development strategies, and community-centered infrastructure planning.',
        painPoints: [
          { icon: '🏙️', title: 'Legacy Infrastructure Can\'t Keep Up', desc: 'Aging roads, utilities, and public systems create inefficiency, safety risk, and economic drag — but upgrading without a plan wastes resources.' },
          { icon: '💡', title: 'Smart City Tech Is Evolving Faster Than Policy', desc: 'IoT sensors, smart grids, autonomous transit, and integrated data systems require strategic planning most municipalities lack capacity for.' },
          { icon: '🤝', title: 'Community Voices Are Excluded from Planning', desc: 'Top-down development fails because it ignores community needs. Inclusive planning reduces resistance and improves long-term outcomes.' },
        ],
        solution: 'We bridge technology, policy, and community engagement to produce development strategies that are smart, equitable, and economically sustainable — built for the people who live there.',
        process: [
          { step: 1, title: 'Infrastructure Audit & Needs Assessment', desc: 'Evaluate existing infrastructure capacity, technology integration gaps, and community needs.', duration: 'Month 1' },
          { step: 2, title: 'Stakeholder Engagement', desc: 'Community listening sessions, municipal stakeholder workshops, and developer alignment meetings.', duration: 'Month 1–2' },
          { step: 3, title: 'Smart City Strategy Design', desc: 'Develop a phased technology integration roadmap aligned to budget, infrastructure lifecycle, and community goals.', duration: 'Month 2–3' },
          { step: 4, title: 'Development Planning & Zoning Advisory', desc: 'Mixed-use development frameworks, zoning recommendations, and density planning that supports economic vitality.', duration: 'Month 3–5' },
          { step: 5, title: 'Implementation Support', desc: 'Vendor selection, pilot program management, and progress reporting to stakeholders and governing bodies.', duration: 'Month 5+' },
        ],
        packages: [
          { name: 'Feasibility Study', price: '14,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Infrastructure Needs Assessment', 'Smart Tech Gap Analysis', 'Community Survey', 'Executive Report', 'Presentation to Stakeholders'] },
          { name: 'Development Strategy', price: '34,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Urban Development Plan', 'Smart City Roadmap', 'Zoning & Land Use Advisory', 'Community Engagement Program', 'Vendor Evaluation Support', 'Grant Funding Strategy'] },
          { name: 'Implementation Partner', price: 'Custom', period: 'annual retainer', highlight: false, cta: 'Book a Call',
            features: ['Ongoing Planning Advisory', 'Pilot Program Management', 'Smart Infrastructure Oversight', 'Policy Drafting Support', 'Federal Grant Navigation', 'Multi-Year Engagement'] },
        ],
        testimonials: [
          t('Commissioner D.', 'City Commissioner', 'Mid-Size Metro Area', 'Their smart city feasibility study became the blueprint for our $28M infrastructure bond. Exactly what we needed.', 'Informed $28M infrastructure bond'),
          t('Dr. L. Bates', 'University President', 'Regional University', 'The campus infrastructure plan they designed positioned us for a $15M federal grant for sustainable development.', '$15M federal grant positioned'),
          t('James W.', 'Developer', 'Mixed-Use Group', 'Their urban development advisory helped us navigate a complex zoning change that unlocked 400 additional housing units.', '400 housing units unlocked'),
        ],
        faq: [
          { q: 'Do you work with small municipalities?', a: 'Yes. We scale our engagement to fit population size and budget. Small cities often have the most to gain from smart planning.' },
          { q: 'Can you help with federal grant applications for infrastructure?', a: 'Absolutely. We integrate grant strategy into our planning process, aligning projects to IIJA, ARPA, HUD, and DOT funding opportunities.' },
          { q: 'How do you define "smart city"?', a: 'Technology-enabled infrastructure that improves efficiency, sustainability, safety, and quality of life — from smart streetlights and fiber networks to integrated transit and emergency systems.' },
          { q: 'Do you handle the technology implementation or just the strategy?', a: 'Primarily strategy and vendor selection. We partner with technology implementers and serve as the client\'s advocate throughout the process.' },
        ],
        metrics: [{ label: 'Municipal Partners', value: '40+' }, { label: 'Grant Funding Influenced', value: '$180M+' }, { label: 'Development Units Planned', value: '12,000+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/infrastructure-strategy',
      },
      {
        id: 'logistics-infrastructure',
        name: 'Transportation & Logistics Infrastructure',
        tagline: 'Supply Chain and Logistics Systems That Move Goods, People, and Opportunity',
        heroHeadline: 'A City That Can\'t Move Goods Can\'t Grow.',
        heroSub: 'We consult on transportation infrastructure planning, last-mile logistics systems, supply chain optimization, and freight network design — for municipalities, developers, and enterprise logistics operators.',
        painPoints: [
          { icon: '🚚', title: 'Supply Chain Disruptions Cost Millions', desc: 'Single points of failure in logistics networks — one route, one carrier, one warehouse — turn disruptions into catastrophes.' },
          { icon: '🗺️', title: 'Last-Mile Is the Most Expensive Mile', desc: 'Last-mile delivery costs account for 53% of total shipping costs. Without smart routing and hub strategy, margins evaporate.' },
          { icon: '🏭', title: 'Outdated Distribution Networks', desc: 'Legacy warehouse locations and carrier agreements designed for a different era are now liabilities in an on-demand economy.' },
        ],
        solution: 'We design logistics and transportation strategies that reduce cost, increase resilience, and position your supply chain for the demands of modern commerce — whether you\'re a city planner or an enterprise shipper.',
        process: [
          { step: 1, title: 'Network Assessment', desc: 'Map current transportation routes, warehouse positions, carrier relationships, and cost-per-delivery metrics.', duration: 'Week 1–2' },
          { step: 2, title: 'Bottleneck & Risk Analysis', desc: 'Identify single points of failure, cost inefficiencies, and geographic gaps in the current network.', duration: 'Week 2–3' },
          { step: 3, title: 'Network Redesign', desc: 'Model alternative network configurations optimized for cost, speed, and resilience using logistics simulation tools.', duration: 'Week 3–5' },
          { step: 4, title: 'Carrier & Vendor Strategy', desc: 'RFP development, carrier negotiation support, and 3PL evaluation to build a diversified logistics partner portfolio.', duration: 'Week 5–7' },
          { step: 5, title: 'Implementation Roadmap', desc: 'Phased transition plan, technology requirements, and KPI framework to execute the network redesign with minimal disruption.', duration: 'Week 7–8' },
        ],
        packages: [
          { name: 'Network Audit', price: '5,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Current State Assessment', 'Cost-Per-Delivery Analysis', 'Risk & Gap Report', '5 Optimization Recommendations', 'Executive Briefing'] },
          { name: 'Redesign', price: '14,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Network Redesign', 'Carrier RFP & Negotiation Support', 'Last-Mile Strategy', 'Technology Stack Recommendations', 'Phased Implementation Roadmap', '90-Day Advisory Support'] },
          { name: 'Ongoing Advisory', price: 'Custom', period: 'quarterly retainer', highlight: false, cta: 'Book a Call',
            features: ['Continuous Network Optimization', 'Carrier Performance Management', 'Quarterly Cost Reviews', 'Supply Chain Risk Monitoring', 'New Market Entry Logistics Planning'] },
        ],
        testimonials: [
          t('Hank D.', 'VP Supply Chain', 'Regional Grocer', 'Redesigning our distribution hub network cut last-mile costs by 31% and eliminated 2 days from average delivery time.', '−31% last-mile cost, −2 day delivery'),
          t('Sandra P.', 'Director of Transit', 'Metro Authority', 'Their freight corridor analysis informed a $45M DOT grant application. The data was exactly what the federal reviewers needed.', 'Informed $45M DOT grant'),
          t('Carlos R.', 'COO', 'National 3PL', 'We brought them in to redesign our Southeast hub strategy. 18% cost reduction in 6 months, with better service levels.', '−18% logistics cost in 6 months'),
        ],
        faq: [
          { q: 'Do you work with small businesses or only large enterprises?', a: 'Both. SMBs benefit greatly from logistics strategy. Even a business shipping 200 orders/day can save significantly with optimized carrier selection and routing.' },
          { q: 'Can you help with international logistics and freight?', a: 'Yes. We advise on international freight strategy, customs optimization, and foreign market distribution planning.' },
          { q: 'Do you help with warehouse site selection?', a: 'Yes. We use geospatial demand modeling and real estate market analysis to identify optimal warehouse locations.' },
          { q: 'How do you stay current on logistics technology?', a: 'We maintain active partnerships with TMS, WMS, and route optimization technology providers, and our team monitors industry developments continuously.' },
        ],
        metrics: [{ label: 'Avg. Cost Reduction', value: '22%' }, { label: 'Networks Redesigned', value: '60+' }, { label: 'States Covered', value: '48' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/infrastructure-strategy',
      },
    ],
    testimonials: [
      t('Conrad B.', 'Developer', 'Apex Real Estate Group', 'End-to-end project management is their superpower. They saved a $4.2M build that was 6 months behind schedule.', 'Project rescue — delivered on time'),
      t('Commissioner D.', 'City Commissioner', 'Metro Planning Dept', 'Their urban planning work informed a $28M infrastructure bond. Rigorous, community-centered, and strategic.', '$28M bond informed'),
    ],
    caseStudies: [
      { title: 'Commercial Build Rescue — $4.2M Project', industry: 'Commercial Real Estate', result: 'On time, $180K under budget', description: 'Project was 6 months behind with contractor disputes. Owner\'s Rep engagement restructured the contractor lineup and recovered the schedule.' },
      { title: 'Smart City Feasibility — Mid-Size Metro', industry: 'Municipal Government', result: '$28M infrastructure bond passed', description: 'Full smart infrastructure assessment and community engagement plan delivered in 90 days. Informed the bond strategy that voters approved.' },
    ],
    partnerships: ['AGC (Associated General Contractors)', 'AICP (American Planning Association)', 'DOT Grant Partner', 'HUD Community Development Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 9. LEGAL
  // ─────────────────────────────────────────────────────────────
  {
    id: 'legal', name: 'Legal', shortName: 'Legal',
    tagline: 'Business formation, compliance strategy, and dispute resolution that protect what you build.',
    heroHeadline: 'The Law Either Works for You or Against You. There Is No Middle Ground.',
    heroSub: 'Legal strategy, compliance advisory, and dispute resolution services for entrepreneurs, enterprises, and organizations — built to protect your assets, keep you compliant, and resolve conflict with precision.',
    color: LEGL.color, colorDark: LEGL.dark, colorBg: LEGL.bg, glow: LEGL.glow,
    gradient: 'from-indigo-950 via-violet-950 to-black',
    cardGradient: 'from-indigo-900/40 via-violet-900/20 to-transparent',
    icon: '⚖️',
    stats: [
      { label: 'Businesses Formed', value: '2,400', suffix: '+' },
      { label: 'Compliance Programs', value: '500', suffix: '+' },
      { label: 'Disputes Resolved', value: '800', suffix: '+' },
      { label: 'Avg. Client Savings', value: '$48', suffix: 'K+' },
    ],
    services: [
      {
        id: 'business-formation',
        name: 'Business Formation & Contract Law',
        tagline: 'Build Your Business on a Legal Foundation That Holds',
        heroHeadline: 'Your Business Is Only as Strong as Its Legal Structure.',
        heroSub: 'Entity formation, operating agreements, shareholder structures, intellectual property protection, and contract drafting — the legal infrastructure every serious business needs from day one.',
        painPoints: [
          { icon: '🏛️', title: 'Wrong Entity Type Costs Thousands', desc: 'Choosing between LLC, S-Corp, C-Corp, or partnership has massive tax and liability implications most entrepreneurs discover too late.' },
          { icon: '🤝', title: 'Handshake Deals Become Courtroom Battles', desc: 'Verbal agreements and generic contracts downloaded from the internet create legal exposure that can unwind years of work.' },
          { icon: '💡', title: 'Unprotected IP Is Unprotected Revenue', desc: 'Your brand, software, content, and proprietary processes are assets. Without proper registration and assignment, anyone can claim them.' },
        ],
        solution: 'We structure your business entity to optimize taxes and limit liability, draft contracts that protect your relationships, and register the intellectual property that defines your brand — building a legal foundation that supports growth.',
        process: [
          { step: 1, title: 'Business Structure Consultation', desc: 'Analyze your business model, revenue projections, and ownership structure to recommend the optimal legal entity.', duration: 'Day 1' },
          { step: 2, title: 'Entity Formation', desc: 'File articles of incorporation/organization, obtain EIN, register in required states, and set up registered agent.', duration: 'Week 1' },
          { step: 3, title: 'Governing Documents', desc: 'Draft operating agreement, shareholder agreement, bylaws, and initial corporate resolutions.', duration: 'Week 1–2' },
          { step: 4, title: 'Contract Templates & IP Protection', desc: 'Create master service agreements, NDAs, IP assignment agreements, and file trademark applications as needed.', duration: 'Week 2–3' },
          { step: 5, title: 'Ongoing Advisory', desc: 'Annual compliance filings, contract review for new relationships, and legal advisory as your business grows.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Start', price: '997', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['LLC or Corp Formation', 'EIN Registration', 'Registered Agent (1 Year)', 'Basic Operating Agreement', 'Digital Document Vault'] },
          { name: 'Foundation', price: '2,497', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Entity Formation + State Filings', 'Full Operating/Shareholder Agreement', 'Contract Templates (5)', 'NDA & IP Assignment', 'Trademark Search + 1 Filing', '90-Day Legal Advisory'] },
          { name: 'Enterprise', price: 'Custom', period: 'retainer', highlight: false, cta: 'Book a Call',
            features: ['Multi-Entity Structure Design', 'Full Contract Suite', 'Ongoing Contract Review', 'M&A Legal Support', 'Employment Law Guidance', 'Board & Governance Advisory'] },
        ],
        testimonials: [
          t('Kevin P.', 'Founder', 'SaaS Startup', 'They structured our cap table, drafted founder agreements, and filed 3 trademarks in 2 weeks. Investors asked about our legal structure and we had answers.', 'Investor-ready legal structure in 2 weeks'),
          t('Brenda M.', 'Owner', 'Catering Company', 'I was operating as a sole prop for 3 years. They restructured me as an S-Corp and I saved $14K in self-employment taxes in year one.', '$14K in tax savings year one'),
          t('David L.', 'Real Estate Investor', 'Holding Company', 'Set up a full asset protection structure — holding company, operating LLC, and land trust. My portfolio is now properly shielded.', 'Full asset protection structure built'),
        ],
        faq: [
          { q: 'Do you provide legal representation in court?', a: 'Our services are advisory and transactional — not litigation. For courtroom representation we partner with licensed attorneys and make referrals.' },
          { q: 'Which states do you file in?', a: 'All 50 states plus DC. We also advise on foreign qualification for businesses operating across state lines.' },
          { q: 'What\'s the difference between an LLC and S-Corp?', a: 'An LLC offers flexibility and liability protection. An S-Corp adds the ability to split income between salary and distributions, reducing self-employment tax. The right choice depends on your revenue level and goals.' },
          { q: 'Do you handle partnership agreements for joint ventures?', a: 'Yes. JV agreements, profit-sharing structures, and co-founder agreements are a core part of our contract practice.' },
          { q: 'Can you review an existing contract?', a: 'Yes. Contract review is available as a standalone service starting at $297 per document.' },
        ],
        metrics: [{ label: 'Entities Formed', value: '2,400+' }, { label: 'Contracts Drafted', value: '8,000+' }, { label: 'Avg. Tax Savings', value: '$12K/yr' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/legal-strategy',
      },
      {
        id: 'compliance-advisory',
        name: 'Compliance & Regulatory Advisory',
        tagline: 'Stay Compliant. Stay Open. Stay Protected.',
        heroHeadline: 'Regulatory Violations Don\'t Warn You Before They Arrive.',
        heroSub: 'Industry-specific compliance programs, regulatory strategy, and ongoing advisory that keep your organization legal, audit-ready, and protected from penalties — in healthcare, finance, government contracting, and more.',
        painPoints: [
          { icon: '🚨', title: 'Non-Compliance Penalties Are Business-Ending', desc: 'HIPAA violations average $1.5M in fines. SEC violations, DOL audits, and OSHA citations can shut down operations overnight.' },
          { icon: '📁', title: 'Compliance Is Treated as an Afterthought', desc: 'Most businesses bolt on compliance after the problem surfaces — by then the damage is already done and remediation costs triple.' },
          { icon: '🔄', title: 'Regulations Change Faster Than Internal Teams Track', desc: 'Keeping up with federal, state, and industry-specific regulatory changes is a full-time function most organizations don\'t staff for.' },
        ],
        solution: 'We audit your current compliance posture, design a program tailored to your industry\'s regulatory requirements, and provide ongoing monitoring and advisory to keep you ahead of changes before they become violations.',
        process: [
          { step: 1, title: 'Compliance Gap Audit', desc: 'Comprehensive review of current policies, procedures, and controls against applicable regulatory frameworks.', duration: 'Week 1–2' },
          { step: 2, title: 'Risk Prioritization', desc: 'Rank identified gaps by penalty exposure and likelihood, creating a prioritized remediation roadmap.', duration: 'Week 2' },
          { step: 3, title: 'Program Design & Policy Drafting', desc: 'Write or update compliance policies, procedures, and employee training materials.', duration: 'Week 3–5' },
          { step: 4, title: 'Implementation & Training', desc: 'Deploy the compliance program across your organization with staff training and documentation.', duration: 'Week 5–7' },
          { step: 5, title: 'Ongoing Monitoring & Advisory', desc: 'Continuous regulatory change tracking, quarterly reviews, and incident response support.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Audit', price: '3,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Compliance Gap Assessment', 'Regulatory Risk Report', 'Remediation Priority List', 'Executive Briefing'] },
          { name: 'Program Build', price: '8,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Compliance Program Design', 'Policy & Procedure Library', 'Staff Training Program', 'Audit Readiness Package', '90-Day Advisory', 'Incident Response Protocol'] },
          { name: 'Ongoing Advisory', price: 'Custom', period: 'monthly retainer', highlight: false, cta: 'Book a Call',
            features: ['Continuous Regulatory Monitoring', 'Quarterly Compliance Reviews', 'Policy Update Service', 'Regulator Communication Support', 'Audit Defense Prep', 'Priority Advisory Line'] },
        ],
        testimonials: [
          t('Dr. Patel', 'Practice Owner', 'Multi-Location Medical Group', 'We failed a HIPAA readiness assessment. They built our full compliance program in 6 weeks. We passed the follow-up audit cleanly.', 'HIPAA audit passed after remediation'),
          t('Rachel T.', 'CFO', 'Investment Advisory Firm', 'SEC examination prep was seamless. They identified 4 policy gaps we would have missed. Zero deficiencies noted.', 'SEC exam — zero deficiencies'),
          t('Gerald M.', 'VP Operations', 'Gov. Contractor', 'FAR compliance is a nightmare. Their team manages it for us so we can focus on contract delivery instead of regulatory paperwork.', 'Full FAR compliance managed'),
        ],
        faq: [
          { q: 'What industries do you serve?', a: 'Healthcare (HIPAA), financial services (SEC, FINRA, SOX), government contractors (FAR/DFARS), HR (DOL, EEOC, FLSA), and general business (OSHA, ADA, GDPR).' },
          { q: 'Can you prepare us for an upcoming audit?', a: 'Absolutely. Audit readiness preparation is one of our most common engagements. We typically need 60–90 days of lead time.' },
          { q: 'Do you help with data privacy compliance (GDPR, CCPA)?', a: 'Yes. Data privacy compliance is a significant part of our practice, including privacy policy drafting, data mapping, and breach response protocols.' },
          { q: 'How do you stay current on regulatory changes?', a: 'We subscribe to regulatory feeds across 20+ agencies, have relationships with former regulators, and maintain a dedicated regulatory research function.' },
        ],
        metrics: [{ label: 'Compliance Programs Built', value: '500+' }, { label: 'Audit Pass Rate', value: '97%' }, { label: 'Avg. Penalty Avoided', value: '$340K' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/legal-strategy',
      },
      {
        id: 'dispute-resolution',
        name: 'Dispute Resolution & Mediation',
        tagline: 'Resolve Conflict Without Courts, Costs, or Catastrophe',
        heroHeadline: 'Litigation Is the Most Expensive Way to Solve a Business Problem.',
        heroSub: 'We provide professional mediation, arbitration consulting, and dispute resolution strategy for business disputes, partnership conflicts, contract disagreements, and workplace issues — keeping matters out of court and resolutions off the front page.',
        painPoints: [
          { icon: '💰', title: 'Litigation Costs Are Catastrophic', desc: 'The average business lawsuit costs $90K–$300K in legal fees alone — before any judgment. Most disputes have better resolution paths.' },
          { icon: '⏳', title: 'Litigation Takes Years to Resolve', desc: 'Business disputes in court average 2–4 years to resolution. During that time, operations suffer, relationships collapse, and reputations erode.' },
          { icon: '🗣️', title: 'Communication Breakdown Escalates to Crisis', desc: 'Most business disputes stem from unresolved communication failures. Early mediation prevents small conflicts from becoming expensive legal battles.' },
        ],
        solution: 'We facilitate structured mediation, provide neutral arbitration consulting, and develop dispute resolution frameworks that preserve business relationships, protect confidentiality, and reach faster outcomes than litigation.',
        process: [
          { step: 1, title: 'Dispute Assessment', desc: 'Review the nature of the dispute, documentation, relationship dynamics, and desired outcomes from all parties.', duration: 'Day 1–3' },
          { step: 2, title: 'Mediation Design', desc: 'Structure the mediation process, ground rules, and communication protocols to give resolution the best chance of success.', duration: 'Week 1' },
          { step: 3, title: 'Facilitated Mediation Sessions', desc: 'Neutral, professional mediation sessions where both parties work toward a mutually agreeable resolution.', duration: 'Week 1–3' },
          { step: 4, title: 'Settlement Agreement Drafting', desc: 'Document the agreed resolution in a binding settlement agreement, reviewed by each party\'s counsel.', duration: 'Week 3–4' },
          { step: 5, title: 'Follow-Up & Relationship Repair', desc: 'Optional post-resolution communication coaching and relationship restoration facilitation.', duration: 'As needed' },
        ],
        packages: [
          { name: 'Single Session', price: '1,997', period: 'per session', highlight: false, cta: 'Book Now',
            features: ['Half-Day Mediation Session', 'Neutral Mediator', 'Session Documentation', 'Settlement Framework Guidance'] },
          { name: 'Full Mediation', price: '4,997', period: 'per case', highlight: true, cta: 'Apply Now',
            features: ['Full Case Assessment', 'Up to 3 Mediation Sessions', 'Settlement Agreement Drafting', 'Neutral Documentation', 'Post-Resolution Check-In', 'Confidential Process'] },
          { name: 'Organizational Program', price: 'Custom', period: 'annual', highlight: false, cta: 'Book a Call',
            features: ['Internal Dispute Resolution Policy', 'Employee Mediation Program', 'Leadership Conflict Coaching', 'Pre-Litigation Intervention', 'On-Call Mediator Retainer', 'HR & Legal Coordination'] },
        ],
        testimonials: [
          t('Anthony L.', 'Business Partner', 'L&M Ventures', 'A partnership dispute that was heading to court was resolved in 2 sessions. We\'re still business partners. Saved $80K in legal fees minimum.', '$80K in legal fees avoided'),
          t('Sandra K.', 'CEO', 'Regional Staffing Firm', 'A contract dispute with a major client was threatening a $2M relationship. Mediation resolved it in 3 weeks and preserved the contract.', '$2M client relationship preserved'),
          t('HR Director', 'Healthcare System', '800-Employee Organization', 'We implemented their workplace mediation program. Formal complaints dropped 67% in year one.', '−67% formal complaints year one'),
        ],
        faq: [
          { q: 'What types of disputes do you mediate?', a: 'Business partnership disputes, contract conflicts, vendor disagreements, employer-employee matters, co-founder splits, real estate disputes, and family business conflicts.' },
          { q: 'Is mediation legally binding?', a: 'The mediation process itself is not binding, but settlements reached in mediation are documented in enforceable agreements signed by all parties.' },
          { q: 'What if one party refuses to participate?', a: 'Mediation requires willing participation. If a party refuses, we can advise on other dispute resolution mechanisms including arbitration clauses and litigation preparation.' },
          { q: 'How confidential is the process?', a: 'Everything discussed in mediation is confidential and protected by a signed confidentiality agreement. Settlement terms remain private.' },
          { q: 'How much does litigation actually cost compared to mediation?', a: 'The average contested business litigation costs $91K–$318K in attorney fees over 2–4 years. Mediation typically resolves in 4–8 weeks at a fraction of that cost.' },
        ],
        metrics: [{ label: 'Disputes Resolved', value: '800+' }, { label: 'Avg. Resolution Time', value: '4 Weeks' }, { label: 'Resolution Rate', value: '88%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/legal-strategy',
      },
    ],
    testimonials: [
      t('Kevin P.', 'Founder', 'SaaS Startup', 'From formation to contracts to compliance — they\'re the legal infrastructure layer of our business. We wouldn\'t be investor-ready without them.', 'Full legal infrastructure built'),
      t('Sandra K.', 'CEO', 'Regional Staffing', 'They preserved a $2M client relationship through mediation and kept us out of court. Results-driven legal strategy at its finest.', '$2M relationship preserved'),
    ],
    caseStudies: [
      { title: 'Startup Legal Foundation in 2 Weeks', industry: 'SaaS / Tech', result: 'Investor-ready in 14 days', description: 'Entity formation, cap table structuring, founder agreements, IP assignment, and 3 trademark filings. Closed seed round 60 days later.' },
      { title: 'Partnership Dispute Resolved — Litigation Avoided', industry: 'Business Partnership', result: '$80K in legal fees avoided', description: '3-year business partnership conflict resolved in 2 mediation sessions. Both parties continue operating the business.' },
    ],
    partnerships: ['American Bar Association Aligned', 'AAA Mediation Network', 'FINRA Arbitration Registered', 'SCORE Legal Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 10. AGRICULTURE
  // ─────────────────────────────────────────────────────────────
  {
    id: 'agriculture', name: 'Agriculture', shortName: 'Agriculture',
    tagline: 'Agricultural business development, food systems, and sustainable farming that feeds communities and builds rural economies.',
    heroHeadline: 'The Land Is the Original Economy. Those Who Control It Control Everything.',
    heroSub: 'We develop agricultural businesses, optimize food supply chains, and build sustainable farming operations — turning land into legacy and feeding the communities that need it most.',
    color: AGRI.color, colorDark: AGRI.dark, colorBg: AGRI.bg, glow: AGRI.glow,
    gradient: 'from-green-950 via-emerald-950 to-black',
    cardGradient: 'from-green-900/40 via-emerald-900/20 to-transparent',
    icon: '🌾',
    stats: [
      { label: 'Farm Operations Supported', value: '400', suffix: '+' },
      { label: 'Food Distributed (lbs)', value: '12', suffix: 'M+' },
      { label: 'Farmers Revenue Increase', value: '38', suffix: '% avg.' },
      { label: 'Acres Under Management', value: '85,000', suffix: '+' },
    ],
    services: [
      {
        id: 'agri-business',
        name: 'Agricultural Business Development',
        tagline: 'Turn Your Farm Operation Into a Profitable Agricultural Enterprise',
        heroHeadline: 'Farming Is a Business. Treat It Like One.',
        heroSub: 'Business planning, financial modeling, USDA program navigation, and market access consulting for farmers, ranchers, and agribusiness operators ready to scale their operations into sustainable enterprises.',
        painPoints: [
          { icon: '📊', title: 'Farming Without a Business Plan', desc: 'Most farm operations are run on tradition and instinct — without financial modeling, market analysis, or a strategy for profitability that survives market swings.' },
          { icon: '💰', title: 'Missing USDA Programs and Grants', desc: 'Billions in USDA loans, grants, and subsidies go unclaimed annually because farmers don\'t know they exist or how to access them.' },
          { icon: '📦', title: 'No Market Access Beyond Local', desc: 'Small and mid-size farms lack the relationships and infrastructure to access institutional buyers, food distributors, and national markets.' },
        ],
        solution: 'We build the business infrastructure behind your farming operation — financial planning, USDA program access, market development, and operational systems that turn a farm into a thriving agribusiness.',
        process: [
          { step: 1, title: 'Farm Business Audit', desc: 'Assess current operations, financials, land use, crop mix, and market relationships to identify growth opportunities.', duration: 'Week 1' },
          { step: 2, title: 'Business Plan Development', desc: 'Create a comprehensive agribusiness plan including financial projections, operational strategy, and market positioning.', duration: 'Week 2–4' },
          { step: 3, title: 'USDA & Grant Navigation', desc: 'Identify eligible USDA programs (FSA loans, EQIP, RCPP, specialty crop grants) and submit applications.', duration: 'Week 3–6' },
          { step: 4, title: 'Market Access Strategy', desc: 'Develop relationships with distributors, food hubs, institutional buyers, and farmers markets to diversify revenue.', duration: 'Week 5–8' },
          { step: 5, title: 'Operational Systems', desc: 'Implement farm management software, record-keeping systems, and compliance frameworks required for market access.', duration: 'Week 6–10' },
        ],
        packages: [
          { name: 'Foundations', price: '2,997', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['Farm Business Audit', 'Financial Assessment', 'USDA Program Report', 'Business Plan Framework', '90-Day Advisory'] },
          { name: 'Growth', price: '6,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Agribusiness Plan', 'USDA Application Support', 'Market Access Strategy', 'Buyer Introductions', 'Farm Management Systems Setup', 'Quarterly Business Reviews'] },
          { name: 'Enterprise', price: 'Custom', period: 'annual retainer', highlight: false, cta: 'Book a Call',
            features: ['Multi-Farm Operation Strategy', 'Vertical Integration Planning', 'Processing & Distribution Advisory', 'Institutional Buyer Contracts', 'Land Acquisition Strategy', 'Agri-Investment Structuring'] },
        ],
        testimonials: [
          t('James B.', 'Farm Owner', 'Mississippi Delta Farm', 'They helped us access $280K in USDA grants we didn\'t know existed. Plus a business plan that got us into 3 grocery chains.', '$280K USDA funding + 3 grocery contracts'),
          t('Maria G.', 'Rancher', 'Texas Cattle Operation', 'Restructured our operation from commodity cattle to direct-to-consumer beef. Revenue up 52% in year two.', '+52% revenue in year two'),
          t('Pastor O.', 'Urban Farm Director', 'Community Ag Program', 'They helped us convert a vacant lot network into a producing urban farm that now supplies 3 restaurants and a food bank.', 'Urban farm generating revenue + impact'),
        ],
        faq: [
          { q: 'Do you work with small family farms?', a: 'Yes. Most of our clients start as small or mid-size operations. Our programs scale from 10-acre specialty farms to 10,000-acre commodity operations.' },
          { q: 'Can you help us access USDA financing?', a: 'Yes. We navigate FSA farm loans, EQIP conservation payments, RCPP, CSP, and specialty crop grants. First-generation and underserved farmer programs are a specialty.' },
          { q: 'Do you work with urban agriculture?', a: 'Yes. Urban farming, vertical growing, aquaponics, and community garden operations are all within our practice.' },
          { q: 'How do we find buyers for our products?', a: 'We connect clients with food hubs, regional distributors, institutional buyers (schools, hospitals, hotels), and direct-to-consumer platforms.' },
        ],
        metrics: [{ label: 'Avg. Revenue Increase', value: '38%' }, { label: 'USDA Funding Accessed', value: '$14M+' }, { label: 'Farm Operations Served', value: '400+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/agriculture-strategy',
      },
      {
        id: 'food-systems',
        name: 'Food Systems & Supply Chain',
        tagline: 'From Farm to Table — Building Resilient Food Supply Chains That Work',
        heroHeadline: 'A Community That Can\'t Feed Itself Is Not Free.',
        heroSub: 'We design and optimize regional food systems, distribution networks, and supply chain infrastructure that close food access gaps, support local farmers, and build economic resilience in communities.',
        painPoints: [
          { icon: '🏙️', title: 'Food Deserts Are an Economic Crisis', desc: 'Over 54 million Americans live in food deserts. This isn\'t just a health issue — it\'s a symptom of broken supply chains and disinvestment.' },
          { icon: '🔗', title: 'Small Farms Can\'t Access Institutional Buyers', desc: 'Schools, hospitals, and government agencies want local food but their procurement systems are designed for industrial suppliers, not small farms.' },
          { icon: '🚛', title: 'Regional Distribution Infrastructure Is Missing', desc: 'The gap between local farm and regional market is a logistics problem. Without food hubs, aggregation points, and cold chain, local food stays local.' },
        ],
        solution: 'We design regional food system strategies — connecting farms to markets, building food hub infrastructure, advising on food distribution policy, and creating supply chains that are resilient, equitable, and economically viable.',
        process: [
          { step: 1, title: 'Regional Food System Assessment', desc: 'Map local food production capacity, distribution gaps, consumer demand, and institutional buying power.', duration: 'Month 1' },
          { step: 2, title: 'Supply Chain Gap Analysis', desc: 'Identify missing infrastructure (cold storage, aggregation, processing, last-mile delivery) blocking farm-to-market flow.', duration: 'Month 1–2' },
          { step: 3, title: 'Food Hub & Distribution Design', desc: 'Design or optimize food hub operations, logistics systems, and institutional procurement pathways.', duration: 'Month 2–4' },
          { step: 4, title: 'Buyer-Farmer Matching', desc: 'Facilitate relationships between local producers and institutional buyers — schools, hospitals, corporate dining, government.', duration: 'Month 3–5' },
          { step: 5, title: 'Policy & Funding Strategy', desc: 'Navigate USDA, FINI, and state food systems grants. Align project to available funding and policy frameworks.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Assessment', price: '7,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Regional Food System Map', 'Supply Chain Gap Analysis', 'Buyer Demand Assessment', 'Strategic Report & Briefing'] },
          { name: 'System Build', price: '19,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Food System Strategy', 'Food Hub Design or Optimization', 'Institutional Buyer Matching', 'Grant Funding Strategy', 'Distribution Infrastructure Plan', 'Implementation Support (90 days)'] },
          { name: 'Regional Program', price: 'Custom', period: 'annual retainer', highlight: false, cta: 'Book a Call',
            features: ['Multi-County Food System Planning', 'Ongoing Hub Operations Advisory', 'Policy & Regulatory Navigation', 'Federal Program Compliance', 'Community Engagement Program', 'Impact Reporting & Metrics'] },
        ],
        testimonials: [
          t('Director K.', 'Regional Food Bank', 'Southeast Network', 'They redesigned our distribution network and we now reach 40% more households with the same resources. Life-changing efficiency.', '+40% households served, same budget'),
          t('Superintendent A.', 'School District', '28,000 Students', 'They built the procurement pathway to source 30% of our cafeteria food from local farms. Kids get better food, farmers get stable revenue.', '30% local food in school cafeterias'),
          t('Governor\'s Office', 'State Agriculture Dept.', 'Regional Program', 'Their food systems report shaped our $12M USDA Local Food grant application. We were awarded full funding.', '$12M USDA grant awarded'),
        ],
        faq: [
          { q: 'Who do you work with on food systems projects?', a: 'Municipalities, regional food banks, school districts, hospital systems, economic development agencies, USDA extension offices, and nonprofit food access organizations.' },
          { q: 'Can you help design a food hub from scratch?', a: 'Yes. We advise on site selection, operational models, technology systems, financial modeling, and governance structure for new food hubs.' },
          { q: 'How do you address food desert communities?', a: 'Through a combination of supply chain development, community aggregation models, mobile market programs, and policy advocacy.' },
          { q: 'Is this work eligible for federal grants?', a: 'Yes. USDA LFPP, FMPP, FINI, and state-level matching grants are often available for this work. We integrate grant strategy from the start.' },
        ],
        metrics: [{ label: 'Lbs Food Distributed', value: '12M+' }, { label: 'Institutional Buyers Connected', value: '200+' }, { label: 'Grants Influenced', value: '$28M+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/agriculture-strategy',
      },
      {
        id: 'sustainable-farming',
        name: 'Sustainable Farming & Environmental Agriculture',
        tagline: 'Regenerative Practices That Protect the Land and Improve the Bottom Line',
        heroHeadline: 'The Most Profitable Farm Is the One Still Producing in 30 Years.',
        heroSub: 'Regenerative agriculture, organic transition support, carbon credit programs, and sustainable farming consulting that improves soil health, reduces input costs, and opens premium markets.',
        painPoints: [
          { icon: '🌱', title: 'Soil Degradation Reduces Yields Every Year', desc: 'Conventional farming depletes soil organic matter over time, requiring more inputs to produce the same yields — a treadmill that ends in collapse.' },
          { icon: '💸', title: 'Input Costs Are Squeezing Margins', desc: 'Fertilizer, pesticide, and water costs have risen 60%+ in recent years. Sustainable practices reduce dependence on expensive external inputs.' },
          { icon: '🏷️', title: 'Missing Premium Market Access', desc: 'Organic and sustainably certified products command 20–40% price premiums. Without certification strategy, conventional farmers leave significant revenue on the table.' },
        ],
        solution: 'We design regenerative transition plans that improve soil health, reduce input costs, navigate organic certification, and access carbon markets — making sustainability profitable, not just principled.',
        process: [
          { step: 1, title: 'Farm Sustainability Audit', desc: 'Assess current soil health, water use, input dependency, and yield trends against regenerative benchmarks.', duration: 'Week 1–2' },
          { step: 2, title: 'Regenerative Transition Plan', desc: 'Design a phased transition to cover crops, reduced tillage, compost, and integrated pest management that fits your operation.', duration: 'Week 2–4' },
          { step: 3, title: 'Certification Pathway', desc: 'Navigate USDA Organic, Regenerative Organic Certified, or Certified Naturally Grown certification processes.', duration: 'Ongoing (1–3 years)' },
          { step: 4, title: 'Carbon Credit Enrollment', desc: 'Enroll in voluntary carbon markets (Indigo Ag, Nori, Verra) and establish baseline measurements for credit generation.', duration: 'Month 2–3' },
          { step: 5, title: 'Premium Market Access', desc: 'Connect with organic buyers, food co-ops, health-focused chains, and direct-to-consumer channels paying premium prices.', duration: 'Month 3–6' },
        ],
        packages: [
          { name: 'Audit & Plan', price: '3,997', period: 'one-time', highlight: false, cta: 'Get Started',
            features: ['Soil Health Assessment', 'Sustainability Gap Analysis', 'Regenerative Transition Plan', 'Certification Pathway Report', 'Carbon Market Overview'] },
          { name: 'Full Transition', price: '7,997', period: 'one-time + advisory', highlight: true, cta: 'Apply Now',
            features: ['Complete Transition Planning', 'Organic Certification Support', 'Carbon Credit Enrollment', 'Premium Buyer Matching', 'Input Cost Reduction Strategy', '1-Year Advisory Support'] },
          { name: 'Ongoing Advisory', price: 'Custom', period: 'annual retainer', highlight: false, cta: 'Book a Call',
            features: ['Annual Soil & Sustainability Review', 'Certification Maintenance Support', 'Carbon Credit Portfolio Management', 'Climate-Smart Ag Program Access', 'EQIP & Conservation Program Navigation', 'Market Development'] },
        ],
        testimonials: [
          t('Thomas H.', 'Grain Farmer', '2,400-Acre Illinois Farm', 'Regenerative transition reduced our fertilizer costs by $180K/year and we\'re generating carbon credits on top of that.', '−$180K input costs + carbon revenue'),
          t('Lisa K.', 'Organic Vegetable Farm', 'Georgia', 'They navigated our USDA Organic certification in 18 months and connected us to a regional food co-op paying 35% above conventional prices.', '+35% price premium via organic cert'),
          t('Reg. Conservation District', 'USDA Partner', 'Midwest Region', 'Their sustainable ag advisory program enrolled 85 farms in EQIP conservation programs, generating $3.4M in conservation payments.', '$3.4M in conservation payments secured'),
        ],
        faq: [
          { q: 'How long does organic certification take?', a: 'USDA Organic requires a 3-year transition period from the last prohibited substance application. We start the process immediately and plan market strategy around the certification timeline.' },
          { q: 'What are carbon credits and how much can I earn?', a: 'Carbon credits represent stored soil carbon. Depending on acreage and practices, farms typically earn $15–$45 per credit. A 1,000-acre operation can generate $15K–$45K/year in additional revenue.' },
          { q: 'Will my yields drop during the transition?', a: 'There can be a temporary 5–15% yield adjustment in years 1–2 as soil biology rebuilds. By year 3–4 most farms see equal or higher yields with lower input costs.' },
          { q: 'Do you work with livestock operations?', a: 'Yes. Regenerative grazing, rotational grazing systems, and pasture-based livestock programs are an important part of our sustainable agriculture practice.' },
        ],
        metrics: [{ label: 'Avg. Input Cost Reduction', value: '27%' }, { label: 'Carbon Credits Enrolled', value: '40,000+ acres' }, { label: 'Organic Certs Achieved', value: '85+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/agriculture-strategy',
      },
    ],
    testimonials: [
      t('James B.', 'Farm Owner', 'Mississippi Delta', 'From business planning to USDA grants to market access — they connected every dot and turned our farm into a real business.', 'Full agribusiness transformation'),
      t('Director K.', 'Regional Food Bank', 'Southeast Network', 'The food system redesign they built serves 40% more families with the same budget. That\'s the definition of impact.', '+40% community reach achieved'),
    ],
    caseStudies: [
      { title: 'Delta Farm: $280K USDA Funding + 3 Grocery Contracts', industry: 'Agricultural Business', result: '$280K grants + 3 buyer relationships', description: 'Family farm business plan, USDA program navigation, and market access strategy. Now supplying 3 regional grocery chains.' },
      { title: 'State Food Systems Grant: $12M Awarded', industry: 'Government / Food Policy', result: '$12M USDA grant fully awarded', description: 'Regional food system assessment and grant strategy that informed a successful $12M USDA LFPP application.' },
    ],
    partnerships: ['USDA Rural Development Partner', 'NSAC (National Sustainable Agriculture Coalition)', 'Rodale Institute Aligned', 'Indigo Carbon Partner'],
  },

  // ─────────────────────────────────────────────────────────────
  // 11. ENERGY & RECYCLABLES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'energy', name: 'Energy & Recyclables', shortName: 'Energy',
    tagline: 'Renewable energy solutions, waste management programs, and efficiency consulting that power the clean economy of tomorrow.',
    heroHeadline: 'The Energy You Control Is the Future You Own.',
    heroSub: 'We develop renewable energy strategies, design waste-to-value recycling programs, and deliver energy efficiency solutions that reduce costs, generate new revenue streams, and build environmental resilience.',
    color: ENRG.color, colorDark: ENRG.dark, colorBg: ENRG.bg, glow: ENRG.glow,
    gradient: 'from-orange-950 via-red-950 to-black',
    cardGradient: 'from-orange-900/40 via-red-900/20 to-transparent',
    icon: '⚡',
    stats: [
      { label: 'MW Clean Energy Advised', value: '840', suffix: '+' },
      { label: 'Tons Waste Diverted', value: '2.1', suffix: 'M+' },
      { label: 'Energy Cost Reduction', value: '34', suffix: '% avg.' },
      { label: 'Carbon Offsets Generated', value: '180,000', suffix: '+' },
    ],
    services: [
      {
        id: 'renewable-energy',
        name: 'Renewable Energy Solutions',
        tagline: 'Solar, Wind, and Clean Energy Strategy That Cuts Costs and Creates Assets',
        heroHeadline: 'Your Energy Bill Is a Subscription to the Past. Cancel It.',
        heroSub: 'We develop renewable energy strategies for businesses, municipalities, and communities — from solar installation consulting and battery storage to community solar programs and renewable energy procurement.',
        painPoints: [
          { icon: '💡', title: 'Energy Costs Keep Rising With No End in Sight', desc: 'Commercial electricity rates have risen 35% in 5 years. Businesses locked into conventional power have no hedge against continued price volatility.' },
          { icon: '🌍', title: 'ESG Pressure From Investors and Customers', desc: 'Institutional investors, corporate customers, and regulators are demanding documented sustainability commitments with measurable energy metrics.' },
          { icon: '🔋', title: 'Complex Incentives Go Unclaimed', desc: 'Federal IRA tax credits, state incentives, utility rebates, and PACE financing can reduce renewable energy costs by 40–70% — but most businesses don\'t know how to access them.' },
        ],
        solution: 'We analyze your energy profile, design the optimal renewable solution, navigate every available incentive program, and oversee the installation process from feasibility through commissioning — reducing your energy costs and creating long-term assets.',
        process: [
          { step: 1, title: 'Energy Audit & Consumption Analysis', desc: 'Analyze 12–24 months of energy usage, identify demand patterns, and model renewable generation potential.', duration: 'Week 1–2' },
          { step: 2, title: 'Solution Design & Incentive Mapping', desc: 'Design the optimal system (solar, battery, wind, geothermal) and map all available federal, state, and utility incentives.', duration: 'Week 2–4' },
          { step: 3, title: 'Developer & Contractor Procurement', desc: 'Issue RFPs, evaluate proposals from qualified installers, and negotiate contracts that protect your financial model.', duration: 'Week 4–8' },
          { step: 4, title: 'Project Oversight & Commissioning', desc: 'Monitor installation quality, coordinate utility interconnection, and commission the system for optimal performance.', duration: 'Installation Phase' },
          { step: 5, title: 'Performance Monitoring & Reporting', desc: 'Ongoing system performance monitoring, financial reporting, and renewable energy certificate (REC) management.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Feasibility', price: '3,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Energy Audit', 'Solar/Renewable Feasibility Study', 'Incentive Analysis Report', 'ROI & Payback Modeling', 'Developer Shortlist'] },
          { name: 'Full Advisory', price: '9,997', period: 'per project', highlight: true, cta: 'Apply Now',
            features: ['Complete Energy Strategy', 'Incentive Maximization', 'Developer RFP & Selection', 'Contract Negotiation', 'Project Oversight', 'Performance Dashboard Setup'] },
          { name: 'Portfolio Program', price: 'Custom', period: 'retainer', highlight: false, cta: 'Book a Call',
            features: ['Multi-Site Energy Strategy', 'Community Solar Development', 'PPA & Offtake Structuring', 'Federal Grant Navigation', 'Carbon Credit Integration', 'Utility-Scale Advisory'] },
        ],
        testimonials: [
          t('Sandra M.', 'CFO', 'Regional Manufacturing Co.', '2.4MW solar installation is saving us $480K annually. After ITC credits the payback is under 4 years. Best capital allocation we\'ve made.', '$480K/yr savings, <4yr payback'),
          t('Mayor J.', 'City Government', 'Midsize Municipality', 'Their community solar program brought 800kW of clean energy to 300 low-income households at no cost to the city. Incredible outcome.', '800kW clean energy to 300 households'),
          t('Paul H.', 'COO', 'Cold Storage Facility', 'Battery storage system eliminated our peak demand charges. Saved $190K in year one without any generation equipment.', '$190K saved — demand charges eliminated'),
        ],
        faq: [
          { q: 'What size installations do you advise on?', a: 'From 50kW commercial rooftop installations to utility-scale solar farms and community energy programs. We scale to the project.' },
          { q: 'What tax incentives are available?', a: 'The federal Investment Tax Credit (ITC) is currently 30%. Bonus depreciation, state credits, utility rebates, and PACE financing can stack to reduce net cost by 50–70%.' },
          { q: 'What\'s the typical payback period?', a: 'Commercial solar typically pays back in 4–7 years with 25+ years of free electricity. Battery storage payback depends on local demand charge structure.' },
          { q: 'Do you work with municipalities and school districts?', a: 'Yes. Public institutions can access specific financing structures (power purchase agreements, municipal leasing) that require no upfront capital.' },
          { q: 'What happens if the panels underperform?', a: 'We spec equipment with performance guarantees and negotiate production warranties. Our monitoring identifies underperformance before it becomes a financial issue.' },
        ],
        metrics: [{ label: 'MW Clean Energy Advised', value: '840+' }, { label: 'Avg. Annual Savings', value: '$280K' }, { label: 'Avg. Payback Period', value: '5.2 Years' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/energy-strategy',
      },
      {
        id: 'waste-management',
        name: 'Waste Management & Recycling Programs',
        tagline: 'Turn Waste Into Revenue — Building Circular Economy Systems That Pay',
        heroHeadline: 'Waste Is Just a Resource in the Wrong Place. We Put It in the Right One.',
        heroSub: 'We design and implement waste diversion programs, recycling operations, composting systems, and waste-to-energy strategies for municipalities, institutions, and businesses — turning waste costs into revenue streams.',
        painPoints: [
          { icon: '🗑️', title: 'Landfill Costs Are Rising Every Year', desc: 'Tipping fees have increased 40%+ in the past decade. Without diversion programs, waste disposal is a growing line item with no end in sight.' },
          { icon: '♻️', title: 'Recycling Programs Are Broken or Absent', desc: 'Many recycling programs are contaminated, underfunded, or designed for optics rather than actual material recovery — creating liability without the benefit.' },
          { icon: '📋', title: 'Zero-Waste Goals With No Roadmap', desc: 'Corporations and municipalities commit to zero-waste targets without the operational infrastructure to achieve them, creating reputational and regulatory risk.' },
        ],
        solution: 'We design waste diversion systems that actually work — measuring material flows, optimizing collection logistics, connecting waste streams to end markets, and turning what you pay to dispose of into revenue you generate.',
        process: [
          { step: 1, title: 'Waste Stream Audit', desc: 'Characterize all waste streams by material type, volume, and current disposal cost to identify diversion opportunities.', duration: 'Week 1–2' },
          { step: 2, title: 'Diversion Strategy Design', desc: 'Design recycling, composting, reuse, and waste-to-energy programs tailored to your waste profile and local market.', duration: 'Week 2–4' },
          { step: 3, title: 'Vendor & Market Matching', desc: 'Connect waste streams to material recovery facilities, composters, waste brokers, and end markets paying for recyclables.', duration: 'Week 4–6' },
          { step: 4, title: 'Program Implementation', desc: 'Set up collection systems, train staff or residents, and deploy technology for tracking and reporting.', duration: 'Week 6–10' },
          { step: 5, title: 'Performance Measurement', desc: 'Track diversion rates, cost savings, and revenue generated. Report against zero-waste or sustainability goals.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Audit', price: '2,997', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['Waste Stream Characterization', 'Cost-Per-Ton Analysis', 'Diversion Opportunity Report', 'Market Pricing Assessment'] },
          { name: 'Program Design', price: '7,997', period: 'one-time', highlight: true, cta: 'Apply Now',
            features: ['Full Diversion Strategy', 'Recycling Program Design', 'Composting System Setup', 'Vendor Matching & Contracts', 'Staff/Resident Training', 'Tracking & Reporting System'] },
          { name: 'Managed Program', price: 'Custom', period: 'annual contract', highlight: false, cta: 'Book a Call',
            features: ['Full Program Management', 'Ongoing Vendor Management', 'Material Revenue Optimization', 'Regulatory Compliance Reporting', 'Zero-Waste Certification Support', 'Community Education Program'] },
        ],
        testimonials: [
          t('City Director L.', 'Solid Waste Director', 'Metro County', 'Their diversion program took us from 18% to 54% diversion in 18 months. Saved $2.1M in landfill costs annually.', '+36 points diversion, $2.1M saved'),
          t('VP Operations', 'Regional Hospital System', '4 Campuses', 'Medical waste costs were out of control. Their audit found $380K in diversion opportunities we were missing. Implemented in 90 days.', '$380K annual waste savings'),
          t('Director P.', 'University Sustainability', '22,000 Students', 'Zero-waste certification achieved in 2 years. Our recycling revenue now funds our entire sustainability program.', 'Zero-waste certified + self-funded program'),
        ],
        faq: [
          { q: 'Can recycling programs actually generate revenue?', a: 'Yes. Clean, sorted material streams — cardboard, aluminum, clean plastic, food waste for compost — have active end markets that pay per ton. The key is contamination control.' },
          { q: 'What size operations do you serve?', a: 'From single-building businesses to multi-site corporations, school districts, hospitals, and entire municipalities.' },
          { q: 'How do you handle contaminated recycling streams?', a: 'Contamination is the #1 killer of recycling programs. We design collection systems and training programs that measurably reduce contamination rates.' },
          { q: 'Do you help with zero-waste certification?', a: 'Yes. We advise on TRUE Zero Waste, LEED Waste Management credits, and Green Business certification pathways.' },
        ],
        metrics: [{ label: 'Avg. Diversion Rate Increase', value: '+28 pts' }, { label: 'Tons Waste Diverted', value: '2.1M+' }, { label: 'Avg. Annual Cost Savings', value: '$340K' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/energy-strategy',
      },
      {
        id: 'energy-efficiency',
        name: 'Energy Efficiency & Conservation',
        tagline: 'Reduce What You Consume. Keep What You Save.',
        heroHeadline: 'The Cheapest Energy Is the Energy You Never Use.',
        heroSub: 'We conduct energy audits, design efficiency retrofits, and implement conservation programs for commercial, industrial, and institutional facilities — delivering guaranteed cost reductions through smarter energy use.',
        painPoints: [
          { icon: '🏢', title: 'Facilities Running at 1990s Efficiency Levels', desc: 'Lighting, HVAC, controls, and building envelope technology have transformed. Legacy buildings operating on old systems waste 20–40% of the energy they consume.' },
          { icon: '📊', title: 'No Visibility Into Where Energy Goes', desc: 'Without sub-metering and energy analytics, you can\'t manage what you can\'t measure — and you can\'t find the waste you\'re paying for.' },
          { icon: '💰', title: 'Efficiency Capital Not Available', desc: 'Retrofit projects often require significant upfront capital. Most organizations don\'t know about PACE financing, utility rebates, and performance contracting that make projects cash-flow positive from day one.' },
        ],
        solution: 'We audit your facility, model efficiency measures by ROI, navigate utility rebates and financing programs, and oversee implementation — delivering documented energy savings with financial models that make every project self-funding.',
        process: [
          { step: 1, title: 'ASHRAE Level 2 Energy Audit', desc: 'Comprehensive facility energy audit identifying all conservation measures, estimated savings, and implementation costs.', duration: 'Week 1–3' },
          { step: 2, title: 'Measure Prioritization & Financing', desc: 'Rank efficiency measures by ROI, identify applicable utility rebates, and structure PACE or performance contract financing.', duration: 'Week 3–5' },
          { step: 3, title: 'Contractor Procurement', desc: 'Scope and bid efficiency projects to qualified contractors, negotiate performance guarantees and warranties.', duration: 'Week 5–8' },
          { step: 4, title: 'Construction Oversight', desc: 'Monitor installation quality, commissioning of new systems, and verification of efficiency performance.', duration: 'Installation Phase' },
          { step: 5, title: 'Measurement & Verification', desc: 'Post-installation M&V per IPMVP protocol to document actual vs. projected savings and satisfy utility incentive requirements.', duration: 'Year 1' },
        ],
        packages: [
          { name: 'Energy Audit', price: '2,497', period: 'one-time', highlight: false, cta: 'Order Now',
            features: ['ASHRAE Level 2 Audit', 'Measure-by-Measure ROI Analysis', 'Utility Rebate Identification', 'Prioritized Action Plan'] },
          { name: 'Retrofit Advisory', price: '7,997', period: 'per project', highlight: true, cta: 'Apply Now',
            features: ['Full Energy Audit', 'Financing Strategy', 'Contractor RFP & Selection', 'Project Oversight', 'Measurement & Verification', 'Utility Rebate Administration'] },
          { name: 'Portfolio Program', price: 'Custom', period: 'annual retainer', highlight: false, cta: 'Book a Call',
            features: ['Multi-Site Energy Management', 'Ongoing Energy Analytics', 'Utility Rate Optimization', 'Demand Response Enrollment', 'ESG Reporting Support', 'Continuous Improvement Program'] },
        ],
        testimonials: [
          t('Mike S.', 'Facilities Director', '400,000 sq ft Warehouse', 'LED retrofit and controls upgrade reduced our energy bill by $210K per year. Utility rebates covered 35% of the project cost.', '$210K/yr savings, 35% rebate funded'),
          t('Provost T.', 'University', '60-Building Campus', 'Their 10-year energy master plan is saving us $1.2M per year and we hit our 2030 carbon neutrality target 4 years early.', '$1.2M/yr + carbon target hit early'),
          t('Operations VP', 'Grocery Chain', '42 Locations', 'Multi-site lighting and refrigeration retrofit. $3.8M in annual savings across the portfolio. Payback was 2.9 years.', '$3.8M/yr savings, 2.9yr payback'),
        ],
        faq: [
          { q: 'What is PACE financing and how does it work?', a: 'PACE (Property Assessed Clean Energy) allows efficiency retrofits to be financed through a property tax assessment — no upfront capital required, payments tied to savings generated.' },
          { q: 'What\'s a typical ROI on efficiency projects?', a: 'Lighting and controls projects typically pay back in 2–4 years. Building envelope and HVAC projects range from 3–8 years depending on existing conditions.' },
          { q: 'Can you help us qualify for utility rebates?', a: 'Yes. Utility rebate administration is a core part of our service. We handle all documentation, measurement protocols, and rebate application submissions.' },
          { q: 'Do you work on residential properties?', a: 'We focus on commercial, industrial, and institutional facilities. For residential portfolios (multifamily), we work with property managers and housing authorities.' },
          { q: 'What certifications do you target?', a: 'ENERGY STAR certification, LEED Energy credits, and ASHRAE 90.1 compliance are common outcomes of our efficiency programs.' },
        ],
        metrics: [{ label: 'Avg. Energy Reduction', value: '34%' }, { label: 'Sq Ft Audited', value: '85M+' }, { label: 'Annual Savings Delivered', value: '$120M+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/energy-strategy',
      },
    ],
    testimonials: [
      t('Sandra M.', 'CFO', 'Regional Manufacturing', 'Solar plus efficiency retrofit combined for $690K in annual savings. This team knows the energy business inside and out.', '$690K combined annual savings'),
      t('City Director L.', 'Solid Waste Director', 'Metro County', 'They transformed our waste program from a cost center to a revenue stream. $2.1M in landfill savings plus recyclable revenue.', 'Waste turned into net revenue'),
    ],
    caseStudies: [
      { title: 'Manufacturing Solar: $480K Annual Savings', industry: 'Commercial / Industrial', result: '$480K/yr, <4yr payback', description: '2.4MW rooftop solar with ITC credit optimization. $480K in annual savings. Fully permitted and commissioned in 7 months.' },
      { title: 'Municipal Zero-Waste Program: 54% Diversion', industry: 'Municipal Government', result: '+36 point diversion, $2.1M saved', description: 'Complete waste diversion redesign for metro county. Recycling, composting, and organics programs implemented in 18 months.' },
    ],
    partnerships: ['USGBC (LEED) Partner', 'ENERGY STAR Partner', 'DOE Better Buildings Partner', 'PACE Nation Member'],
  },

  // ─────────────────────────────────────────────────────────────
  // 12. MY STORY — Founder's Personal Narrative
  // ─────────────────────────────────────────────────────────────
  {
    id: 'founder', name: 'My Story', shortName: 'My Story',
    tagline: 'The Vision, The Journey, The Man Behind the Enterprise',
    heroHeadline: 'Every Empire Begins With a Single Decision to Refuse Ordinary.',
    heroSub: 'This is not a corporate biography. It\'s the unfiltered account of faith, sacrifice, and relentless execution that built One United Enterprise from the ground up.',
    color: FOUN.color, colorDark: FOUN.dark, colorBg: FOUN.bg, glow: FOUN.glow,
    gradient: 'from-amber-950 via-orange-950 to-black',
    cardGradient: 'from-amber-900/30 via-orange-900/15 to-transparent',
    icon: '✨',
    stats: [
      { label: 'Industries Built', value: '7', suffix: '+' },
      { label: 'Years in the Game', value: '10', suffix: '+' },
      { label: 'Lives Impacted', value: '1,000', suffix: '+' },
      { label: 'Companies Led', value: '5', suffix: '+' },
    ],
    services: [
      // ── Speaking & Thought Leadership ──────────────────────
      {
        id: 'speaking',
        name: 'Speaking & Keynote Engagements',
        tagline: 'A Voice That Moves Rooms and Shifts Mindsets',
        heroHeadline: 'Book a Speaker Who Has Actually Done What He\'s Teaching.',
        heroSub: 'From corporate conferences and university keynotes to community summits and private masterminds — a speaker who delivers raw insight, real frameworks, and transformational energy every time.',
        painPoints: [
          { icon: '🎤', title: 'Speakers Who Talk Theory, Not Experience', desc: 'Audiences are tired of keynotes built on borrowed ideas. They want someone who built it, bled for it, and can prove it.' },
          { icon: '😴', title: 'Content That Doesn\'t Stick', desc: 'Motivational fluff fades by Monday morning. Real transformation needs real frameworks people can act on immediately.' },
          { icon: '💼', title: 'A Speaker Who Doesn\'t Match Your Audience', desc: 'The right message delivered to the wrong room changes nothing. Authentic resonance is everything.' },
        ],
        solution: 'A dynamic speaker who blends entrepreneurial war stories, strategic frameworks, and authentic faith-fueled conviction — leaving every audience with clarity, action steps, and a fire that doesn\'t go out.',
        process: [
          { step: 1, title: 'Event Consultation', desc: 'Understand your audience, theme, desired outcomes, and event format to craft a perfectly tailored presentation.', duration: 'Week 1' },
          { step: 2, title: 'Custom Content Development', desc: 'Build a bespoke keynote or workshop that threads your event\'s message with the speaker\'s lived experience.', duration: 'Week 1–2' },
          { step: 3, title: 'Pre-Event Alignment', desc: 'Final run-through with your event team, technical coordination, and audience preparation materials.', duration: '48 Hours Before' },
          { step: 4, title: 'Delivery & Engagement', desc: 'High-energy, interactive delivery with Q&A, audience activities, or panel participation as needed.', duration: 'Event Day' },
          { step: 5, title: 'Post-Event Follow-Through', desc: 'Resource packet, framework handouts, and optional follow-on workshop for deeper implementation.', duration: 'Post-Event' },
        ],
        packages: [
          { name: 'Community & Non-Profit', price: 'Contact', period: 'per engagement', highlight: false, cta: 'Request Booking',
            features: ['45–60 Min Keynote', 'Community & Nonprofit Events', 'Q&A Session', 'Digital Resource Kit', 'Social Media Collaboration'] },
          { name: 'Corporate & Conference', price: 'Contact', period: 'per engagement', highlight: true, cta: 'Request Booking',
            features: ['60–90 Min Keynote or Workshop', 'Corporate Teams & Conferences', 'Custom Content Development', 'Pre-Event Audience Research', 'Interactive Breakout Options', 'Post-Event Implementation Guide', 'Green Room Meet & Greet'] },
          { name: 'Private & Executive', price: 'Contact', period: 'per engagement', highlight: false, cta: 'Request Booking',
            features: ['Half-Day or Full-Day Sessions', 'C-Suite & Executive Masterminds', 'Private Retreats & Roundtables', 'Deep-Dive Strategic Workshops', 'Personalized Frameworks', 'Ongoing Access & Follow-Up', 'VIP Experience'] },
        ],
        testimonials: [
          t('Dr. Kezia M.', 'Dean', 'Metro Business Institute', 'The room was completely transformed. Students left with a different understanding of what\'s possible for them. We need him back every year.', 'Standing Ovation, 400 Attendees'),
          t('Andre B.', 'CEO', 'TrueNorth Capital', 'He spoke at our leadership summit and the energy never dipped for 90 minutes. Three of our executives completely changed their approach after that session.', '3 Executives Transformed'),
          t('Pastor L. Williams', 'Senior Pastor', 'Covenant Community Church', 'He bridged faith and business in a way I\'ve never seen done so naturally. Our congregation left equipped, not just inspired.', '100% Positive Audience Feedback'),
        ],
        faq: [
          { q: 'What topics do you speak on?', a: 'Entrepreneurship & building from nothing, multi-industry business strategy, faith in business, leadership development, community impact, generational wealth, and personal transformation.' },
          { q: 'Do you travel for engagements?', a: 'Yes, nationally and select international engagements. Travel and accommodation are coordinated as part of the booking process.' },
          { q: 'How far in advance should we book?', a: 'We recommend 6–8 weeks minimum for corporate events, 3–4 weeks for smaller engagements. Contact us early — the calendar fills fast.' },
          { q: 'Can the keynote be customized for our industry?', a: 'Absolutely. Every engagement begins with a consultation to ensure the content speaks directly to your audience\'s world.' },
          { q: 'Do you offer virtual keynotes?', a: 'Yes. Virtual keynotes and workshops are available with the same energy and customization as in-person events.' },
          { q: 'What is your cancellation policy?', a: 'Cancellation policies vary by engagement type and are outlined in the booking agreement. Please reach out to discuss specifics.' },
        ],
        metrics: [{ label: 'Events Delivered', value: '100+' }, { label: 'Avg. Audience Rating', value: '4.9/5' }, { label: 'Repeat Booking Rate', value: '73%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/speaking-inquiry',
      },
      // ── Executive Mentorship ────────────────────────────────
      {
        id: 'mentorship',
        name: 'Executive Mentorship & Coaching',
        tagline: 'Accelerate Decades Into Months',
        heroHeadline: 'The Right Mentor Doesn\'t Just Open Doors — They Hand You the Blueprint.',
        heroSub: 'One-on-one executive mentorship for entrepreneurs, executives, and high-achievers who are done with average and ready to operate at a completely different level.',
        painPoints: [
          { icon: '🧭', title: 'No Clear Path to the Next Level', desc: 'You\'re successful by most measures — but you can feel a ceiling. You need someone who\'s been above it to show you how to break through.' },
          { icon: '🏝️', title: 'Making Big Decisions Alone', desc: 'The higher you go, the fewer people you can talk to honestly. Real mentorship is a thinking partner with skin in your game.' },
          { icon: '⏳', title: 'Learning Through Trial and Error That Costs Too Much', desc: 'The wrong moves at this level cost years and millions. A mentor who\'s already paid that tuition saves you both.' },
        ],
        solution: 'A direct mentorship relationship with a multi-industry entrepreneur who has built, scaled, restructured, and led across film, consulting, nonprofit, healthcare, and investment — giving you frameworks, accountability, and access that accelerate your trajectory.',
        process: [
          { step: 1, title: 'Clarity Assessment', desc: 'Deep-dive session to define your current position, goals, blind spots, and the specific areas where mentorship will have the greatest impact.', duration: 'Session 1' },
          { step: 2, title: 'Personal Strategic Framework', desc: 'Build a customized growth roadmap aligned with your vision, resources, and timeline.', duration: 'Week 1–2' },
          { step: 3, title: 'Weekly Strategy Sessions', desc: 'Regular 1:1 sessions covering real-time decisions, challenges, and strategic moves.', duration: 'Ongoing Weekly' },
          { step: 4, title: 'Network & Resource Access', desc: 'Introductions to relevant contacts, resources, and opportunities within the enterprise ecosystem.', duration: 'As Earned' },
          { step: 5, title: 'Accountability & Review', desc: 'Monthly performance reviews against goals, with course corrections and strategic pivots as needed.', duration: 'Monthly' },
        ],
        packages: [
          { name: 'Accelerator', price: '2,500', period: '/month (3-mo min)', highlight: false, cta: 'Apply Now',
            features: ['2 x 60-Min 1:1 Sessions/Month', 'Personal Strategic Framework', 'Email Access Between Sessions', 'Curated Resource Library', 'Accountability Check-Ins'] },
          { name: 'Executive', price: '5,000', period: '/month (3-mo min)', highlight: true, cta: 'Apply Now',
            features: ['4 x 60-Min 1:1 Sessions/Month', 'Weekly Strategy Sessions', 'Direct Phone/Text Access', 'Business Plan & Pitch Review', 'Network Introductions', 'Deal & Decision Support', 'Monthly Deep-Dive Review', 'Priority Event Access'] },
          { name: 'Elite Inner Circle', price: 'Custom', period: 'annual', highlight: false, cta: 'Apply Now',
            features: ['Unlimited Access (within reason)', 'Quarterly In-Person Strategy Days', 'Full Business Advisory', 'Co-investment Consideration', 'Board Advisory Potential', 'Inner Circle Community Access', 'Annual Retreat Inclusion'] },
        ],
        testimonials: [
          t('Tremaine J.', 'Founder', 'Legacy Tech Solutions', 'In 6 months I went from $18K/month to $112K/month in revenue. Not from luck — from applying a framework that actually works.', '$18K → $112K MRR in 6 Months'),
          t('Yvonne C.', 'Executive', 'Fortune 500 Company', 'I was stuck in middle management for 4 years. 8 months of mentorship and I\'m now a VP. He saw what I couldn\'t see in myself.', 'Promoted to VP in 8 Months'),
          t('Marcus O.', 'Serial Entrepreneur', '', 'I\'ve had coaches before. This is completely different. He\'s in the trenches with you, not above you. Game-changing.', '3 New Business Lines Launched'),
        ],
        faq: [
          { q: 'Is this coaching or mentorship?', a: 'Both. Coaching pulls out what\'s inside you. Mentorship transfers what I\'ve already learned. You get both — and the distinction matters because the combination is far more powerful.' },
          { q: 'Who is this NOT for?', a: 'This isn\'t for people looking for motivational content. It\'s for serious entrepreneurs and executives ready to do the work, be honest about their gaps, and execute relentlessly.' },
          { q: 'How do I apply?', a: 'Submit an application and we\'ll schedule a discovery call. Spots are extremely limited. We only take clients we can genuinely serve at this level.' },
          { q: 'What industries do you mentor in?', a: 'Media, entertainment, consulting, nonprofit, healthcare services, real estate, investment, and general high-growth entrepreneurship.' },
          { q: 'Can my team join the sessions?', a: 'Executive and Elite packages can occasionally include key team members by arrangement. Most sessions are 1:1 for maximum depth.' },
          { q: 'What if it\'s not a fit after the first month?', a: 'If after the first 30 days we agree it\'s not the right fit, we\'ll part ways professionally. Relationships like this only work when both sides are fully in.' },
        ],
        metrics: [{ label: 'Avg. Revenue Increase (6 mo)', value: '3.4x' }, { label: 'Mentees in Senior Roles', value: '82%' }, { label: 'Application Acceptance Rate', value: '23%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/mentorship-application',
      },
      // ── Brand Collaborations ────────────────────────────────
      {
        id: 'brand-collab',
        name: 'Brand & Media Collaborations',
        tagline: 'Authentic Partnerships That Amplify Both Brands',
        heroHeadline: 'Collaboration Is the New Competition.',
        heroSub: 'Strategic brand partnerships, media features, and collaborative projects with One United Enterprise — for brands, media outlets, and creators who want to reach an engaged, achievement-oriented audience.',
        painPoints: [
          { icon: '📡', title: 'Reaching the Wrong Audience', desc: 'Massive reach means nothing if it\'s not the right people. Quality of audience matters more than quantity.' },
          { icon: '🤝', title: 'Partnerships That Feel Forced', desc: 'Inauthentic brand deals destroy credibility. The right collaboration needs aligned values, not just aligned follower counts.' },
          { icon: '🎯', title: 'No Clear ROI From Influencer Spend', desc: 'Sponsored posts that generate likes but not leads. Collaboration needs a conversion strategy, not just exposure.' },
        ],
        solution: 'Authentic, value-aligned brand and media collaborations that deliver real exposure, credibility transfer, and measurable results to partners who are serious about reaching ambitious, high-intent audiences.',
        process: [
          { step: 1, title: 'Alignment Assessment', desc: 'Evaluate brand fit, audience overlap, values alignment, and collaboration objectives.', duration: 'Week 1' },
          { step: 2, title: 'Collaboration Design', desc: 'Co-create a partnership structure: content, events, co-branding, or product integration.', duration: 'Week 1–2' },
          { step: 3, title: 'Agreement & Timeline', desc: 'Finalize terms, deliverables, timelines, and success metrics.', duration: 'Week 2' },
          { step: 4, title: 'Execution', desc: 'Deliver the collaboration with full professional production support.', duration: 'Week 3–6' },
          { step: 5, title: 'Results Review', desc: 'Measure outcomes against agreed metrics and evaluate the continuation of the partnership.', duration: 'Post-Campaign' },
        ],
        packages: [
          { name: 'Content Feature', price: 'Contact', period: 'per project', highlight: false, cta: 'Inquire',
            features: ['Podcast Guest Feature', 'Social Media Collaboration', 'Newsletter Feature', 'Co-Created Content', 'Authentic Endorsement Potential'] },
          { name: 'Brand Partnership', price: 'Contact', period: 'per campaign', highlight: true, cta: 'Inquire',
            features: ['Multi-Platform Campaign', 'Event Co-Sponsorship', 'Co-Branded Content Series', 'Live Activation Opportunities', 'Cross-Promotion to Full Audience', 'Dedicated Partnership Manager', 'Performance Reporting'] },
          { name: 'Strategic Alliance', price: 'Custom', period: 'ongoing', highlight: false, cta: 'Inquire',
            features: ['Long-Term Strategic Partnership', 'Equity / Revenue Share Models', 'Joint Product Development', 'Co-Ownership Structures', 'Shared Infrastructure Access', 'Board-Level Relationship'] },
        ],
        testimonials: [
          t('Jason W.', 'CMO', 'BuildRight Technologies', 'Our sponsored integration reached 40,000 highly engaged entrepreneurs in one week. The quality of leads from that campaign was unlike anything we\'d run before.', '40K Engaged Entrepreneurs Reached'),
          t('Naomi F.', 'Founder', 'Clarity Media Group', 'The partnership felt completely natural because it was — our values are genuinely aligned. That\'s rare and it showed in the audience response.', '22% Conversion Rate on Co-Campaign'),
          t('Terrence A.', 'CEO', 'Apex Ventures LLC', 'We\'ve run three collaborations now. Every one has driven qualified leads and elevated both of our brand reputations. This is how partnerships should work.', '3 Campaigns, 100% Renewed'),
        ],
        faq: [
          { q: 'What size audience do you reach?', a: 'Our combined reach spans multiple platforms and networks. Details on current audience size and demographics are available upon inquiry.' },
          { q: 'What kind of brands do you partner with?', a: 'We partner with brands, services, and tools that genuinely serve ambitious entrepreneurs, executives, healthcare professionals, and investors — our core audiences.' },
          { q: 'Do you do paid promotions?', a: 'We do both paid partnerships and equity/revenue-share collaborations depending on alignment and structure. We do not promote anything we wouldn\'t personally use or recommend.' },
          { q: 'Can individual creators or coaches partner with you?', a: 'Yes. We collaborate with coaches, consultants, creators, and individual brands whose work aligns with our audience and values.' },
          { q: 'How do I submit a collaboration proposal?', a: 'Use the inquiry form and give us a brief overview of your brand, audience, and what you\'re hoping to build together. We review every submission.' },
          { q: 'What\'s your typical response time on inquiries?', a: 'We respond to all serious inquiries within 48–72 business hours.' },
        ],
        metrics: [{ label: 'Active Brand Partners', value: '30+' }, { label: 'Avg. Campaign Engagement Rate', value: '8.4%' }, { label: 'Partnership Renewal Rate', value: '78%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/brand-collab',
      },
    ],
    testimonials: [
      t('Tremaine J.', 'Founder', 'Legacy Tech', 'He doesn\'t just mentor — he transforms. My business looks completely different 6 months later.', '$18K → $112K MRR'),
      t('Dr. Kezia M.', 'Dean', 'Metro Business Institute', 'One of the most powerful speakers we\'ve ever had on our stage. He changes the room.', 'Standing Ovation, 400 Attendees'),
    ],
    caseStudies: [
      { title: 'Startup Founder Breaks Through Revenue Ceiling', industry: 'Tech / SaaS', result: '6x Revenue in 6 Months', description: 'Through executive mentorship, identified three untapped revenue channels and restructured pricing — taking MRR from $18K to $112K.' },
      { title: 'Corporate Executive Breaks Into Entrepreneurship', industry: 'Corporate / Entrepreneurship', result: 'Left Corporate, Built $500K Business', description: 'Year-long mentorship guided a senior executive through the transition from employee to founder, launching a profitable consulting firm.' },
    ],
    partnerships: ['TEDx Affiliated Events', 'Chamber of Commerce Speaker Network', 'HBCU Partner Institutions', 'Faith & Business Roundtable'],
  },

  // ─────────────────────────────────────────────────────────────
  // 7. TEAM & ASSOCIATES
  // ─────────────────────────────────────────────────────────────
  {
    id: 'team', name: 'Team & Associates', shortName: 'Team',
    tagline: 'The Minds, Companies, and Partners That Power the Enterprise',
    heroHeadline: 'No One Builds an Empire Alone.',
    heroSub: 'One United Enterprise is powered by an ecosystem of elite companies, strategic partners, and accomplished business associates — each a leader in their domain, united by a shared standard of excellence.',
    color: TEAM.color, colorDark: TEAM.dark, colorBg: TEAM.bg, glow: TEAM.glow,
    gradient: 'from-teal-950 via-cyan-950 to-black',
    cardGradient: 'from-teal-900/40 via-cyan-900/20 to-transparent',
    icon: '🤝',
    stats: [
      { label: 'Portfolio Companies', value: '7', suffix: '+' },
      { label: 'Business Associates', value: '25', suffix: '+' },
      { label: 'Industries Represented', value: '7', suffix: '' },
      { label: 'Combined Years Experience', value: '150', suffix: '+' },
    ],
    services: [
      // ── Portfolio Companies ─────────────────────────────────
      {
        id: 'portfolio-companies',
        name: 'Our Portfolio Companies',
        tagline: 'Seven Verticals. One Standard. Limitless Reach.',
        heroHeadline: 'A Family of Companies Built to Lead in Every Industry They Enter.',
        heroSub: 'Each company in the One United Enterprise portfolio operates with full autonomy in its vertical — and with the combined resources, network, and strategy of the entire enterprise behind it.',
        painPoints: [
          { icon: '🏢', title: 'Single-Industry Exposure', desc: 'Relying on one business or one industry creates dangerous fragility. True enterprise diversification requires coordinated multi-vertical operations.' },
          { icon: '🔗', title: 'Siloed Teams and Resources', desc: 'Most business groups operate independently, missing massive synergy opportunities. Our portfolio companies cross-leverage talent, clients, and infrastructure.' },
          { icon: '📊', title: 'Inconsistent Standards Across Entities', desc: 'Multi-company ownership often means inconsistent quality. The OUE brand standard applies uniformly across every company in the portfolio.' },
        ],
        solution: 'A curated portfolio of operationally distinct, strategically connected companies — each leading in its vertical while contributing to and benefiting from the broader enterprise ecosystem.',
        process: [
          { step: 1, title: 'Discovery Consultation', desc: 'Learn which portfolio company aligns with your needs and connect you with the right team or opportunity.', duration: 'Week 1' },
          { step: 2, title: 'Needs Assessment', desc: 'Deep dive into your specific situation to identify the best service, partnership, or investment fit within the portfolio.', duration: 'Week 1–2' },
          { step: 3, title: 'Introduction & Proposal', desc: 'Connect with the relevant portfolio company team and receive a tailored proposal.', duration: 'Week 2' },
          { step: 4, title: 'Engagement Launch', desc: 'Onboard with the specific portfolio company and begin the engagement with enterprise-level support.', duration: 'Week 3' },
          { step: 5, title: 'Cross-Portfolio Access', desc: 'As an OUE client or partner, receive access to resources and relationships across the entire portfolio.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Client Referral', price: 'No Cost', period: 'introduction only', highlight: false, cta: 'Connect Us',
            features: ['Portfolio Navigation Consultation', 'Introduction to Relevant Company', 'Needs-Based Matching', 'No Obligation Discovery', 'Access to Full Portfolio Network'] },
          { name: 'Multi-Company Engagement', price: 'Custom', period: 'per engagement', highlight: true, cta: 'Schedule Strategy Call',
            features: ['Coordinated Services Across Portfolio', 'Single Point of Contact', 'Bundled Pricing Options', 'Cross-Company Strategy Alignment', 'Enterprise Client Status', 'Priority Access Across All Verticals', 'Dedicated Relationship Manager'] },
          { name: 'Portfolio Partnership', price: 'Custom', period: 'strategic', highlight: false, cta: 'Request Proposal',
            features: ['Strategic Alliance with Portfolio', 'Co-Venture Opportunities', 'Revenue Share Structures', 'Joint Go-to-Market Potential', 'Investor Relations Access', 'Board-Level Engagement Options'] },
        ],
        testimonials: [
          t('Sandra W.', 'CEO', 'Westbrook Holdings', 'What we loved most was the seamless handoff between companies. We engaged three different verticals and it felt like one team the entire time.', 'Three Verticals, One Seamless Experience'),
          t('Darius P.', 'Founder', 'BuildForce Technologies', 'I needed film production, consulting, and capital advisory. Working through OUE meant I got all three aligned around the same strategic vision.', 'Three Services, One Vision'),
          t('Patricia H.', 'COO', 'Horizon Group', 'The multi-company model is genuinely unique. It\'s not a holding company — it\'s a living, breathing enterprise that treats every client like they\'re the only one.', 'Enterprise Experience at Every Level'),
        ],
        faq: [
          { q: 'What companies are in the portfolio?', a: 'The portfolio spans Film & Entertainment, Business Consulting & AI Automation, Global Non-Profit initiatives, Health & Medical services, Investment & Acquisition advisory, and more. Each is detailed on its respective sector page.' },
          { q: 'Can I work with multiple portfolio companies simultaneously?', a: 'Absolutely — and we encourage it. Cross-portfolio engagements often produce results no single company could achieve alone.' },
          { q: 'How are portfolio companies governed?', a: 'Each company has its own leadership, P&L, and operational independence, governed by enterprise-level standards, values, and strategic alignment with OUE.' },
          { q: 'Are there investment opportunities in portfolio companies?', a: 'Selected portfolio companies periodically open co-investment rounds. These are available to qualified partners with existing OUE relationships. Contact our Investment sector for details.' },
          { q: 'How do I know which company to contact?', a: 'Start with this page. Tell us your challenge or goal, and we\'ll route you to the right team within 24 hours.' },
          { q: 'Does OUE add new companies to the portfolio?', a: 'Yes. We actively evaluate acquisition, incubation, and strategic partnership opportunities. See our Investment & Acquisition sector if you have a business that may fit.' },
        ],
        metrics: [{ label: 'Portfolio Companies', value: '7+' }, { label: 'Cross-Portfolio Clients', value: '35%' }, { label: 'Avg. Client Retention', value: '91%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/portfolio-intro',
      },
      // ── Business Associates ─────────────────────────────────
      {
        id: 'associates',
        name: 'Business Associates Network',
        tagline: 'Leaders in Their Field. United in Their Standard.',
        heroHeadline: 'The Company You Keep Determines the Heights You Reach.',
        heroSub: 'The OUE Associates Network is a curated roster of accomplished professionals, executives, and entrepreneurs who are formally aligned with One United Enterprise — bringing specialized expertise, extended capacity, and elite-level execution to every engagement.',
        painPoints: [
          { icon: '🔍', title: 'Finding Experts You Can Actually Trust', desc: 'Anyone can claim expertise. The OUE Associates Network is built on verified track records, personal vetting, and demonstrated results.' },
          { icon: '🌐', title: 'Fragmented Specialized Resources', desc: 'Finding the right attorney, accountant, strategist, or specialist takes months of referrals. The right network collapses that search to minutes.' },
          { icon: '⚡', title: 'No Bench When You Need to Scale Fast', desc: 'Growth opportunities don\'t wait for hiring cycles. An active associates network means capacity is available when you need it most.' },
        ],
        solution: 'A living, growing network of personally vetted business associates — attorneys, accountants, marketers, operators, healthcare professionals, investors, and specialists — available to OUE clients and aligned with OUE standards.',
        process: [
          { step: 1, title: 'Needs Identification', desc: 'Identify the specific expertise or capacity need — a specialist, a project team, a referral, or a strategic connection.', duration: 'Day 1' },
          { step: 2, title: 'Associate Matching', desc: 'We match your need against the network and identify the right associate or associates for the engagement.', duration: 'Day 1–3' },
          { step: 3, title: 'Warm Introduction', desc: 'A personal introduction is made — not a cold referral — with full context and alignment on your needs.', duration: 'Day 3–5' },
          { step: 4, title: 'Engagement Support', desc: 'We stay available to support the relationship and ensure the engagement meets OUE standards.', duration: 'Ongoing' },
          { step: 5, title: 'Network Integration', desc: 'If it\'s a great fit on both sides, explore becoming part of the network yourself.', duration: 'By Invitation' },
        ],
        packages: [
          { name: 'Client Access', price: 'Complimentary', period: 'for OUE clients', highlight: false, cta: 'Request Introduction',
            features: ['Access to Vetted Associates', 'Warm Introductions', 'Needs-Based Matching', 'Legal, Finance & Operations Specialists', 'OUE Client Priority Access'] },
          { name: 'Associate Listing', price: 'Application Only', period: 'by invitation', highlight: true, cta: 'Apply for Membership',
            features: ['Featured in Associates Directory', 'OUE Client Referrals', 'Co-Collaboration Opportunities', 'Enterprise Event Invitations', 'Co-Branded Marketing', 'Network Events Access', 'OUE Associate Badge & Credentials'] },
          { name: 'Strategic Associate', price: 'Custom', period: 'partnership', highlight: false, cta: 'Request Conversation',
            features: ['Deep Strategic Alignment with OUE', 'Joint Ventures & Co-Ventures', 'Revenue Share Frameworks', 'Co-Branded Service Delivery', 'Cross-Referral Infrastructure', 'Leadership Roundtable Participation'] },
        ],
        testimonials: [
          t('Reginald S.', 'Attorney', 'Sterling Law Group', 'Being part of the OUE network has brought 11 qualified referrals in 6 months. The clients are serious, prepared, and a pleasure to serve.', '11 Referrals in 6 Months'),
          t('Carmen L.', 'CPA', 'Apex Financial Advisory', 'The level of the entrepreneurs I\'m introduced to through OUE is consistently exceptional. This is the best professional network I\'ve been a part of.', 'Best Professional Network I\'ve Joined'),
          t('Devon A.', 'VP Operations', 'MedFirst Group', 'OUE connected us with three specialists we needed urgently during a growth sprint. All three delivered. That network is the real deal.', 'Three Specialists, All Delivered'),
        ],
        faq: [
          { q: 'How do I join the Associates Network?', a: 'The network is by application and invitation only. Submit an application describing your specialty, experience, and what you bring to the network. We review all applications personally.' },
          { q: 'What types of professionals are in the network?', a: 'Attorneys, CPAs, financial advisors, marketing strategists, operations executives, healthcare administrators, real estate professionals, investors, technology specialists, and more.' },
          { q: 'Is there a fee to join the Associates Network?', a: 'Standard Associate Listing is by invitation with no fee. Strategic Associate partnerships are structured individually based on the relationship model.' },
          { q: 'How are associates vetted?', a: 'Every associate is personally vetted by OUE leadership — we verify credentials, check track records, and in most cases have worked with or observed them directly before extending an invitation.' },
          { q: 'Can I refer someone to the network?', a: 'Referrals from existing OUE clients and associates are the primary way we grow the network. Refer someone you genuinely believe in.' },
          { q: 'What are the obligations of network membership?', a: 'Associates commit to the OUE standard of service: excellence, integrity, responsiveness, and putting the client\'s outcome above everything. No ego, no shortcuts.' },
        ],
        metrics: [{ label: 'Vetted Associates', value: '25+' }, { label: 'Specialties Represented', value: '14+' }, { label: 'Avg. Intro-to-Engagement Rate', value: '64%' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/associates-inquiry',
      },
      // ── Join the Network ────────────────────────────────────
      {
        id: 'join-network',
        name: 'Join the OUE Network',
        tagline: 'Apply to Work With, Partner With, or Be Part of One United Enterprise',
        heroHeadline: 'The Right Room Changes Everything. This Is That Room.',
        heroSub: 'Whether you\'re an entrepreneur seeking community, a professional ready to align with an elite network, or a company looking for a strategic home — this is how you step into the OUE ecosystem.',
        painPoints: [
          { icon: '🚪', title: 'Can\'t Break Into the Right Rooms', desc: 'Access is the invisible advantage. The people you need to meet are inside networks you don\'t know how to enter.' },
          { icon: '🧩', title: 'Building Alone Without Infrastructure', desc: 'Great entrepreneurs underperform because they lack the systems, support, and strategic infrastructure that turn good work into great outcomes.' },
          { icon: '🔄', title: 'Constantly Chasing Resources Reactively', desc: 'Most entrepreneurs find resources after they need them. Network membership means you have the resources before you need them.' },
        ],
        solution: 'A structured pathway to enter the OUE ecosystem — from client relationships and associate memberships to strategic partnerships and co-venture opportunities — at the right level for where you are and where you\'re going.',
        process: [
          { step: 1, title: 'Application Submission', desc: 'Submit your application with background, goals, and the specific way you want to be part of the network.', duration: 'Day 1' },
          { step: 2, title: 'Discovery Conversation', desc: 'A personal conversation with OUE leadership to assess fit, alignment, and the right entry point into the ecosystem.', duration: 'Week 1' },
          { step: 3, title: 'Onboarding & Orientation', desc: 'Formal welcome into the network with introductions, resource access, and a clear roadmap for your involvement.', duration: 'Week 2' },
          { step: 4, title: 'First Engagement', desc: 'Your first meaningful collaboration, project, or relationship within the network — where value begins to flow in both directions.', duration: 'Week 2–4' },
          { step: 5, title: 'Deep Integration', desc: 'Grow your footprint within the ecosystem through relationships, referrals, collaborations, and long-term strategic alignment.', duration: 'Ongoing' },
        ],
        packages: [
          { name: 'Community Member', price: 'Free', period: 'application required', highlight: false, cta: 'Apply Now',
            features: ['OUE Network Community Access', 'Monthly Virtual Roundtables', 'Resource Library Access', 'Event Invitations', 'Peer Network Introductions'] },
          { name: 'Professional Member', price: '297', period: '/month', highlight: true, cta: 'Apply Now',
            features: ['Everything in Community', 'Monthly Group Mentorship Session', 'Direct Network Introduction Service', 'OUE Associate Consideration', 'Private Community Forum', 'Co-Marketing Opportunities', 'Business Resource Vault Access', 'Priority Event Seating'] },
          { name: 'Strategic Partner', price: 'Custom', period: 'by application', highlight: false, cta: 'Apply Now',
            features: ['Full Ecosystem Partnership', 'Co-Venture Opportunities', 'Revenue Share Models', 'Joint Venture Structures', 'Inner Circle Access', 'Board Seat Consideration', 'Custom Integration Path'] },
        ],
        testimonials: [
          t('Malik J.', 'Entrepreneur', '', 'I applied not knowing what to expect and walked into the most serious, action-oriented business community I\'ve ever been a part of. This network delivered.', 'Found My Strategic Circle'),
          t('Stephanie R.', 'Consultant', 'SR Advisory', 'Within 60 days of joining, I had two client introductions, a speaking opportunity, and a collaboration that added $40K to my revenue. The ROI is absurd.', '+$40K Revenue in 60 Days'),
          t('Marcus B.', 'CEO', 'Atlas Logistics', 'I joined as a Community Member and within three months was elevated to Professional. The quality of the people here is unlike any networking group I\'ve seen.', 'Elevated to Professional in 90 Days'),
        ],
        faq: [
          { q: 'Who is the OUE Network for?', a: 'Entrepreneurs at any stage, executives, professionals, and business owners who operate with integrity, pursue excellence, and want to grow inside a serious ecosystem — not just another Facebook group.' },
          { q: 'Is this just another mastermind?', a: 'No. A mastermind is a meeting. This is an ecosystem — with companies, clients, capital, associates, and actual enterprise infrastructure behind it.' },
          { q: 'How selective is the application process?', a: 'We are selective. Not elitist — selective. We\'re looking for people who are aligned with the values of the enterprise: excellence, integrity, execution, and community.' },
          { q: 'Can I upgrade my membership level over time?', a: 'Yes. Most members start at Community or Professional and grow into deeper partnership as the relationship develops. Advancement is earned, not purchased.' },
          { q: 'What do I get immediately when I join?', a: 'Community access, welcome introductions, event invitations, and a direct conversation with the team to identify your most valuable first connections within the network.' },
          { q: 'Is there a commitment period?', a: 'Community membership is free with no commitment. Professional membership is month-to-month after the first 3 months. Strategic partnerships are structured per agreement.' },
        ],
        metrics: [{ label: 'Active Members', value: '200+' }, { label: 'Avg. First Collaboration (days)', value: '45' }, { label: 'Member Revenue Generated', value: '$2M+' }],
        calendlyUrl: 'https://calendly.com/oneunitedenterprise/network-application',
      },
    ],
    testimonials: [
      t('Malik J.', 'Entrepreneur', '', 'The most serious, action-oriented business community I\'ve ever been a part of. This network delivered.', 'Found My Strategic Circle'),
      t('Carmen L.', 'CPA', 'Apex Financial Advisory', 'The best professional network I\'ve joined. The quality here is consistently exceptional.', 'Best Professional Network'),
    ],
    caseStudies: [
      { title: 'Associates Network Drives $2M+ in Member Revenue', industry: 'Multi-Industry', result: '$2M+ Member Revenue Generated', description: 'Cross-referral and collaboration infrastructure generated over $2M in combined revenue across the network in its first year.' },
      { title: 'Professional Member Scales Consulting Practice 4x', industry: 'Business Consulting', result: '4x Revenue in 8 Months', description: 'Network introductions, co-marketing, and OUE client referrals scaled a solo consultant\'s practice from $80K to $340K annually.' },
    ],
    partnerships: ['Local Chamber of Commerce', 'SCORE Mentoring Network', 'National Black Business Alliance', 'Entrepreneurs\' Organization'],
  },
]

// Helper lookups
export const getSector = (id: string) => SECTORS.find(s => s.id === id)
export const getService = (sectorId: string, serviceId: string) =>
  getSector(sectorId)?.services.find(s => s.id === serviceId)
