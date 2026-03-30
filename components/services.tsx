import {
  Home,
  Building2,
  LayoutGrid,
  Cable,
  Lightbulb,
  Search,
  Check,
  Wrench,
  AlertTriangle,
  Sun,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Instalaciones Eléctricas Generales",
    list: [
      "Cableado de instalaciones eléctricas.",
      "Instalación de paneles eléctricos (breakers).",
      "Instalación de tomacorrientes, interruptores y luminarias.",
      "Sistemas eléctricos para construcciones nuevas.",
      "Instalación de abanicos de techo y extractores.",
    ],
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Diagnóstico",
    list: [
      "Mantenimiento preventivo para evitar fallas.",
      "Mantenimiento correctivo de sistemas eléctricos.",
      "Inspecciones eléctricas periódicas.",
      "Limpieza y ajuste de conexiones.",
      "Diagnóstico eléctrico completo del hogar.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Reparaciones y Emergencias 24/7",
    list: [
      "Solución de cortocircuitos.",
      "Corrección de fallas de energía.",
      "Reparación de cables dañados.",
      "Sustitución de breakers y fusibles.",
      "Servicio eléctrico disponible 24/7.",
    ],
  },
  {
    icon: Lightbulb,
    title: "Iluminación y Automatización",
    list: [
      "Instalación de sistemas de iluminación inteligente.",
      "Diseño de iluminación para casas, negocios y exteriores.",
      "Automatización de luces por sensores o horarios.",
    ],
  },
  {
    icon: Sun,
    title: "Energía Solar y Respaldo",
    list: [
      "Instalación de paneles solares residenciales.",
      "Mantenimiento y limpieza de paneles solares.",
      "Instalación de inversores y baterías.",
    ],
  },
  {
    icon: Shield,
    title: "Sistemas Especializados y Protección",
    list: [
      "Instalación de bomba sumergible.",
      "Sistemas de puesta a tierra.",
      "Sistemas contra sobrecargas eléctricas.",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestros Servicios
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Soluciones Eléctricas para tu Hogar y Negocio
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Brindamos un servicio completo en electricidad, cubriendo desde
            proyectos en el hogar hasta mantenimiento para negocios.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <ul className="list-disc list-inside mt-2 text-sm text-muted-foreground">
                {service.list.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
