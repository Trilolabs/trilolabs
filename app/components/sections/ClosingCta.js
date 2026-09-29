import { CTA } from "../../content";

export default function ClosingCta() {
  return (
    <section className="closing" id={CTA.id} aria-label="Contact">
      <div className="closing__inner wrap reveal">
        <h2 className="display-title closing__title">{CTA.title}</h2>
        <a className="btn btn--pill btn--pill-lg" href={CTA.href}>
          {CTA.label}
        </a>
      </div>
    </section>
  );
}
