"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Hero() {
  const [videoEnabled, setVideoEnabled] = useState(true);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {videoEnabled && (
          <>
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/Video site XVI barber.mov" 
            >
              Votre navigateur ne supporte pas les vidéos.
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </>
        )}
      </div>
      <div className="relative z-10 px-4 animate-fade-in text-white" style={{ animationDelay: '0.s', animationFillMode: 'both' }}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-montserrat">
          LES ARTISTES LILLE
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Créativité, expertise et élégance au service de votre beauté.
        </p>
        <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
          <a href="https://www.planity.com/les-artistes-59000-lille" target="_blank" rel="noopener noreferrer">
            Réserver maintenant
          </a>
        </Button>
      </div>
      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2">
        <Switch 
          id="video-toggle" 
          checked={videoEnabled}
          onCheckedChange={setVideoEnabled}
          aria-label="Activer ou désactiver la vidéo"
        />
        <Label htmlFor="video-toggle" className="text-white text-sm cursor-pointer">
          Vidéo
        </Label>
      </div>
    </section>
  );
}
