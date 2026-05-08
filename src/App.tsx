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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-white/10' : 'bg-transparent py-8 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold tracking-[0.5em] text-[#C5A47E] uppercase">Official // Concierge</span>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black font-syne tracking-tighter uppercase">Exclusive Dubai</h1>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-12">
          {['Fleet', 'Yachts', 'Desert', 'Legacy'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[9px] font-bold uppercase tracking-[0.4em] hover:text-[#C5A47E] transition-colors">
              {item}
            </a>
          ))}
          <div className="w-[1px] h-8 bg-white/10 mx-2" />
          <div className="flex gap-8 text-right">
            <div>
              <span className="block text-[8px] text-[#C5A47E] uppercase tracking-widest opacity-60">Status</span>
              <span className="text-[10px] font-mono uppercase tracking-tighter">Live // 24/7</span>
            </div>
            <div>
              <span className="block text-[8px] text-[#C5A47E] uppercase tracking-widest opacity-60">Location</span>
              <span className="text-[10px] font-mono uppercase tracking-tighter">25.2° N, 55.2° E</span>
            </div>
          </div>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 p-8 flex flex-col gap-6 md:hidden z-50"
          >
            {['Fleet', 'Yachts', 'Desert', 'Legacy'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-xs font-bold uppercase tracking-widest">
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
    <section className="relative h-screen w-full overflow-hidden bg-[#050505] flex items-center pt-24">
      {/* Background with Grid Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)', backgroundSize: '4rem 4rem' }} 
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col h-full justify-center">
        <div className="grid grid-cols-12 gap-12 items-center flex-1">
          <div className="col-span-12 lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4 mb-8"
            >
              <span className="text-[10px] font-bold tracking-[0.7em] text-[#C5A47E] uppercase">Curated // Fleet // Legacy</span>
              <h1 className="text-6xl md:text-9xl font-black font-syne tracking-[ -0.05em] leading-[0.85] uppercase italic italic">
                BEYOND <br /> 
                <span className="text-[#C5A47E]">PLATINUM</span> <br />
                STANDARD.
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="max-w-md"
            >
              <p className="text-xs uppercase font-bold tracking-[0.25em] leading-loose opacity-40 mb-12">
                Experience absolute exclusivity with our precision motorcar collection and maritime fleet. Hand-curated itineraries engineered for the global elite.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-sm">
                <div className="flex justify-between items-end">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">Curated_Vault_v2.4</span>
                  <span className="text-[9px] opacity-40 font-mono tracking-tighter">TIMESTAMP // {new Date().getFullYear()}</span>
                </div>
                <div className="h-[1px] bg-white/10 w-full" />
                <div className="grid grid-cols-2 gap-4">
                  <button className="py-4 border border-white/20 text-[9px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    View Portfolio
                  </button>
                  <button className="py-4 bg-[#C5A47E] text-black text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-all">
                    Reserve Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex col-span-5 relative h-full flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square w-full"
            >
              <div className="absolute inset-0 border border-white/5 scale-110 rotate-3" />
              <div className="absolute inset-0 border border-[#C5A47E]/20 -rotate-2" />
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale opacity-50 contrast-125"
                alt="Dubai"
              />
              <div className="absolute top-8 -right-8 bg-black border border-white/10 p-4">
                 <span className="block text-[8px] opacity-40 uppercase tracking-widest">Efficiency</span>
                 <span className="text-2xl font-black italic tracking-tighter">99.8%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator with Mono label */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 right-12 flex flex-col items-end gap-4 hidden lg:flex"
      >
        <div className="flex gap-4 items-center">
          <span className="text-[9px] font-mono tracking-tighter opacity-40 italic">SYS.INIT.SCROLL_CHECK</span>
          <div className="w-12 h-[1px] bg-[#C5A47E]" />
        </div>
      </motion.div>
    </section>
  );
};

const ServiceSection = () => {
  return (
    <section id="fleet" className="py-32 bg-[#050505] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
           <div className="flex flex-col gap-4">
              <span className="text-[9px] font-bold tracking-[0.6em] text-[#C5A47E] uppercase">Category // Matrix</span>
              <h2 className="text-5xl md:text-7xl font-black font-syne uppercase tracking-tighter italic">THE FLEET <br /> <span className="opacity-20 text-white">SPECIFICATIONS</span></h2>
           </div>
           <div className="max-w-md pt-4">
              <p className="text-[10px] opacity-40 font-bold uppercase tracking-[0.3em] leading-relaxed">
                Hand-selected assets maintained to technical protocols exceeding factory specifications by 150%. All systems monitored via real-time telemetry.
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-white/10 border border-white/10">
          {[
            { 
              t: "Elite Yachts", 
              d: "Private charters across the Arabian Gulf. 100FT+ class vessels only.", 
              i: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&q=80&w=1200",
              tag: "100FT+ CLASS",
              index: "88%"
            },
            { 
              t: "Supercars", 
              d: "The world's most exclusive automotive icons. 850BHP average output.", 
              i: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=1200",
              tag: "850+ BHP AVAIL.",
              index: "99%"
            },
            { 
              t: "Desert VIP", 
              d: "Luxury safari expeditions into the red dunes. Ultimate VIP hardware.", 
              i: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
              tag: "ULTIMATE LUXURY",
              index: "92%"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="group relative h-[650px] bg-[#0A0A0A] overflow-hidden cursor-pointer flex flex-col justify-end p-12"
            >
              <img src={item.i} alt={item.t} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="relative z-10 flex flex-col gap-6">
                 <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#C5A47E]">Category_0{idx + 1}</span>
                      <h3 className="text-4xl font-syne font-black uppercase tracking-tighter italic">{item.t}</h3>
                    </div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:bg-[#C5A47E] group-hover:text-black transition-colors">
                       <ArrowRight size={16} />
                    </div>
                 </div>

                 <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center text-[9px] font-mono opacity-40 uppercase">
                       <span>Availability Index</span>
                       <span>{item.index}</span>
                    </div>
                    <div className="w-full h-1 bg-white/10">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: item.index }}
                         className="h-full bg-[#C5A47E]" 
                       />
                    </div>
                 </div>

                 <p className="text-[9px] opacity-40 uppercase font-bold tracking-[0.2em] leading-relaxed group-hover:opacity-100 transition-opacity">
                   {item.d}
                 </p>
                 
                 <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[8px] font-mono italic opacity-40">{item.tag}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#C5A47E]">System_Check :: Ready</span>
                 </div>
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
    <section id="legacy" className="py-32 bg-[#C5A47E] text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
         <div className="flex flex-col mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.6em] mb-4">Historical // Archive</span>
            <h2 className="text-8xl md:text-[12rem] font-black font-syne tracking-tighter uppercase border-b-8 border-black pb-8 leading-none italic">LEGACY.</h2>
         </div>
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
                 <div className="flex flex-col">
                   <span className="text-8xl leading-none font-syne font-black italic">{item.y}</span>
                   <span className="text-[10px] font-mono opacity-60 tracking-widest px-2">LOG.ENTRY_0{i+1}</span>
                 </div>
                 <div className="flex flex-col gap-4">
                   <span className="text-2xl font-black uppercase tracking-tighter border-l-4 border-black pl-4">{item.t}</span>
                   <p className="text-[11px] not-italic opacity-70 font-bold uppercase tracking-[0.2em] leading-relaxed">
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
    <section className="py-40 bg-[#050505] overflow-hidden relative text-white border-t border-white/10">
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=2670" 
          alt="Luxury Car"
          className="w-full h-full object-cover grayscale" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <span className="text-[9px] font-black tracking-[0.6em] text-[#C5A47E] uppercase mb-8 block">Inquiry // Secure_Channel</span>
          <h2 className="text-6xl md:text-8xl font-black font-syne uppercase tracking-tighter leading-[0.9] mb-12 italic">
            SECURE YOUR <br /> <span className="text-[#C5A47E]">MOMENT.</span>
          </h2>
          <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-40 max-w-sm mb-16 leading-loose">
            Our private office operates 24/7 to facilitate your requests. Expect a technical response within 15 minutes of initial transmission.
          </p>
          
          <div className="flex flex-col gap-10">
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#C5A47E] group-hover:bg-[#C5A47E]/5 transition-all rounded-full">
                   <Phone size={20} className="text-[#C5A47E]" />
                </div>
                <div>
                   <span className="block text-[8px] font-mono uppercase tracking-[0.4em] opacity-20">Priority // VOICE</span>
                   <span className="text-xl font-bold tracking-widest font-outfit uppercase">+971 58 123 4567</span>
                </div>
             </div>
             <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 border border-white/10 flex items-center justify-center group-hover:border-[#C5A47E] group-hover:bg-[#C5A47E]/5 transition-all rounded-full">
                   <Instagram size={20} className="text-[#C5A47E]" />
                </div>
                <div>
                   <span className="block text-[8px] font-mono uppercase tracking-[0.4em] opacity-20">Digital // ACCESS</span>
                   <span className="text-xl font-bold tracking-widest font-outfit uppercase">@exclusive.dubai</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 p-12 backdrop-blur-xl relative">
           <div className="absolute top-0 right-0 p-4 border-b border-l border-white/10">
              <span className="text-[8px] font-mono opacity-20">FORM.SECURE_v4.0</span>
           </div>
           <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 <div className="flex flex-col gap-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C5A47E]">Identification</label>
                    <input type="text" placeholder="FULL NAME" className="bg-transparent border-b border-white/10 py-4 focus:border-[#C5A47E] outline-none font-bold text-[10px] tracking-widest text-white uppercase" />
                 </div>
                 <div className="flex flex-col gap-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C5A47E]">Communication</label>
                    <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-b border-white/10 py-4 focus:border-[#C5A47E] outline-none font-bold text-[10px] tracking-widest text-white uppercase" />
                 </div>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-[8px] font-black uppercase tracking-[0.3em] text-[#C5A47E]">Category_Selection</label>
                 <select className="bg-transparent border-b border-white/10 py-4 focus:border-[#C5A47E] outline-none font-bold text-[10px] tracking-widest appearance-none text-white uppercase cursor-pointer">
                    <option className="bg-[#050505]">PRIVATE YACHT CHARTER</option>
                    <option className="bg-[#050505]">SUPERCAR RENTAL</option>
                    <option className="bg-[#050505]">VIP DESERT EXPERIENCE</option>
                    <option className="bg-[#050505]">BESPOKE CONCIERGE</option>
                 </select>
              </div>
              <button className="w-full py-6 bg-[#C5A47E] text-black font-black uppercase text-[10px] tracking-[0.4em] hover:bg-white transition-all mt-8">
                 Transmit Request
              </button>
           </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/10 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
      {/* Micro-Data Bar Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-8 border-b border-white/5 gap-8">
        <div className="flex gap-12 flex-wrap justify-center overflow-x-auto no-scrollbar pb-4 md:pb-0">
          <div className="flex flex-col min-w-[100px]">
            <span className="text-[8px] uppercase opacity-40 font-bold tracking-[0.4em]">Fleet Capacity</span>
            <span className="text-xs font-mono font-bold italic text-[#C5A47E]">140 UNITS // ACTIVE</span>
          </div>
          <div className="flex flex-col min-w-[100px]">
            <span className="text-[8px] uppercase opacity-40 font-bold tracking-[0.4em]">Satisfaction</span>
            <span className="text-xs font-mono font-bold italic text-[#C5A47E]">99.8% INDEX</span>
          </div>
          <div className="flex flex-col min-w-[100px]">
            <span className="text-[8px] uppercase opacity-40 font-bold tracking-[0.4em]">Avg. Response</span>
            <span className="text-xs font-mono font-bold italic text-[#C5A47E]">0.04S RESPONSE</span>
          </div>
          <div className="flex flex-col min-w-[100px]">
            <span className="text-[8px] uppercase opacity-40 font-bold tracking-[0.4em]">Precision Level</span>
            <span className="text-xs font-mono font-bold italic text-[#C5A47E]">GRADE AA+</span>
          </div>
        </div>
        
        <div className="flex gap-4 items-center px-6 py-2 bg-white/5 border border-white/10 rounded-full">
          <div className="w-2 h-2 rounded-full bg-[#C5A47E] animate-pulse shadow-[0_0_8px_#C5A47E]"></div>
          <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">System Operating Nominally</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="font-syne font-black text-xl tracking-tighter uppercase whitespace-nowrap">Exclusive Dubai</span>
          </div>
          <span className="text-[8px] font-mono opacity-20 mt-1">25.2048° N, 55.2708° E</span>
        </div>
        <div className="text-[9px] font-mono opacity-30 uppercase tracking-[0.2em] text-center">
          © 2026 // TRADEMARK REGISTERED // GLOBAL CONSORTIUM
        </div>
        <div className="flex gap-12">
          {['Privacy', 'Tactical Terms', 'Legal'].map(item => (
            <span key={item} className="text-[9px] font-bold uppercase tracking-[0.4em] cursor-pointer hover:text-[#C5A47E] transition-colors">
              {item}
            </span>
          ))}
        </div>
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
