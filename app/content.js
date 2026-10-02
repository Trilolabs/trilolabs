export const MAIL =
  "mailto:info@trilolabs.com?subject=Trilolabs%20enquiry";

export const BOOK = "/book-a-call";

/** Registered entity — shown site-wide for merchant / compliance visibility */
export const COMPANY = {
  legalName: "TRILOLABS TECHNOLOGIES LLP",
  address:
    "1-90/2/H PNO.93, MADHAPUR, HYDERABAD, Madhapur, MADHAPUR POLICE STATION, Shaikpet, Hyderabad- 500081, Telangana, India",
  addressNote: "As issued by the Income Tax Department.",
};

export const NAV = [
  { href: "/about-us", label: "About us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blogs" },
];

export const HERO = {
  brand: "Trilolabs",
  support:
    "We sense where AI fits in your business, uncover the gaps costing you time, and build systems that work — without the guesswork.",
  primaryCta: { href: BOOK, label: "Book a Demo" },
  secondaryCta: { href: "/#process", label: "How we work" },
};

export const TRUST = {
  label: "Brands we’ve helped implement AI:",
  brands: [
    {
      name: "Humana",
      src: "/media/brands/humana.svg",
      href: "https://www.humana.com/",
    },
    {
      name: "Neurasix",
      src: "/media/brands/neurasix.svg",
      href: "https://neurasix.ai/",
    },
    {
      name: "Outroom",
      src: "/media/brands/outroom.svg",
      href: "https://outroom.in/",
    },
  ],
};

export const ABOUT = {
  id: "about",
  kicker: "About us",
  title: "Built to make AI work for you.",
  body: "We’re an agency that skips the complexity, focusing only on automation that delivers real, measurable results.",
  cta: { href: BOOK, label: "Book a Demo" },
  panel: "/media/about-panel.webp",
  panelStat: {
    value: 145,
    suffix: "+",
    label: "Systems Delivered",
    description: "Custom automation designed around each client’s real needs.",
  },
  stats: [
    {
      value: 1600,
      suffix: "+",
      label: "Hours Saved Monthly",
    },
    {
      value: 34,
      suffix: "%",
      label: "Reduction In Manual Work",
    },
    {
      value: 42,
      suffix: " days",
      label: "Time To Measurable ROI",
    },
  ],
};

export const ABOUT_PAGE = {
  hero: {
    title: "About Trilolabs",
    support:
      "We’re a team that believes AI should simplify business, not complicate it — building practical automation that teams actually use.",
    countBadge: null,
  },
  whoWeAre: {
    kicker: "Who we are",
    title: "Built by people who get results.",
    body: "We’re an agency that skips the complexity, focusing only on automation that delivers real, measurable results.",
  },
  metrics: [
    {
      value: 145,
      suffix: "+",
      label: "Systems Delivered",
      description: "Custom automation designed around each client’s real needs.",
    },
    {
      value: 1600,
      suffix: "+",
      label: "Hours Saved Monthly",
      description: "Time reclaimed through automated, hands-off workflows.",
    },
    {
      value: 34,
      suffix: "%",
      label: "Reduction In Manual Work",
      description: "Repetitive tasks replaced with reliable systems.",
    },
    {
      value: 42,
      suffix: " days",
      label: "Time To Measurable ROI",
      description: "Businesses notice measurable impact within weeks.",
    },
  ],
};

export const SERVICES = {
  kicker: "Services",
  title: "From confusion to clarity, fully handled.",
  items: [
    {
      num: "01",
      title: "Analyze",
      tags: ["Workflow Audit", "Data Mapping", "Insights"],
      body: "We dig into your current workflows to identify exactly where AI automation will create the most measurable impact.",
      icon: "/media/services/service-icon-analyze.svg",
      image: "/media/services/service-analyze.webp",
    },
    {
      num: "02",
      title: "Build",
      tags: ["Custom Systems", "Integration", "Design"],
      body: "We design and construct custom automation systems tailored to how your team already works day to day.",
      icon: "/media/services/service-icon-build.svg",
      image: "/media/services/service-build.webp",
    },
    {
      num: "03",
      title: "Launch",
      tags: ["Testing", "Rollout", "Monitoring"],
      body: "We roll out your systems carefully, testing every step to ensure nothing disrupts your daily business operations.",
      icon: "/media/services/service-icon-launch.svg",
      image: "/media/services/service-launch.webp",
    },
    {
      num: "04",
      title: "Optimize",
      tags: ["Performance", "Training", "Refinement"],
      body: "We continuously refine your automation after launch, ensuring it keeps improving and delivering results as you grow.",
      icon: "/media/services/service-icon-optimize.svg",
      image: "/media/services/service-optimize.webp",
    },
  ],
};

