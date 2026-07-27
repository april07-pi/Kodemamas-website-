import React, { useState } from "react";
import { MessageSquare, Quote, Heart, Star, Sparkles, CheckCircle, ArrowUpRight, HelpCircle } from "lucide-react";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState<"strengths" | "improvements" | "letter">("strengths");

  const strengths = [
    {
      num: "1",
      title: "Bilingual isiNdebele & SASL Approach",
      desc: "Lessons are taught in the isiNdebele language, breaking digital language barriers. The platform also provides South African Sign Language (SASL) translations, opening technology up to a community that has historically been alienated from tech education."
    },
    {
      num: "2",
      title: "Locally Relevant Township Scenarios",
      desc: "Incorporating localized business scenarios, such as a spaza shop in Bloemfontein or a bakery in Umlazi, brings abstract concepts of coding to life in a relatable South African context. It bases the solution on local realities."
    },
    {
      num: "3",
      title: "Encouraging Real-time Success Feedback",
      desc: "As a beginner, typing actual HTML tags (like <h1>) and seeing immediate results and success messages like 'successfully rendered header!' gives encouraging and fast feedback loops."
    },
    {
      num: "4",
      title: "Gamified learning loop & progression",
      desc: "Proven engagement hooks such as experience levels, ongoing daily streaks, progression badges, and celebratory notifications create an empowering learning loop for mothers and girls."
    },
    {
      num: "5",
      title: "Revolutionary Offline-First Engine",
      desc: "A crucial addition for communities lacking continuous network connectivity or electricity. The offline browser cache system allows talented minds to learn and build even with zero internet or data access."
    }
  ];

  const improvements = [
    {
      title: "Desktop & Tablet Optimization",
      desc: "While mobile learning is highly accessible, typing out code on a phone can be inherently fiddly. Tablet and desktop versions will benefit advanced learners.",
      type: "UX Optimization"
    },
    {
      title: "Curriculum & Language Depth",
      desc: "Moving beyond basic HTML into CSS, JavaScript, and database territories to support learners on their journey to becoming professional software engineers.",
      type: "Content Scope"
    }
  ];

  return (
    <section id="community-reviews" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Community Feedback</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Learner & Peer Perspectives
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            Real feedback from our South African testing circle. Read the detailed analysis and reviews from learners experiencing the KodeMamas educational blueprint.
          </p>
        </div>

        {/* Featured Testimonial Hero Card: Mashiane TJ */}
        <div className="bg-[#12101a] border border-white/5 rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden mb-12">
          {/* Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 text-left">
            
            {/* Reviewer Meta Column */}
            <div className="lg:col-span-4 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center space-x-1 text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-white">Mashiane TJ</h4>
                  <p className="text-xs text-purple-300 font-mono font-bold mt-1">HTML Learner & Technology Reviewer</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">South Africa</p>
                </div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Feedback</span>
                </div>
              </div>

              {/* Dynamic Navigation Tabs inside the card */}
              <div className="mt-8 lg:mt-12 space-y-2 border-l border-white/5 pl-4">
                <button
                  onClick={() => setActiveTab("strengths")}
                  className={`block text-xs font-semibold tracking-wider text-left transition-all ${
                    activeTab === "strengths" ? "text-[#D4AF37] pl-2 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  1. What Stands Out (Strengths)
                </button>
                <button
                  onClick={() => setActiveTab("improvements")}
                  className={`block text-xs font-semibold tracking-wider text-left transition-all ${
                    activeTab === "improvements" ? "text-[#D4AF37] pl-2 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  2. Opportunities for Growth
                </button>
                <button
                  onClick={() => setActiveTab("letter")}
                  className={`block text-xs font-semibold tracking-wider text-left transition-all ${
                    activeTab === "letter" ? "text-[#D4AF37] pl-2 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  3. Message to Founder
                </button>
              </div>
            </div>

            {/* Content Display Column */}
            <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-8">
              
              {activeTab === "strengths" && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Core Strengths Highlighted</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {strengths.map((item) => (
                      <div key={item.num} className="p-4 rounded-2xl bg-[#191624]/60 border border-white/5 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#D4AF37] bg-purple-950/40 border border-purple-800/30 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                            Item {item.num}
                          </span>
                          <h5 className="font-display font-bold text-xs sm:text-sm text-white mb-1">
                            {item.title}
                          </h5>
                          <p className="text-slate-300 text-xs leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "improvements" && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <ArrowUpRight className="w-4 h-4 text-[#b388ff]" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Strategic Improvements Proposed</span>
                  </div>

                  <div className="space-y-4">
                    {improvements.map((item, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-[#191624]/60 border border-white/5">
                        <div className="flex items-center justify-between mb-2 text-[10px] uppercase font-mono font-bold tracking-wider text-[#D4AF37]">
                          <span>Opportunity {i + 1}</span>
                          <span className="bg-purple-950/40 border border-purple-800/30 px-2.5 py-0.5 rounded-full">{item.type}</span>
                        </div>
                        <h5 className="font-display font-bold text-sm text-white mb-1">{item.title}</h5>
                        <p className="text-slate-300 text-xs leading-relaxed font-normal">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "letter" && (
                <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  <div className="flex items-center space-x-2 mb-4">
                    <Quote className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">A Letter to Nokwazi Xaba</span>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-[#191624]/60 border border-white/5 space-y-3 relative italic">
                    <p>
                      "Overall, KodeMamas provides a useful and well-designed introduction to coding which fills an actual need within South African technological education programs. In using African languages to teach HTML (and other languages) through spaza shops and township bakeries, KodeMamas isn’t just teaching code but affirming local identity within technology."
                    </p>
                    <p>
                      "It’s very well put together for an independent project in that you have designed a clean user interface, effective compiler and gamification. It may not be the equivalent of a coding boot camp, but as an introduction, particularly for those fluent in indigenous languages who might otherwise feel alienated from technology, it is invaluable."
                    </p>
                    <p className="font-bold text-[#D4AF37] not-italic pt-4 flex flex-col">
                      <span>Well done Miss Xaba! You have an amazing mission on your hands.</span>
                      <span className="text-xs text-slate-400 mt-1 font-mono">Sincerely, Mashiane TJ</span>
                    </p>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Dynamic community feedback summary stat card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-[#191624]/30 border border-white/5">
            <h5 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-2 text-[#D4AF37]">Identity & Belonging</h5>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              By validating mother tongues like isiNdebele and localizing scenarios, KodeMamas is redefining who technology is built for and who belongs in STEM.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#191624]/30 border border-white/5">
            <h5 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-2 text-purple-300">Accessibility Bridge</h5>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              The revolutionary offline compile engine bridges deep socio-economic splits, allowing learners without stable grid or broadband access to study coding freely.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#191624]/30 border border-white/5">
            <h5 className="text-white font-display font-bold text-xs uppercase tracking-wider mb-2 text-emerald-400">Proven Learning Loop</h5>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Instant feedback messages in the compiler, combined with progressive streaks and gamification, foster deep learner retention and success.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
