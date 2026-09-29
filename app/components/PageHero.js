import { HERO, TRUST } from "../content";

function spacedTitle(title) {
  return title.split("").map((ch, i) => {
    if (ch === " ") {
      return <span key={`sp-${i}`} className="page-hero__space" />;
    }
    return <span key={`${ch}-${i}`}>{ch}</span>;
  });
}

export default function PageHero({
  title,
  support,
  countBadge,
  showWave = true,
  showBrands = false,
  primaryCta = HERO.primaryCta,
  secondaryCta = HERO.secondaryCta,
}) {
  return (
    <section className="page-hero" aria-label={title}>
      {showWave ? (
        <div className="page-hero__media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/hero-wave.webp" alt="" />
        </div>
      ) : null}
      <div className="page-hero__veil" aria-hidden="true" />
      <div className="page-hero__grain" aria-hidden="true" />

      {countBadge ? <p className="page-hero__count">{countBadge}</p> : null}

      <div className="page-hero__content">
        <h1 className="page-hero__title">{spacedTitle(title)}</h1>
        {support ? <p className="page-hero__support">{support}</p> : null}
        <div className="page-hero__actions">
          <a className="btn btn--pill" href={primaryCta.href}>
            {primaryCta.label}
          </a>
          <a className="btn btn--ghost-pill" href={secondaryCta.href}>
            {secondaryCta.label}
            <span className="btn__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>

      {showBrands ? (
        <div className="page-hero__brands">
          <p className="page-hero__brands-label">{TRUST.label}</p>
          <ul className="page-hero__brands-list">
            {TRUST.brands.map((brand) => (
              <li key={brand.name}>
                {brand.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    className="hero__brand-logo"
                    src={brand.src}
                    alt={brand.name}
                    height={28}
                  />
                ) : (
                  <span className="hero__brand-mark">{brand.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
