'use client';

import { motion } from 'framer-motion';
import { Mail, Briefcase, MessageSquare, Send } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('mail');
    const project = formData.get('project');

    const targetEmail = "muhammadfahadbinjamal@gmail.com"; 
    const subject = `New Project Inquiry from ${name}`;
    const body = `Hello Muhammad Fahad,\n\nMy name is ${name} (${email}).\n\nI want to discuss a project:\n\n${project}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl font-bold text-white uppercase tracking-[0.2em]">Contact Me</h2>
          <p className="text-outline text-sm font-bold uppercase tracking-[0.5em]">Get in touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Talk to me</h3>

            <div className="grid gap-6">
              {[
                { icon: <Mail />, title: 'Email', val: 'muhammadfahadbinjamal@gmail.com', link: 'mailto:muhammadfahadbinjamal@gmail.com' },
                { icon: <Briefcase />, title: 'LinkedIn', val: 'Muhammad Fahad Jamal', link: 'www.linkedin.com/in/muhammad-fahad-jamal' },
                { icon: <MessageSquare />, title: 'WhatsApp', val: '+8801830480102', link: 'https://wa.me/+8801830480102' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="glass p-8 rounded-3xl flex items-center gap-6 group hover:bg-surface-container-high transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.title}</div>
                    <div className="text-xs text-outline mb-2">{item.val}</div>
                    <a href={item.link} className="text-primary text-xs font-black uppercase tracking-widest hover:underline">Write me →</a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-8">Write me your project</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                {[
                  { label: 'Name', type: 'text', placeholder: 'Insert your name' },
                  { label: 'Mail', type: 'email', placeholder: 'Insert your email' }
                ].map((field) => (
                  <div key={field.label} className="relative group">
                    <label className="absolute -top-3 left-6 bg-surface-container-lowest px-2 text-[10px] text-primary font-black uppercase tracking-widest z-10">
                      {field.label}
                    </label>
                    <input
                      name={field.label.toLowerCase()}
                      required
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-2 border-outline-variant rounded-3xl p-5 text-sm focus:border-primary transition-all outline-none placeholder:text-outline/50 text-white font-medium"
                    />
                  </div>
                ))}

                <div className="relative group">
                  <label className="absolute -top-3 left-6 bg-surface-container-lowest px-2 text-[10px] text-primary font-black uppercase tracking-widest z-10">
                    Project
                  </label>
                  <textarea
                    name="project"
                    required
                    rows={5}
                    placeholder="Write your project details..."
                    className="w-full bg-transparent border-2 border-outline-variant rounded-[2rem] p-6 text-sm focus:border-primary transition-all outline-none placeholder:text-outline/50 text-white font-medium"
                  />
                </div>
              </div>

              <Magnetic>
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-primary text-white font-black rounded-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                >
                  Send Message <Send className="w-5 h-5" />
                </button>
              </Magnetic>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
