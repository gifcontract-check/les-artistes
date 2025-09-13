import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-banner');

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 px-4 text-white animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
          Salon de coiffure Les Artistes
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-foreground/80">
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
