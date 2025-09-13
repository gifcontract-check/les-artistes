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
                  viewBox="0 0 250 100"
                  className="h-10 w-auto fill-current text-foreground/80 hover:text-primary transition-colors"
                >
                  <path d="M62.83,0H20.18A20.18,20.18,0,0,0,0,20.18V62.83A20.18,20.18,0,0,0,20.18,83H62.83A20.18,20.18,0,0,0,83,62.83V20.18A20.18,20.18,0,0,0,62.83,0ZM51.89,58.33a2.63,2.63,0,0,1-3.69.86,16.53,16.53,0,0,1-6.45-3.5,16.82,16.82,0,0,1-5.38-5.77,17.78,17.78,0,0,1-1.78-7.58V24.83H42v17.3a8.55,8.55,0,0,0,2.78,6.48,8.1,8.1,0,0,0,6,2.32,2.63,2.63,0,0,1,2.26,2.63v5.2Z" />
                  <path d="M118.17,82.67H95.25V24.83h22.92Zm-7.33-50.5H102.6v43H110.84Z" />
                  <path d="M162.18,82.67H139.26V24.83h22.92Zm-7.33-50.5H146.59v43H154.85Z" />
                  <path d="M212.33,58.33a2.63,2.63,0,0,1-3.69.86,16.53,16.53,0,0,1-6.45-3.5,16.82,16.82,0,0,1-5.38-5.77,17.78,17.78,0,0,1-1.78-7.58V24.83h7.33v17.3a8.55,8.55,0,0,0,2.78,6.48,8.1,8.1,0,0,0,6,2.32,2.63,2.63,0,0,1,2.26,2.63v5.2Z" />
                  <path d="M245.06,82.67h-8.1l-14-28.55,3.78-6.8,13.2,26.5,13.18-26.5,3.78,6.8Z" />
                  <path d="M270,42.17a3.46,3.46,0,0,1-3.46,3.46h-11.2v9.45a3.46,3.46,0,0,1-3.46,3.46h-6.3a3.46,3.46,0,0,1-3.46-3.46V24.83h22.92v14h.75Z" />
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
