import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Download, Eye } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Bachelor of Engineering (IT)",
    org: "Savitribai Phule Pune University",
    period: "2023 — 2027",
    detail: "CGPA: 8.314 • Sinhgad Institutes, Pune",
    tag: "Education",
  },
  {
    icon: Briefcase,
    title: "Data Processing Intern",
    org: "Humalife Healthcare LLC",
    period: "Feb 2026 — Mar 2026",
    detail: "Remote work using Google Sheets for data organization, cleaning, and workflow coordination across teams.",
    tag: "Experience",
  },
  {
    icon: Trophy,
    title: "Talrop Technovate — Finalist",
    org: "AgroTech Nexus",
    period: "National Innovation",
    detail: "Built an IoT + AI-powered agriculture solution; reached the finals at a national-level innovation competition.",
    tag: "Achievement",
  },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative mb-16">
          <h2 className="text-outline absolute -top-8 left-0 select-none font-display text-7xl md:text-9xl font-bold opacity-60">
            Resume
          </h2>
          <div className="relative pt-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">// my journey</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">Resume</h3>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <p className="text-foreground/70 leading-relaxed">
              Aspiring Software Developer with strong foundations in C++, Java, and Data Structures
              &amp; Algorithms. Skilled in problem-solving, object-oriented programming, and building
              scalable user-focused solutions.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] gold-glow"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-all"
              >
                <Eye size={16} /> View Resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="relative space-y-5 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-7">
              {items.map((it, idx) => {
                const Icon = it.icon;
                return (
                  <motion.div
                    key={it.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group relative pl-16 md:pl-20"
                  >
                    <span className="absolute left-0 top-2 grid h-12 w-12 place-items-center rounded-full glass border-gold/30 md:h-14 md:w-14">
                      <Icon className="text-gold" size={20} />
                    </span>
                    <div className="rounded-2xl glass p-6 transition-all hover:border-gold/40 hover:-translate-y-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                          {it.tag}
                        </span>
                        <span className="text-xs text-foreground/50">{it.period}</span>
                      </div>
                      <h4 className="font-display text-xl font-bold">{it.title}</h4>
                      <div className="mt-1 text-sm text-gold">{it.org}</div>
                      <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{it.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