export const PROCESS = {
  id: "process",
  kicker: "How we work",
  title: "Getting real results without the guesswork.",
  steps: [
    {
      num: "01",
      title: "Discovery & Audit",
      timing: "Week 1",
      body: "We analyze your workflows and pinpoint where automation delivers the most measurable value.",
    },
    {
      num: "02",
      title: "Design & Launch",
      timing: "Weeks 2-4",
      body: "We build tailored automation systems and roll them out carefully without interrupting daily operations.",
    },
    {
      num: "03",
      title: "Train & Optimize",
      timing: "Ongoing",
      body: "We train your team and continuously refine the system to keep results improving.",
    },
  ],
};

export const WORK = {
  id: "work",
  kicker: "Case Studies",
  title: "Real Businesses, Real AI Results",
  viewAllHref: "/case-studies",
  viewAllLabel: "View All Case Studies",
  cases: [
    {
      slug: "humana",
      num: "01",
      name: "Humana",
      body: "Vision-language models for entity recognition across faxed clinical documents — turning paper intake into structured, searchable data.",
      metric: "VLM",
      metricLabel: "Entity recognition",
      image: "/media/cases/case-humana.webp",
      href: "https://www.humana.com/",
    },
    {
      slug: "neurasix",
      num: "02",
      name: "Neurasix",
      body: "We own the full AI stack and product for Neurasix — agentic BFSI workflows from regulatory intelligence to audit-ready outputs.",
      metric: "Full",
      metricLabel: "AI & product",
      image: "/media/cases/case-neurasix.webp",
      href: "https://neurasix.ai/",
    },
    {
      slug: "outroom",
      num: "03",
      name: "Outroom",
      body: "Our event ticketing and management product — publish events, sell tickets, run check-in, and ship branded pages from one platform.",
      metric: "Trilolabs",
      metricLabel: "Subproduct",
      image: "/media/cases/case-outroom.webp",
      href: "https://outroom.in/",
    },
  ],
};

export const CASES = {
  humana: {
    slug: "humana",
    name: "Humana",
    num: "01",
    summary:
      "Entity recognition with vision-language models for fax and document digitization — extracting structured fields from unstructured clinical paperwork.",
    metric: "VLM",
    metricLabel: "Entity recognition",
    image: "/media/cases/case-humana.webp",
    externalUrl: "https://www.humana.com/",
    challenge: {
      title:
        "Faxed and scanned documents still carried critical member and clinical data that teams had to read and key by hand.",
      body: "High-volume fax digitization meant inconsistent layouts, stamps, handwriting, and multi-page packets. Manual entity extraction slowed intake and introduced costly transcription errors before anything reached downstream systems.",
    },
    strategy: {
      title:
        "We deployed vision-language models to detect and extract entities directly from document images — not just OCR text dumps.",
      body: "The pipeline handles fax and scan artifacts, maps extracted entities into structured schemas, and routes low-confidence fields for review so operations keep speed without sacrificing accuracy on regulated healthcare documents.",
    },
    results: [
      {
        metric: "VLM",
        label: "Entity recognition",
        note: "Models read document images and pull the fields teams previously typed by hand.",
      },
      {
        metric: "Fax → data",
        label: "Digitization path",
        note: "Unstructured fax packets become structured records ready for downstream workflows.",
      },
      {
        metric: "Review loop",
        label: "Confidence routing",
        note: "Ambiguous extractions fields escalate cleanly instead of blocking the whole batch.",
      },
    ],
  },
  neurasix: {
    slug: "neurasix",
    name: "Neurasix",
    num: "02",
    summary:
      "Trilolabs builds and runs Neurasix end to end — the agentic AI product for BFSI finance and compliance teams.",
    metric: "Full stack",
    metricLabel: "AI & product",
    image: "/media/cases/case-neurasix.webp",
    externalUrl: "https://neurasix.ai/",
    challenge: {
      title:
        "BFSI teams needed regulation-aligned AI that produces audit-ready answers — not generic chat bolted onto outdated policy PDFs.",
      body: "Finance and compliance workflows span accounting standards, banking rules, capital markets, tax, and multi-country jurisdictions. Off-the-shelf copilots lacked depth, source citation, and the product surface professionals actually use day to day.",
    },
    strategy: {
      title:
        "We carry the whole AI and product: models, RAG, domain coverage, security posture, and the product experience Neurasix ships to clients.",
      body: "From regulatory intelligence agents to workspace UX, hosting, and enterprise controls, Trilolabs designs, builds, and iterates the platform so Neurasix can sell and scale a BFSI-native AI product — not a prototype.",
    },
    results: [
      {
        metric: "End-to-end",
        label: "AI & product ownership",
        note: "Research, models, product, and delivery stay in one Trilolabs-led stack.",
      },
      {
        metric: "145+",
        label: "Regulators & standards",
        note: "Domain coverage across accounting, audit, banking, markets, labour, and tax.",
      },
      {
        metric: "Minutes",
        label: "To audit-ready output",
        note: "Workflows that used to take days compress into cited, reviewable answers.",
      },
    ],
  },
  outroom: {
    slug: "outroom",
    name: "Outroom",
    num: "03",
    summary:
      "Outroom is a Trilolabs subproduct — event ticketing and management from publish to door check-in.",
    metric: "Trilolabs",
    metricLabel: "Subproduct",
    image: "/media/cases/case-outroom.webp",
    externalUrl: "https://outroom.in/",
    challenge: {
      title:
        "Hosts needed one place to create events, sell tickets, manage guests, and run the door — without stitching five tools together.",
      body: "Most stacks split ticketing, payments, branded pages, messaging, and QR check-in. Organizers paid for complexity while attendees bounced between broken flows.",
    },
    strategy: {
      title:
        "We built Outroom as our own product: Cashfree checkout, branded pages, attendee ops, QR check-in, and optional AI draft assists.",
      body: "Trilolabs owns the platform end to end — organizers publish and sell from one dashboard; guests discover, buy, and enter with a clear ticket path. AI assists speed copy and design when hosts want a faster first draft.",
    },
    results: [
      {
        metric: "1 platform",
        label: "Publish → door",
        note: "Events, tickets, guests, check-in, and reports live in a single product.",
      },
      {
        metric: "Cashfree",
        label: "Online & offline",
        note: "Payments, refunds, and offline marking handled in the same ops flow.",
      },
      {
        metric: "AI assists",
        label: "Optional drafts",
        note: "Hosts can draft event copy, SEO, pages, tickets, posters, and messages when they want speed.",
      },
    ],
  },
};

