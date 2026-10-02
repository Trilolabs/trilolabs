import { notFound } from "next/navigation";

import PageEnd from "../../components/PageEnd";
import SectionBadgeMark from "../../components/SectionBadgeMark";
import { BOOK, CASES, WORK } from "../../content";

export function generateStaticParams() {
  return WORK.cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = CASES[slug];
  if (!item) return { title: "Case Study" };
  return {
    title: `${item.name} Case Study`,
    description: item.summary,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const item = CASES[slug];
  if (!item) notFound();

  return (
    <main id="main">
      <section className="case-detail-hero wrap" aria-label={item.name}>
        <p className="case-detail-hero__num">
          {item.num} / {String(WORK.cases.length).padStart(2, "0")}
        </p>
        <h1 className="case-detail-hero__title">{item.name}</h1>
        <p className="case-detail-hero__summary">{item.summary}</p>
        {item.externalUrl ? (
          <p className="case-detail-hero__link">
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit {item.name}
              <span aria-hidden="true"> →</span>
            </a>
          </p>
        ) : null}
        <p className="case-detail-hero__metric">
          <span className="case-detail-hero__metric-value">{item.metric}</span>
          <span className="case-detail-hero__metric-label">
            {item.metricLabel}
          </span>
        </p>
        {item.image ? (
          <div className="case-detail-hero__media" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" />
          </div>
        ) : null}
      </section>

      <section className="case-block wrap" aria-label="Challenge">
        <p className="badge">
          <SectionBadgeMark />
          The Challenge
        </p>
        <h2 className="display-title">{item.challenge.title}</h2>
        <p className="case-block__body">{item.challenge.body}</p>
      </section>

      <section className="case-block wrap" aria-label="Strategy">
        <p className="badge">
          <SectionBadgeMark />
          Our Strategy
        </p>
        <h2 className="display-title">{item.strategy.title}</h2>
        <p className="case-block__body">{item.strategy.body}</p>
      </section>

      <section className="case-results wrap" aria-label="Results">
        <header className="block-head">
          <p className="badge">
            <SectionBadgeMark />
            The Results
          </p>
          <h2 className="display-title">What changed after launch.</h2>
        </header>
        <ul className="case-results__grid">
          {item.results.map((result) => (
            <li key={result.label}>
              <p className="case-results__metric">{result.metric}</p>
              <p className="case-results__label">{result.label}</p>
              <p className="case-results__note">{result.note}</p>
            </li>
          ))}
        </ul>
        <a className="btn btn--pill" href={BOOK}>
          Book a Demo
        </a>
      </section>

      <PageEnd />
    </main>
  );
}
