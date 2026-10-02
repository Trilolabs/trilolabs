import BrandMarquee from "../BrandMarquee";
import { HERO } from "../../content";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/hero-wave.webp" alt="" />
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__brand">{HERO.brand}</h1>
        <p className="hero__support">{HERO.support}</p>
        <div className="hero__actions">
          <a className="btn btn--pill" href={HERO.primaryCta.href}>
            {HERO.primaryCta.label}
          </a>
          <a className="btn btn--ghost-pill" href={HERO.secondaryCta.href}>
            {HERO.secondaryCta.label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      <BrandMarquee />
    </section>
  );
}
