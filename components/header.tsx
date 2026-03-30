"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#why-us", label: "FAQ" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex flex-col gap-{-4} ">
          <Link href="/" className="">
            <Image
              src="/white.png"
              alt="Logo"
              width={80}
              height={0}
              className="object-contain"
              priority
            />
          </Link>
          <span className="text-xs font-light text-secondary-foreground">
            Servicios eléctricos
          </span>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-secondary-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a href="#contact">Contactanos</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-secondary-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only"></span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary border-t border-border">
          <div className="space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="block py-2 text-base font-medium text-secondary-foreground/80 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="#contact">Contactanos</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
