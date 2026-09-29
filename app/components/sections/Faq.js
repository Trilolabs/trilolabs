import FaqAccordion from "../FaqAccordion";
import SectionBadgeMark from "../SectionBadgeMark";
import { BOOK, FAQ } from "../../content";

export default function Faq() {
  return (
    <section className="faq wrap" id={FAQ.id} aria-label="FAQ">
      <header className="block-head reveal">
        <p className="badge">
          <SectionBadgeMark />
          {FAQ.kicker}
        </p>
        <h2 className="display-title">{FAQ.title}</h2>
      </header>
      <div className="faq__layout">
        <FaqAccordion items={FAQ.items} />
        <aside className="faq-aside reveal">
          <p className="faq-aside__title">Still Have A Question</p>
          <p className="faq-aside__body">
            Have a question we didn’t cover? Send us a message and we’ll get
            back to you quickly.
          </p>
          <a className="btn btn--pill" href={BOOK}>
            Book a free call
          </a>
        </aside>
      </div>
    </section>
  );
}
