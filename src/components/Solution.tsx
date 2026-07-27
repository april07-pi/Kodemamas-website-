import React from "react";
import { Cpu, Wifi, MessageSquareCode, Award, Shield, Compass, HeartHandshake } from "lucide-react";

export default function Solution() {
  const solutions = [
    {
      icon: <Wifi className="w-5 h-5 text-emerald-400" />,
      title: "100% Offline-First Learning Engine",
      description: "Our platform downloads learning materials, interactive playgrounds, and workspace files directly to the local device. Learners write code and complete lessons without using any internet data, syncing progress seamlessly only when they reach a community hub or during night-time free-data windows.",
      badge: "Zero-Data Architecture"
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: "Multilingual AI Coding Tutor",
      description: "Equipped with custom translation intelligence, our AI assistant explains complex programming paradigms in South African native languages, translating coding jargon on-the-fly and supporting learning with colloquial local analogies.",
      badge: "Gemini-Powered"
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-blue-400" />,
      title: "Mobile-First low-end Android Support",
      description: "No need for fancy R15,000 laptops. Our application is fully optimized to run efficiently on low-end, recycled Android smartphones and tablets popular in township communities, bringing learning directly to their pocket.",
      badge: "Hardware Accessible"
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-pink-400" />,
      title: "Mother-Centric Community Model",
      description: "We establish physical safe-spaces in township hubs with local power supply, computers, and most importantly: on-site childcare. This allows mothers to focus fully on their software development training with complete peace of mind.",
      badge: "Ubuntu Design"
    },
    {
      icon: <Compass className="w-5 h-5 text-[#D4AF37]" />,
      title: "Comprehensive Career & Portfolio Development",
      description: "We focus on building functional React and Node.js portfolios, hosting them on custom low-bandwidth profiles, and preparing learners for tech interviews and paid internships with corporate partners.",
      badge: "Employment Aligned"
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      title: "Government & University Alignment",
      description: "Our curriculum is being designed to align with South African digital skills frameworks, providing learners with recognizable credentials that bolster their employment opportunities with local enterprise partners.",
      badge: "Framework Alignment"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>The KodeMamas Blueprint</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Designed for South Africa's Conditions, Built for Global Excellence
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans">
            We bypass infrastructural gaps rather than wishing they weren't there. Here is how we make digital high-income skills accessible to any township or village.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <div
              key={index}
              className="bg-[#191624]/60 rounded-2xl p-7 border border-white/5 shadow-xl hover:shadow-purple-950/25 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              id={`solution-card-${index}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-[#09080c] rounded-xl border border-white/5">
                    {sol.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#D4AF37] uppercase bg-purple-950/40 border border-purple-800/20 px-2.5 py-1 rounded-full">
                    {sol.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-3">
                  {sol.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {sol.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
