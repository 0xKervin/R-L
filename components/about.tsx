import { Shield, Target, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description:
      "Brindar soluciones eléctricas seguras y eficientes, enfocadas en la satisfacción del cliente, utilizando buenas prácticas y materiales de calidad para garantizar trabajos duraderos y confiables.",
  },
  {
    icon: Shield,
    title: "Nuestra Visión",
    description:
      "Convertirnos en una empresa reconocida en el sector eléctrico por nuestra responsabilidad, compromiso y excelencia en el servicio, creciendo junto a nuestros clientes y adaptándonos a nuevas tecnologías.",
  },
  {
    icon: Award,
    title: "Nuestra Experiencia",
    description:
      "Nuestra trayectoria en el área eléctrica nos ha permitido desarrollar habilidades y conocimientos para ejecutar proyectos de diferentes niveles, ofreciendo soluciones eficientes tanto para hogares como para empresas.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre Nosotros
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tu Socio de Confianza en Soluciones Eléctricas
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            En RYL Servicios Eléctricos, somos un equipo comprometido con
            brindar servicios eléctricos seguros, eficientes y de alta calidad
            para hogares y empresas.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <value.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                {value.title}
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-foreground">
                Comprometidos con la Seguridad, la Calidad y la Confiabilidad
              </h3>

              <p className="mt-4 text-secondary-foreground/80 leading-relaxed">
                Trabajamos con dedicación y atención al detalle para ofrecer
                soluciones eléctricas confiables, asegurando que cada proyecto
                se realice con profesionalismo y altos estándares de calidad.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary-foreground/5 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary">13+</div>
                <div className="mt-2 text-sm text-secondary-foreground/70">
                  Años de Experiencia
                </div>
              </div>

              <div className="bg-secondary-foreground/5 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary">220+</div>
                <div className="mt-2 text-sm text-secondary-foreground/70">
                  Proyectos Completados
                </div>
              </div>

              <div className="bg-secondary-foreground/5 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="mt-2 text-sm text-secondary-foreground/70">
                  Emergencias Atendidas
                </div>
              </div>

              <div className="bg-secondary-foreground/5 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary">99%</div>
                <div className="mt-2 text-sm text-secondary-foreground/70">
                  Satisfacción del Cliente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
