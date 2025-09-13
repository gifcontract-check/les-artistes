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
                  viewBox="0 0 250 60"
                  className="h-8 fill-current text-foreground/80 hover:text-primary transition-colors"
                >
                  <path d="M24.7 9.8c-5.1 0-8.2 3.1-8.2 7.7 0 4.6 3.1 7.7 8.2 7.7s8.2-3.1 8.2-7.7c0-4.6-3.1-7.7-8.2-7.7zm0 12.3c-2.9 0-3.9-2.3-3.9-4.6s1-4.6 3.9-4.6 3.9 2.3 3.9 4.6-1 4.6-3.9 4.6zM46.7 9.8v14.7h-4.3V9.8h-6V6.7h16.3v3.1h-6zM67.3 6.7v3.1h-5.8v14.7h-4.3V9.8h-5.8V6.7h15.9zM88.1 9.8c-5.1 0-8.2 3.1-8.2 7.7 0 4.6 3.1 7.7 8.2 7.7s8.2-3.1 8.2-7.7c0-4.6-3.1-7.7-8.2-7.7zm0 12.3c-2.9 0-3.9-2.3-3.9-4.6s1-4.6 3.9-4.6 3.9 2.3 3.9 4.6-1 4.6-3.9 4.6zM108.9 9.8l-6.2 14.7h-4.7l-6.2-14.7h4.8l3.7 9.4 3.7-9.4h4.5zM128 9.8v14.7h-4.3V9.8h-6V6.7h16.3v3.1h-6zM151.7 15.1h-7.8v-4.1h7.4V7.8h-7.4V6.7h8.2v11.5c0 2.2-1.2 3.3-3.3 3.3h-5.2v-3.1h4.9c.8 0 1.1-.3 1.1-.9v-2.4z"></path>
                  <path d="M165.7 13.5c0-3.6 2.3-6.8 6.5-6.8s6.5 3.2 6.5 6.8c0 3.6-2.3 6.8-6.5 6.8s-6.5-3.2-6.5-6.8zm8.7 0c0-1.9-1-3.7-2.2-3.7s-2.2 1.8-2.2 3.7 1 3.7 2.2 3.7 2.2-1.8 2.2-3.7zM189.5 7.8v12.5h-3.4V7.8h3.4zM203.2 20.3h-3.4l-5.3-7.5v7.5h-3.4V7.8h3.4l5.3 7.5V7.8h3.4v12.5zM221.7 13.5c0-3.6 2.3-6.8 6.5-6.8s6.5 3.2 6.5 6.8c0 3.6-2.3 6.8-6.5 6.8s-6.5-3.2-6.5-6.8zm8.7 0c0-1.9-1-3.7-2.2-3.7s-2.2 1.8-2.2 3.7 1 3.7 2.2 3.7 2.2-1.8 2.2-3.7zM245.8 7.8h3.4v8.8l5.9-8.8h4.1l-6.5 9.4v3.1h-6.9V7.8z"></path>
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
