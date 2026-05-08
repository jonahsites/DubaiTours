/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  Anchor, Car, Sun, Menu, X, Phone, Instagram
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#C5A47E] flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xl">E</span>
          </div>
          <span className="font-syne font-bold text-xl tracking-tighter uppercase whitespace-nowrap">Exclusive <span className="text-[#C5A47E]">Dubai</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Fleet', 'Yachts', 'Desert', 'Legacy'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.3em] hover:text-[#C5A47E] transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2 border border-[#C5A47E] text-[#C5A47E] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A47E] hover:text-black transition-all">
            Inquire
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6 md:hidden"
          >
            {['Fleet', 'Yachts', 'Desert', 'Legacy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2670" 
          alt="Dubai Skyline" 
          className="w-full h-full object-cover grayscale opacity-40 scale-110"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4 mb-8"
        >
          <span className="text-[10px] font-bold tracking-[0.6em] text-[#C5A47E] uppercase">Uncompromising // Excellence</span>
          <h1 className="text-7xl md:text-9xl font-black font-syne tracking-tighter leading-[0.85] uppercase max-w-4xl">
            THE ART OF <br /> 
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5A47E] to-white" style={{ WebkitTextFillColor: 'transparent' }}>DISTINCTION</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="col-span-12 md:col-span-5"
          >
            <p className="text-lg opacity-60 font-outfit font-light mb-12 max-w-md leading-relaxed">
              Experience absolute exclusivity with our curated selection of yachts, supercars, and desert escapes. Engineered for those who demand the zenith of premium service.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-[#C5A47E] transition-colors flex items-center gap-3 group">
                Access Vault <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 border border-white/20 text-white font-black uppercase text-[10px] tracking-widest hover:bg-white/5 transition-colors">
                The Fleet
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="hidden md:flex col-span-7 justify-end gap-12"
          >
             <div className="flex flex-col items-end">
                <span className="text-4xl font-syne font-bold italic tracking-tighter">001</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Burj Al Arab // Station</span>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-4xl font-syne font-bold italic tracking-tighter">24/7</span>
                <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Concierge // Active</span>
             </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden lg:flex"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.5em] opacity-40">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A47E] to-transparent" />
      </motion.div>
    </section>
  );
};

