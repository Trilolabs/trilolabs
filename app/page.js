import DotField from "./components/DotField";
import Logo from "./components/Logo";

const MAIL =
  "mailto:info@trilolabs.com?subject=Trilolabs%20enquiry";

const SERVICES = [
  {
    title: "Product Design & Strategy",
    body: "Transforming business ideas into intuitive, user-centered digital experiences.",
  },
  {
    title: "Front-End Engineering",
    body: "Building responsive, scalable, and secure web-based platforms tailored to solve specific business problems.",
  },
  {
    title: "SaaS Product Building",
    body: "End-to-end delivery for web apps and platforms — discovery, design, APIs, and the reliability work that keeps customers once you launch.",
  },
  {
    title: "AI & ML Systems",
    body: "Models and data paths wired into real product surfaces — evaluation, retrieval, and inference you can measure and maintain.",
  },
  {
    title: "System Architecture",
    body: "Architecting the invisible engine of the software — robust server-side logic, efficient databases, and clear integration boundaries.",
  },
  {
    title: "Infrastructure & Deployment",
    body: "Setting up secure, scalable environments on cloud platforms and automating the deployment pipeline.",
  },
];

const CASES = [
  {
    num: "02",
    name: "Cobalt.",
    kind: "Payments product",
    year: "2024",
  },
  {
    num: "03",
    name: "Harbor.",
    kind: "Logistic Platform",
    year: "2025",
  },
  {
    num: "04",
    name: "Strata.",
    kind: "Design System",
    year: "2024",
  },
  {
    num: "05",
    name: "Meridian.",
    kind: "Brand and Web",
    year: "2024",
  },
  {
    num: "06",
    name: "Pulse.",
    kind: "Health Data Product",
    year: "2025",
  },
];

const PHASES = [
  {
    num: "01",
    title: "Discover",
    body: "We map the problem before the solution: the users, the constraints, and the one metric that actually decides whether this worked.",
    deliverable: "Problem map · success metric",
  },
  {
    num: "02",
    title: "Design",
    body: "Tight loops between Figma and code, reviewed together every few days, so what you sign off on is what we can actually build.",
    deliverable: "Prototype · design system",
  },
  {
    num: "03",
    title: "Build",
    body: "Weekly demos and real deploys — no dark rooms. You watch it come together as it comes together, and steer while it's cheap to steer.",
    deliverable: "Working software, weekly",
  },
  {
    num: "04",
    title: "Ship",
    body: "We launch, measure against that first metric, and hand over clean docs — then we iterate, or we get out of your way.",
    deliverable: "Launch · handover · docs",
  },
];

