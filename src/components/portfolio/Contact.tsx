import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Download, Linkedin, Github, Code2, Trophy, ArrowUpRight } from "lucide-react";

const cards = [
  { icon: MapPin, label: "Address", value: "Pune, India", href: "#" },
  { icon: Phone, label: "Phone", value: "+91 7869115922", href: "tel:+917869115922" },
  { icon: Mail, label: "Email", value: "5464217aditya@gmail.com", href: "mailto:5464217aditya@gmail.com" },
  { icon: Download, label: "Resume", value: "Download PDF", href: "#" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Code2, label: "LeetCode", href: "https://leetcode.com" },
  { icon: Trophy, label: "HackerRank", href: "https://hackerrank.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative mb-16">
          <h2 className="text-outline absolute -top-8 left-0 select-none font-display text-7xl md:text-9xl font-bold opacity-60">
            Contact
          </h2>
          <div className="relative pt-8">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">// say hello</span>
            <h3 className="mt-2 font-display text-4xl md:text-5xl font-bold">Let's build together.</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative flex flex-col items-center rounded-3xl glass p-8 text-center transition-all hover:-translate-y-2 hover:border-gold/50"
            >
              <span className="mb-5 grid h-16 w-16 place-items-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground gold-glow">
                <Icon size={24} />
              </span>
              <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">{label}</div>
              <div className="mt-2 break-all text-sm font-medium">{value}</div>
              <ArrowUpRight
                size={14}
                className="absolute right-4 top-4 text-foreground/30 transition-all group-hover:text-gold group-hover:rotate-45"
              />
            </motion.a>
          ))}
        </div>

        <div className="mt-12 rounded-3xl glass p-8 md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h4 className="font-display text-2xl md:text-3xl font-bold">
                Have a project or role in mind?
              </h4>
              <p className="mt-2 text-foreground/60">
                Open to internships, product associate roles, and SaaS opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-foreground/50 sm:flex-row">
          <div>© {new Date().getFullYear()} Aditya Wattamwar. Crafted with care.</div>
          <div>Pune, India — Available worldwide</div>
        </footer>
      </div>
    </section>
  );
}
