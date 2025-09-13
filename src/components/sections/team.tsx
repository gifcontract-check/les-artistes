import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Team() {
  const younesImage = PlaceHolderImages.find(p => p.id === 'younes-portrait');
  const yacineImage = PlaceHolderImages.find(p => p.id === 'yacine-portrait');

  const teamMembers = [
    {
      name: 'Younes Khudur',
      description: 'Maître coiffeur et artiste dans l\'âme, Younes transforme chaque coupe en une signature de style unique. Sa précision et sa créativité sont la pierre angulaire de notre salon.',
      image: younesImage,
    },
    {
      name: 'Yacine',
      description: 'Spécialiste de la barbe et des techniques de coiffure modernes, Yacine allie savoir-faire traditionnel et tendances actuelles. Son expertise garantit un résultat impeccable et personnalisé.',
      image: yacineImage,
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Notre Équipe
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Des artisans passionnés au service de votre style.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              {member.image && (
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 mb-6">
                  <Image
                    src={member.image.imageUrl}
                    alt={`Portrait de ${member.name}`}
                    fill
                    sizes="192px"
                    className="object-cover"
                    data-ai-hint={member.image.imageHint}
                  />
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground">{member.name}</h3>
              <p className="mt-2 max-w-sm text-foreground/70">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
