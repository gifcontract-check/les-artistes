import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="relative z-10 px-4 animate-fade-in text-white" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat">
          LES ARTISTES LILLE
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Créativité, expertise et élégance au service de votre beauté.
        </p>
        <Button asChild size="lg" className="mt-8">
          <a href="https://www.planity.com/les-artistes-59000-lille" target="_blank" rel="noopener noreferrer">
            Réserver maintenant
          </a>
        </Button>
      </div>
    </section>
  );
}
