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
                  role="img"
                  viewBox="0 0 100 100"
                  className="h-24 w-auto fill-current text-foreground/80 hover:text-primary transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.45 14.23H22.3v42.1h11.15V14.23z M54.6 14.23H43.45v13.6h-5.52v9.3h5.52v19.2h11.15V14.23z"
                    fillOpacity="0"
                    stroke="currentColor"
                    strokeWidth="0"
                  />
                  <path
                    d="M48.975 0C38.235 0 29.5 8.73 29.5 19.47v27.28c0 10.74 8.73 19.47 19.475 19.47h1.05C60.765 66.22 69.5 57.49 69.5 46.75V19.47C69.5 8.73 60.765 0 50.025 0h-1.05zm-6.26 46.75V19.47c0-3.99 3.23-7.22 7.22-7.22h.1c3.99 0 7.22 3.23 7.22 7.22v27.28c0 3.99-3.23 7.22-7.22 7.22h-.1c-3.99 0-7.22-3.23-7.22-7.22z"
                  />
                  <path
                    d="M10.71 77.26h12.1v11.85h-12.1zM26.41 77.26h12.1v11.85h-12.1zM42.11 77.26H51.9v2.96h-4.24v8.89h-5.55zM55.61 77.26h12.1v11.85h-12.1zM70.91 77.26h5.55v8.89h5.55v2.96h-11.1zM83.61 77.26h12.1v2.96h-6.55v8.89h-5.55z"
                  />
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
