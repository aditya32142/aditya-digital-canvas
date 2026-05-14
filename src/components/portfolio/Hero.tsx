import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, FolderGit2, Download, ArrowDown, Sparkles, ImageIcon } from "lucide-react";

// 👇 To use your own photo: drop the file in `src/assets/` (e.g. `aditya-portrait.jpg`),
// then uncomment the import below and set `profileImage` to it.
// import myPortrait from "@/assets/aditya-portrait.jpg";
const profileImage: string | null = null;

const TYPED_TEXT = "Aspiring Software Developer";

function Typer() {
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = TYPED_TEXT.slice(0, text.length + 1);
        setText(next);
        if (next === TYPED_TEXT) setTimeout(() => setDel(true), 1600);
      } else {
        const next = TYPED_TEXT.slice(0, text.length - 1);
        setText(next);
        if (next === "") setTimeout(() => setDel(false), 400);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del]);

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
            I'm <span className="text-gold">Aditya Wattamwar</span>.
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
            <div className="relative overflow-hidden rounded-[2rem] border border-border glass group aspect-[4/5]">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Aditya Wattamwar portrait"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-muted/40 via-background to-muted/20 p-8 text-center">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold">
                    <ImageIcon size={32} />
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-foreground">
                      Your Photo Here
                    </div>
                    <div className="mt-2 max-w-xs text-xs text-foreground/60 leading-relaxed">
                      Add your image to{" "}
                      <code className="rounded bg-muted/60 px-1.5 py-0.5 text-gold">
                        src/assets/
                      </code>{" "}
                      and import it in{" "}
                      <code className="rounded bg-muted/60 px-1.5 py-0.5 text-gold">
                        Hero.tsx
                      </code>
                    </div>
                  </div>
                </div>
              )}
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

      <a
        href="#about"
        className="mx-auto mt-10 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/50 hover:text-gold transition-colors"
      >
        Scroll <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
