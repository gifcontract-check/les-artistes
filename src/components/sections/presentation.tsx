export default function Presentation() {
  return (
    <section id="presentation" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          // IMPORTANT: Remplacez cette URL par le lien vers votre propre vidéo.
          // Vous pouvez héberger une vidéo sur un service comme Cloudinary, Vimeo, etc.
          src="https://videos.pexels.com/video-files/5938340/5938340-hd_1920_1080_25fps.mp4" 
        >
          Votre navigateur ne supporte pas les vidéos.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Qui nous sommes ?
        </h2>
        <div className="mt-8 text-lg text-foreground/80 space-y-6">
          <p>
            Nous sommes Les Artistes, un salon où la coiffure est élevée au rang d'art. Notre équipe de coiffeurs-visagistes passionnés met son expertise et sa créativité à votre service pour révéler votre beauté unique.
          </p>
          <p>
            Plus qu'un simple salon, nous vous offrons une expérience haut de gamme et personnalisée dans une ambiance chic et épurée. Chaque coupe, chaque couleur est pensée pour sublimer votre style et refléter votre personnalité. Confiez-nous vos cheveux, nous en ferons une œuvre d'art.
          </p>
        </div>
      </div>
    </section>
  );
}
