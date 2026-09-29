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
    { name: "Lightdash", src: "/media/trust-lightdash.png" },
    { name: "Helios", src: null },
    { name: "Harbor", src: null },
    { name: "Strata", src: null },
    { name: "Meridian", src: null },
    { name: "Pulse", src: null },
  ],
};

export const ABOUT = {
  id: "about",
  kicker: "About us",
  title: "Built to make AI work for you.",
  body: "We’re an agency that skips the complexity, focusing only on automation that delivers real, measurable results.",
  cta: { href: BOOK, label: "Book a Demo" },
  panel: "/media/about-panel.png",
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
      image: "/media/services/service-analyze.png",
    },
    {
      num: "02",
      title: "Build",
      tags: ["Custom Systems", "Integration", "Design"],
      body: "We design and construct custom automation systems tailored to how your team already works day to day.",
      icon: "/media/services/service-icon-build.svg",
      image: "/media/services/service-build.jpg",
    },
    {
      num: "03",
      title: "Launch",
      tags: ["Testing", "Rollout", "Monitoring"],
      body: "We roll out your systems carefully, testing every step to ensure nothing disrupts your daily business operations.",
      icon: "/media/services/service-icon-launch.svg",
      image: "/media/services/service-launch.jpg",
    },
    {
      num: "04",
      title: "Optimize",
      tags: ["Performance", "Training", "Refinement"],
      body: "We continuously refine your automation after launch, ensuring it keeps improving and delivering results as you grow.",
      icon: "/media/services/service-icon-optimize.svg",
      image: "/media/services/service-optimize.png",
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
      slug: "kensworth",
      num: "01",
      name: "Kensworth",
      body: "We connected this retailer’s inventory, shipping, and support tools into one automated system.",
      metricValue: 80,
      metricSuffix: "%",
      metricLabel: "Fewer stockouts",
      image: "/media/cases/case-kensworth.png",
    },
    {
      slug: "bramwell",
      num: "02",
      name: "Bramwell",
      body: "We helped this e-commerce brand automate order processing and support, freeing their team to scale.",
      metricValue: 150,
      metricSuffix: "%",
      metricLabel: "Faster order processing",
      image: "/media/cases/case-bramwell.png",
    },
    {
      slug: "winslow",
      num: "03",
      name: "Winslow",
      body: "We automated this agency’s client reporting and campaign tracking, replacing manual spreadsheet work instantly.",
      metricValue: 200,
      metricSuffix: "%",
      metricLabel: "Faster reporting time",
      image: "/media/cases/case-winslow.png",
    },
    {
      slug: "ashworth",
      num: "04",
      name: "Ashworth",
      body: "We rebuilt this restaurant group’s reservation and inventory system, cutting waste and manual scheduling chaos.",
      metricValue: 40,
      metricSuffix: "%",
      metricLabel: "Reduction in waste",
      image: "/media/cases/case-ashworth.png",
    },
    {
      slug: "thornbury",
      num: "05",
      name: "Thornbury",
      body: "We automated this SaaS company’s onboarding flow, reducing tickets and speeding up activation.",
      metricValue: 45,
      metricSuffix: "%",
      metricLabel: "Fewer support tickets",
      image: "/media/cases/case-thornbury.jpg",
    },
  ],
};

