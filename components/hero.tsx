import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <Image
        src="images/hero-img.webp"
        alt="Hero Image"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-secondary/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          {" R&L "}
          <span className="text-primary">Servicios Eléctricos</span>
        </h1>
        <p className="mt-6 text-lg text-secondary-foreground/80 sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Servicios eléctricos profesionales para propiedades residenciales y
          comerciales. Seguridad, calidad y confiabilidad en cada proyecto.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-20 py-6"
          >
            <a href="#contact" className="flex items-center gap-2">
              Contactanos
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-secondary-foreground/30 bg-secondary-foreground/20 hover:bg-secondary-foreground/10 text-secondary-foreground text-lg px-8 py-6"
          >
            <a href="#services">Nuestro servicios</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-secondary-foreground" />
      </div>
    </section>
  );
}
