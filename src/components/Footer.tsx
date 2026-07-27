import React, { useState } from "react";
import { Terminal, Mail, Phone, MapPin, Heart, Send, Check } from "lucide-react";

interface FooterProps {
  onSectionClick: (id: string) => void;
  onCmsClick: () => void;
  onLegalClick?: (tab: "privacy" | "terms" | "popia" | "cookie") => void;
}

export default function Footer({ onSectionClick, onCmsClick, onLegalClick }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#09080c] text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6" id="footer-logo">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#7c3aed] text-white">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-xl tracking-tight text-white">
                  Kode<span className="text-[#D4AF37]">Mamas</span>
                </span>
                <p className="text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mt-0.5">
                  Code in your language
                </p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 text-left font-normal">
              AI-powered, multilingual, offline-first coding education empowering township and rural mothers, young girls, and underserved communities across South Africa.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold justify-start">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span>Aligned with UN SDGs 4, 5, 8 & 10</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#D4AF37] uppercase mb-6">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button onClick={() => onSectionClick("problem")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  The Problem
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("solution")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  Our Solution
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("technology")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  Engineering Tech Stack
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("impact")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  Live Impact Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("pipeline")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  Learner Pipeline
                </button>
              </li>
              <li>
                <button onClick={() => onSectionClick("partnerships")} className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left font-normal">
                  Corporate Sponsorship
                </button>
              </li>
            </ul>
          </div>

          {/* Hubs & Coordinates */}
          <div className="text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#D4AF37] uppercase mb-6">
              Proposed Pilot Locations
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Bloemfontein Location (Proposed HQ):</span>
                  <p className="text-xs text-slate-300 font-normal mt-0.5">Bloemfontein Central, Bloemfontein, 9301</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Khayelitsha Location (Proposed):</span>
                  <p className="text-xs text-slate-300 font-normal mt-0.5">Walter Sisulu Rd, Khayelitsha, Cape Town, 7784</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-300 font-normal">kodemamas@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-300 font-normal">+27 (0)72 539 4371</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="text-left">
            <h4 className="font-display font-bold text-sm tracking-widest text-[#D4AF37] uppercase mb-6">
              Executive Briefing
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed mb-4 font-normal">
              Subscribe to our quarterly investor and partner briefings. Track our rural expansion, technological roadmap milestones, and policy alignments.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@kodemamas.org"
                  required
                  className="w-full bg-[#12101a] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#4B0082] hover:bg-[#3c0066] text-white transition-colors border border-purple-500/20 cursor-pointer"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[10px] text-green-400 font-medium">
                  Briefing registered. Welcome to KodeMamas.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-6 gap-2">
            <p className="font-normal">© 2026 KodeMamas. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px]">
              <button onClick={() => onLegalClick?.("privacy")} className="hover:text-[#D4AF37] transition-colors cursor-pointer font-normal text-slate-400">Privacy Policy</button>
              <span className="text-white/10 hidden md:inline">•</span>
              <button onClick={() => onLegalClick?.("terms")} className="hover:text-[#D4AF37] transition-colors cursor-pointer font-normal text-slate-400">Terms of Use</button>
              <span className="text-white/10 hidden md:inline">•</span>
              <button onClick={() => onLegalClick?.("popia")} className="hover:text-[#D4AF37] transition-colors cursor-pointer font-normal text-slate-400">POPIA Considerations</button>
              <span className="text-white/10 hidden md:inline">•</span>
              <button onClick={() => onLegalClick?.("cookie")} className="hover:text-[#D4AF37] transition-colors cursor-pointer font-normal text-slate-400">Cookie Policy</button>
            </div>
          </div>
          <p className="flex items-center space-x-1 mt-4 lg:mt-0 font-normal">
            <span>Designed & engineered with pride in Mzansi, South Africa</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  );
}
