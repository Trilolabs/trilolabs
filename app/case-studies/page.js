import PageEnd from "../components/PageEnd";
import PageHero from "../components/PageHero";
import Work from "../components/sections/Work";
import { WORK } from "../content";

export const metadata = {
  title: "Case Studies",
  description: WORK.title,
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main id="main">
      <PageHero
        title="Case Studies"
        support="From e-commerce to software, see how our automation systems solved real problems and delivered measurable results."
        countBadge={`0${WORK.cases.length}`}
      />
      <Work cases={WORK.cases} showViewAll={false} showHead={false} />
      <PageEnd />
    </main>
  );
}
