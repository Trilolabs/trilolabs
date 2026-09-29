import SectionBadgeMark from "../SectionBadgeMark";
import { PROCESS } from "../../content";

export default function Process() {
  return (
    <section className="process wrap" id={PROCESS.id} aria-label="Process">
      <header className="block-head reveal">
        <p className="badge">
          <SectionBadgeMark />
          {PROCESS.kicker}
        </p>
        <h2 className="display-title">{PROCESS.title}</h2>
      </header>
      <ol className="process-steps">
        {PROCESS.steps.map((step) => (
          <li className="process-step reveal" key={step.num}>
            <p className="process-step__num">{step.num}</p>
            <div className="process-step__copy">
              <div className="process-step__head">
                <h3 className="process-step__title">{step.title}</h3>
                <span className="process-step__timing pill">{step.timing}</span>
              </div>
              <p className="process-step__body">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
