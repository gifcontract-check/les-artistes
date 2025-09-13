import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Dois-je prendre rendez-vous ?",
    answer: "Oui, nous vous recommandons fortement de prendre rendez-vous pour vous garantir une place. Vous pouvez réserver facilement en ligne via notre partenaire Planity ou nous appeler directement."
  },
  {
    question: "Quels types de produits utilisez-vous ?",
    answer: "Nous utilisons exclusivement des produits de coiffure professionnels haut de gamme, reconnus pour leur qualité et leur respect du cheveu. Nous choisissons les meilleures marques pour garantir des résultats impeccables."
  },
  {
    question: "Combien de temps dure une prestation en moyenne ?",
    answer: "La durée varie en fonction du service. Une coupe homme classique dure environ 30 minutes, tandis qu'une prestation technique comme une couleur ou une décoloration peut prendre plusieurs heures. N'hésitez pas à nous demander une estimation lors de la prise de rendez-vous."
  },
  {
    question: "Proposez-vous des cartes cadeaux ?",
    answer: "Absolument ! Nous proposons des cartes cadeaux du montant de votre choix. C'est le cadeau idéal pour faire plaisir à vos proches. Venez directement au salon pour en obtenir une."
  },
];

export default function Faq() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Questions Fréquentes
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Trouvez les réponses à vos questions les plus courantes.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
