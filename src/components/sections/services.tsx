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
        <path d="M20.53 4.47a2.5 2.5 0 0 0-3.53 0l-3.54 3.54a1 1 0 0 0 0 1.41l2.12 2.12a1 1 0 0 0 1.41 0l3.54-3.54a2.5 2.5 0 0 0 0-3.53Z"/>
        <path d="m6.5 11.5-5 5"/>
        <path d="M3.5 15.5 2 17l1 1 3 3 1 1 1.5-1.5"/>
        <path d="M19 9l-3 3"/>
        <path d="M2.06 14.94 4 13l2 2-1.94 1.94a1.5 1.5 0 0 1-2.12 0l-.88-.88a1.5 1.5 0 0 1 0-2.12Z"/>
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
