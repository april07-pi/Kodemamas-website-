import React from "react";
import { Award, Check, Users, ShieldAlert, Sparkles, Handshake } from "lucide-react";

interface PartnershipsProps {
  onSponsorClick: () => void;
}

export default function Partnerships({ onSponsorClick }: PartnershipsProps) {
  const packages = [
    {
      title: "Sponsor a Learner",
      price: "R2,500 / month",
      currency: "or equivalent CSI allocation",
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      benefits: [
        "Covers Android device acquisition & local encryption keys.",
        "Supplies physical data backup vouchers for remote lesson syncs.",
        "Direct access to the student's progress telemetry.",
        "Funds dedicated local hub childcare (minding) support."
      ],
      popular: false
    },
    {
      title: "Sponsor a School Cohort",
      price: "R25,000 / year",
      currency: "proposed CSI modeling",
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      benefits: [
        "Aims to sponsor a classroom cohort of 10 township mothers.",
        "Designed to equip classrooms with offline projector kits.",
        "Helps support local senior engineer visiting mentors.",
        "Aims to align with B-BBEE Scorecard SED guidelines."
      ],
      popular: true
    },
    {
      title: "Sponsor a Community Hub",
      price: "R150,000 (One-Time)",
      currency: "proposed pilot hub sponsor",
      icon: <Sparkles className="w-6 h-6 text-[#b388ff]" />,
      benefits: [
        "Aims to establish a physical, solar-powered learning hub.",
        "Designed for co-branding of the digital community space.",
        "Supplies recycled desktop computers with offline sync nodes.",
        "Annual community progress and developmental updates."
      ],
      popular: false
    },
    {
      title: "National Strategic Partner",
      price: "Custom Enterprise CSI",
      currency: "proposed corporate alignment",
      icon: <Handshake className="w-6 h-6 text-emerald-400" />,
      benefits: [
        "Scorecard alignment targets under Skills Development.",
        "Co-developed coding syllabus concepts matching company stacks.",
        "Access to pilot program participant portfolio reviews.",
        "Invitation to the advisory board."
      ],
      popular: false
    }
  ];

  return (
    <section id="partnerships" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Corporate Collaboration</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Sponsorship & Pilot Strategic Framework
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans font-normal">
            Designed to support digital inclusion and multilingual education in South Africa. Explore how your corporate CSI programs can align with our pilot targets.
          </p>
        </div>

        {/* Pricing/Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 border flex flex-col justify-between text-left relative transition-all duration-300 ${
                pkg.popular
                  ? "border-[#4B0082] bg-[#191624] shadow-2xl scale-105 shadow-purple-500/15"
                  : "border-white/5 bg-[#191624]/60 hover:bg-[#191624] hover:border-[#4B0082]/40 hover:shadow-2xl"
              }`}
              id={`package-card-${idx}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-[#D4AF37] text-gray-950 text-[10px] font-mono font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap shadow-md">
                  Recommended CSI
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-bold text-lg text-white">
                    {pkg.title}
                  </span>
                  <div className="p-2.5 bg-[#09080c] rounded-xl border border-white/5 shadow-sm">
                    {pkg.icon}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="font-display font-black text-2xl text-[#D4AF37]">
                    {pkg.price}
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono uppercase mt-1">
                    {pkg.currency}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 my-6" />

                {/* Benefits List */}
                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed font-normal">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={onSponsorClick}
                className={`w-full py-3.5 rounded-xl text-center text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  pkg.popular
                    ? "bg-[#4B0082] hover:bg-[#3c0066] text-white shadow-md shadow-purple-950/20 border border-purple-500/20"
                    : "bg-white/5 hover:bg-[#4B0082] hover:text-white text-slate-300 border border-white/10"
                }`}
              >
                Become Sponsor
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