export default function Page() {
  return (
    <main id="main">
      <section className="hero" id="top">
        <DotField variant="hero" />
        <div className="hero__content">
          <p className="hero__est">/// est — Software studio</p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--1">We build the</span>
            <span className="hero__line hero__line--2">product and land</span>
            <span className="hero__line hero__line--3">the model.</span>
          </h1>
          <p className="hero__hint">move your cursor</p>
        </div>
      </section>

      <section className="intro wrap" aria-label="Introduction">
        <p className="intro__text reveal">
          A small team of engineers and designers who treat software like craft —
          shipping interfaces and systems for people who care about the details.
        </p>
        <div className="stats reveal" aria-label="Practice">
          <div className="stat">
            <p className="stat__value">20+</p>
            <p className="stat__label">Products shipped</p>
          </div>
          <div className="stat">
            <p className="stat__value">3</p>
            <p className="stat__label">Specialists</p>
          </div>
          <div className="stat">
            <p className="stat__value">18</p>
            <p className="stat__label">Clients</p>
          </div>
          <div className="stat">
            <p className="stat__value">.dev</p>
            <p className="stat__label">Software studio</p>
          </div>
        </div>
      </section>

      <section className="belief wrap" aria-label="Belief">
        <p className="belief__text reveal">
          At the heart of everything we build is a simple belief, software should
          work for people, not the other way around. We design every feature with
          clarity and purpose, stripping away complexity.
        </p>
      </section>

      <section className="services wrap" aria-label="Services">
        <ul className="service-grid">
          {SERVICES.map((item) => (
            <li className="service-card reveal" key={item.title}>
              <h3 className="service-card__title">{item.title}</h3>
              <p className="service-card__body">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="work wrap" id="work">
        <header className="block-head reveal">
          <p className="block-head__kicker">work</p>
          <h2 className="block-head__title">Case studies.</h2>
          <p className="block-head__sub">
            A few projects where the details earned their keep. Six shown, more
            on request.
          </p>
        </header>

        <a className="featured reveal" href={MAIL}>
          <div className="featured__media" aria-hidden="true">
            <DotField variant="panel" />
          </div>
          <div className="featured__copy">
            <p className="featured__eyebrow">Featured Project</p>
            <h3 className="featured__title">Helios → energy analytics</h3>
            <p className="featured__body">
              Helios Grid ran on a dashboard their own operators dreaded opening.
              We rebuilt it into a live view of the network that loads before you
              finish blinking.
            </p>
            <dl className="featured__meta">
              <div>
                <dt>Client</dt>
                <dd>Helios Grid</dd>
              </div>
              <div>
                <dt>Services</dt>
                <dd>Product - Platform</dd>
              </div>
              <div>
                <dt>Median Load</dt>
                <dd>3.2s → 280ms</dd>
              </div>
            </dl>
          </div>
        </a>

        <ul className="case-list">
          {CASES.map((item) => (
            <li key={item.num}>
              <a className="case-row reveal" href={MAIL}>
                <span className="case-row__num">{item.num}</span>
                <span className="case-row__name">{item.name}</span>
                <span className="case-row__kind">{item.kind}</span>
                <span className="case-row__year">{item.year}</span>
                <span className="case-row__arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="process" id="process">
        <div className="process__sticky wrap">
          <header className="block-head reveal">
            <p className="block-head__kicker">How it goes</p>
            <h2 className="block-head__title">
              How a project
              <br />
              actually goes.
            </h2>
            <p className="block-head__sub">
              No black boxes, no month-long silences. Every engagement runs the
              same four phases — and you can step off cleanly at any line.
            </p>
          </header>
        </div>

        <ol className="phase-stack wrap">
          {PHASES.map((phase) => (
            <li className="phase-card reveal" key={phase.num}>
              <div className="phase-card__meta">
                <span className="phase-card__num">{phase.num}</span>
                <span className="phase-card__label">Phase</span>
              </div>
              <div>
                <h3 className="phase-card__title">{phase.title}</h3>
                <p className="phase-card__body">{phase.body}</p>
                <p className="phase-card__deliverable">
                  Deliverable — {phase.deliverable}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="quote wrap" aria-label="On the record">
        <p className="quote__kicker reveal">On the record</p>
        <p className="quote__client reveal">Helios Grid — Energy analytics</p>
        <blockquote className="quote__text reveal">
          It loads before I&apos;ve finished asking the question. My team stopped
          keeping the backup spreadsheet open within a week — that&apos;s the
          highest praise I can give a tool.
        </blockquote>
        <p className="quote__role reveal">VP Operations, Helios Grid</p>
        <p className="quote__name reveal">Sarah Okonkwo</p>
      </section>

      <section className="cta field-section" id="contact">
        <div className="field-section__bg" aria-hidden="true">
          <DotField variant="panel" />
        </div>
        <div className="wrap field-section__content cta__inner">
          <p className="cta__kicker reveal">Start a project</p>
          <h2 className="cta__title reveal">
            Let’s build
            <br />
            something
            <br />
            worth shipping.
          </h2>
          <a className="cta__mail reveal" href={MAIL}>
            info@trilolabs.com
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </section>

      <footer className="foot">
        <div className="foot__inner wrap">
          <div className="foot__brand-block">
            <a className="foot__brand" href="#top" aria-label="Trilolabs home">
              <Logo />
            </a>
            <p className="foot__tag">Software studio</p>
          </div>
          <div className="foot__col">
            <p className="foot__label">Social</p>
            <p className="foot__muted">X · GitHub · Dribbble</p>
          </div>
          <div className="foot__col">
            <p className="foot__label">Studio</p>
            <p className="foot__muted">Remote · Worldwide</p>
          </div>
          <div className="foot__col">
            <p className="foot__label">© {new Date().getFullYear()}</p>
            <p className="foot__muted">All rights reserved</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
