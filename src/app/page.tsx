import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Presentation from "@/components/sections/presentation";
import Services from "@/components/sections/services";
import Team from "@/components/sections/team";
import Testimonials from "@/components/sections/testimonials";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Presentation />
        <Services />
        <Team />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
