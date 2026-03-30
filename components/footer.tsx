import Link from "next/link";
import { Zap, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#why-us", label: "Por Qué Elegirnos" },
  { href: "#contact", label: "Contacto" },
];

const services = [
  "Instalaciones Electricos Generales",
  "Mantenimiento y Diagnóstico",
  "Reparaciones y Emergencias 24/7",
  "Iluminación y Automatización",
  "Energía Solar y Respaldo",
  "Sistemas especializados y protección",
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://web.facebook.com/profile.php?id=61576791803461",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/servicioselectricosryl/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex flex-col">
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

            <p className="mt-4 text-sm text-secondary-foreground/70 leading-relaxed">
              Servicios eléctricos confiables para hogares y negocios,
              realizados con altos estándares de calidad, seguridad y
              compromiso.
            </p>

            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-foreground/5 text-secondary-foreground/70 hover:bg-secondary-foreground/10 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Enlaces Rápidos
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Nuestros Servicios
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-secondary-foreground">
              Información de Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-secondary-foreground/70">
              <li>Hato Mayor, Mata Palacio</li>

              <li>
                <a
                  href="mailto:servicioselectricosryl@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  servicioselectricosryl@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} R&L Servicios Eléctricos. By{" "}
              <Link
                href="https://kodesoftware.vercel.app/"
                className="text-primary hover:text-primary/80 transition-colors"
                target="blank"
              >
                Kode Software
              </Link>
              .
            </p>

            <div className="flex gap-6 text-sm text-secondary-foreground/60">
              <a
                href="#"
                className="hover:text-secondary-foreground transition-colors"
              >
                Política de Privacidad
              </a>

              <a
                href="#"
                className="hover:text-secondary-foreground transition-colors"
              >
                Términos del Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
