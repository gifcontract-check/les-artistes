import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Scissors, Brush, Sparkles, Droplets, Wind } from "lucide-react";

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Coupe & Coiffage",
    description: "Coupes sur mesure pour femmes, hommes et enfants, adaptées à votre style."
  },
  {
    icon: <Brush className="h-10 w-10 text-primary" />,
    title: "Coloration & Mèches",
    description: "Techniques de coloration innovantes pour un résultat naturel et lumineux."
  },
  {
    icon: <Wind className="h-10 w-10 text-primary" />,
    title: "Brushing",
    description: "Mise en forme parfaite pour toutes les occasions, du lisse au bouclé."
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Soins Capillaires",
    description: "Rituels de soins profonds pour revitaliser et sublimer vos cheveux."
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Coiffures d'Exception",
    description: "Chignons, tresses et coiffures de cérémonie pour vos grands événements."
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Nos Prestations
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Découvrez notre gamme de services conçus pour répondre à toutes vos envies.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-primary/20 text-center flex flex-col items-center p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                {service.icon}
                <CardTitle className="mt-4 text-2xl font-headline text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-foreground/70">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
