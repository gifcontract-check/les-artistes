import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Presentation from "@/components/sections/presentation";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import StyleAdvisor from "@/components/sections/style-advisor";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="relative">
        <Hero />
        <div className="relative z-10 bg-background">
          <Presentation />
          <Services />
          <Team />
          <Testimonials />
          <StyleAdvisor />
          <Faq />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
