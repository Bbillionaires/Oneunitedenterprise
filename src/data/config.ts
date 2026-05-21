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
    id: 'film', name: 'Film & Entertainment', shortName: 'Film',
    tagline: 'Cinematic Content That Commands Attention and Converts',
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
    id: 'consulting', name: 'Biz Consulting', shortName: 'Consulting',
    tagline: 'AI-Powered Systems That Scale Revenue Without Scaling Headcount',
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
    id: 'nonprofit', name: 'Global Non Profit', shortName: 'Non Profit',
    tagline: 'Transforming Communities. Empowering Futures. Creating Lasting Legacy.',
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
    id: 'medical', name: 'Health & Medical', shortName: 'Medical',
    tagline: 'Dignity-Centered Care Coordination for Those Who Deserve It Most',
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
    id: 'investment', name: 'Investment & Acq.', shortName: 'Investment',
    tagline: 'Strategic Capital. Calculated Risk. Maximum Returns.',
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
]

// Helper lookups
export const getSector = (id: string) => SECTORS.find(s => s.id === id)
export const getService = (sectorId: string, serviceId: string) =>
  getSector(sectorId)?.services.find(s => s.id === serviceId)
