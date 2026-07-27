import React from "react";
import { Check, X, ShieldCheck } from "lucide-react";

export default function WhyKodeMamas() {
  const tableData = [
    {
      feature: "Offline-First Learning System",
      kodemamas: { value: "Full offline execution (IndexedDB compile engine). Works with 0% data.", standard: true },
      bootcamps: { value: "Requires stable broadband access in class daily.", standard: false },
      online: { value: "Requires active high-bandwidth streaming.", standard: false }
    },
    {
      feature: "South African Language Support",
      kodemamas: { value: "isiNdebele, English & SASL (Supported Now); additional indigenous languages in roadmap.", standard: true },
      bootcamps: { value: "100% English-only curriculum instruction.", standard: false },
      online: { value: "English-only or European languages.", standard: false }
    },
    {
      feature: "Hardware Resource Requirement",
      kodemamas: { value: "Fully optimized for low-end, budget Android phones & tablets.", standard: true },
      bootcamps: { value: "Requires core i5/i7 laptops valued at R12,000+.", standard: false },
      online: { value: "Requires desktop setup or computer access.", standard: false }
    },
    {
      feature: "Integrated AI Learning Assistant",
      kodemamas: { value: "Personalized localized native-analogy compiler tutor.", standard: true },
      bootcamps: { value: "One lecturer handling 30+ students at once.", standard: false },
      online: { value: "Static video lectures, zero personalized answers.", standard: false }
    },
    {
      feature: "Mother-First Support Model",
      kodemamas: { value: "Integrated local hub child minding & peer support circles.", standard: true },
      bootcamps: { value: "Intense full-time commutes with zero accommodation.", standard: false },
      online: { value: "Completely isolated remote learning.", standard: false }
    },
    {
      feature: "Corporate CSI & B-BBEE Alignment",
      kodemamas: { value: "Verified audits, custom reporting, direct South African SED points.", standard: true },
      bootcamps: { value: "Rarely structured to yield SED scorecard compliance.", standard: false },
      online: { value: "Zero South African tax/CSI framework compatibility.", standard: false }
    }
  ];

  return (
    <section id="why-kodemamas" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>The Strategic Differentiator</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            How We Compare to Traditional Alternatives
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans font-normal">
            Traditional methodologies are designed for premium first-world environments. We engineered a platform specifically matching local infrastructural realities.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-white/5 shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#12101a] border-b border-white/5 text-xs uppercase tracking-wider text-slate-400 font-mono">
                <th className="py-5 px-6 font-bold w-[250px]">Core Metric</th>
                <th className="py-5 px-6 font-bold text-[#D4AF37] bg-purple-950/40 border-r border-white/5">KodeMamas Platform</th>
                <th className="py-5 px-6 font-bold text-white border-r border-white/5">Traditional Bootcamps</th>
                <th className="py-5 px-6 font-bold text-white">Standard Online EdTech</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-white/5 text-slate-300">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  {/* Metric */}
                  <td className="py-5 px-6 font-display font-bold text-white border-r border-white/5">
                    {row.feature}
                  </td>
                  
                  {/* KodeMamas */}
                  <td className="py-5 px-6 bg-purple-950/20 font-medium text-slate-100 border-r border-white/5">
                    <div className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm">{row.kodemamas.value}</span>
                    </div>
                  </td>

                  {/* Traditional */}
                  <td className="py-5 px-6 border-r border-white/5 text-slate-400">
                    <div className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-xs">{row.bootcamps.value}</span>
                    </div>
                  </td>

                  {/* Online */}
                  <td className="py-5 px-6 text-slate-400">
                    <div className="flex items-start space-x-2">
                      <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span className="text-xs">{row.online.value}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
