import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Languages,
} from "lucide-react";

const skills = [
  "C++",
  "Core Java",
  "SQL",
  "Data Structures",
  "Git & GitHub",
  "UI/UX Design",
  "Wireframing",
  "Product Thinking",
  "Problem Solving",
  "Workflow Systems",
];

const info = [
  ["Name", "Aditya Wattamwar"],
  ["Role", "BE IT Student"],
  ["University", "Savitribai Phule Pune University"],
  ["College", "Sinhgad Institutes"],
  ["CGPA", "8.314"],
  ["Location", "Pune, India"],
];

const grid = [
  {
    icon: Briefcase,
    label: "Profile",
    value: "Aspiring Software Developer",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "Bachelor of Engineering (IT)",
  },
  {
    icon: MapPin,
    label: "Domain",
    value: "SaaS / Product / UI-UX / Software",
  },
  {
    icon: Languages,
    label: "Languages",
    value: "English, Marathi, Hindi",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADING */}
        <div className="relative mb-16">

          <h2 className="text-outline absolute -top-8 left-0 select-none font-display text-7xl md:text-9xl font-bold opacity-60">
            About
          </h2>

          <div className="relative pt-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              // who i am
            </span>

            <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">
              About Me
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

          {/* LEFT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >

            <div className="rounded-3xl glass p-6">

              <div className="space-y-4">
                {info.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b border-border/50 py-3 text-sm"
                  >
                    <span className="text-foreground/50">
                      {k}
                    </span>

                    <span className="text-right font-medium">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-8"
          >

            {/* DESCRIPTION */}
            <p className="text-lg leading-relaxed text-foreground/80">
              Aditya is an{" "}
              <span className="text-gold">
                aspiring software developer
              </span>{" "}
              with strong foundations in C++, Java, SQL, and Data
              Structures & Algorithms. Passionate about workflow
              optimization, SaaS-inspired systems, UI/UX experiences,
              and building scalable digital products.
            </p>

            <p className="text-foreground/60 leading-relaxed">
              Deeply interested in CRM systems, enterprise workflows,
              and product-driven software development. Focused on
              creating user-centered experiences while continuously
              improving technical and design thinking skills.
            </p>

            {/* SKILLS */}
            <div>

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />

                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">
                  Skills
                </span>
              </div>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-full border border-gold/20 bg-gold/10 px-5 py-2 text-sm font-medium text-gold backdrop-blur-sm transition-all hover:border-gold hover:bg-gold/20"
                  >
                    {skill}
                  </motion.div>
                ))}

              </div>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              {grid.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl glass p-5 transition-all hover:border-gold/50 hover:-translate-y-1"
                >

                  <Icon className="text-gold" size={20} />

                  <div className="mt-3 text-xs uppercase tracking-wider text-foreground/50">
                    {label}
                  </div>

                  <div className="mt-1 text-sm font-medium">
                    {value}
                  </div>

                </div>
              ))}

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}