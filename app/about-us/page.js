import PageEnd from "../components/PageEnd";
import SectionBadgeMark from "../components/SectionBadgeMark";
import PageHero from "../components/PageHero";
import StatCounter from "../components/StatCounter";
import { ABOUT_PAGE } from "../content";

export const metadata = {
  title: "About us",
  description: ABOUT_PAGE.whoWeAre.body,
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  const { hero, whoWeAre, metrics } = ABOUT_PAGE;

  return (
    <main id="main">
      <PageHero
        title={hero.title}
        support={hero.support}
        countBadge={hero.countBadge}
        showBrands
      />

      <section className="who wrap" id="about" aria-label="Who we are">
        <div className="who__copy reveal">
          <p className="badge">
            <SectionBadgeMark />
            {whoWeAre.kicker}
          </p>
          <h2 className="display-title">{whoWeAre.title}</h2>
          <p className="who__body">{whoWeAre.body}</p>
        </div>

        <ul className="who__metrics" aria-label="About metrics">
          {metrics.map((stat) => (
            <li className="about-stat reveal" key={stat.label}>
              <p className="about-stat__label">{stat.label}</p>
              <p className="about-stat__value">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </p>
              {stat.description ? (
                <p className="about-stat__desc">{stat.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      <PageEnd />
    </main>
  );
}
