import SectionBadgeMark from "../SectionBadgeMark";
import { WHY } from "../../content";

export default function Why() {
  return (
    <section className="why wrap" id="why" aria-label="Why choose us">
      <header className="block-head reveal">
        <p className="badge">
          <SectionBadgeMark />
          {WHY.kicker}
        </p>
        <h2 className="display-title">{WHY.title}</h2>
      </header>
      <div className="why__grid">
        <div className="why-col why-col--with reveal">
          <p className="why-col__label">{WHY.withLabel}</p>
          <ul>
            {WHY.withItems.map((item) => (
              <li key={item}>
                <span className="why-col__check" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="why__vs reveal" aria-hidden="true">
          <span>VS</span>
        </div>
        <div className="why-col why-col--without reveal">
          <p className="why-col__label">{WHY.withoutLabel}</p>
          <ul>
            {WHY.withoutItems.map((item) => (
              <li key={item}>
                <span className="why-col__dash" aria-hidden="true">
                  –
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
