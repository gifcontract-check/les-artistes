import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Nous Contacter
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Rendez-nous visite ou appelez-nous pour toute question.
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Adresse</h3>
                <p className="text-foreground/80">116 Rue de Douai, 59000 Lille</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Téléphone</h3>
                <p className="text-foreground/80">07 62 23 69 51</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-foreground">Horaires</h3>
                <p className="text-foreground/80">Du Lundi au Samedi</p>
                <p className="text-foreground/80">10h00 - 19h00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
