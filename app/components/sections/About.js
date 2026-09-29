import SectionBadgeMark from "../SectionBadgeMark";
import StatCounter from "../StatCounter";
import { ABOUT } from "../../content";

export default function About() {
  return (
    <section className="about" id={ABOUT.id} aria-label="About">
      <div className="about__inner wrap">
        <header className="about__head reveal">
          <div className="about__head-copy">
            <p className="badge">
              <SectionBadgeMark />
              {ABOUT.kicker}
            </p>
            <h2 className="display-title about__title">{ABOUT.title}</h2>
          </div>
          <a className="btn btn--pill about__cta" href={ABOUT.cta.href}>
            {ABOUT.cta.label}
          </a>
        </header>

        <div className="about__panel reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ABOUT.panel} alt="" />
          <div className="about__panel-stat">
            <p className="about__panel-value">
              <StatCounter
                value={ABOUT.panelStat.value}
                suffix={ABOUT.panelStat.suffix}
              />
            </p>
            <p className="about__panel-label">{ABOUT.panelStat.label}</p>
            <p className="about__panel-desc">{ABOUT.panelStat.description}</p>
          </div>
        </div>

        <div className="about__lower reveal">
          <p className="about__body">{ABOUT.body}</p>
          <ul className="about__stats" aria-label="Studio metrics">
            {ABOUT.stats.map((stat) => (
              <li className="about-stat" key={stat.label}>
                <p className="about-stat__label">{stat.label}</p>
                <p className="about-stat__value">
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
