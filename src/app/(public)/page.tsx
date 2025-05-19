import Faq from "./_components/faq";
import FeaturedPrograms from "./_components/featured-programs";
import Features from "./_components/features";
import Hero from "./_components/hero";
import Status from "./_components/status";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <div className="space-y-16 mx-auto md:p-6 p-3 mt-20">
      <Hero />

      <Status />

      <Features />

      <FeaturedPrograms />

      <Testimonials />

      <Faq />
    </div>
  );
}