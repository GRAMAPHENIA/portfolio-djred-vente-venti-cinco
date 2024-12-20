"use client";

import { useState } from "react";
import { Moon, Sun, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Timeline, TimelineItem } from "@/components/timeline";
import Image from "next/image";
import Link from "next/link";

// Solución para iconos de GitHub, LinkedIn y Twitter
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Portfolio() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const alternarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
    document.documentElement.classList.toggle("dark");
  };

  const proyectos = [
    {
      title: "Aplicación web de gestión de tareas",
      description:
        "Aplicación web para gestionar tareas con funcionalidad de calendario, creación de tareas y visualización integrada. Tecnologías: Next.js, Tailwind CSS, shadcn.",
      date: "jueves, 31 de Octubre de 2024",
      image: "/gestion-de-tareas/uno.png",
    },
    {
      title: "Sitio Web de Portafolio",
      description:
        "Diseñé y construí un sitio web de portafolio responsivo usando Next.js y Tailwind CSS",
      date: "2022",
      image: "https://placehold.co/600x400?text=Sitio+de+Portafolio",
    },
    {
      title: "App Móvil UI/UX",
      description:
        "Creé diseños de interfaz de usuario para una aplicación móvil de seguimiento de fitness",
      date: "2021",
      image: "https://placehold.co/600x400?text=App+Móvil+UI/UX",
    },
  ];

  const experiencias = [
    {
      title: "Desarrollador Web Senior",
      company: "Tech Innovators Inc.",
      date: "2021 - Actualidad",
      description:
        "Líder de desarrollo para aplicaciones web, mentor de desarrolladores junior e implementador de buenas prácticas.",
    },
    {
      title: "Desarrollador Full Stack",
      company: "Digital Solutions Ltd.",
      date: "2018 - 2021",
      description:
        "Desarrollé y mantuve sitios web y aplicaciones web usando React, Node.js y MongoDB.",
    },
    {
      title: "Desarrollador Web Junior",
      company: "StartUp Ventures",
      date: "2016 - 2018",
      description:
        "Asistí en el desarrollo de sitios web responsivos y gané experiencia en tecnologías front-end.",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        modoOscuro ? "dark" : ""
      }  lg:mx-40`}
    >
      <section className="flex justify-center mt-28">
        <header className="fixed top-0 z-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border rounded-lg px-4 mt-4 w-3/4 shadow-md">
          <nav className="flex justify-between items-center py-4 mx-auto">
            <h1 className="text-2xl font-bold">JR</h1>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={alternarModoOscuro}>
                {modoOscuro ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </nav>
        </header>
      </section>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Sección "Sobre mí" */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              width={800}
              height={800}
              src="/avatares/avatar-he.webp"
              alt="John Doe"
              className="rounded-full w-64 h-64 object-cover"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Hola, soy Juan Rojo</h2>
              <p className="text-lg mb-4">
                Diseñador y desarrollador web con experiencia en la creación de
                sitios, funcionales y responsivos. Trabajo, para hacer realidad
                las ideas a través del código.
              </p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>juanrojo@hexagono.xyz</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Buenos Aires, Argentina.</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Disponible para trabajo freelance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección "Proyectos" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Proyectos realizados</h2>
          <Timeline>
            {proyectos.map((proyecto, index) => (
              <TimelineItem key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{proyecto.title}</CardTitle>
                    <CardDescription>{proyecto.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={"/"}>
                      <Image
                        width={1904}
                        height={235}
                        src={proyecto.image}
                        alt={proyecto.title}
                        className="object-cover rounded-lg mb-4 border shadow-sm hover:shadow-md cursor-pointer"
                      />{" "}
                    </Link>

                    <p>{proyecto.description}</p>
                  </CardContent>
                </Card>
              </TimelineItem>
            ))}
          </Timeline>
        </section>

        {/* Sección "Experiencia" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Experiencia</h2>
          <Timeline>
            {experiencias.map((exp, index) => (
              <TimelineItem key={index}>
                <Card>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </TimelineItem>
            ))}
          </Timeline>
        </section>

        {/* Sección "Habilidades" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Conocimientos en:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Shadcn/UI",
            ].map((habilidad, index) => (
              <Card key={index}>
                <CardContent className="flex items-center justify-center p-10">
                  <p className="text-lg font-semibold">{habilidad}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Sección "Contáctame" */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contáctame</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu Nombre" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary bg-card"
                    placeholder="Tu mensaje aquí..."
                  ></textarea>
                </div>
                <Button className="w-full">Enviar Mensaje</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>
      <Separator />
      <footer className="bg-background py-4">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-2">
          <div className="flex space-x-4">
            <Link href="https://github.com/tuusuario" aria-label="GitHub">
              <FaGithub className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
            <Link
              href="https://linkedin.com/in/tuusuario"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
            <Link href="https://twitter.com/tuusuario" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 text-zinc-500 hover:text-slate-400" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Sitio creado con <span className="text-blue-400/90">Next.js </span>
            por JR Octubre de {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
