import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, FolderGit2, Download, ArrowDown, Sparkles } from "lucide-react";
import portrait from "@/assets/aditya-portrait.jpg";

const roles = [
  "Aspiring Software Developer",
  "Product Enthusiast",
  "UI/UX Learner",
  "Problem Solver",
];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = roles[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gold">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 bg-gold animate-pulse" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-32 md:pt-36 pb-20 md:pb-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70">
            <Sparkles size={12} className="text-gold" /> Hello!
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            I'm <span className="text-gold">Aditya</span>
            <br />
            Wattamwar.
          </h1>

          <div className="mt-5 text-2xl md:text-3xl font-display font-medium min-h-[2.5rem]">
            <Typer />
          </div>

          <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
            A BE IT student passionate about building modern digital experiences,
            workflow systems, and scalable SaaS-inspired solutions focused on
            usability and operational efficiency.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 gold-glow"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-all"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
              href="#resume"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-gold hover:text-gold transition-all"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-foreground/60">
            <div>
              <div className="text-2xl font-display font-bold text-foreground">8.31</div>
              <div className="text-xs uppercase tracking-wider">CGPA</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-display font-bold text-foreground">3+</div>
              <div className="text-xs uppercase tracking-wider">Projects</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-display font-bold text-foreground">1</div>
              <div className="text-xs uppercase tracking-wider">Internship</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/30 via-transparent to-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border glass group">
              <img
                src={portrait}
                alt="Aditya Wattamwar portrait"
                width={896}
                height={1152}
                className="h-auto w-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-gold">Available</div>
                    <div className="text-sm text-foreground/80">For internships & roles</div>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-primary-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -left-6 top-10 hidden md:block rounded-2xl glass px-4 py-3 text-xs">
              <div className="text-gold font-semibold">Pune, India</div>
              <div className="text-foreground/60">BE IT • Sinhgad</div>
            </div>
            <div className="absolute -right-4 bottom-32 hidden md:block rounded-2xl glass px-4 py-3 text-xs">
              <div className="text-gold font-semibold">SaaS</div>
              <div className="text-foreground/60">Product Thinker</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a href="#about" className="mx-auto mt-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50 hover:text-gold transition-colors">
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
