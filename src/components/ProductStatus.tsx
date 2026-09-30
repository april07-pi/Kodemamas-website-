import React from "react";
import { CheckCircle, Clock, Milestone, Sparkles, ExternalLink } from "lucide-react";

export default function ProductStatus() {
  const roadmap = {
    completed: [
      { 
        title: "Google Play Store Official Release", 
        desc: "Officially published and live on the Google Play Store (ID: com.aistudio.kodemamas.hftxyz). Users can install directly on Android with automatic continuous updates.",
        link: "https://play.google.com/store/apps/details?id=com.aistudio.kodemamas.hftxyz"
      },
      { title: "Core Architecture Design", desc: "Designed offline browser environment concepts that require 0% continuous data." },
      { title: "Multilingual Curriculum Foundation", desc: "Formulated initial coding guides and logical explanations in South African native languages." },
      { title: "Lightweight Android Build", desc: "Developed a lightweight offline Android application package optimized for under-resourced devices." },
      { title: "Public Technology Journey", desc: "Shared the initial concept and project updates publicly through the founder's official channels." }
    ],
    inProgress: [
      { title: "Offline Curriculum Expansion", desc: "Expanding interactive offline coding lessons, quizzes, and vocabulary for the Android app." },
      { title: "Language Expansion", desc: "Iterating on educational content translations across additional South African languages." },
      { title: "Local Sync System", desc: "Developing browser cache-based mechanisms to allow seamless offline lesson progression." },
      { title: "Pilot Program Preparation", desc: "Defining localized pilot guidelines and curriculum feedback structures." }
    ],
    future: [
      { title: "Community Partnerships", desc: "Aligning with local development initiatives and learning groups to support digital inclusion." },
      { title: "Multilingual AI Assistant", desc: "Researching integration pathways for server-side localized educational models." },
      { title: "Township Educational Grids", desc: "Scaling access to resource-constrained environments across South Africa." }
    ]
  };

  return (
    <section id="roadmap" className="py-24 bg-[#09080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <Milestone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Deployment & Development Timeline</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Our Product Development Roadmap
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans font-normal">
            Tracking our engineering achievements, active projects, and strategic visions. Aligned for venture scale and high-impact growth.
          </p>
        </div>

        {/* Roadmap Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left items-stretch">
          
          {/* Column 1: Completed */}
          <div className="bg-[#191624]/60 p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-emerald-950/40 rounded-lg text-emerald-400 border border-emerald-800/30">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Completed & Deployed
                </h3>
              </div>

              <div className="space-y-6">
                {roadmap.completed.map((item: any, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-emerald-900/30 group">
                    <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 -translate-x-[6px]" />
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 hover:text-white border border-emerald-500/30 text-[10px] font-mono font-semibold transition-colors"
                        >
                          <span>Get on Google Play</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <span>Status: Live on Google Play</span>
              <span>Published</span>
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="bg-[#191624] p-8 rounded-3xl border border-[#4B0082]/30 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 top-0 bg-[#D4AF37] text-gray-950 text-[9px] font-bold tracking-widest px-4 py-1.5 rounded-bl-xl uppercase font-mono">
              In Development
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-purple-950/40 rounded-lg text-[#b388ff] border border-purple-800/30">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Under Active Build
                </h3>
              </div>

              <div className="space-y-6">
                {roadmap.inProgress.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-purple-900/30 group">
                    <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] -translate-x-[6px] animate-pulse" />
                    <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
              <span>Testing Phase v2.1</span>
              <span>2026 Sandbox Target</span>
            </div>
          </div>

          {/* Column 3: Future Vision */}
          <div className="bg-[#191624]/60 text-white p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2 bg-purple-950/40 rounded-lg text-[#D4AF37] border border-purple-800/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Strategic Horizon
                </h3>
              </div>

              <div className="space-y-6">
                {roadmap.future.map((item, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-white/5 group">
                    <span className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] -translate-x-[6px]" />
                    <h4 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-wider">
              <span>Corporate Strategy</span>
              <span>2027 & Beyond</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
