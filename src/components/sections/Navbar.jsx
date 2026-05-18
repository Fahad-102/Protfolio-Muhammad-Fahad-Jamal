'use client';

import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { Permanent_Marker } from 'next/font/google';

const markerFont = Permanent_Marker({ subsets: ['latin'], weight: ['400'] });

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between glass rounded-[2rem] px-8 py-4 pointer-events-auto border-primary/10 shadow-2xl">
        <Magnetic>
          <a href="#home" className="relative group flex items-center justify-center cursor-pointer">
            {/* Outer Glow on hover */}
            <div className="absolute -inset-3 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
            
            {/* Animated Logo Box */}
            <div className="relative w-12 h-12 flex items-center justify-center bg-surface-container-lowest border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              {/* Spinning gradient border effect */}
              <div className="absolute w-[250%] h-[250%] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,var(--color-primary)_100%)] animate-spin [animation-duration:3s] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              {/* Inner dark mask */}
              <div className="absolute inset-[2px] bg-surface-container-highest rounded-[14px] z-0" />
              
              {/* The Text */}
              <div className="relative z-10 flex items-baseline">
                <span className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50 tracking-tighter ${markerFont.className}`}>
                  F
                </span>
                <motion.span 
                  animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-primary text-2xl font-black"
                >
                  .
                </motion.span>
              </div>
            </div>
          </a>
        </Magnetic>

        <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em]">
          {['Home', 'About', 'Projects', 'Skills', 'Qualification', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors text-on-surface-variant"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="md:hidden text-white cursor-pointer">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </motion.nav>
  );
}
