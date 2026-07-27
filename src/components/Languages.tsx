import React from "react";
import { Languages as LangIcon, CheckCircle2, Sparkles, Clock, Globe, ArrowRight } from "lucide-react";

export default function LanguagesSection() {
  const activeLanguages = [
    {
      name: "isiNdebele",
      type: "Bilingual Core",
      desc: "Comprehensive lesson plans, localized variables, and coding scenario translations with high-relevance township analogies.",
      badge: "Supported Now",
      color: "border-purple-500/30 text-purple-300 bg-purple-950/20"
    },
    {
      name: "English",
      type: "Bilingual Core",
      desc: "Standard industry syntax explanations integrated with accessible daily-life models and community-driven lessons.",
      badge: "Supported Now",
      color: "border-emerald-500/30 text-emerald-300 bg-emerald-950/20"
    },
    {
      name: "SASL (Sign Language)",
      type: "Visual Translation",
      desc: "Inclusive educational videos and sign demonstrations mapping HTML, CSS, and basic JavaScript terms for hearing-impaired learners.",
      badge: "Supported Now",
      color: "border-amber-500/30 text-amber-300 bg-amber-950/20"
    }
  ];

  const comingSoonLanguages = [
    { name: "isiZulu", region: "KwaZulu-Natal / Gauteng" },
    { name: "isiXhosa", region: "Eastern Cape / Western Cape" },
    { name: "Sepedi", region: "Limpopo" },
    { name: "Setswana", region: "North West / Northern Cape" },
    { name: "Afrikaans", region: "Gauteng / Western Cape" },
    { name: "Xitsonga", region: "Limpopo / Mpumalanga" },
    { name: "Siswati", region: "Mpumalanga" },
    { name: "Tshivenda", region: "Limpopo" }
  ];

  return (
    <section id="languages" className="py-24 bg-[#09080c] border-b border-white/5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider mb-4">
            <LangIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Inclusive Digital Access</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Supported Languages & Localization Pipeline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal leading-relaxed">
            Removing language barriers is fundamental to our mission. We are designing the first curriculum verified by South African student engineers to translate software concepts into indigenous mother tongues, avoiding automated AI hallucinations.
          </p>
        </div>

        {/* Supported Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {activeLanguages.map((lang, idx) => (
            <div 
              key={idx} 
              className="bg-[#191624]/40 border border-white/5 hover:border-purple-500/20 rounded-3xl p-8 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">{lang.type}</span>
                    <h3 className="font-display font-extrabold text-2xl text-white">{lang.name}</h3>
                  </div>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase border ${lang.color}`}>
                    {lang.badge}
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {lang.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center space-x-2 text-xs font-mono text-[#D4AF37]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Verified Scenario Set Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Languages */}
        <div className="bg-[#191624]/20 border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/5">
            <div className="space-y-2 text-left">
              <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                Localization Pipeline Status
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm font-normal">
                These indigenous languages are slated for upcoming implementation in subsequent cohort testing cycles.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-purple-950/40 text-purple-300 text-xs font-bold border border-purple-800/30">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Quality-Vetted Pipeline</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {comingSoonLanguages.map((lang, idx) => (
              <div 
                key={idx} 
                className="bg-[#09080c]/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between text-left relative overflow-hidden group hover:border-[#D4AF37]/20 transition-colors"
              >
                <div className="absolute right-2 top-2">
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest bg-purple-950/60 text-[#D4AF37] px-1.5 py-0.5 rounded-md border border-[#D4AF37]/20">
                    Soon
                  </span>
                </div>
                <div>
                  <h5 className="font-display font-bold text-sm text-slate-200 mt-2">{lang.name}</h5>
                  <p className="text-[10px] text-slate-500 font-mono mt-1">{lang.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
