import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Presentation from "@/components/sections/presentation";
import Services from "@/components/sections/services";
import StyleAdvisor from "@/components/sections/style-advisor";
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
        <StyleAdvisor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
