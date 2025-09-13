import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

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
];

export default function Testimonials() {
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
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-primary/20 flex flex-col p-6">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <div className="flex items-center">
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
          ))}
        </div>
      </div>
    </section>
  );
}
