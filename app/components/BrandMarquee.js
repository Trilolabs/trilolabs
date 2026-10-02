"use client";

import { TRUST } from "../content";

function BrandMark({ brand }) {
  if (brand.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="hero__brand-logo"
        src={brand.src}
        alt={brand.name}
        width={112}
        height={28}
        decoding="async"
        loading="lazy"
      />
    );
  }
  return <span className="hero__brand-mark">{brand.name}</span>;
}

function BrandItem({ brand, inertLinks = false }) {
  const mark = <BrandMark brand={brand} />;
  if (!brand.href) return <li>{mark}</li>;
  return (
    <li>
      <a
        href={brand.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={inertLinks ? -1 : undefined}
      >
        {mark}
      </a>
    </li>
  );
}

/** Duplicate list so the CSS marquee can loop seamlessly */
function BrandTrack({ brands, ariaHidden = false }) {
  // With only a few brands, repeat so the strip feels continuous.
  const loop = [...brands, ...brands];
  return (
    <ul
      className="hero__brands-track"
      aria-hidden={ariaHidden || undefined}
      inert={ariaHidden || undefined}
    >
      {loop.map((brand, i) => {
        // First pass of the visible track stays focusable; duplicates are not.
        const inertLinks = ariaHidden || i >= brands.length;
        return (
          <BrandItem
            key={`${brand.name}-${ariaHidden ? "b" : "a"}-${i}`}
            brand={brand}
            inertLinks={inertLinks}
          />
        );
      })}
    </ul>
  );
}

export default function BrandMarquee({
  label = TRUST.label,
  brands = TRUST.brands,
  className = "hero__brands",
}) {
  return (
    <div className={className}>
      {label ? <p className="hero__brands-label">{label}</p> : null}
      <div className="hero__brands-marquee" aria-label={label || "Partner brands"}>
        <div className="hero__brands-marquee-inner">
          <BrandTrack brands={brands} />
          <BrandTrack brands={brands} ariaHidden />
        </div>
      </div>
    </div>
  );
}
