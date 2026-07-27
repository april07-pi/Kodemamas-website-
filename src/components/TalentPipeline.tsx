import React from "react";
import { Compass, FileText, Briefcase, GraduationCap, ArrowRight, Layers, Award } from "lucide-react";

export default function TalentPipeline() {
  const steps = [
    {
      step: "01",
      icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
      title: "Discover & Intake",
      description: "Localized, low-bandwidth community recruitment. We select highly motivated mothers and young girls from townships and rural villages who show analytical talent."
    },
    {
      step: "02",
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "Self-Paced Learning",
      description: "Undergoing our fully offline-first coding curriculum using local mobile devices, guided by the multilingual AI Tutor and physical community hubs."
    },
    {
      step: "03",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      title: "Build Projects",
      description: "Writing structural applications, compiling Javascript code locally, and collaborating with local peers on concrete, practical challenges."
    },
    {
      step: "04",
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Portfolio & CV Prep",
      description: "Consolidating all projects into a professional React portfolio, and writing enterprise-standard resumes with technical mentor reviews."
    },
    {
      step: "05",
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      title: "Planned Career Prep",
      description: "Designing corporate CSI pathways to help connect top pilot graduates with potential remote internships or junior technical roles."
    },
    {
      step: "06",
      icon: <Award className="w-5 h-5 text-red-400" />,
      title: "Long-Term Empowerment",
      description: "Empowering mothers with high-demand digital skills, creating a strong pathway for multi-generational wealth ripple effects in their local communities."
    }
  ];

  return (
    <section id="pipeline" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Learner Lifecycle</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Our End-to-End Software Talent Pipeline
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans font-normal">
            How we identify talents, guide them through technical proficiency, compile real portfolios, and transition them into paid careers.
          </p>
        </div>

        {/* Steps Pipeline Timeline */}
        <div className="relative">
          {/* Timeline connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10 text-left">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#191624]/60 rounded-2xl p-6 border border-white/5 shadow-xl hover:shadow-purple-950/25 hover:bg-[#191624] transition-all duration-300 flex flex-col justify-between group"
                id={`pipeline-step-${idx}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono font-bold text-2xl text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                      {item.step}
                    </span>
                    <div className="p-2 bg-[#09080c] rounded-xl border border-white/5 shadow-sm">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Arrow indicator (except last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-4 -translate-y-8 text-slate-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
