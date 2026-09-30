import React from "react";
import { Cpu, Terminal, ShieldAlert, Award, Database, Settings } from "lucide-react";

interface HeaderProps {
  onSectionClick: (id: string) => void;
  onTutorClick: () => void;
  onCmsClick: () => void;
  cmsActive: boolean;
}

export default function Header({ onSectionClick, onTutorClick, onCmsClick, cmsActive }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#09080c]/85 backdrop-blur-md border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onSectionClick("hero")} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="header-logo"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#7c3aed] text-white shadow-md shadow-purple-900/40 transition-transform group-hover:scale-105 border border-purple-500/20">
            <Terminal className="w-5 h-5 text-white" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-[#09080c] flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </span>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Kode<span className="text-[#D4AF37]">Mamas</span>
              </span>
            </div>
            <p className="text-[9px] font-mono tracking-widest uppercase text-[#D4AF37] font-semibold">
              South Africa
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => onSectionClick("problem")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            The Problem
          </button>
          <button 
            onClick={() => onSectionClick("solution")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Our Solution
          </button>
          <button 
            onClick={() => onSectionClick("languages")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Languages
          </button>
          <button 
            onClick={() => onSectionClick("offline-ready")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Offline First
          </button>
          <button 
            onClick={() => onSectionClick("technology")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Technology
          </button>
          <button 
            onClick={() => onSectionClick("impact")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Impact
          </button>
          <button 
            onClick={() => onSectionClick("pledge-calculator")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Pledge Calculator
          </button>
          <button 
            onClick={() => onSectionClick("pipeline")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Talent Journey
          </button>
          <button 
            onClick={() => onSectionClick("partnerships")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Partnership
          </button>
          <button 
            onClick={() => onSectionClick("news")}
            className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            Insights
          </button>
        </nav>

        {/* Dynamic CMS & Tutor Triggers */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Google Play Store Direct Link */}
          <a
            href="https://play.google.com/store/apps/details?id=com.aistudio.kodemamas.hftxyz"
            target="_blank"
            rel="noopener noreferrer"
            id="google-play-header-btn"
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-emerald-950/50 hover:bg-emerald-900/60 text-emerald-300 hover:text-white border border-emerald-500/30 text-xs font-semibold tracking-wide transition-all shadow-sm group"
            title="Download on Google Play Store"
          >
            <svg className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.22-.964V2.778c0-.36.08-.692.22-.964zm11.242 11.245l2.257 2.257-11.83 6.772 9.573-9.029zm0-2.118L5.278 1.914l11.83 6.772-2.257 2.256zm1.092 1.059l4.57 2.618a1.365 1.365 0 0 0 0-2.366l-4.57-2.618-1.42 1.42 1.42 1.42z" />
            </svg>
            <span className="hidden sm:inline">Google Play</span>
            <span className="sm:hidden">App</span>
          </a>

          {/* Headless CMS Portal Toggle */}
          <button
            onClick={onCmsClick}
            id="cms-toggle-btn"
            className={`hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide border transition-all ${
              cmsActive
                ? "bg-[#D4AF37] text-gray-950 border-[#D4AF37] shadow-sm"
                : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            <Settings className={`w-3.5 h-3.5 ${cmsActive ? "animate-spin" : ""}`} />
            <span>{cmsActive ? "Close CMS Portal" : "Headless CMS Portal"}</span>
          </button>

          {/* AI Tutor Floating Anchor */}
          <button
            onClick={onTutorClick}
            id="ai-tutor-btn"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#4B0082] to-[#7c3aed] text-white text-xs font-semibold tracking-wide shadow-lg hover:brightness-110 hover:shadow-purple-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-purple-500/30"
          >
            <Cpu className="w-3.5 h-3.5 animate-pulse text-[#D4AF37]" />
            <span>AI Coding Tutor</span>
          </button>
        </div>
      </div>
    </header>
  );
}
