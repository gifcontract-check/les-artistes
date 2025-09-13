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
              <a href="https://www.planity.com" target="_blank" rel="noopener noreferrer" aria-label="Planity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 40"
                  className="h-10 fill-current text-foreground/80 hover:text-primary transition-colors"
                >
                  <path d="M23.13,0H7.88A7.88,7.88,0,0,0,0,7.88V23.13a7.88,7.88,0,0,0,7.88,7.87H23.13A7.88,7.88,0,0,0,31,23.13V7.88A7.88,7.88,0,0,0,23.13,0ZM19.23,21.8a1,1,0,0,1-1.38.32,6.12,6.12,0,0,1-2.39-1.3,6.23,6.23,0,0,1-2-2.14,6.59,6.59,0,0,1-.66-2.81V9.2h2.72v6.41a3.17,3.17,0,0,0,1,2.4,3,3,0,0,0,2.23.86,1,1,0,0,1,.84,1v1.93Z" />
                  <path d="M43.79,30.83H35.3V9.2h8.49Zm-2.72-19H38V28.11h3.07Z" />
                  <path d="M60.1,30.83H51.61V9.2H60.1Zm-2.72-19H54.33V28.11H57.38Z" />
                  <path d="M78.68,21.8a1,1,0,0,1-1.38.32,6.12,6.12,0,0,1-2.39-1.3,6.23,6.23,0,0,1-2-2.14,6.59,6.59,0,0,1-.66-2.81V9.2h2.72v6.41a3.17,3.17,0,0,0,1,2.4,3,3,0,0,0,2.23.86,1,1,0,0,1,.84,1v1.93Z" />
                  <path d="M90.81,30.83h-3l-5.2-10.58,1.4-2.52,4.89,9.82,4.88-9.82,1.4,2.52Z" />
                  <path d="M100,15.64a1.28,1.28,0,0,1-1.28,1.28H94.57v3.5a1.28,1.28,0,0,1-1.28,1.28H90.57a1.28,1.28,0,0,1-1.28-1.28V9.2h8.49v5.16h.28Z" />
                </svg>
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
