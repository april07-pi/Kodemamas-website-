import React from "react";
import { AlertCircle, WifiOff, Languages, Globe2, BarChart2 } from "lucide-react";

export default function Problem() {
  const problemPoints = [
    {
      icon: <WifiOff className="w-6 h-6 text-[#D4AF37]" />,
      title: "Extremely High Data Affordability",
      description: "South Africans pay some of the highest mobile data rates in relation to minimum wage on the continent. In rural areas and townships, internet connection represents an unsustainable portion of a household's income, rendering online coding courses completely inaccessible.",
      stat: "R80+",
      statLabel: "Est. average price per GB of prepaid mobile data",
      source: "ICASA State of ICT Report estimations on standard out-of-bundle prepaid data rates"
    },
    {
      icon: <Languages className="w-6 h-6 text-[#D4AF37]" />,
      title: "The Double Language Barrier",
      description: "Programming is almost universally taught in English. For South African mothers and young girls who speak one of the other 11 official languages natively, learning complex computational logic in their second or third language adds a massive hurdle to an already challenging subject.",
      stat: "85%",
      statLabel: "of learners speak English as a 2nd/3rd language",
      source: "Census 2022 South Africa Language Demographics"
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#b388ff]" />,
      title: "Severe Rural & Township Connectivity",
      description: "Load-shedding, unstable fiber backbones, and lack of electrical or network infrastructure in remote schools make traditional cloud-dependent platforms fail constantly. Rural mothers cannot afford to wait on loading spinners.",
      stat: "~70%",
      statLabel: "Est. of township schools lack stable internet infrastructure",
      source: "Estimated from Department of Basic Education School Infrastructure & ICT Audit findings"
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-emerald-400" />,
      title: "Software Engineering Skills Shortage",
      description: "Despite massive unemployment (exceeding 32%), South African tech companies are desperate for local software engineers, and are forced to outsource. Underserved women are completely bypassed by traditional pipelines.",
      stat: "10,000+",
      statLabel: "Est. annual unfilled developer roles in SA",
      source: "Derived from JCSE ICT Skills Survey and sector training research estimations"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-[#12101a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-semibold text-red-300 uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Reality of South Africa's Divide</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Why Traditional EdTech Fails Our Townships and Rural Areas
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4">
            Building software careers requires more than just launching an online website. It requires tackling the core physical and economic barriers of Mzansi head-on.
          </p>
        </div>

        {/* Infographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {problemPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-[#191624]/60 hover:bg-[#191624] rounded-2xl p-8 border border-white/5 shadow-xl hover:shadow-purple-950/20 transition-all duration-300 flex flex-col justify-between"
              id={`problem-card-${idx}`}
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-[#09080c] rounded-xl border border-white/5 shadow-inner">
                    {point.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {point.description}
                </p>
              </div>

              {/* Stat callout in the card with source citation */}
              <div className="pt-6 border-t border-white/5 flex flex-col space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="font-display font-extrabold text-3xl text-[#D4AF37] tracking-tight">
                    {point.stat}
                  </span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {point.statLabel}
                  </span>
                </div>
                {point.source && (
                  <p className="text-[10px] font-mono text-slate-500 italic mt-1">
                    Source: {point.source}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Executive summary callout box */}
        <div className="mt-16 bg-gradient-to-r from-[#4B0082] to-[#6366f1] text-white rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden shadow-2xl border border-purple-500/20">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-12 -translate-y-12">
            <WifiOff className="w-96 h-96" />
          </div>
          <div className="max-w-3xl relative z-10">
            <h4 className="font-display font-extrabold text-xl sm:text-2xl mb-4 text-[#D4AF37]">
              The Inequality Loop
            </h4>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              When software education relies exclusively on fast broadband connections, high-end laptops, and advanced English comprehension, we systematically exclude millions of talented minds. KodeMamas is built to re-engineer this platform completely, bringing top-tier software training directly to South African communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
