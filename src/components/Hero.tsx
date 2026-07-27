import React from "react";
import { Sparkles, ArrowUpRight, Play, Users, Smartphone, Globe } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
  onCtaClick: (id: string) => void;
  onTutorClick: () => void;
}

export default function Hero({ title, subtitle, onCtaClick, onTutorClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-[#09080c] via-[#12101a] to-[#09080c] pt-16 pb-20 overflow-hidden">
      {/* Background South African Geometric Accents */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="african-chevron" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0 20 L 20 40 L 40 20 L 20 0 Z" fill="none" stroke="#4B0082" strokeWidth="2" />
              <path d="M 10 20 L 20 30 L 30 20 L 20 10 Z" fill="none" stroke="#D4AF37" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#african-chevron)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headline and Call-to-actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Empowering Women, Lifting Communities 🇿🇦</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            {title.split(".")[0]}.
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#b388ff] via-[#d4af37] to-[#e9d5ff] font-black">
              {title.split(".")[1] || "Build Your Future."}
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-sans max-w-2xl">
            {subtitle}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={onTutorClick}
              className="flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#4B0082] to-[#7c3aed] hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-950/50 hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border border-purple-500/20"
            >
              <Play className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>Start Learning</span>
            </button>
            <button
              onClick={() => onCtaClick("contact")}
              className="flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Become a Beta Tester</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </button>
            <button
              onClick={() => onCtaClick("partnerships")}
              className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl text-slate-300 hover:text-[#D4AF37] font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* Trust Badges / Current Development Status */}
          <div className="pt-8 border-t border-white/5 w-full">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
              Current Development Status
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start space-x-2.5 text-slate-300 font-sans text-xs">
                <Globe className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Google Play Internal Testing</p>
                  <p className="text-[11px] text-slate-400">Our native Android application build has entered internal testing stages.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 text-slate-300 font-sans text-xs">
                <Smartphone className="w-4 h-4 text-[#7c3aed] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Student-Led Initiative</p>
                  <p className="text-[11px] text-slate-400">A grassroots South African EdTech project building for digital inclusion.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 text-slate-300 font-sans text-xs">
                <Users className="w-4 h-4 text-[#b388ff] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Seeking Partners & Mentors</p>
                  <p className="text-[11px] text-slate-400">Actively seeking pilot schools, corporate mentors, and strategic partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Animated South African Tech Art */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-[#4B0082]/10 to-[#D4AF37]/10 flex items-center justify-center p-8 border border-white/5 shadow-2xl">
            {/* Ambient gold glowing orb */}
            <div className="absolute top-1/4 right-1/4 w-44 h-44 rounded-full bg-[#D4AF37]/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-44 h-44 rounded-full bg-purple-600/10 blur-3xl" />

            {/* Simulated Mobile & Code IDE interface representing Offline AI-first */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#12101a] to-[#09080c] p-5 shadow-2xl border border-purple-900/30 flex flex-col justify-between text-left overflow-hidden relative group">
              {/* Header of IDE */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                </div>
                <div className="text-[10px] font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full flex items-center space-x-1.5 border border-white/5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                  <span>mamas_tutor.js • Offline Mode</span>
                </div>
              </div>

              {/* Code Panel */}
              <div className="font-mono text-xs text-slate-300 space-y-2.5 grow">
                <p className="text-gray-500">// Sawubona! Welkom! Welcome!</p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">kodemama</span> = <span className="text-yellow-400">new</span> <span className="text-emerald-400">MamasTutor</span>();</p>
                <p>kodemama.<span className="text-blue-300">setLanguage</span>(<span className="text-amber-300">"isiZulu"</span>);</p>
                <div className="pl-4 border-l-2 border-purple-500 py-1 bg-purple-950/30 rounded-r-lg">
                  <p className="text-purple-300">// AI response in local language:</p>
                  <p className="text-[#D4AF37] text-[11px] leading-relaxed italic">
                    "Sawubona Mama! Namhlanje sizofunda nge-HTML. HTML yakha isakhiwo..."
                  </p>
                </div>
                <p className="text-gray-500">// Background sync when data is free:</p>
                <p><span className="text-purple-400">await</span> kodemama.<span className="text-emerald-400">syncProgressToCloud</span>();</p>
              </div>

              {/* Graphical Overlay showing offline capabilities */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">
                    OFF-LINE LEARNING
                  </div>
                  <div className="p-1.5 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold">
                    MULTILINGUAL
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  Internal Testing Prototype v0.9
                </span>
              </div>
            </div>

            {/* floating absolute elements */}
            <div className="absolute -top-4 -right-4 bg-[#191624] text-slate-100 text-xs font-bold rounded-xl p-3.5 shadow-xl border border-purple-900/30 flex items-center space-x-2.5">
              <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold">✓</div>
              <div>
                <p className="font-display">Offline-First Design</p>
                <p className="text-[10px] font-normal text-slate-400">Works offline after initial setup</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#191624] text-slate-100 text-xs font-bold rounded-xl p-3.5 shadow-xl border border-purple-900/30 flex items-center space-x-2.5">
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold">★</div>
              <div>
                <p className="font-display">African Languages</p>
                <p className="text-[10px] font-normal text-slate-400">isiZulu, Sepedi, isiXhosa & more</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
