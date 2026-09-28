import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Download, Eye, Terminal, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  icon: typeof Briefcase;
  title: string;
  org: string;
  period: string;
  detail: string;
  highlights?: string[];
  tag: string;
}

const items: TimelineItem[] = [
  {
    icon: Briefcase,
    title: "Software Development Intern",
    org: "Herbs Magic",
    period: "May 2026 — Present",
    tag: "Experience",
    detail:
      "Developing and testing features across CRM, ERP, and automation platforms using Node.js, PostgreSQL, Prisma, Redis, and React.",
    highlights: [
      "Built AI/RAG chatbot functionality, public APIs, backend integrations, and automated workflows.",
      "Implemented workflow triggers/actions, campaign automation, auto-retry functionality, analytics, and messaging.",
      "Performed functional, API, regression, and UI testing across authentication, campaigns, analytics, and responsive interfaces.",
      "Utilized Git/GitLab-based development workflows, Jira issue tracking, and CI/CD pipelines for automated builds and testing.",
    ],
  },
  {
    icon: Briefcase,
    title: "Software Development Intern",
    org: "Humalife Healthcare",
    period: "Feb 2026 — Mar 2026",
    tag: "Experience",
    detail:
      "Automated professional contact data retrieval from LinkedIn profile URLs using REST APIs and integration workflows.",
    highlights: [
      "Developed a REST API integration with ZoomInfo to automate contact enrichment.",
      "Implemented a two-step API workflow for person matching and masked contact info retrieval.",
      "Added request timeouts, HTTP status validation, exception handling, and fallback logic for reliable API processing.",
      "Processed and transformed API responses into structured CSV-ready contact data, eliminating manual overhead.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Engineering (B.E.) in IT",
    org: "SPPU, Pune (Savitribai Phule Pune University)",
    period: "2023 — 2027",
    tag: "Education",
    detail: "CGPA: 8.4 / 10 • Information Technology",
    highlights: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming (OOP), and software systems.",
    ],
  },
  {
    icon: Trophy,
    title: "National-Level Finalist",
    org: "Talrop Technovate for India 2024 (Times of India)",
    period: "AgroTech Nexus",
    tag: "Achievement",
    detail:
      "Developed AgroTech Nexus, an IoT-based farming solution integrating crop monitoring, AI crop analysis, and a FarmDirect marketplace.",
  },
];

const skillCategories = [
  {
    title: "Languages & Core",
    skills: ["Python", "C++", "Java", "SQL", "JavaScript", "HTML/CSS", "DSA", "OOP"],
  },
  {
    title: "Backend & Automation",
    skills: ["REST APIs", "Node.js", "Prisma", "Redis", "CI/CD", "Software Automation"],
  },
  {
    title: "Testing & QA",
    skills: ["Functional Testing", "API Testing", "Regression Testing", "UI Testing", "Debugging"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "Postman", "Git/GitLab", "Jira"],
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
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              // my journey
            </span>

            <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">
              Resume & Experience
            </h3>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">

          {/* LEFT COLUMN: Summary, Buttons & Skills */}
          <div className="lg:col-span-5 space-y-8">

            <div className="rounded-3xl glass p-6 space-y-4">
              <h4 className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <Terminal size={18} className="text-gold" />
                Summary
              </h4>
              <p className="text-foreground/75 leading-relaxed text-sm">
                Software Developer with hands-on experience in Python, software testing,
                API development, automation, and CI/CD workflows. Strong foundation in
                Object-Oriented Programming, Data Structures & Algorithms, Git, and software engineering practices.
              </p>
              <p className="text-foreground/65 leading-relaxed text-sm">
                Experienced in functional, API, regression, and UI testing, debugging software issues,
                validating API workflows, and developing reliable software solutions.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {/* Download Resume */}
                <a
                  href="/Aditya_Wattamwar_Resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.02] gold-glow"
                >
                  <Download size={14} />
                  Download PDF
                </a>

                {/* View Resume */}
                <a
                  href="/Aditya_Wattamwar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-semibold hover:border-gold hover:text-gold transition-all"
                >
                  <Eye size={14} />
                  View PDF
                </a>
              </div>
            </div>

            {/* TECHNICAL SKILLS BREAKDOWN */}
            <div className="rounded-3xl glass p-6 space-y-5">
              <h4 className="font-display text-lg font-bold text-foreground">
                Technical Skills & Competencies
              </h4>

              <div className="space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <div className="text-xs uppercase tracking-wider text-gold font-medium mb-2">
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-secondary/80 border border-border px-2.5 py-1 text-xs text-foreground/80"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Timeline */}
          <div className="lg:col-span-7">
            <div className="relative space-y-6 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-7">

              {items.map((it, idx) => {
                const Icon = it.icon;

                return (
                  <motion.div
                    key={`${it.title}-${it.org}`}
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

                        <span className="text-xs text-foreground/50">
                          {it.period}
                        </span>
                      </div>

                      <h4 className="font-display text-xl font-bold">
                        {it.title}
                      </h4>

                      <div className="mt-1 text-sm font-medium text-gold">
                        {it.org}
                      </div>

                      <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
                        {it.detail}
                      </p>

                      {it.highlights && it.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1.5 border-t border-border/40 pt-3">
                          {it.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-xs text-foreground/70 leading-relaxed">
                              <CheckCircle2 size={13} className="text-gold mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

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