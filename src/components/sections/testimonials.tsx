"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Thomas L.",
    email: "thomas.l@gmail.com",
    review: "De loin le meilleur salon de Lille. L'équipe est super pro et l'ambiance est top. Younes est un vrai artiste, ma coupe est toujours parfaite. Je recommande à 100% !",
  },
  {
    name: "Karim B.",
    email: "karim.b@outlook.com",
    review: "J'y vais pour la barbe et la coupe, et je ne suis jamais déçu. Yacine est méticuleux et prend le temps de faire un travail impeccable. On se sent bien accueilli, c'est toujours un plaisir.",
  },
  {
    name: "Julien D.",
    email: "julien.d@gmail.com",
    review: "Une équipe de passionnés qui maîtrise son art sur le bout des doigts. Le salon est hyper propre et le style est soigné. Mention spéciale à Khudur pour ses conseils techniques.",
  },
  {
    name: "Maxime P.",
    email: "maxime.p@protonmail.com",
    review: "Très satisfait de ma première visite. Le salon est magnifique et l'accueil chaleureux. Le coiffeur a parfaitement compris ce que je voulais. J'ai trouvé mon nouveau salon attitré !",
  },
  {
    name: "Lucas G.",
    email: "lucas.g@yahoo.com",
    review: "Un service client irréprochable et des coiffeurs très à l'écoute. Le résultat est toujours à la hauteur de mes attentes. Je ne peux que recommander Les Artistes.",
  },
];

const maskEmail = (email: string) => {
  const [localPart, domain] = email.split('@');
  const [domainName, domainTld] = domain.split('.');
  
  const maskedLocal = `${localPart[0]}..${localPart[localPart.length - 1]}`;
  const maskedDomain = `${domainName[0]}....`;
  
  return `${maskedLocal}@${maskedDomain}.${domainTld}`;
};

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Ce que nos clients disent
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            La satisfaction de nos clients est notre plus grande fierté.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-background border-primary/20 flex flex-col p-6 h-full">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-foreground/70">{maskEmail(testimonial.email)}</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80 italic">"{testimonial.review}"</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
