'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-surface-container-lowest relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass p-3 relative group">
              <img
                alt="Muhammad Fahad Professional"
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                src="/Muhammad-Fahad-jamal-Cartoon.png"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                About <br />
                <span className="text-primary italic">Me</span>
              </h2>
              <div className="w-20 h-1.5 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
              <p>
                Hello! I am a passionate Full-Stack Developer based in Chittagong, Bangladesh, dedicated to building scalable, user-centric web applications. My engineering journey is backed by a solid academic foundation, holding a B.Sc. in Computer Science and Engineering (CSE) and currently advancing my expertise with an M.Sc. in Data Analytics and Design Thinking for Business. This unique blend allows me to bridge the gap between hard data, business logic, and empathetic user experiences.
              </p>
              <p>
                To sharpen my practical skills, I completed rigorous Full-Stack training at Programming Hero, graduating with an outstanding average score of 58 out of 60. Driven by a strong problem-solving mindset, I have solved numerous algorithmic and real-world development challenges, sharpening my capability to write optimized, high-quality code.
              </p>
              <p>
                By the grace of Almighty Allah, I have developed a rock-solid foundation in modern web architectures. I deeply enjoy data-driven development, and I am always excited to build solutions that are not just technically sound, but also strategically designed for business success.
              </p>
            </div>

            <motion.a
              whileHover={{ x: 10 }}
              href="#"
              className="inline-flex items-center gap-4 px-10 py-5 bg-surface-container-highest text-white font-bold rounded-2xl hover:bg-surface-variant transition-all border border-white/5"
            >
              Download CV 📄
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
