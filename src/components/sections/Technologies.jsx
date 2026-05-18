'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const technologies = [
  { name: 'JavaScript', color: 'text-yellow-500' },
  { name: 'React', color: 'text-cyan-400' },
  { name: 'Next.js', color: 'text-white' },
  { name: 'Node.js', color: 'text-green-500' },
  { name: 'MongoDB', color: 'text-emerald-400' },
  { name: 'Tailwind', color: 'text-blue-400' },
  { name: 'Git', color: 'text-red-500' }
];

export default function Technologies() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth;

    gsap.to(marquee, {
      x: `-${scrollWidth / 2}px`,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  return (
    <section className="py-24 overflow-hidden border-y border-surface-container-high bg-surface-container-lowest/50">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-sm uppercase tracking-[0.5em] text-outline font-bold">Tech Stack</h2>
      </div>

      <div className="relative flex whitespace-nowrap">
        <div ref={marqueeRef} className="flex gap-12 items-center pr-12">
          {[...technologies, ...technologies].map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-4 cursor-pointer"
            >
              <div className="w-40 h-40 glass rounded-3xl flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                <span className={`text-xl font-black ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
              <span className="text-[10px] text-outline font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
