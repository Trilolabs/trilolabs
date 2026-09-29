import About from "./components/sections/About";
import ClosingCta from "./components/sections/ClosingCta";
import Faq from "./components/sections/Faq";
import Hero from "./components/sections/Hero";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import SiteFooter from "./components/sections/SiteFooter";
import Work from "./components/sections/Work";
import Why from "./components/sections/Why";

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Process />
      <Work />
      <Why />
      <Faq />
      <ClosingCta />
      <SiteFooter />
    </main>
  );
}
