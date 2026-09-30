import React from "react";
import { BookOpen, Users, Compass, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Origin & Purpose</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            The Story Behind KodeMamas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            A student-led movement born out of lived experience, dedicated to re-engineering digital upskilling for underserved South African households.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
          
          {/* Why We Started / Lived Experience */}
          <div className="bg-[#191624]/40 rounded-3xl p-8 sm:p-10 border border-white/5 shadow-xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#09080c] text-[#D4AF37] rounded-xl border border-white/5 shadow-inner">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Why We Started</h3>
                </div>

                {/* Founder Badge */}
                <div className="flex items-center space-x-1.5 bg-purple-950/40 border border-purple-800/30 px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  <span className="text-[11px] font-bold text-purple-200">Nokwazi Xaba</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-normal">
                Growing up in Bloemfontein, South Africa, our founder, Nokwazi Nobuhle Xaba, witnessed the profound disparity in digital access firsthand. While studying technology, she watched as brilliant classmates were locked out of tech careers simply because they couldn't afford continuous R80/GB mobile data to stream online classes, or struggled to comprehend complex technical jargon taught exclusively in English.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                KodeMamas was born from a simple realization: **traditional EdTech is built for the connected global north.** To truly bridge the digital divide in South Africa's townships and rural areas, we had to tear down the infrastructure requirements and build an offline-first system from the ground up.
              </p>
            </div>
          </div>

          {/* Why Mothers & Girls? */}
          <div className="bg-[#191624]/40 rounded-3xl p-8 sm:p-10 border border-white/5 shadow-xl flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-[#09080c] text-[#b388ff] rounded-xl border border-white/5 shadow-inner">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">Why Mothers and Girls?</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                In South African township and rural communities, mothers are the central pillars of families and local economies. However, they face the steepest barriers—balancing childcare with limited resources. By focusing on mothers and their daughters, we unlock a powerful multiplier effect:
              </p>
              <ul className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 mt-4 pl-4 list-disc font-normal">
                <li><strong className="text-white">Household Upliftment:</strong> When a mother gains high-income digital skills, she gains financial autonomy that directly feeds, protects, and educates her children.</li>
                <li><strong className="text-white">Intergenerational Knowledge:</strong> Mothers learn alongside their daughters, turning homes into active learning centers and normalizing technology for young girls.</li>
                <li><strong className="text-white">Inspirational Ripple:</strong> A mother coding in her native language inspires her entire neighborhood, demolishing stereotypes about who belongs in technology.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Vision & Callout Banner */}
        <div className="bg-gradient-to-r from-[#4B0082]/80 to-[#1e1a3a] border border-purple-500/20 rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 opacity-[0.05] pointer-events-none transform translate-x-12 -translate-y-12">
            <Eye className="w-96 h-96 text-white" />
          </div>
          <div className="max-w-4xl relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                <span>Our Long-term Vision</span>
              </div>
              <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                Empowering the Next Generation of African Female Creators
              </h4>
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed font-normal">
                We envision a future where South African townships and rural villages are no longer passive consumers of technology, but active builders. By providing offline-first, multilingual educational tools designed to minimize mobile data usage, we aim to equip millions of women with the capability to write software, launch community-first applications, and step into senior roles in South Africa's thriving tech sector.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
