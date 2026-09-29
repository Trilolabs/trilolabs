import BookCallForm from "../components/BookCallForm";
import PageEnd from "../components/PageEnd";
import PageHero from "../components/PageHero";
import { BOOK_CALL, TRUST } from "../content";

export const metadata = {
  title: "Book a call",
  description: BOOK_CALL.support,
};

export default function BookACallPage() {
  return (
    <main id="main">
      <PageHero
        title={BOOK_CALL.title}
        support={BOOK_CALL.support}
        countBadge="01 / 01"
        showWave
      />

      <section className="book wrap" aria-label="Book a call form">
        <BookCallForm />

        <div className="book__brands">
          <p className="book__brands-label">{TRUST.label}</p>
          <ul className="book__brands-list">
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
      </section>

      <PageEnd />
    </main>
  );
}
