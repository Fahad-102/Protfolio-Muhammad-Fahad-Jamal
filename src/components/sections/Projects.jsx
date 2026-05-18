'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

const projects = [
  {
    title: "Gadget Heaven",
    category: "React / Context API / Tailwind",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop",
    liveLink: "https://assignment-06-fahad.netlify.app/",
    gitLink: "https://github.com/Fahad-102/Assignment--6",
  },
  {
    title: "Donation Campaign",
    category: "React / Frontend Router",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1470&auto=format&fit=crop",
    liveLink: "https://cosmic-snickerdoodle-ad8442.netlify.app/",
    gitLink: "https://github.com/Fahad-102/Assignment---5",
  },
  {
    title: "Tiles Gallery",
    category: "Next.js / BetterAuth / Full Stack",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1469&auto=format&fit=crop",
    liveLink: "https://tiles-gallery-a8-psi.vercel.app/",
    gitLink: "https://github.com/Fahad-102/Tiles-Gallery-A8.git",
  },
  {
    title: "KeenKeeper",
    category: "React / Connection Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1515&auto=format&fit=crop",
    liveLink: "https://keen-keeper-as7.vercel.app/",
    gitLink: "https://github.com/Fahad-102/keen-keeper-Project-Assignment-7.git",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em]">Featured Projects</h2>
          <p className="text-outline text-sm font-bold uppercase tracking-[0.5em]">Selected Works</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative rounded-[2.5rem] overflow-hidden bg-surface-container aspect-[4/3] md:aspect-[16/10] border border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-tertiary/50 rounded-[2.5rem] blur-sm" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent flex flex-col justify-end p-8 md:p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-6 group-hover:translate-y-0">
                <span className="text-primary font-black uppercase tracking-widest text-[10px] mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {project.title}
                </h3>

                <div className="flex gap-4">
                  <Magnetic>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Magnetic>

                  <Magnetic>
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:text-primary transition-colors"
                    >
                      <Code className="w-5 h-5" />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
