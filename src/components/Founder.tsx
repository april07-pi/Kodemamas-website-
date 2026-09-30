import React from "react";
import { Quote, Terminal, Linkedin, Award, Sparkles, MapPin } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Stylized Founder Badge Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#4B0082] via-[#7c3aed] to-[#D4AF37] p-1 shadow-2xl">
              
              {/* Inner Card Container */}
              <div className="w-full h-full rounded-[22px] bg-[#09080c] flex flex-col justify-between p-8 text-white relative border border-white/10 overflow-hidden">
                
                {/* Background Grid Accent */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10, 10" />
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                {/* Header Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-white/10 text-[#D4AF37]">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] bg-purple-950/60 border border-purple-800/40 px-3.5 py-1 rounded-full font-bold shadow-md">
                    Founder & Lead Visionary
                  </span>
                </div>

                {/* Central Emblem & Founder Info */}
                <div className="relative z-10 flex flex-col items-center justify-center my-6 grow text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#4B0082] via-[#7c3aed] to-[#D4AF37] p-1 flex items-center justify-center shadow-2xl mb-5">
                    <div className="w-full h-full rounded-full bg-[#09080c] flex items-center justify-center">
                      <span className="font-display font-black text-3xl text-[#D4AF37]">NX</span>
                    </div>
                  </div>
                  <h4 className="font-display font-extrabold text-2xl text-white">Nokwazi Nobuhle Xaba</h4>
                  <p className="text-xs text-purple-300 font-bold mt-1">Founder of KodeMamas</p>
                  <p className="text-xs text-slate-300 mt-3 max-w-xs leading-relaxed font-normal">
                    Technology student & digital inclusion advocate building multilingual, offline-first coding education for South African township and rural communities.
                  </p>
                </div>

                {/* Card Footer Info */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Bloemfontein, South Africa</span>
                  </span>
                  <span className="text-purple-300 font-bold">Building Publicly</span>
                </div>

              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#191624] text-slate-100 border border-white/10 p-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 z-20 hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-purple-950/60 text-[#D4AF37] border border-purple-800/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold font-display text-white">Nokwazi Nobuhle Xaba</p>
                <p className="text-[10px] text-slate-400">South African Tech Innovator</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Vision Bio */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider">
              <span>The Founder's Journey</span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
              Nokwazi Nobuhle Xaba: Bridging the Digital Divide
            </h2>

            <Quote className="w-8 h-8 text-[#D4AF37] opacity-40 shrink-0" />

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
              Nokwazi Nobuhle Xaba is a South African technology student and social entrepreneur. As a builder documenting her technology journey publicly, she witnessed firsthand the digital divide affecting township and rural communities, where millions of people are locked behind expensive data costs and language barriers.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-normal">
              Driven to make a difference, Nokwazi founded KodeMamas to focus on digital inclusion and multilingual coding education. Her goal is to build accessible systems that help township and rural mothers learn to code in their own language, regardless of expensive hardware or high-speed internet availability.
            </p>

            {/* Credential Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-4 border-t border-white/5">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Multilingual Focus</h4>
                  <p className="text-xs text-slate-400 font-normal">Designing coding lessons and definitions in South African mother tongues.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-[#b388ff] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Offline-First Design</h4>
                  <p className="text-xs text-slate-400 font-normal">Iterating on browser-cached environment concepts to eliminate continuous data usage.</p>
                </div>
              </div>
            </div>

            {/* Social Anchor */}
            <a
              href="https://www.linkedin.com/in/nokwazi-nobuhle-xaba-645998306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-purple-950/40 hover:bg-purple-900/60 text-white text-xs font-bold tracking-wider uppercase transition-all border border-purple-800/40 hover:border-purple-600/60 shadow-md hover:shadow-purple-900/30"
            >
              <Linkedin className="w-4 h-4 text-[#D4AF37]" />
              <span>Connect with Nokwazi on LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
