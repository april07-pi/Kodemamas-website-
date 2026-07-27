import React, { useState, useEffect } from "react";
import { 
  Calculator, 
  Users, 
  Clock, 
  Building2, 
  Heart, 
  Sparkles, 
  Coins, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  BookOpen
} from "lucide-react";

interface PledgeCalculatorProps {
  onPledgeSubmit?: (message: string) => void;
  initialStats?: {
    learners: number;
    hoursLearned: number;
    communitiesReached: number;
  };
}

export default function PledgeCalculator({ onPledgeSubmit, initialStats }: PledgeCalculatorProps) {
  // Use either ZAR or Learners as the primary input mode
  const [inputMode, setInputMode] = useState<"zar" | "learners">("zar");
  const [zarValue, setZarValue] = useState<number>(25000);
  const [learnersValue, setLearnersValue] = useState<number>(10);

  // Constants based on existing dashboard metrics & sponsorship tiers
  const COST_PER_LEARNER = 2500; // R2,500 per learner based on R25,000 for 10-mother cohort
  const TRAINING_HOURS_PER_LEARNER = 120; // 120 hours of localized, offline course modules
  const DEPENDENTS_PER_MOTHER = 4; // Each mother trained supports ~4 dependents in her household
  const COST_FOR_SOLAR_HUB = 150000; // R150,000 establishes a full Solar Hub

  // Update Learners when ZAR changes (if in ZAR mode)
  useEffect(() => {
    if (inputMode === "zar") {
      const calculatedLearners = Math.floor(zarValue / COST_PER_LEARNER);
      setLearnersValue(calculatedLearners);
    }
  }, [zarValue, inputMode]);

  // Update ZAR when Learners changes (if in Learners mode)
  useEffect(() => {
    if (inputMode === "learners") {
      const calculatedZar = learnersValue * COST_PER_LEARNER;
      setZarValue(calculatedZar);
    }
  }, [learnersValue, inputMode]);

  // Derived metrics
  const hoursProjected = learnersValue * TRAINING_HOURS_PER_LEARNER;
  const dependentsProjected = learnersValue * DEPENDENTS_PER_MOTHER;
  const hubsFundedFraction = zarValue / COST_FOR_SOLAR_HUB;
  
  // Calculate township communities supported: 1 hub/community extended per 10 learners sponsored
  const communitiesSupported = Math.max(1, Math.floor(learnersValue / 10));

  // B-BBEE Scorecard Estimation details
  const bbbPointsCategory = zarValue >= 150000 
    ? "Level 1 Strategic Contributor (Proposed Vision)" 
    : zarValue >= 25000 
    ? "Socio-Economic Development (SED) Sponsor (Proposed Vision)" 
    : "Socioeconomic Development Sponsor (Proposed Vision)";

  const scorecardImpact = zarValue >= 150000
    ? "Proposed Goal: Align with SED Scorecard + co-branding objectives"
    : zarValue >= 25000
    ? "Proposed Goal: Align with Code 700 SED criteria"
    : "Proposed Goal: Fully trackable digital inclusion milestones";

  // Pre-set sponsorship packages matching our tiers
  const presets = [
    {
      label: "Single Learner",
      learners: 1,
      zar: 2500,
      desc: "Sponsor 1 mother's offline coding kit",
      badge: "Individual"
    },
    {
      label: "Sponsor a Cohort",
      learners: 10,
      zar: 25000,
      desc: "Sponsors an entire 10-mother classroom",
      badge: "Most Popular"
    },
    {
      label: "Sponsor 30 Learners",
      learners: 30,
      zar: 75000,
      desc: "Extend offline grids to a micro-hub",
      badge: "Expansion"
    },
    {
      label: "Full Solar Hub",
      learners: 60,
      zar: 150000,
      desc: "Construct an entire solar powered learning hub",
      badge: "Infrastructure"
    }
  ];

  const handleApplyPreset = (learners: number, zar: number) => {
    if (inputMode === "zar") {
      setZarValue(zar);
    } else {
      setLearnersValue(learners);
    }
    // Also sync the other value immediately to prevent delayed UI response
    if (inputMode === "zar") {
      setLearnersValue(learners);
    } else {
      setZarValue(zar);
    }
  };

  const handleInquirePledge = () => {
    const message = `Dear Nokwazi Nobuhle Xaba and the KodeMamas Team,

I am writing to propose a sponsorship pledge of R${zarValue.toLocaleString()} ZAR to support ${learnersValue} learners. 

Based on your Pledge Impact Calculator, we expect this contribution to generate:
- ${learnersValue} Mother(s) & Girl(s) Empowered with high-income tech skills
- ${hoursProjected.toLocaleString()} hours of offline software training
- ~${dependentsProjected} household dependents impacted through the socioeconomic ripple effect
- Support for ${communitiesSupported} township hub communit${communitiesSupported === 1 ? "y" : "ies"}.

We would like to request more details regarding Section 18A tax-exempt receipts, B-BBEE scorecard auditing documents, and our official partnership agreement. Please connect with our CSI/Investment team.`;

    if (onPledgeSubmit) {
      onPledgeSubmit(message);
    }
  };

  return (
    <section id="pledge-calculator" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Modeling</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Pledge Impact Calculator
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            Model a hypothetical corporate social investment (CSI) allocation or strategic grant. Visualize how your proposed pledge can align with socioeconomic ripple effects and digital inclusion objectives.
          </p>
        </div>

        {/* Calculator UI Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
          
          {/* Left Column: Interactive Inputs & Controls (5 Cols) */}
          <div className="lg:col-span-5 bg-[#191624]/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4B0082]/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center space-x-2">
                <Coins className="w-5 h-5 text-[#D4AF37]" />
                <span>Configure Your Pledge</span>
              </h3>

              {/* Input Mode Tabs */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#09080c] rounded-xl border border-white/5 mb-8">
                <button
                  onClick={() => setInputMode("zar")}
                  className={`py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                    inputMode === "zar"
                      ? "bg-[#4B0082] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  By Sponsor Amount (ZAR)
                </button>
                <button
                  onClick={() => setInputMode("learners")}
                  className={`py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                    inputMode === "learners"
                      ? "bg-[#4B0082] text-white shadow-md"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  By Number of Learners
                </button>
              </div>

              {/* Dynamic Range / Input Area */}
              {inputMode === "zar" ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                      Sponsorship Investment
                    </label>
                    <span className="text-xs text-slate-500 font-mono">Min: R2,500 • Max: R300,000</span>
                  </div>

                  {/* ZAR Text Input Box */}
                  <div className="relative flex items-center">
                    <span className="absolute left-4 font-display font-bold text-xl text-[#D4AF37]">R</span>
                    <input
                      type="number"
                      value={zarValue}
                      onChange={(e) => {
                        const val = Math.max(0, parseInt(e.target.value) || 0);
                        setZarValue(val);
                      }}
                      className="w-full bg-[#09080c] border border-white/10 rounded-2xl pl-10 pr-16 py-4 font-display font-black text-2xl text-white focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]"
                    />
                    <span className="absolute right-4 font-mono text-xs font-bold text-slate-500">ZAR</span>
                  </div>

                  {/* ZAR Range Slider */}
                  <div className="pt-2">
                    <input
                      type="range"
                      min={2500}
                      max={300000}
                      step={2500}
                      value={zarValue}
                      onChange={(e) => setZarValue(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-[#09080c] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                      Learners Supported
                    </label>
                    <span className="text-xs text-slate-500 font-mono">Min: 1 • Max: 120 Mothers</span>
                  </div>

                  {/* Learners Text Input Box */}
                  <div className="relative flex items-center">
                    <input
                      type="number"
                      value={learnersValue}
                      onChange={(e) => {
                        const val = Math.max(0, parseInt(e.target.value) || 0);
                        setLearnersValue(val);
                      }}
                      className="w-full bg-[#09080c] border border-white/10 rounded-2xl px-5 py-4 font-display font-black text-2xl text-white focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]"
                    />
                    <span className="absolute right-4 font-mono text-xs font-bold text-slate-500">MOTHERS</span>
                  </div>

                  {/* Learners Range Slider */}
                  <div className="pt-2">
                    <input
                      type="range"
                      min={1}
                      max={120}
                      step={1}
                      value={learnersValue}
                      onChange={(e) => setLearnersValue(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-[#09080c] rounded-lg appearance-none cursor-pointer accent-[#4B0082]"
                    />
                  </div>
                </div>
              )}

              {/* Tiers/Presets Quick Selection */}
              <div className="mt-8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
                  Standard Sponsor Presets
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {presets.map((preset, index) => {
                    const isActive = inputMode === "zar" 
                      ? Math.abs(zarValue - preset.zar) < 1000
                      : Math.abs(learnersValue - preset.learners) < 2;

                    return (
                      <button
                        key={index}
                        onClick={() => handleApplyPreset(preset.learners, preset.zar)}
                        className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isActive 
                            ? "bg-[#4B0082]/20 border-[#4B0082] text-white shadow-lg shadow-purple-950/20" 
                            : "bg-[#09080c] border-white/5 text-slate-300 hover:border-[#4B0082]/40 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-display font-bold text-xs text-white">
                            {preset.label}
                          </span>
                          <span className={`text-[8px] font-mono font-bold uppercase px-1.5 py-0.5 rounded ${
                            isActive ? "bg-[#D4AF37] text-gray-950" : "bg-purple-950/40 text-[#b388ff]"
                          }`}>
                            {preset.badge}
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-400 leading-tight font-normal">
                          R{preset.zar.toLocaleString()} • {preset.learners} Learner{preset.learners > 1 ? "s" : ""}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* B-BBEE Scorecard Highlight Area */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <div className="p-4 bg-[#09080c] border border-white/5 rounded-2xl flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <h5 className="font-bold text-white uppercase font-mono tracking-wide text-[10px]">
                    Projected B-BBEE Scorecard Output:
                  </h5>
                  <p className="font-semibold text-[#D4AF37] mt-1 text-[11px] font-display">
                    {bbbPointsCategory}
                  </p>
                  <p className="text-slate-400 text-[10px] font-normal mt-0.5">
                    {scorecardImpact}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Projected Impact Outcomes (7 Cols) */}
          <div className="lg:col-span-7 bg-[#191624]/60 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
                <h3 className="font-display font-bold text-lg text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  <span>Socioeconomic Projections</span>
                </h3>
                <span className="text-[10px] font-mono uppercase bg-[#4B0082]/30 border border-[#4B0082]/40 text-purple-300 px-3 py-1 rounded-full">
                  Real-time Modeling
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Metric 1: Learners */}
                <div className="p-5 bg-[#09080c]/80 rounded-2xl border border-white/5 hover:border-[#4B0082]/30 transition-all flex items-start space-x-4">
                  <div className="p-2.5 bg-[#191624] border border-white/5 rounded-xl text-[#D4AF37] shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                      Mothers & Girls Empowered
                    </span>
                    <p className="font-display font-black text-3xl text-white mt-1">
                      {learnersValue.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-normal">
                      Equipped with high-performance laptops and encrypted offline learning modules.
                    </p>
                  </div>
                </div>

                {/* Metric 2: Hours */}
                <div className="p-5 bg-[#09080c]/80 rounded-2xl border border-white/5 hover:border-[#4B0082]/30 transition-all flex items-start space-x-4">
                  <div className="p-2.5 bg-[#191624] border border-white/5 rounded-xl text-blue-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                      Skill Development Hours
                    </span>
                    <p className="font-display font-black text-3xl text-white mt-1">
                      {hoursProjected.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-normal">
                      Lessons validated, interpreted and run locally with mother-tongue AI explanations.
                    </p>
                  </div>
                </div>

                {/* Metric 3: Communities supported */}
                <div className="p-5 bg-[#09080c]/80 rounded-2xl border border-white/5 hover:border-[#4B0082]/30 transition-all flex items-start space-x-4">
                  <div className="p-2.5 bg-[#191624] border border-white/5 rounded-xl text-indigo-400 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                      Township Hubs Supported
                    </span>
                    <p className="font-display font-black text-3xl text-white mt-1">
                      {communitiesSupported}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-normal">
                      Supporting physical solar networks with data sync points and verified workspaces.
                    </p>
                  </div>
                </div>

                {/* Metric 4: Dependents Impacted */}
                <div className="p-5 bg-[#09080c]/80 rounded-2xl border border-white/5 hover:border-[#4B0082]/30 transition-all flex items-start space-x-4">
                  <div className="p-2.5 bg-[#191624] border border-white/5 rounded-xl text-red-400 shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-slate-400">
                      Household dependents Impacted
                    </span>
                    <p className="font-display font-black text-3xl text-white mt-1">
                      ~{dependentsProjected.toLocaleString()}
                    </p>
                    <p className="text-[11px] text-slate-400 leading-normal mt-1.5 font-normal">
                      The ripple effect of elevating a mother's income directly to feed, shelter, and educate children.
                    </p>
                  </div>
                </div>

              </div>

              {/* Hub Funding Milestone Progress Bar */}
              <div className="mt-8 p-5 bg-[#09080c]/50 rounded-2xl border border-white/5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 text-xs">
                  <span className="font-display font-bold text-white flex items-center space-x-2">
                    <Award className="w-4 h-4 text-[#D4AF37]" />
                    <span>Solar-Powered Community Hub Milestone</span>
                  </span>
                  <span className="text-slate-400 font-mono text-[11px] mt-1 sm:mt-0 font-bold">
                    {Math.min(100, Math.floor(hubsFundedFraction * 100))}% funded ({hubsFundedFraction.toFixed(1)} hub equivalents)
                  </span>
                </div>

                {/* Progress bar gauge */}
                <div className="w-full bg-[#09080c] rounded-full h-3 border border-white/5 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#4B0082] via-[#7c3aed] to-[#D4AF37] transition-all duration-500 rounded-full"
                    style={{ width: `${Math.min(100, hubsFundedFraction * 100)}%` }}
                  />
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed mt-2.5 font-normal">
                  {zarValue < COST_FOR_SOLAR_HUB ? (
                    <span>Add <strong className="text-white">R{(COST_FOR_SOLAR_HUB - zarValue).toLocaleString()}</strong> to sponsor a brand-new permanent, solar-powered co-branded computer center in a rural township.</span>
                  ) : (
                    <span className="text-green-400 font-semibold flex items-center space-x-1.5">
                      <span>🎉 Your pledge fully constructs {Math.floor(hubsFundedFraction)} brand-new permanent offline physical learning center hub(s)!</span>
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Direct CSI Call To Action */}
            <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-left max-w-md">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Interested in discussing CSI collaboration?
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 font-normal">
                  Your simulated pledge configuration will pre-populate our inquiry form to help structure discussions regarding our pilot programs.
                </p>
              </div>

              <button
                onClick={handleInquirePledge}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#4B0082] hover:bg-[#3c0066] text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2 border border-purple-500/20 shadow-lg cursor-pointer shrink-0"
              >
                <span>Inquire About Pledge</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
