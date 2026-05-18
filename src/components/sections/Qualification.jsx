'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Briefcase, GraduationCap } from 'lucide-react';

const data = [
  {
    title: 'Bsc. in CSE',
    subtitle: 'University of Creative Technology Chittagong',
    date: '2021',
    side: 'right'
  },
  {
    title: 'Msc. in Data Analytics &  Design Thinking for Business',
    subtitle: 'East Delta University Chittagong',
    date: '2024',
    side: 'right'
  },
  {
    title: 'Data Entry Operator',
    subtitle: 'Government Election Commission',
    date: '2022 - 2023',
    side: 'left'
  },
  {
    title: 'IT Head',
    subtitle: 'Anjuaman a Pak Ponjaton Shah ALi Roza(R.) Trust',
    date: 'present',
    side: 'left'
  }
];

export default function Qualification() {
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      }
    );
  }, []);

  return (
    <section id="qualification" className="py-32 bg-surface-container-lowest/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em]">Qualification</h2>
          <p className="text-outline text-sm font-bold uppercase tracking-[0.5em]">My Personal Journey</p>
        </div>

        <div className="flex justify-center gap-12 mb-16">
          <button className="flex items-center gap-2 text-primary font-bold border-b-2 border-primary pb-2">
            <Briefcase className="w-5 h-5" /> Experience
          </button>
          <button className="flex items-center gap-2 text-outline font-bold pb-2 hover:text-white transition-colors">
            <GraduationCap className="w-5 h-5" /> Education
          </button>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative px-4">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-surface-container-high" />
          <div
            ref={lineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-primary z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />

          <div className="space-y-24">
            {data.map((item, i) => (
              <div key={i} className="relative grid grid-cols-2 gap-8 md:gap-20">
                {item.side === 'left' ? (
                  <div className="text-right pr-4">
                    <h4 className="font-black text-xl text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-outline font-bold">{item.subtitle}</p>
                    <div className="text-[10px] text-primary mt-2 italic font-black uppercase tracking-widest">{item.date}</div>
                  </div>
                ) : <div />}

                {item.side === 'right' ? (
                  <div className="text-left pl-4">
                    <h4 className="font-black text-xl text-white mb-2">{item.title}</h4>
                    <p className="text-sm text-outline font-bold">{item.subtitle}</p>
                    <div className="text-[10px] text-primary mt-2 italic font-black uppercase tracking-widest">{item.date}</div>
                  </div>
                ) : <div />}

                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-20 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