export const CASES = {
  kensworth: {
    slug: "kensworth",
    name: "Kensworth",
    num: "01",
    summary:
      "We connected this retailer’s inventory, shipping, and support tools into one automated system.",
    metric: "80%",
    metricLabel: "Fewer stockouts",
    image: "/media/cases/case-kensworth.png",
    challenge: {
      title:
        "Kensworth needed to eliminate delays caused by three disconnected tools handling inventory, shipping, and support separately, which made coordinating even simple orders needlessly complicated.",
      body: "Manual cross-checking between these disconnected systems was causing duplicate work and frequent stockout surprises, especially during their highest-demand sales periods when accuracy mattered most.",
    },
    strategy: {
      title:
        "We integrated their entire operational stack into a single automated workflow, syncing inventory data in real time and automatically triggering shipping updates the moment new orders came in.",
      body: "Our approach connected the most error-prone systems first to reduce immediate risk, then gradually expanded automation coverage across the rest of their fulfillment process.",
    },
    results: [
      {
        metric: "80%",
        label: "Fewer stockouts",
        note: "Real-time syncing prevented overselling during peak demand",
      },
      {
        metric: "120",
        label: "Hours saved monthly",
        note: "Manual cross-checking eliminated between disconnected tools",
      },
      {
        metric: "2×",
        label: "Faster shipping time",
        note: "Orders move to fulfillment without delay",
      },
    ],
  },
  bramwell: {
    slug: "bramwell",
    name: "Bramwell",
    num: "02",
    summary:
      "We helped this e-commerce brand automate order processing and support, freeing their team to scale.",
    metric: "150%",
    metricLabel: "Faster order processing",
    image: "/media/cases/case-bramwell.png",
    challenge: {
      title: "Orders and support couldn’t keep up with growth",
      body: "Bramwell’s order volume outgrew a manual process built on inboxes and spreadsheets. Every spike meant delays, missed exceptions, and support tickets that piled up overnight. The team was hiring just to keep pace with work that should have been automated.",
    },
    strategy: {
      title: "Automate intake, exceptions, and replies",
      body: "We designed a pipeline that ingests orders, flags exceptions early, routes them to the right owner, and drafts status replies for common support cases. Integrations tied the storefront, warehouse, and helpdesk together so nothing depended on someone remembering to forward an email.",
    },
    results: [
      {
        metric: "150%",
        label: "Faster order processing",
        note: "Same-day fulfillment became the default for clean orders.",
      },
      {
        metric: "60%",
        label: "Fewer support tickets",
        note: "Proactive status updates cut “where’s my order?” volume.",
      },
      {
        metric: "4 hrs",
        label: "Saved daily",
        note: "Ops stopped babysitting every cart-to-ship exception by hand.",
      },
    ],
  },
  winslow: {
    slug: "winslow",
    name: "Winslow",
    num: "03",
    summary:
      "We automated this agency’s client reporting and campaign tracking, replacing manual spreadsheet work instantly.",
    metric: "200%",
    metricLabel: "Faster reporting time",
    image: "/media/cases/case-winslow.png",
    challenge: {
      title: "Reporting ate the week before every client call",
      body: "Winslow’s account teams spent days pulling metrics from ad platforms into spreadsheets, then formatting decks that were already stale by the meeting. Campaign tracking was fragmented, and nobody trusted a single source of truth.",
    },
    strategy: {
      title: "One reporting system, always current",
      body: "We connected their ad and analytics sources into an automated reporting layer with live dashboards and scheduled client-ready summaries. Account managers now open a brief that writes itself — and spend the meeting on strategy instead of data laundry.",
    },
    results: [
      {
        metric: "200%",
        label: "Faster reporting time",
        note: "Weekly client packs go out in a fraction of the old prep window.",
      },
      {
        metric: "90%",
        label: "Less spreadsheet work",
        note: "Manual pulls were replaced by scheduled, verified pipelines.",
      },
      {
        metric: "1 source",
        label: "Of truth for campaigns",
        note: "Teams and clients finally look at the same numbers.",
      },
    ],
  },
  ashworth: {
    slug: "ashworth",
    name: "Ashworth",
    num: "04",
    summary:
      "We rebuilt this restaurant group’s reservation and inventory system, cutting waste and manual scheduling chaos.",
    metric: "40%",
    metricLabel: "Reduction in waste",
    image: "/media/cases/case-ashworth.png",
    challenge: {
      title: "Reservations and inventory never talked to each other",
      body: "Ashworth’s multi-location group ran reservations, staffing, and kitchen inventory as separate rituals. Overbooking, understaffing, and food waste showed up every week — all from decisions made without a shared picture of demand.",
    },
    strategy: {
      title: "Connect demand signals to ops decisions",
      body: "We rebuilt reservation and inventory flows so covers, prep lists, and stock levels update together. Managers get clear signals for ordering and scheduling instead of gut feel, and staff see one calendar instead of three conflicting ones.",
    },
    results: [
      {
        metric: "40%",
        label: "Reduction in waste",
        note: "Ordering aligned to actual covers instead of last week’s guess.",
      },
      {
        metric: "35%",
        label: "Fewer scheduling conflicts",
        note: "Staffing tracks reservation load across locations.",
      },
      {
        metric: "12 hrs",
        label: "Saved weekly per site",
        note: "Managers stopped reconciling three systems every morning.",
      },
    ],
  },
  thornbury: {
    slug: "thornbury",
    name: "Thornbury",
    num: "05",
    summary:
      "We automated this SaaS company’s onboarding flow, reducing tickets and speeding up activation.",
    metric: "45%",
    metricLabel: "Fewer support tickets",
    image: "/media/cases/case-thornbury.jpg",
    challenge: {
      title:
        "Thornbury’s onboarding depended on manual checklists and support hand-holding, so new accounts stalled and tickets piled up before users ever reached value.",
      body: "Activation steps lived across product, CRM, and helpdesk with no single owner — every new customer became a custom project.",
    },
    strategy: {
      title:
        "We automated the onboarding path end to end — provisioning, nudges, and handoffs — so new accounts activate without a support ticket for every step.",
      body: "We started with the highest-friction setup moments, then expanded coverage until the default path ran hands-off with clear escalation only when needed.",
    },
    results: [
      {
        metric: "45%",
        label: "Fewer support tickets",
        note: "Guided activation cut “how do I set this up?” volume.",
      },
      {
        metric: "2×",
        label: "Faster time to activation",
        note: "New accounts reach first value without waiting on a human.",
      },
      {
        metric: "30 hrs",
        label: "Saved monthly",
        note: "Success stopped rebuilding the same onboarding checklist by hand.",
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
