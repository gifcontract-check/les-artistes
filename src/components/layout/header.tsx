"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        hasScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-bold text-2xl text-primary">
          Les Artistes
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#presentation" className="hover:text-primary transition-colors">Présentation</Link>
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#team" className="hover:text-primary transition-colors">L'équipe</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors">Avis</Link>
          <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <Button asChild>
          <a href="https://www.planity.com/les-artistes-59000-lille" target="_blank" rel="noopener noreferrer">
            Réserver maintenant
          </a>
        </Button>
      </div>
    </header>
  );
}
