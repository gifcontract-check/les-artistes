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
                  viewBox="0 0 162 44"
                  className="h-10 w-auto fill-current text-foreground/80 hover:text-primary transition-colors"
                >
                  <path d="M37.8 0C17 0 0 16.9 0 37.8v5.8h8.2v-5.8C8.2 21.6 21.6 8.2 37.8 8.2s29.6 13.4 29.6 29.6v5.8h8.2v-5.8C75.6 16.9 58.6 0 37.8 0z M37.8 13.1c-13.8 0-24.9 11.2-24.9 24.9v5.6h49.8v-5.6C62.7 24.2 51.6 13.1 37.8 13.1z"></path>
                  <path d="M85.9 6.5h8.2V32h9.1v5.8h-17.3zM107.5 6.5h8.2v25.5h8.1v5.8h-16.3zM128.2 6.5h16.8v5.8h-8.6v6.4h7.6v5.8h-7.6v7.5h8.9v5.8h-17.1zM147.2 6.5h8.2v31.3h-8.2z"></path>
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
