'use client';

import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-surface-container-high bg-background relative z-10">
      <div className="container mx-auto px-6 text-center space-y-12">
        <h2 className="text-4xl font-black text-white tracking-tighter">Muhammad Fahad Bin Jamal.</h2>

        <div className="flex justify-center gap-12 text-sm font-bold uppercase tracking-widest">
          {['About', 'Projects', 'Skills', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          {['Facebook', 'Instagram', 'Twitter'].map((social) => (
            <Magnetic key={social}>
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center hover:bg-primary/20 cursor-pointer text-white font-bold text-xs uppercase transition-colors border-primary/5">
                {social.charAt(0)}
              </div>
            </Magnetic>
          ))}
        </div>

        <p className="text-[10px] text-outline uppercase font-black tracking-[0.5em] pt-12">
          © {new Date().getFullYear()} Muhammad Fahad Bin Jamal. All rights reserved
        </p>
      </div>
    </footer>
  );
}
