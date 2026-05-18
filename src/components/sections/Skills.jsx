'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Next JS', level: 'Expert' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Tailwind', level: 'Advanced' },
    { name: 'React JS', level: 'Expert' },
  ],
  backend: [
    { name: 'Node JS', level: 'Advanced' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Express JS', level: 'Advanced' },
    { name: 'PostgreSQL', level: 'Basic' },
    { name: 'MongoDB', level: 'Basic' },

  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em]">Skills</h2>
          <p className="text-outline text-sm font-bold uppercase tracking-[0.5em]">My Technical Level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass p-10 rounded-[3rem] relative overflow-hidden group border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]" />

              <h3 className="text-2xl font-bold text-center mb-12 text-white capitalize">
                {category} Developer
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                {items.map((skill, i) => (
                  <div key={i} className="flex items-start gap-4 group/item">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <div>
                      <div className="font-bold text-on-surface group-hover/item:text-white transition-colors">{skill.name}</div>
                      <div className="text-xs text-outline font-bold uppercase tracking-tighter">{skill.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
