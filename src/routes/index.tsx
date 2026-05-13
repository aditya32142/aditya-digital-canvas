import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Resume } from "@/components/portfolio/Resume";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aditya Wattamwar — Aspiring Software Developer & Product Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Aditya Wattamwar — BE IT student building modern SaaS-inspired products, CRM systems, and elegant UI/UX experiences.",
      },
      { property: "og:title", content: "Aditya Wattamwar — Portfolio" },
      {
        property: "og:description",
        content:
          "Aspiring Software Developer & Product Enthusiast. Projects in CRM, AI legal tools and IoT.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}