export const WHY = {
  kicker: "Why Choose us",
  title: "This is what makes us actually different.",
  withLabel: "With Trilolabs",
  withoutLabel: "Without Trilolabs",
  withItems: [
    "Fast Turnaround, No Delays",
    "One Point Of Contact",
    "Custom-Built For Your Business",
    "Regular, Honest Updates",
    "No Hidden Costs",
  ],
  withoutItems: [
    "Long Waits For Fixes",
    "Multiple Vendors, No Accountability",
    "Templates That Miss The Mark",
    "Updates Come Rarely",
    "Costs That Creep Up",
  ],
};

export const FAQ = {
  id: "faq",
  kicker: "FAQ's",
  title: "Answers To What You’re Wondering About.",
  items: [
    {
      q: "How does implementation work?",
      a: "Most projects go live within 2 to 4 weeks, depending on the complexity of your existing workflows and tools.",
    },
    {
      q: "What is the setup time?",
      a: "Setup typically takes a few weeks, though timelines vary based on how many systems need to be connected.",
    },
    {
      q: "What if we need changes?",
      a: "We provide ongoing support after launch, adjusting and refining the automation as your business needs evolve over time.",
    },
    {
      q: "Do you work with our industry?",
      a: "Yes, we’ve built automation for e-commerce, marketing, food and beverage, and software businesses across many different niches.",
    },
    {
      q: "How does pricing work?",
      a: "Pricing depends on project scope and complexity, and we always share clear, upfront estimates before any work begins.",
    },
    {
      q: "What if our tools change later?",
      a: "We build flexible systems designed to adapt, and we’re available to update automation as your tools or needs evolve.",
    },
  ],
};

export const CTA = {
  id: "contact",
  title: "Let’s build your first automation together.",
  href: BOOK,
  label: "Book a free call",
};

