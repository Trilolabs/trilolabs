import BrandMarquee from "../BrandMarquee";
import { HERO } from "../../content";

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Hero">
      <link
        rel="preload"
        as="image"
        href="/media/hero-wave-sm.webp"
        type="image/webp"
        imageSrcSet="/media/hero-wave-sm.webp 960w, /media/hero-wave.webp 1600w"
        imageSizes="100vw"
      />
      <div className="hero__media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero-wave.webp"
          srcSet="/media/hero-wave-sm.webp 960w, /media/hero-wave.webp 1600w"
          sizes="100vw"
          alt=""
          width={1600}
          height={1111}
          decoding="async"
          fetchPriority="high"
        />
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
