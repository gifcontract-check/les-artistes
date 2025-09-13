import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles } from "lucide-react";

const servicesCategories = {
  "Coiffure Homme": {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    items: [
      "Dégradé classique",
      "Dégradé progressif",
      "Classic cut \"taper\"/cut espagnol",
      "Shampoing + coupe + coiffage",
      "Coupe enfant -12 ans"
    ]
  },
  "Barbe": {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M20 5h-3.4a1 1 0 0 0-1 .8l-2.1 6.8c-.2.6-.8 1-1.4 1H8" />
        <path d="M6 5H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2" />
        <path d="M16 5h2a2 2 0 0 1 2 2v2c0 1.1-.9 2-2 2h-2" />
        <path d="M6 13h4" />
        <path d="M6 17h10" />
        <path d="m18 17 2 2" />
        <path d="m5 8 1-1" />
      </svg>
    ),
    items: [
      "Taille de barbe sculptée + dégradé tondeuse + traçage",
      "Rasage à l'ancienne"
    ]
  },
  "Technique": {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    items: [
      "Epilation au fil",
      "Coloration blanc homme",
      "Décoloration + patine",
      "Coloration gris homme"
    ]
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Nos Prestations
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Découvrez notre gamme de services conçus pour répondre à toutes vos envies.
            </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {Object.entries(servicesCategories).map(([category, details]) => (
            <Card key={category} className="bg-background border-primary/20 text-center flex flex-col p-8">
              <CardHeader className="flex-row items-center justify-center gap-4">
                <CardTitle className="text-2xl font-bold text-foreground">{category}</CardTitle>
                {details.icon}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground/70">
                  {details.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
