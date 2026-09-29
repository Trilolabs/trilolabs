import { TRUST } from "../../content";

export default function Trust() {
  return (
    <section className="trust wrap" aria-label={TRUST.label}>
      <p className="trust__label reveal">{TRUST.label}</p>
      <ul className="trust__list reveal">
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
    </section>
  );
}
