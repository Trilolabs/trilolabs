import BookCallForm from "../components/BookCallForm";
import BrandMarquee from "../components/BrandMarquee";
import PageEnd from "../components/PageEnd";
import PageHero from "../components/PageHero";
import { BOOK_CALL } from "../content";

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
        <BrandMarquee className="book__brands" />
      </section>

      <PageEnd />
    </main>
  );
}
