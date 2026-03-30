import {
  BadgeCheck,
  Clock,
  DollarSign,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Técnicos Certificados",
    description:
      "Nuestro equipo cuenta con la capacitación y preparación necesaria para realizar trabajos eléctricos con precisión, responsabilidad y altos estándares de calidad.",
  },
  {
    icon: Clock,
    title: "Respuesta Rápida",
    description:
      "Atendemos tus necesidades de manera oportuna, ofreciendo soluciones ágiles para resolver cualquier inconveniente eléctrico en el menor tiempo posible.",
  },
  {
    icon: DollarSign,
    title: "Precios Accesibles",
    description:
      "Ofrecemos tarifas competitivas y claras desde el inicio, sin costos ocultos, brindando confianza y seguridad en cada servicio.",
  },
  {
    icon: ShieldCheck,
    title: "Normas de Seguridad",
    description:
      "Trabajamos bajo normas y buenas prácticas del sector eléctrico, asegurando instalaciones seguras y confiables para tu hogar o negocio.",
  },
  {
    icon: Users,
    title: "Años de Experiencia",
    description:
      "Contamos con una sólida trayectoria en el área eléctrica, ofreciendo soluciones efectivas tanto en proyectos residenciales como comerciales.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Por Qué Elegirnos
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              La Diferencia R&L Servicios electricos
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Elegir el proveedor adecuado de servicios eléctricos es clave para
              garantizar seguridad, eficiencia y tranquilidad. En RYL Servicios
              Eléctricos, nos destacamos por ofrecer un servicio confiable y
              orientado a resultados.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-secondary p-8 lg:p-8">
              <div className="h-full rounded-xl bg-secondary-foreground/5 p-6 lg:P-8 flex flex-col justify-center">
                <blockquote className="text-xl lg:text-2xl font-medium text-secondary-foreground leading-relaxed">
                  “Contraté a R&L Servicios Eléctricos para la instalación
                  completa de la electricidad en mi casa y quedé muy satisfecho
                  con el resultado. Trabajaron de forma ordenada, explicaron
                  cada detalle y cumplieron con el tiempo acordado. Todo quedó
                  funcionando perfectamente. Los recomiendo sin duda.”
                </blockquote>

                <div className="mt-8">
                  <div className="font-semibold text-secondary-foreground">
                    Manuel Gonzalez
                  </div>
                  <div className="text-sm text-secondary-foreground/70">
                    Propietario de vivienda
                  </div>
                </div>

                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-primary flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">
                  4.9
                </div>
                <div className="text-xs text-primary-foreground/80">
                  Calificación
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
