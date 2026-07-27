import React from "react";
import { Quote, Terminal, Linkedin, Award, Sparkles } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Left Column: Portrait & Stats Mock */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#4B0082] to-[#7c3aed] p-1 shadow-2xl">
              {/* Custom SVG/vector illustration representing a proud African female technology leader with abstract lines */}
              <div className="w-full h-full rounded-[22px] bg-[#09080c] flex flex-col justify-between p-8 text-white relative border border-white/5">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="40%" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10, 10" />
                    <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
                  </svg>
                </div>

                <div className="flex items-center justify-between relative z-10">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-white/10">
                    <Terminal className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37] bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full font-bold">
                    Student Founder
                  </span>
                </div>

                {/* Simulated Silhouette Representation */}
                <div className="relative z-10 flex flex-col items-center justify-center my-8 grow text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#4B0082] to-[#D4AF37] p-1 flex items-center justify-center shadow-xl mb-4">
                    <span className="font-display font-black text-3xl text-white">NX</span>
                  </div>
                  <h4 className="font-display font-extrabold text-xl text-white">Nokwazi Nobuhle Xaba</h4>
                  <p className="text-xs text-purple-300 font-bold">Founder of KodeMamas</p>
                  <p className="text-[11px] text-slate-300 mt-2 max-w-xs leading-normal text-center px-4 font-normal">
                    Technology student and digital inclusion advocate building multilingual, offline-first coding education for South African township and rural communities.
                  </p>
                </div>

                {/* Footer details of cards */}
                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>Bloemfontein, South Africa</span>
                  <span>Documenting her Journey</span>
                </div>
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -bottom-4 -right-4 bg-[#191624] text-slate-100 border border-white/5 p-4 rounded-2xl shadow-2xl flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-purple-950/40 text-[#D4AF37] border border-purple-800/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold font-display">KodeMamas Founder</p>
                <p className="text-[10px] text-slate-400">Building Publicly</p>
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
              href="https://linkedin.com"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold tracking-wider uppercase transition-colors border border-white/10"
            >
              <Linkedin className="w-4 h-4 text-[#D4AF37]" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
