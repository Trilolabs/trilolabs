import StatCounter from "../StatCounter";
import SectionBadgeMark from "../SectionBadgeMark";
import { WORK } from "../../content";

const homepageCases = WORK.cases;
const totalBadge = String(WORK.cases.length).padStart(2, "0");

export default function Work({
  cases = homepageCases,
  showViewAll = true,
  showHead = true,
} = {}) {
  return (
    <section className="work wrap" id={WORK.id} aria-label="Case studies">
      {showHead ? (
        <header className="block-head work__head reveal">
          <div>
            <p className="badge">
              <SectionBadgeMark />
              {WORK.kicker}
            </p>
            <h2 className="display-title">{WORK.title}</h2>
          </div>
          {showViewAll ? (
            <a className="view-all" href={WORK.viewAllHref}>
              {WORK.viewAllLabel}
              <span aria-hidden="true"> →</span>
            </a>
          ) : null}
        </header>
      ) : null}

      <ul className="case-cards">
        {cases.map((item) => (
          <li key={item.slug || item.num}>
            <a
              className="case-card reveal"
              href={`/case-studies/${item.slug}`}
            >
              {item.image ? (
                <div className="case-card__media" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" />
                </div>
              ) : null}
              <div className="case-card__veil" aria-hidden="true" />
              <span className="case-card__count">{totalBadge}</span>
              <div className="case-card__body-wrap">
                <div className="case-card__copy">
                  <span className="case-card__num">{item.num}</span>
                  <h3 className="case-card__name">{item.name}</h3>
                  <p className="case-card__body">{item.body}</p>
                </div>
                <p className="case-card__metric">
                  <span className="case-card__metric-value">
                    {typeof item.metricValue === "number" ? (
                      <StatCounter
                        value={item.metricValue}
                        suffix={item.metricSuffix || ""}
                      />
                    ) : (
                      item.metric
                    )}
                  </span>
                  <span className="case-card__metric-label">
                    {item.metricLabel}
                  </span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
