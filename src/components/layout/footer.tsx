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
                  viewBox="0 0 160 160"
                  className="h-16 w-auto fill-current text-foreground/80 hover:text-primary transition-colors"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M79.8,10.2c-29.8,0-54,24.2-54,54v0c0,13.1,4.7,25.1,12.4,34.5l-0.1-0.1c1-1.3,1.9-2.6,2.8-4.1c0.3-0.5,0.6-1,0.9-1.5 c1.5-2.6,2.7-5.3,3.7-8.2c0.1-0.2,0.1-0.5,0.2-0.7c1-2.9,1.7-6,2-9.2c0-0.2,0.1-0.5,0.1-0.7c0.6-3.1,0.9-6.3,0.9-9.5 c0-16-13-29-29-29s-29,13-29,29c0,16,13,29,29,29c2.8,0,5.5-0.4,8.1-1.1c0.3-0.1,0.5-0.1,0.8-0.2c2.6-0.8,5.1-1.9,7.4-3.4 c0.5-0.3,1-0.6,1.4-1c2.2-1.6,4.2-3.5,5.9-5.6l0,0c8.8-10.2,14-23.3,14-37.8C133.8,34.4,109.6,10.2,79.8,10.2z M79.8,25.8 c-20.9,0-37.8,16.9-37.8,37.8s16.9,37.8,37.8,37.8s37.8-16.9,37.8-37.8S100.7,25.8,79.8,25.8z"
                  ></path>
                  <path
                    d="M17.4,115.1h15.9v-1.1c-1.3-3.6-2-7.5-2-11.5c0-15.1,12.3-27.4,27.4-27.4s27.4,12.3,27.4,27.4c0,4-0.7,7.9-2,11.5v1.1 h15.9v-1.1c-1.3-3.9-2-8-2-12.2c0-19.4-15.7-35.1-35.1-35.1S25.1,82.4,25.1,101.8c0,4.2,0.7,8.3,2,12.2V115.1z"
                  ></path>
                  <path
                    d="M28.4,142.2V124h10v18.2H28.4z M52.4,142.2V124h10v18.2H52.4z M76.4,142.2V124h10v18.2H76.4z M100.5,142.2V124h10v18.2 H100.5z M123.4,142.2h-10v-9.9h-8.2v9.9h-10V124h28.2V142.2z M123.4,142.2"
                  ></path>
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
