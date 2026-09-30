import React from "react";
import { WifiOff, Database, RotateCw, Smartphone, CheckCircle, HelpCircle, HardDrive, ArrowUpRight } from "lucide-react";

export default function OfflineFirst() {
  const offlineSteps = [
    {
      icon: <HardDrive className="w-6 h-6 text-[#D4AF37]" />,
      title: "1. One-Time Mini Download",
      desc: "Connect to data or Wi-Fi once to download lessons and vocabulary. The entire bundle is optimized under 15MB to save cost.",
      status: "Cached on install",
      statusColor: "text-emerald-400 bg-emerald-950/30 border-emerald-800/30"
    },
    {
      icon: <WifiOff className="w-6 h-6 text-purple-400" />,
      title: "2. 100% Offline Learning",
      desc: "Complete coursework, write HTML/CSS/JS code, and receive real-time translation help in isiNdebele without using a single byte of data.",
      status: "No data required",
      statusColor: "text-[#D4AF37] bg-[#D4AF37]/10 border-[#D4AF37]/20"
    },
    {
      icon: <RotateCw className="w-6 h-6 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />,
      title: "3. Smart Progress Sync",
      desc: "Lessons are saved locally in the device memory (IndexedDB). When free late-night data or school Wi-Fi is active, progress syncs with 1-click.",
      status: "Optimized sync",
      statusColor: "text-indigo-300 bg-indigo-950/30 border-indigo-800/30"
    }
  ];

  return (
    <section id="offline-ready" className="py-24 bg-[#12101a] border-b border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          {/* Visual Offline Ready Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-400 uppercase tracking-widest mb-6 shadow-md shadow-emerald-950/20">
            <WifiOff className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>✓ Offline Ready & Data-Free</span>
          </div>
          
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            How KodeMamas Works Fully Offline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal leading-relaxed">
            Mobile data in South Africa averages R80 per gigabyte—an immense barrier for township families. We designed KodeMamas with an offline-first architecture so that mothers and children can learn to code without worrying about data costs.
          </p>
        </div>

        {/* Offline Steps Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {offlineSteps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#191624]/50 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#09080c]/80 rounded-2xl border border-white/5 text-white">
                    {step.icon}
                  </div>
                  <span className={`text-[9px] px-2.5 py-1 rounded-full font-bold uppercase border ${step.statusColor}`}>
                    {step.status}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono">Mechanism #{idx + 1}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  Live on Google Play
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Play Store Banner */}
        <div className="mb-12 bg-gradient-to-r from-emerald-950/40 via-[#191624] to-emerald-950/30 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span>Android Release Now Live</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Install KodeMamas from Google Play Store
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed font-normal">
              Experience the offline-first coding curriculum directly on your Android phone or tablet. All lessons, practice playgrounds, and language definitions sync automatically through Google Play without manual APK downloads.
            </p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.aistudio.kodemamas.hftxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-950/50 transition-all hover:scale-105 shrink-0 group border border-emerald-400/30 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.22-.964V2.778c0-.36.08-.692.22-.964zm11.242 11.245l2.257 2.257-11.83 6.772 9.573-9.029zm0-2.118L5.278 1.914l11.83 6.772-2.257 2.256zm1.092 1.059l4.57 2.618a1.365 1.365 0 0 0 0-2.366l-4.57-2.618-1.42 1.42 1.42 1.42z" />
            </svg>
            <div className="text-left leading-tight">
              <span className="block text-[9px] uppercase font-mono text-emerald-200">Download on</span>
              <span className="block text-sm font-extrabold text-white">Google Play</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-300 ml-1" />
          </a>
        </div>

        {/* Sync Status Banner Simulation */}
        <div className="bg-gradient-to-r from-purple-950/40 via-[#191624] to-purple-950/40 border border-purple-900/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Database className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#12101a] flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              </span>
            </div>
            <div className="text-left">
              <h4 className="font-display font-bold text-sm text-white">
                IndexedDB Local Sandbox Storage
              </h4>
              <p className="text-slate-400 text-xs mt-0.5 leading-relaxed font-normal">
                Lessons completed, quizzes aced, and code snippets saved are automatically cached. Current sandbox size is <strong className="text-slate-200">2.4 MB / 15.0 MB</strong>.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <div className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between sm:justify-start gap-4">
              <span className="text-[10px] font-mono text-slate-400">LAST SYNCHRONIZATION:</span>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">Synchronized (100% Local)</span>
            </div>
            <div className="px-4 py-2 bg-black/40 border border-white/5 rounded-xl flex items-center justify-between sm:justify-start gap-4">
              <span className="text-[10px] font-mono text-slate-400">SYNC SCHEDULE:</span>
              <span className="text-xs font-mono font-bold text-[#D4AF37] uppercase">Midnight / Wi-Fi Hub Triggered</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
