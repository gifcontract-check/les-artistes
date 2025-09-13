import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-headline text-2xl text-primary">Les Artistes</h3>
            <p className="mt-2 text-foreground/70">L'élégance au bout des ciseaux.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground">Contact</h4>
            <ul className="mt-2 space-y-1 text-foreground/70">
              <li>116 Rue de Douai, 59000 Lille</li>
              <li>07 62 23 69 51</li>
              <li><a href="https://www.planity.com/les-artistes-59000-lille" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Réserver en ligne</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-foreground">Nos partenaires</h4>
            <div className="mt-2 flex justify-center md:justify-start">
              <a 
                href="https://www.planity.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Planity"
                className="text-2xl font-bold text-foreground/80 hover:text-primary transition-colors"
              >
                Planity
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Salon de coiffure Les Artistes. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
