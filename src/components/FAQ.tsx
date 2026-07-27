import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Star } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      category: "Sustainability Vision",
      q: "What is KodeMamas' planned long-term sustainability model?",
      a: "As a student-led project under active development, we are designing our long-term model around three main pillars: (1) Enterprise partner recruitment pathways for tech teams looking to source talent; (2) Future collaborations with corporate social responsibility (CSI) budgets; and (3) Alignment with educational grants focusing on digital literacy and grassroots technology upskilling."
    },
    {
      category: "CSI & B-BBEE Alignment",
      q: "How can the platform support B-BBEE and SED requirements?",
      a: "Our long-term goal is to align with Broad-Based Black Economic Empowerment (B-BBEE) scorecard guidelines under the Skills Development and Socio-Economic Development (SED) pillars. We aim to design our progress and enrollment tracking reports to support standard compliance reviews for future pilot partners."
    },
    {
      category: "Technical Architecture",
      q: "How does the application execute code compiling on zero internet data?",
      a: "Our core engine utilizes client-side interpreter nodes designed to run in browser caches. The lesson structure and basic syntax validator are designed to run fully offline, removing the need for high-speed continuous internet data. This helps learners study concepts without worrying about mobile data costs."
    },
    {
      category: "Learner & Community Accessibility",
      q: "Are prior academic credentials or software experience required?",
      a: "No prior experience or academic credentials in computer science are required. We design our pathways starting from absolute basics, structured around intuitive examples and translated guides to help absolute beginners gain confidence with coding logic."
    },
    {
      category: "Impact Measurement",
      q: "How do you measure success and student outcomes?",
      a: "We measure progress through active platform engagement and completed logical assignments. Our goal is to build an inclusive development path that equips mothers and young girls with fundamental tech skills, fostering confidence and enabling them to transition into further digital opportunities."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
            <span>Answers & Clarifications</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            Addressing regulatory, technical, socioeconomic, and community alignment questions. Explore our comprehensive operations guide.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#191624]/60 rounded-2xl border border-white/5 overflow-hidden shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 text-left"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between font-sans hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="pr-4 text-left">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#b388ff] bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded mr-3">
                      {faq.category}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white mt-2.5 leading-snug">
                      {faq.q}
                    </h4>
                  </div>
                  <div className="text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-[#12101a]/40 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
