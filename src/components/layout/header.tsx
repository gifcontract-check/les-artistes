"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#presentation", label: "Présentation" },
    { href: "#services", label: "Services" },
    { href: "#team", label: "L'équipe" },
    { href: "#testimonials", label: "Avis" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const NavContent = () => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-primary transition-colors text-lg md:text-sm"
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        hasScrolled ? "bg-background/90 backdrop-blur-sm shadow-sm" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={cn("font-bold text-2xl font-montserrat", hasScrolled ? "text-primary" : "text-white")}>
          Les Artistes
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          <NavContent />
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className={cn("dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90", hasScrolled ? "" : "bg-white text-primary hover:bg-white/90")}>
            <a href="https://www.planity.com/les-artistes-59000-lille" target="_blank" rel="noopener noreferrer">
              Réserver
            </a>
          </Button>
          <ThemeSwitcher hasScrolled={hasScrolled} />
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(hasScrolled ? "" : "text-white hover:bg-white/10 hover:text-white")}>
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw]">
                <nav className="flex flex-col items-center justify-center h-full space-y-8">
                  <NavContent />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
