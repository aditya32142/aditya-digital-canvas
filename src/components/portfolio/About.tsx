import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Languages, ImageIcon } from "lucide-react";

const skills = [
  { name: "C++", value: 88 },
  { name: "Core Java", value: 82 },
  { name: "SQL", value: 78 },
  { name: "Data Structures", value: 85 },
  { name: "Git", value: 75 },
  { name: "UI/UX Design", value: 80 },
  { name: "Product Thinking", value: 84 },
  { name: "Wireframing", value: 78 },
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
  { icon: Briefcase, label: "Profile", value: "Aspiring Software Developer" },
  { icon: GraduationCap, label: "Education", value: "Bachelor of Engineering (IT)" },
  { icon: MapPin, label: "Domain", value: "SaaS / Product / UI-UX / Software" },
  { icon: Languages, label: "Languages", value: "English, Marathi, Hindi" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative mb-16">
          <h2 className="text-outline absolute -top-8 left-0 select-none font-display text-7xl md:text-9xl font-bold opacity-60">
            About
          </h2>
          <div className="relative pt-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">// who i am</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">About Me</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="overflow-hidden rounded-3xl glass">
              <div className="flex h-72 w-full items-center justify-center bg-gradient-to-br from-muted/40 via-background to-muted/20">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <ImageIcon size={22} />
                  </div>
                  <span className="text-xs text-foreground/60">Add your photo in src/assets/</span>
                </div>
              </div>
              <div className="space-y-2 p-6">
                {info.map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-border/50 py-2 text-sm">
                    <span className="text-foreground/50">{k}</span>
                    <span className="text-right font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-lg leading-relaxed text-foreground/80">
              Aditya is an <span className="text-gold">aspiring software developer</span> and product
              enthusiast with strong foundations in C++, Java, SQL, and Data Structures &amp; Algorithms.
              Passionate about workflow optimization, SaaS platforms, UI/UX systems, and solving
              operational challenges using technology.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Deeply interested in <span className="text-foreground">CRM systems</span>, enterprise
              workflows, and scalable digital products. Driven by a problem-solving mindset and
              continuously learning UI/UX and product thinking to build human-centered software.
            </p>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-xs uppercase tracking-[0.2em] text-foreground/60">Skills</span>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skills.map((s, idx) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-gold">{s.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 + idx * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-soft to-gold"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {grid.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl glass p-5 transition-all hover:border-gold/50">
                  <Icon className="text-gold" size={20} />
                  <div className="mt-3 text-xs uppercase tracking-wider text-foreground/50">{label}</div>
                  <div className="mt-1 text-sm font-medium">{value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
