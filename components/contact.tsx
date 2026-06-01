"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "servicioselectricosryl@gmail.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Hato Mayor, Mata palacio",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(829) 696-3275 / (829) 783-0274",
  },
  {
    icon: Clock,
    label: "Horario de Atención",
    value: "Personalizado",
  },
];
// FALTA
const serviceTypes = [
  "Instalación Residencial",
  "Mantenimiento Comercial",
  "Instalación de Paneles",
  "Cableado y Recableado",
  "Instalación de Iluminación",
  "Inspección y Diagnóstico",
  "Servicio de Emergencia",
  "Otro",
];

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mnjgbjaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          serviceType: "",
          message: "",
        });
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      alert("Hubo un problema enviando el formulario");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-backgraund">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Contáctanos
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ponte en Contacto
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ¿Listo para comenzar tu proyecto? Contáctanos hoy para una consulta
            y presupuesto gratuito.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              Información de Contacto
            </h3>

            <p className="mt-4 text-muted-foreground leading-relaxed">
              Comunícate con nosotros a través de cualquiera de nuestros canales
              de contacto. Nuestro equipo te brindará atención oportuna y
              personalizada.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <a key={item.label} className="flex items-start gap-4 group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <div className="font-medium text-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold text-card-foreground">
              Envíanos un Mensaje
            </h3>

            {submitted ? (
              <div className="mt-8 text-center py-12">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-8 w-8 text-primary" />
                </div>

                <h4 className="mt-4 text-lg font-semibold">
                  ¡Mensaje Enviado!
                </h4>

                <p className="mt-2 text-muted-foreground">
                  Gracias por contactarnos. Te responderemos dentro de 24 horas.
                </p>

                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar Otro Mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <input
                  type="hidden"
                  name="_subject"
                  value="Nuevo mensaje desde la web"
                />

                <div className="space-y-2">
                  <Label>Nombre Completo</Label>
                  <Input
                    name="name"
                    placeholder="Tu Nombre"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="tuemail@gmail.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Teléfono</Label>
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Mensaje</Label>
                  <Textarea
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
