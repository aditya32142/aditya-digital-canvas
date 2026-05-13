import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, FileText, Play } from "lucide-react";
import leadops from "@/assets/project-leadops.jpg";
import legal from "@/assets/project-legal.jpg";
import trolley from "@/assets/project-trolley.jpg";

const featured = {
  title: "LeadOps CRM",
  tagline: "Modern CRM & Lead Management Platform",
  description:
    "A modern CRM and lead management platform designed for HSR Motors as part of a DeltaX Product Associate assignment — solving collaboration, lead tracking, follow-up management, and performance monitoring.",
  features: [
    "Lead Listing",
    "Lead Details",
    "Pipeline Management",
    "Dashboard Analytics",
    "Automation Alerts",
    "Lead Scoring",
    "Follow-up Scheduling",
  ],
  image: leadops,
  links: [
    { label: "View Prototype", icon: Play },
    { label: "Case Study", icon: FileText },
    { label: "Live Demo", icon: ExternalLink },
  ],
};

const others = [
  {
    title: "LegalSimplify",
    subtitle: "AI Legal Document Assistant",
    description:
      "AI-powered legal document assistant built with React, TypeScript, Tailwind, and Google Document AI for summarization, risk detection, and collaboration.",
    stack: ["React", "TypeScript", "Tailwind", "Google Document AI"],
    image: legal,
  },
  {
    title: "Smart Trolley",
    subtitle: "RFID + IoT Billing System",
    description:
      "RFID + IoT based smart shopping trolley with automated billing and real-time product detection to eliminate checkout queues.",
    stack: ["IoT", "RFID", "Embedded C", "Realtime"],
    image: trolley,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative mb-16">
          <h2 className="text-outline absolute -top-8 left-0 select-none font-display text-7xl md:text-9xl font-bold opacity-60">
            Projects
          </h2>
          <div className="relative flex flex-wrap items-end justify-between gap-4 pt-8">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">// selected work</span>
              <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">Featured Projects</h3>
            </div>
            <p className="max-w-md text-foreground/60">
              A glimpse into the products I've designed and built — focused on real workflows,
              clean UX and scalable architecture.
            </p>
          </div>
        </div>

        {/* Featured */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl glass p-6 md:p-10 lg:grid-cols-12 hover:border-gold/40 transition-all"
        >
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={featured.image}
                alt="LeadOps CRM dashboard"
                loading="lazy"
                width={1280}
                height={832}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-primary-foreground">
                Featured
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-gold">{featured.tagline}</span>
            <h4 className="mt-2 font-display text-3xl md:text-4xl font-bold">{featured.title}</h4>
            <p className="mt-4 text-foreground/70 leading-relaxed">{featured.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {featured.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-2 pt-6">
              {featured.links.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold hover:border-gold hover:text-gold transition-all"
                >
                  <Icon size={13} /> {label}
                </a>
              ))}
            </div>
          </div>
        </motion.article>

        {/* Others */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {others.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass hover:border-gold/40 transition-all"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">{p.subtitle}</span>
                    <h4 className="mt-1 font-display text-2xl font-bold">{p.title}</h4>
                  </div>
                  <a
                    href="#"
                    aria-label={`Open ${p.title}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:bg-gold group-hover:text-primary-foreground group-hover:border-gold"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="mt-3 text-sm text-foreground/65 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-xs text-foreground/70">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
