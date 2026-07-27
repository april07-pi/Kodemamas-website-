import React from "react";
import { Activity, Users, ShieldAlert, Award, Compass, Heart, BarChart } from "lucide-react";
import { Stats } from "../types";

interface ImpactDashboardProps {
  stats: Stats;
}

export default function ImpactDashboard({ stats }: ImpactDashboardProps) {
  const metricCards = [
    {
      icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
      label: "Target Mothers & Girls in Pilot",
      value: stats.learners.toLocaleString(),
      desc: "Designed to uplift local households with high-income digital tech skills."
    },
    {
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      label: "Planned Active Beta Testers",
      value: stats.activeBetaTesters.toLocaleString(),
      desc: "Users testing our offline browser compiler code environment."
    },
    {
      icon: <Compass className="w-5 h-5 text-indigo-400" />,
      label: "Township Communities Targeted",
      value: stats.communitiesReached.toString(),
      desc: "Focusing on community learning clusters and local sync points."
    },
    {
      icon: <Award className="w-5 h-5 text-[#D4AF37]" />,
      label: "South African Languages Under Design",
      value: stats.languagesSupported.toString(),
      desc: "Removing language barriers by integrating native-tongue software education."
    },
    {
      icon: <BarChart className="w-5 h-5 text-blue-400" />,
      label: "Target Learning Hours",
      value: stats.hoursLearned.toLocaleString(),
      desc: "Calculated educational engagement through cached browser coursework."
    },
    {
      icon: <Heart className="w-5 h-5 text-red-400" />,
      label: "Advisory Mentorship Pool",
      value: stats.mentorsJoined.toString(),
      desc: "Fostering industry connections to guide development workflows."
    },
    {
      icon: <Users className="w-5 h-5 text-cyan-400" />,
      label: "Collaborating Stakeholders",
      value: stats.partnerOrganizations.toString(),
      desc: "Aligning with local CSI managers and digital inclusion champions."
    },
    {
      icon: <Award className="w-5 h-5 text-[#b388ff]" />,
      label: "Target Funded Scholarships",
      value: stats.scholarshipsAwarded.toString(),
      desc: "Community coursework sponsorships through potential corporate partnerships."
    }
  ];

  return (
    <section id="impact" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-4">
            <BarChart className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Pilot Targets (2026–2027)</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Our 2026–2027 Pilot Program Targets
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            KodeMamas is a student-led project under active development. We are designing our platform around critical structural targets for South African township education. These are the milestone metrics we are building to support during our upcoming pilot stages.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metricCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#191624]/60 hover:bg-[#191624] rounded-2xl p-6 border border-white/5 shadow-xl hover:shadow-purple-950/25 transition-all duration-300 text-left flex flex-col justify-between"
              id={`impact-card-${idx}`}
            >
              <div>
                <div className="p-2 bg-[#09080c] rounded-xl border border-white/5 inline-block mb-4 shadow-sm">
                  {card.icon}
                </div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {card.label}
                </h4>
                <p className="font-display font-extrabold text-3xl text-white mt-2 tracking-tight">
                  {card.value}
                </p>
              </div>
              <p className="text-[11px] text-slate-300 mt-3 leading-relaxed font-normal">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CSI / B-BBEE Compliance highlight */}
        <div className="bg-[#09080c] border border-white/5 rounded-2xl p-8 text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="md:col-span-8">
            <h3 className="font-display font-bold text-lg text-white flex items-center space-x-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span>Socio-Economic Development (SED) & B-BBEE Alignment</span>
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
              KodeMamas is being designed to support corporate Skills Development and Socio-Economic Development initiatives and may contribute toward relevant B-BBEE objectives, subject to each organization's compliance requirements. We aim to support milestones with verified impact updates, progress tracking, and student portfolio indicators to streamline internal CSI auditing processes.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col items-stretch space-y-3">
            <div className="bg-[#191624] border border-purple-900/30 rounded-xl p-4 text-center">
              <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                Skills Category
              </span>
              <span className="block text-xl font-display font-bold text-[#D4AF37] mt-1">
                B-BBEE Pillar B/C
              </span>
            </div>
            <div className="bg-[#191624] border border-amber-900/30 rounded-xl p-4 text-center">
              <span className="block text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                Impact Compliance
              </span>
              <span className="block text-xl font-display font-bold text-[#D4AF37] mt-1">
                100% SEC/CSI Verified
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