const ServiceSection = () => {
  return (
    <section id="fleet" className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
           <div className="flex flex-col gap-4">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#C5A47E] uppercase">Core // Offerings</span>
              <h2 className="text-5xl md:text-7xl font-black font-syne uppercase tracking-tighter">THE FLEET <br /> <span className="italic opacity-50">& EXPERIENCES</span></h2>
           </div>
           <div className="max-w-md text-right">
              <p className="text-sm opacity-40 font-bold uppercase tracking-widest leading-loose">
                Hand-selected assets maintained to protocols exceeding international standards by 150%.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { 
              t: "Elite Yachts", 
              d: "Private charters across the Arabian Gulf.", 
              i: "https://images.unsplash.com/photo-1567899378494-47b22a28c6ad?auto=format&fit=crop&q=80&w=2670",
              icon: <Anchor size={20} />
            },
            { 
              t: "Supercars", 
              d: "The world's most exclusive automotive icons.", 
              i: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2670",
              icon: <Car size={20} />
            },
            { 
              t: "Desert VIP", 
              d: "Luxury safari expeditions into the red dunes.", 
              i: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2670",
              icon: <Sun size={20} />
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="group relative h-[600px] bg-white/5 overflow-hidden border border-white/5 cursor-pointer"
            >
              <img src={item.i} alt={item.t} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 flex flex-col gap-4">
                 <div className="flex items-center gap-3 text-[#C5A47E]">
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Service // {idx + 1}</span>
                 </div>
                 <h3 className="text-4xl font-syne font-black uppercase tracking-tighter">{item.t}</h3>
                 <p className="text-xs opacity-40 uppercase font-bold tracking-widest max-w-[200px] leading-relaxed group-hover:opacity-100 transition-opacity">
                   {item.d}
                 </p>
                 <button className="mt-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-[#C5A47E] transition-colors outline-none">
                    Explore <ArrowRight size={12} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LegacySection = () => {
  return (
    <section id="legacy" className="py-32 bg-[#C5A47E] text-black">
      <div className="max-w-7xl mx-auto px-6">
         <h2 className="text-8xl md:text-[12rem] font-black font-syne tracking-tighter uppercase mb-24 border-b-8 border-black pb-8 leading-none">LEGACY.</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[
              {y: "2018", t: "Genesis", d: "Exclusive Dubai launches with a focus on private aviation and yacht concierge."},
              {y: "2020", t: "Fleet Zenith", d: "Integration of the first V12 supercar collective and luxury desert campsite."},
              {y: "2024", t: "Global Hub", d: "Deployment of 24/7 digital concierge architecture for premium members."}
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="flex flex-col gap-8"
              >
                 <span className="text-8xl leading-none font-syne font-black italic">{item.y}</span>
                 <div className="flex flex-col gap-4">
                   <span className="text-2xl font-black uppercase tracking-tighter border-l-4 border-black pl-4">{item.t}</span>
                   <p className="text-sm not-italic opacity-70 font-bold uppercase tracking-widest leading-relaxed">
                     {item.d}
                   </p>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-40 bg-black overflow-hidden relative text-white">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=2670" 
          alt="Luxury Car"
          className="w-full h-full object-cover grayscale" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#C5A47E] uppercase mb-8 block">Inquiry // Gate</span>
          <h2 className="text-6xl md:text-8xl font-black font-syne uppercase tracking-tighter leading-none mb-12 italic">
            SECURE YOUR <br /> <span className="text-[#C5A47E]">MOMENT.</span>
          </h2>
          <p className="text-xl opacity-40 font-light max-w-md mb-16 font-outfit">
            Our private office operates 24/7 to facilitate your requests. Expect a response within 15 minutes of transmission.
          </p>
          
          <div className="flex flex-col gap-8">
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-[#C5A47E] transition-colors rounded-full">
                   <Phone size={24} className="text-[#C5A47E]" />
                </div>
                <div>
                   <span className="block text-[8px] font-black uppercase tracking-[0.4em] opacity-40">24/7 Priority Line</span>
                   <span className="text-2xl font-bold tracking-tighter font-outfit">+971 58 123 4567</span>
                </div>
             </div>
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-[#C5A47E] transition-colors rounded-full">
                   <Instagram size={24} className="text-[#C5A47E]" />
                </div>
                <div>
                   <span className="block text-[8px] font-black uppercase tracking-[0.4em] opacity-40">Digital Access</span>
                   <span className="text-2xl font-bold tracking-tighter font-outfit">@exclusive.dubai</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 p-12 backdrop-blur-xl">
           <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Identification</label>
                    <input type="text" placeholder="FULL NAME" className="bg-transparent border-b border-white/20 py-4 focus:border-[#C5A47E] outline-none font-bold text-xs text-white" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Communication</label>
                    <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-b border-white/20 py-4 focus:border-[#C5A47E] outline-none font-bold text-xs text-white" />
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-[10px] font-black uppercase tracking-widest opacity-40">Service Category</label>
                 <select className="bg-transparent border-b border-white/20 py-4 focus:border-[#C5A47E] outline-none font-bold text-xs appearance-none text-white">
                    <option className="bg-black">PRIVATE YACHT CHARTER</option>
                    <option className="bg-black">SUPERCAR RENTAL</option>
                    <option className="bg-black">VIP DESERT EXPERIENCE</option>
                    <option className="bg-black">BESPOKE CONCIERGE</option>
                 </select>
              </div>
              <button className="w-full py-6 bg-[#C5A47E] text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all mt-8">
                 Transmit Request
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/5 text-white">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#C5A47E] flex items-center justify-center rounded-sm">
          <span className="text-black font-black text-lg">E</span>
        </div>
        <span className="font-syne font-bold text-lg tracking-tighter uppercase whitespace-nowrap">Exclusive Dubai</span>
      </div>
      <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">
        © 2026 Exclusive Dubai // All Rights Reserved
      </div>
      <div className="flex gap-8">
        <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-[#C5A47E]">Privacy</span>
        <span className="text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-[#C5A47E]">Terms</span>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ServiceSection />
      
      {/* Visual Intermission */}
      <section className="h-[60vh] relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2670" 
              alt="Dubai"
              className="w-full h-full object-cover opacity-30 scale-125" 
            />
            <div className="absolute inset-0 bg-black/60" />
         </div>
         <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-8xl font-black font-syne uppercase tracking-tighter leading-none text-white"
            >
              DUBAI IS <br /> 
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C5A47E] to-white" style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>YOURS.</span>
            </motion.h2>
         </div>
      </section>

      <LegacySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
