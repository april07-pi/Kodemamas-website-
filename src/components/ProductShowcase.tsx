import React, { useState } from "react";
import { Laptop, Smartphone, Terminal, Cpu, Database, Cloud, BookOpen, CheckCircle, Clock } from "lucide-react";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<"screenshots" | "stack" | "languages">("screenshots");

  const techStack = [
    {
      category: "Frontend & Interactive Core",
      items: [
        { name: "React 18 & Vite", desc: "For dynamic, high-performance web runtime." },
        { name: "Tailwind CSS", desc: "For a lightweight, fully responsive mobile-first UI." },
        { name: "Motion Animations", desc: "For fluid transition animations to reduce visual load." }
      ],
      icon: Laptop,
      color: "text-purple-400"
    },
    {
      category: "Offline-First Mechanics",
      items: [
        { name: "IndexedDB / PouchDB", desc: "Handles local client-side progress caching." },
        { name: "Service Workers & Workbox", desc: "Caches asset frameworks to ensure offline page load." },
        { name: "Local Storage State", desc: "Saves selected language preferences and lesson indices." }
      ],
      icon: Database,
      color: "text-amber-400"
    },
    {
      category: "Backend & AI Core",
      items: [
        { name: "Node.js & Express", desc: "Hosts secure proxy API endpoints to keep secrets hidden." },
        { name: "Google Gemini API", desc: "Translates and localizes programming analogies in real-time." },
        { name: "Google Cloud Run", desc: "Provides high-availability, scales-to-zero server runtime." }
      ],
      icon: Cpu,
      color: "text-[#D4AF37]"
    },
    {
      category: "Mobile Target App",
      items: [
        { name: "Android Platform", desc: "Optimized for Android 10+ (dominating 90%+ of the local market)." },
        { name: "Kotlin & Jetpack Compose", desc: "Powers the native Android application shell." }
      ],
      icon: Smartphone,
      color: "text-emerald-400"
    }
  ];

  const languages = [
    { name: "isiZulu", status: "Active Preview", coverage: "Full lesson structures, culinary analogies, and interactive syntax glossary translations.", active: true },
    { name: "isiXhosa", status: "Active Preview", coverage: "Basic lessons, localized variables, and standard control structures.", active: true },
    { name: "Afrikaans", status: "Active Preview", coverage: "Grammar alignment, variable models, and local code comments.", active: true },
    { name: "Sepedi & Setswana", status: "Under Development", coverage: "Active dictionary mapping and regional pilot school translations.", active: false },
    { name: "Xitsonga & Siswati", status: "Planned Milestone", coverage: "Integration slated for future Q4 pilot expansion phases.", active: false }
  ];

  return (
    <section id="product-showcase" className="py-24 bg-[#12101a] border-b border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Showcase & Architecture</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Proof of Product: App & Tech Stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            We are dedicated to technological transparency. See how we are designing the KodeMamas mobile application, our rigorous developer stack, and our real language translation stages.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("screenshots")}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "screenshots"
                ? "bg-[#4B0082] text-white border border-purple-500/20 shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            App Screenshots & Mockups
          </button>
          <button
            onClick={() => setActiveTab("stack")}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "stack"
                ? "bg-[#4B0082] text-white border border-purple-500/20 shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Developer Technical Stack
          </button>
          <button
            onClick={() => setActiveTab("languages")}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "languages"
                ? "bg-[#4B0082] text-white border border-purple-500/20 shadow-md"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
          >
            Language Translation Status
          </button>
        </div>

        {/* Dynamic Display */}
        <div className="bg-[#191624]/40 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl min-h-[500px] flex flex-col justify-between">
          
          {activeTab === "screenshots" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
              <div className="space-y-6">
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Visual Prototype Demonstration
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  These visual mockups illustrate our core target mobile client design. We optimize for low-tier Android hardware, delivering ultra-light offline-ready interactive lessons where mothers and children learn together.
                </p>
                <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/30 text-xs text-purple-200">
                  <p className="font-bold flex items-center gap-1.5 text-[#D4AF37] mb-1">
                    <CheckCircle className="w-4 h-4" />
                    Offline-Ready Interface Design
                  </p>
                  No video streaming or heavy graphics. Lessons rely purely on localized textual analogies, simple interactive components, and offline-stored syntax files to minimize data.
                </div>
              </div>

              {/* Visuals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 text-center">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#09080c] shadow-lg aspect-[3/4]">
                    <img 
                      src="/src/assets/images/kodemamas_android_app_1782749713558.jpg" 
                      alt="KodeMamas Android App Interface Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Android Bilingual Lesson Layout</span>
                </div>

                <div className="space-y-2 text-center">
                  <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#09080c] shadow-lg aspect-[3/4]">
                    <img 
                      src="/src/assets/images/kodemamas_offline_playground_1782749731186.jpg" 
                      alt="KodeMamas Coding Playground Interface Mockup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">Offline Coding Playground Sandbox</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "stack" && (
            <div className="space-y-8 animate-fade-in">
              <div className="max-w-2xl">
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">
                  Technical Stack & System Architecture
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  Our system is built around high performance, local client retention, and minimal packet size constraints to keep server-bound telemetry completely off-line until the user consents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {techStack.map((stack, idx) => {
                  const Icon = stack.icon;
                  return (
                    <div key={idx} className="bg-[#09080c]/50 border border-white/5 rounded-2xl p-6 flex flex-col h-full hover:border-[#4B0082] transition-colors">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`p-2 rounded-lg bg-white/5 ${stack.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-xs text-white uppercase tracking-wider">{stack.category}</h4>
                      </div>
                      <ul className="space-y-3.5 flex-grow">
                        {stack.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="text-xs">
                            <strong className="text-slate-200 block font-semibold">{item.name}</strong>
                            <span className="text-slate-400 font-normal mt-0.5 block leading-normal">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === "languages" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in text-left">
              <div className="lg:col-span-4 space-y-6">
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Transparent Translation Status
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  We are highly transparent about our localization coverage. Building accurate technical dictionaries for Indigenous South African languages requires extensive student and community reviews.
                </p>
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 leading-normal">
                  <p className="font-bold text-[#D4AF37] mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    Active Verification Stage
                  </p>
                  To prevent "AI hallucination" of local cultural terms, all core terminologies are verified manually by local South African student programmers before active sandbox deployment.
                </div>
              </div>

              <div className="lg:col-span-8 bg-[#09080c]/40 border border-white/5 rounded-2xl p-6 space-y-4">
                <h4 className="font-mono text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2">Translation Pipeline Matrix</h4>
                <div className="divide-y divide-white/5">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-display font-bold text-sm text-white">{lang.name}</span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            lang.active 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                              : "bg-purple-950/40 text-purple-400 border border-purple-800/20"
                          }`}>
                            {lang.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 font-normal leading-normal">{lang.coverage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
