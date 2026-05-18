'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Code, MoveDown } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    gsap.to(blobRef.current, {
      x: '30%',
      y: '20%',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const name = "Muhammad Fahad Bin Jamal";

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Dual Neon Lighting */}
      <div
        ref={blobRef}
        className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[90px] pointer-events-none"
      />
      <div
        className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] bg-tertiary/10 rounded-full blur-[100px] pointer-events-none animate-pulse"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary font-medium"
          >
            Hey, I&apos;m
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            {["Muhammad Fahad", "Bin Jamal"].map((line, lineIndex) => (
              <div key={lineIndex} className="overflow-hidden">
                {line.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 80, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: lineIndex * 0.4 + i * 0.05,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-on-surface-variant max-w-md leading-relaxed font-medium"
          >
            {"I'm a Full-Stack Developer, building websites. I love to design and build amazing web applications. ✨".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.5 + i * 0.02 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex items-center gap-6 pt-4">
            <Magnetic>
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                href="#contact"
                className="px-8 py-4 bg-white text-background font-bold rounded-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
              >
                Say Hello 👋
              </motion.a>
            </Magnetic>

            <Magnetic>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-primary cursor-pointer text-on-surface group"
              >
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </motion.div>
            </Magnetic>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-12 flex items-center gap-2 text-xs text-outline uppercase tracking-[0.3em] font-medium"
          >
            <MoveDown className="w-4 h-4 animate-bounce" />
            Scroll Down
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            <div className="absolute inset-0 rounded-[3rem] border-4 border-surface-container-high overflow-hidden z-10 shadow-2xl">
              <img
                alt="Muhammad Fahad Bin Jamal"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                src="/Muhammad-Fahad-Jamal.png"
              />
            </div>


            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -left-12 glass px-6 py-4 rounded-3xl z-20 shadow-2xl border-primary/20"
            >
              <div className="text-primary font-black text-2xl leading-none">20+</div>
              <div className="text-[10px] text-outline uppercase tracking-tighter font-bold">Projects</div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 right-10 glass px-6 py-4 rounded-3xl z-20 shadow-2xl border-primary/20"
            >
              <div className="text-primary font-black text-2xl leading-none">20+</div>
              <div className="text-[10px] text-outline uppercase tracking-tighter font-bold">Solved</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