export const BLOG = {
  kicker: "News & Insights",
  title: "News & Insights",
  support:
    "Straightforward articles and guides on AI automation, written for business owners who want results, not buzzwords or hype.",
  posts: [
    {
      slug: "how-ai-automation-saves-time",
      tag: "Article",
      title: "How AI Automation Actually Saves Businesses Time",
      readTime: "06 min read",
      date: "Aug 26, 2026",
      excerpt:
        "Where the hours really disappear — and how automation reclaims them without adding another tool your team ignores.",
      body: [
        "Most teams don’t need more tools. They need fewer handoffs between the tools they already use. When we audit a business, we look for repeated decisions, delayed handoffs, and places where people are acting as glue between systems.",
        "AI fits best where the pattern is clear, the data exists, and the cost of a miss is measurable. Inventory alerts, order exceptions, and reporting packs are common wins. Vague experiments rarely are.",
        "Start with one workflow that burns hours every week. Ship something your team will open tomorrow. Then expand. That’s how automation compounds instead of becoming shelfware.",
      ],
    },
    {
      slug: "signs-you-need-automation",
      tag: "Guide",
      title: "Signs Your Business Needs Automation Now",
      readTime: "05 min read",
      date: "Aug 27, 2022",
      excerpt:
        "A practical checklist for spotting bottlenecks that are costing you time before they become hiring problems.",
      body: [
        "If the same exception hits your inbox every morning, that’s not a people problem — it’s a systems gap. Hiring more operators to babysit broken handoffs only scales the pain.",
        "Watch for delayed status updates, retyped data between tools, and meetings that exist only to reconcile numbers. Those are automation candidates with measurable ROI.",
        "When you can name the owner, the trigger, and the outcome of a workflow, you’re ready to automate it. If you can’t, fix ownership first.",
      ],
    },
    {
      slug: "real-roi-behind-ai-automation",
      tag: "Article",
      title: "The Real ROI Behind AI Automation Projects",
      readTime: "08 min read",
      date: "May 20, 2024",
      excerpt:
        "How we measure hours saved, error reduction, and time-to-value — without vanity metrics.",
      body: [
        "ROI shows up as hours returned to the team, fewer stockouts or tickets, and faster cycles from request to done. We baseline those before launch so the win isn’t a feeling.",
        "Good automation projects pay back inside the first month when scope stays tight. Bloated “AI platforms” that try to do everything rarely do.",
        "Pick one workflow, ship it, measure it, then expand. That’s how clients see 30-day ROI instead of year-long pilots.",
      ],
    },
    {
      slug: "why-automation-projects-fail",
      tag: "Article",
      title: "Why Most Automation Projects Fail Early",
      readTime: "09 min read",
      date: "Dec 27, 2025",
      excerpt:
        "The usual traps: wrong scope, no owner, and systems nobody opens after launch day.",
      body: [
        "Projects fail when nobody owns the workflow after go-live, or when the first build tries to automate the entire company at once.",
        "Another trap is skipping training. If operators don’t trust the new path, they’ll keep the old spreadsheet alive in parallel.",
        "We keep scope narrow, assign an owner, and train in the real tools — so the system sticks past week one.",
      ],
    },
    {
      slug: "inside-our-process",
      tag: "Guide",
      title: "Inside Our Process: From Audit To Automation",
      readTime: "05 min read",
      date: "Dec 24, 2021",
      excerpt:
        "What week one looks like, how we choose what to build first, and how we hand systems back to your team.",
      body: [
        "Week one is discovery: map workflows, time the painful steps, and rank automations by hours saved and risk reduced.",
        "Weeks two to four are build and careful rollout — integrations, tests, and a launch that doesn’t freeze daily ops.",
        "After launch we train and refine. The goal is a system your team runs without us hovering.",
      ],
    },
    {
      slug: "what-businesses-get-wrong-about-ai",
      tag: "Insights",
      title: "What Businesses Get Wrong About AI Tools",
      readTime: "07 min read",
      date: "Apr 30, 2026",
      excerpt:
        "Buying another AI seat isn’t a strategy. Connecting the work you already do is.",
      body: [
        "Buying seats for the latest AI product feels productive. Connecting the messy middle of your stack usually isn’t glamorous — and that’s where the time actually goes.",
        "Tools don’t fix unclear ownership. If three people “kind of” own a process, automation will amplify the confusion.",
        "Start with the workflow, not the model. Then pick the lightest automation that makes that workflow reliable.",
      ],
    },
  ],
};

export const BOOK_CALL = {
  title: "Book a call",
  support:
    "Not a sales pitch — just a real conversation about where automation actually makes sense for your business.",
  services: [
    "Workflow Analysis",
    "System Build",
    "Automation Launch",
    "Ongoing Optimization",
    "Not Sure Yet",
  ],
  fields: {
    name: "Full Name",
    email: "Email Address",
    service: "What services are you interested in?",
    message: "Message",
    submit: "Book a call",
  },
};

export const FOOTER = {
  tag: "SaaS & AI studio",
  columns: [
    {
      label: "Navigate",
      links: [
        { href: "/", label: "Home" },
        { href: "/about-us", label: "Who we are" },
        { href: "/#process", label: "Process" },
        { href: "/#services", label: "Services" },
      ],
    },
    {
      label: "Pages",
      links: [
        { href: "/about-us", label: "About us" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/blog", label: "Articles" },
        { href: BOOK, label: "Book a call" },
      ],
    },
    {
      label: "Company",
      links: [
        { href: "/#why", label: "Why us?" },
      ],
    },
    {
      label: "Connect",
      links: [
        { href: "#", label: "Instagram" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "LinkedIn" },
        { href: "#", label: "Behance" },
      ],
    },
  ],
};
