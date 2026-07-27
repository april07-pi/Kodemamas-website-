import React from "react";
import { Database, RefreshCw, Layers, ShieldCheck, Smartphone, TrendingUp, Network } from "lucide-react";

export default function Technology() {
  const layers = [
    {
      icon: <Smartphone className="w-5 h-5 text-[#D4AF37]" />,
      title: "Client-Side App Architecture",
      tech: "React SPA / Low-End Android Container",
      description: "Compiled into ultra-light container binaries optimized for older Android operating systems (API Level 21+). Consumes minimal CPU cycle overhead, conserving battery power in regions with unreliable grid access."
    },
    {
      icon: <Database className="w-5 h-5 text-[#D4AF37]" />,
      title: "Durable Offline Database Store",
      tech: "IndexedDB / PouchDB Cache",
      description: "Stores all interactive coding playgrounds, files, text, and video transcribes locally on the learner's storage. Eliminates the need for any active data sockets while learning or coding."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#b388ff]" />,
      title: "Background Synchronization Daemon",
      tech: "Service Workers & Workbox API",
      description: "Dispatches background telemetry and synchronization packages when the system detects a zero-rated domain connection or a community hub hotspot. Uses smart byte compression to minimize transfer payloads."
    },
    {
      icon: <Network className="w-5 h-5 text-emerald-400" />,
      title: "Edge Delivery Network & API Gateway",
      tech: "Express / Node / GCP Cloud Run",
      description: "An incredibly fast, highly scalable server-side proxy which hosts custom API endpoints. Protects critical credentials (such as the Gemini API Key) and routes user queries quickly with secure headers."
    }
  ];

  return (
    <section id="technology" className="py-24 bg-[#12101a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Robust Tech & Offline Architecture</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            The Engineering Powering South Africa’s EdTech Revolution
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 font-sans font-normal">
            We do not just construct simple frontend pages; we design resilient, low-power systems engineered to bridge structural infrastructure disparities.
          </p>
        </div>

        {/* Dynamic Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Architecture Diagram Visualization Card */}
          <div className="bg-[#09080c] text-white rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* background subtle glow */}
            <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-[#4B0082]/15 blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  System Architecture Topology
                </span>
                <span className="text-[10px] bg-white/10 text-gray-300 font-mono px-3 py-1 rounded-full">
                  Production V2.0
                </span>
              </div>

              {/* Simplified Block Diagram */}
              <div className="space-y-4">
                
                {/* Client Layer */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 font-mono font-bold text-xs">
                      UI
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-white">Client Android App</h4>
                      <p className="text-[10px] text-slate-400">Offline Workspace & Local Playgrounds</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#D4AF37] uppercase bg-purple-950/40 border border-purple-800/30 px-2 py-0.5 rounded">
                    IndexedDB
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1.5 text-[#D4AF37]">
                  <div className="h-4 w-0.5 bg-[#D4AF37] animate-pulse" />
                </div>

                {/* Queue / Sync Layer */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-[#D4AF37] font-mono font-bold text-xs">
                      Q
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-white">Sync Gateway (PouchDB Node)</h4>
                      <p className="text-[10px] text-slate-400">Night-time Scheduler / Zero-Rated Proxies</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-slate-400 uppercase bg-white/10 px-2 py-0.5 rounded">
                    Queue Daemon
                  </span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center my-1.5 text-purple-500">
                  <div className="h-4 w-0.5 bg-[#4B0082]" />
                </div>

                {/* Cloud & AI Gateway */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                      API
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-bold text-white">Cloud Server & Multilingual AI Proxy</h4>
                      <p className="text-[10px] text-slate-400">Secure Express Gateway & Gemini LLM</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase bg-purple-500/10 px-2 py-0.5 rounded">
                    Cloud Run
                  </span>
                </div>

              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 text-xs text-slate-400 flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Built with privacy and POPIA considerations (Protection of Personal Information Act, South Africa)</span>
            </div>

          </div>

          {/* Right Column: Key Pillars */}
          <div className="flex flex-col justify-between gap-6">
            {layers.map((layer, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/5 bg-[#191624]/60 hover:bg-[#191624] hover:shadow-2xl transition-all duration-300"
                id={`tech-layer-${index}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-[#09080c] rounded-xl border border-white/5 shadow-sm shrink-0">
                    {layer.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-bold text-base text-white">
                      {layer.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#D4AF37] font-semibold mt-0.5 mb-2 uppercase">
                      {layer.tech}
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
