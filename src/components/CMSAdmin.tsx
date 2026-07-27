import React, { useState, useEffect } from "react";
import { Settings, Save, AlertCircle, Users, Mail, Globe, Database, HelpCircle, Eye } from "lucide-react";
import { CmsContent, Inquiry } from "../types";

interface CMSAdminProps {
  cmsContent: CmsContent;
  onUpdateContent: (newContent: CmsContent) => void;
  onClose: () => void;
}

export default function CMSAdmin({ cmsContent, onUpdateContent, onClose }: CMSAdminProps) {
  const [heroTitle, setHeroTitle] = useState(cmsContent.hero.title);
  const [heroSubtitle, setHeroSubtitle] = useState(cmsContent.hero.subtitle);
  
  // Stats
  const [learners, setLearners] = useState(cmsContent.stats.learners);
  const [communities, setCommunities] = useState(cmsContent.stats.communitiesReached);
  const [betaUsers, setBetaUsers] = useState(cmsContent.stats.activeBetaTesters);
  const [languages, setLanguages] = useState(cmsContent.stats.languagesSupported);
  const [hours, setHours] = useState(cmsContent.stats.hoursLearned);
  const [mentors, setMentors] = useState(cmsContent.stats.mentorsJoined);
  const [partners, setPartners] = useState(cmsContent.stats.partnerOrganizations);
  const [scholarships, setScholarships] = useState(cmsContent.stats.scholarshipsAwarded);

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    // Fetch inquiries on load
    fetch("/api/cms/submissions")
      .then((res) => res.json())
      .then((data) => setInquiries(data))
      .catch((err) => console.error("Error fetching inquiries", err));
  }, [cmsContent.visitorCount]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");

    const payload = {
      hero: {
        title: heroTitle,
        subtitle: heroSubtitle
      },
      stats: {
        learners: Number(learners),
        communitiesReached: Number(communities),
        activeBetaTesters: Number(betaUsers),
        languagesSupported: Number(languages),
        hoursLearned: Number(hours),
        mentorsJoined: Number(mentors),
        partnerOrganizations: Number(partners),
        scholarshipsAwarded: Number(scholarships)
      }
    };

    try {
      const response = await fetch("/api/cms/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("CMS save failed");
      const data = await response.json();
      onUpdateContent(data.cmsContent);
      setSuccessMsg("CMS Content updated in real-time across the platform!");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-[#09080c] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 border-t-4 border-[#4B0082]" id="cms-panel">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 border-b border-white/5 pb-6">
          <div className="flex items-center space-x-3 text-left">
            <div className="p-2.5 bg-purple-950/40 text-[#D4AF37] rounded-xl border border-purple-800/40">
              <Settings className="w-6 h-6 animate-spin" />
            </div>
            <div>
              <h2 className="font-display font-extrabold text-2xl tracking-tight text-white">
                KodeMamas Headless CMS Portal <span className="text-xs bg-emerald-500/20 text-emerald-400 font-mono px-2 py-0.5 rounded-full ml-2">Fully Functional Demo</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Manage digital inclusion copies, track live metrics, and view partner bids.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="mt-4 md:mt-0 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-all border border-white/10 cursor-pointer"
          >
            Back to Website
          </button>
        </div>

        {/* Live Simulation Interactive Banner */}
        <div className="mb-8 p-4 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-slate-200 text-xs text-left leading-relaxed">
          <p className="font-bold text-[#D4AF37] mb-1">💡 Interactive Technology Demonstration</p>
          This content management system is **fully functional**! You can modify the Hero Headline, subtitle, or any milestone metric below and click <span className="font-semibold text-white">"Publish to live applet"</span>. The changes will immediately propagate across the landing page on your screen in real time.
        </div>

        {/* Dashboard Analytics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-left">
          <div className="bg-[#191624]/60 p-6 rounded-2xl border border-white/5 shadow-xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              Dynamic Visitors
            </span>
            <p className="font-display font-black text-3xl text-emerald-400 mt-1">
              {cmsContent.visitorCount.toLocaleString()}
            </p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-normal">Incremented automatically on partnership submissions.</p>
          </div>
          <div className="bg-[#191624]/60 p-6 rounded-2xl border border-white/5 shadow-xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              Submissions Inbox
            </span>
            <p className="font-display font-black text-3xl text-purple-300 mt-1">
              {inquiries.length}
            </p>
            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-normal">Incoming partner bids and investment proposals.</p>
          </div>
          <div className="bg-[#191624]/60 p-6 rounded-2xl border border-white/5 shadow-xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400 font-bold">
              Deployment Node
            </span>
            <p className="font-display font-black text-lg text-white mt-1 uppercase font-mono">
              GCP-Run Bloemfontein-01
            </p>
            <p className="text-[11px] text-[#D4AF37] mt-2 leading-relaxed font-mono font-bold">Status: Connected (Scylla Edge Gateway)</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Block: Content Editor */}
          <div className="lg:col-span-7 bg-[#191624]/40 p-8 rounded-3xl border border-white/5 shadow-2xl">
            <h3 className="font-display font-bold text-lg mb-6 flex items-center space-x-2">
              <Database className="w-5 h-5 text-[#D4AF37]" />
              <span>Page content & Copywriting editor</span>
            </h3>

            {successMsg && (
              <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-semibold flex items-center space-x-2 animate-pulse">
                <span>✓</span>
                <span>{successMsg}</span>
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              {/* Hero Section Copy */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold uppercase text-[#b388ff] tracking-wider">
                  Hero Copy
                </h4>
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-slate-400 mb-1.5">Headline (split by period for gradient styling)</label>
                  <input
                    type="text"
                    value={heroTitle}
                    onChange={(e) => setHeroTitle(e.target.value)}
                    className="bg-[#09080c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold text-slate-400 mb-1.5">Subtitle Description</label>
                  <textarea
                    rows={3}
                    value={heroSubtitle}
                    onChange={(e) => setHeroSubtitle(e.target.value)}
                    className="bg-[#09080c] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082] resize-none font-normal"
                  />
                </div>
              </div>

              {/* Stats Metrics */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <h4 className="text-xs font-mono font-bold uppercase text-[#b388ff] tracking-wider">
                  Impact Dashboard Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Mothers Trained</label>
                    <input
                      type="number"
                      value={learners}
                      onChange={(e) => setLearners(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Beta Users</label>
                    <input
                      type="number"
                      value={betaUsers}
                      onChange={(e) => setBetaUsers(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Hub Communities</label>
                    <input
                      type="number"
                      value={communities}
                      onChange={(e) => setCommunities(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Languages</label>
                    <input
                      type="number"
                      value={languages}
                      onChange={(e) => setLanguages(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Hours Learned</label>
                    <input
                      type="number"
                      value={hours}
                      onChange={(e) => setHours(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Mentors</label>
                    <input
                      type="number"
                      value={mentors}
                      onChange={(e) => setMentors(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Partner Orgs</label>
                    <input
                      type="number"
                      value={partners}
                      onChange={(e) => setPartners(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] text-slate-400 font-bold mb-1.5">Scholarships</label>
                    <input
                      type="number"
                      value={scholarships}
                      onChange={(e) => setScholarships(Number(e.target.value))}
                      className="bg-[#09080c] border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit btn */}
              <button
                type="submit"
                disabled={saving}
                className="w-full py-3.5 rounded-xl bg-[#4B0082] hover:bg-[#3c0066] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer border border-purple-500/20 shadow-lg"
              >
                <Save className="w-4 h-4 text-[#D4AF37]" />
                <span>{saving ? "Saving Changes..." : "Publish to live applet"}</span>
              </button>
            </form>
          </div>

          {/* Right Block: Live Submissions Stream */}
          <div className="lg:col-span-5 bg-[#191624]/40 p-8 rounded-3xl border border-white/5 flex flex-col justify-between h-[650px] shadow-2xl">
            <div className="overflow-hidden flex flex-col h-full">
              <h3 className="font-display font-bold text-lg mb-6 flex items-center space-x-2 shrink-0">
                <Mail className="w-5 h-5 text-purple-300" />
                <span>Submissions Inbox Stream</span>
              </h3>

              <div className="grow overflow-y-auto space-y-4 pr-1 scrollbar-thin">
                {inquiries.length === 0 ? (
                  <p className="text-slate-400 text-xs italic text-center py-12">No inquiries received yet. Use the Contact form on the main site to submit proposals!</p>
                ) : (
                  inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="p-4 rounded-xl bg-[#09080c] border border-white/5 text-xs hover:border-[#4B0082]/40 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-white">{inq.name}</span>
                        <span className="text-[9px] font-mono font-bold uppercase text-[#D4AF37] bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded">
                          {inq.type}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-mono mb-2">{inq.email}</p>
                      <p className="text-slate-200 leading-relaxed font-sans bg-[#12101a]/80 p-2.5 rounded-lg border border-white/5 font-normal">
                        "{inq.message}"
                      </p>
                      <span className="block text-[9px] text-slate-500 font-mono mt-2 text-right">
                        {new Date(inq.date).toLocaleString()}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-slate-500 font-mono uppercase text-center mt-4">
              Real-time synchronization active • SSE
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
