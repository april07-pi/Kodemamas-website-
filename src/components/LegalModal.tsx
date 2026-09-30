import React, { useState } from "react";
import { X, ShieldCheck, FileText, Lock, Sparkles } from "lucide-react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "privacy" | "terms" | "popia" | "cookie";
}

export default function LegalModal({ isOpen, onClose, initialTab = "privacy" }: LegalModalProps) {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms" | "popia" | "cookie">(initialTab);

  if (!isOpen) return null;

  const tabs = [
    { id: "privacy", label: "Privacy Policy", icon: Lock },
    { id: "terms", label: "Terms of Use", icon: FileText },
    { id: "popia", label: "POPIA Principles", icon: ShieldCheck },
    { id: "cookie", label: "Cookie Policy", icon: Sparkles },
  ] as const;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in text-left">
      <div 
        className="bg-[#12101a] border border-white/10 rounded-3xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#4B0082] to-[#1e1a3a] px-6 py-4 flex items-center justify-between border-b border-white/5 shrink-0">
          <div className="flex items-center space-x-2.5">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-display font-bold text-base text-white">KodeMamas Legal Framework</h3>
              <p className="text-[10px] text-purple-200 uppercase tracking-widest font-mono">South African Regulatory Alignment</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grow flex flex-col md:flex-row overflow-hidden">
          
          {/* Sidebar Tabs */}
          <div className="w-full md:w-64 bg-[#09080c] border-b md:border-b-0 md:border-r border-white/5 p-4 shrink-0 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap w-full text-left ${
                    isActive 
                      ? "bg-[#4B0082] text-white border border-purple-500/20 shadow"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#D4AF37]" : ""}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="grow p-6 sm:p-8 overflow-y-auto bg-[#12101a]/40 text-slate-300 text-xs sm:text-sm leading-relaxed space-y-6">
            
            {activeTab === "privacy" && (
              <div className="space-y-4 animate-fade-in font-normal">
                <h4 className="font-display font-extrabold text-lg text-white">Privacy Policy</h4>
                <p className="text-[10px] text-slate-500 font-mono">Last Updated: June 28, 2026</p>
                <p>
                  At KodeMamas, we are deeply committed to protecting the privacy of our learners, partners, and platform visitors. This Privacy Policy details how we collect, manage, and safeguard information in accordance with South African privacy laws.
                </p>
                
                <h5 className="font-bold text-white mt-4">1. Scope and Information Collection</h5>
                <p>
                  We collect information that you voluntarily submit to us via our interactive partner bid/sponsorship forms, contact forms, or newsletter subscriptions. This may include your full name, email address, corporate affiliate details, and specific project requests.
                </p>
                
                <h5 className="font-bold text-white mt-4">2. Usage of Information</h5>
                <p>
                  We utilize the collected information strictly for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Processing partnership inquiries and corporate sponsorship packages.</li>
                  <li>Delivering requested digital education briefings and quarterly reports.</li>
                  <li>Improving our offline-first curriculum modules and multilingual translation models.</li>
                </ul>

                <h5 className="font-bold text-white mt-4">3. Data Sharing and Distribution</h5>
                <p>
                  KodeMamas does not sell, lease, or rent its subscriber list or user profiles to third parties. Data is only accessible to authorized developers and student project managers under strict confidentiality parameters.
                </p>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="space-y-4 animate-fade-in font-normal">
                <h4 className="font-display font-extrabold text-lg text-white">Terms of Use</h4>
                <p className="text-[10px] text-slate-500 font-mono">Last Updated: June 28, 2026</p>
                <p>
                  Welcome to the KodeMamas website and student-led portal. By browsing our landing page, submitting inquiries, or testing our interactive multilingual AI coding tutor, you agree to comply with and be bound by the following Terms of Use.
                </p>
                
                <h5 className="font-bold text-white mt-4">1. Student-Led Educational Prototype Status</h5>
                <p>
                  KodeMamas is an active, student-led digital inclusion project based in Bloemfontein, South Africa. All features, including the offline cached curriculum nodes and AI-driven translation components, are provided as a technology demonstration. They are subject to change or temporary suspension based on resource limits and server availability.
                </p>
                
                <h5 className="font-bold text-white mt-4">2. Non-Commercial Usage Limits</h5>
                <p>
                  The source files, layout styling, curriculum analogies, and translation data hosted on this platform are owned by the project. Users are granted a limited license to experience the simulator, submit bids, and read articles. Commercial redistribution or reverse engineering of the offline-first compression scripts is prohibited.
                </p>
                
                <h5 className="font-bold text-white mt-4">3. Limitation of Liability</h5>
                <p>
                  We make every effort to keep our interactive code safe, secure, and compliant. However, we do not warrant that all server instances are uninterrupted or free of errors. Usage of the interactive AI coding simulator is at the learner's own discretion.
                </p>
              </div>
            )}

            {activeTab === "popia" && (
              <div className="space-y-4 animate-fade-in font-normal">
                <h4 className="font-display font-extrabold text-lg text-white flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                  <span>POPIA Considerations & Principles</span>
                </h4>
                <p className="text-[10px] text-[#D4AF37] font-mono uppercase font-bold">Protection of Personal Information Act No. 4 of 2013 (South Africa)</p>
                <p>
                  KodeMamas is designed with privacy and POPIA considerations in mind, respecting the spirit of the South African Protection of Personal Information Act (POPIA). We are committed to securing the digital identities of township and rural mothers, learners, and global partners.
                </p>
                
                <h5 className="font-bold text-white mt-4">1. The Eight POPI Conditions</h5>
                <p>
                  Our data systems are designed around the core principles of POPIA:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-white">Accountability:</strong> Our student-led project team ensures that your data is processed lawfully.</li>
                  <li><strong className="text-white">Processing Limitation:</strong> We only process names and contact details that you explicitly opt-in to send (e.g. for newsletter or partner inquiries).</li>
                  <li><strong className="text-white">Purpose Specification:</strong> Personal details are collected strictly for direct communication and platform feedback.</li>
                  <li><strong className="text-white">Openness:</strong> We maintain transparency concerning where details are hosted (secure Google Cloud Run database instances).</li>
                  <li><strong className="text-white">Security Safeguards:</strong> We utilize modern server authorization, SSL encryption, and isolated cloud nodes to protect records against breaches.</li>
                </ul>

                <h5 className="font-bold text-white mt-4">2. Your Right to Access and Deletion</h5>
                <p>
                  In accordance with POPIA guidelines, all platform visitors and partners retain the right to query what information we have stored, correct inaccurate fields, or request immediate, permanent deletion of their contact records. To initiate a POPIA inquiry, please email us directly at <a href="mailto:Kodemamas@gmail.com" className="text-[#D4AF37] underline font-bold hover:text-amber-300">Kodemamas@gmail.com</a>.
                </p>
              </div>
            )}

            {activeTab === "cookie" && (
              <div className="space-y-4 animate-fade-in font-normal">
                <h4 className="font-display font-extrabold text-lg text-white">Cookie Policy</h4>
                <p className="text-[10px] text-slate-500 font-mono">Last Updated: June 28, 2026</p>
                <p>
                  This platform utilizes cookies and local storage engines to optimize performance and support offline-first digital learning.
                </p>
                
                <h5 className="font-bold text-white mt-4">1. What are Cookies and Cache?</h5>
                <p>
                  Cookies are tiny text files saved to your computer or phone to remember your settings. In our offline-first architecture, we also rely heavily on browser <span className="text-white font-semibold">Local Storage</span> to cache interactive curriculum files so learners can keep studying without cellular connection.
                </p>
                
                <h5 className="font-bold text-white mt-4">2. How We Use Them</h5>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong className="text-white">Essential Session Data:</strong> Saving your selected translation language (e.g. isiZulu or Afrikaans) on the AI Coding Tutor so you don't have to reselect it.</li>
                  <li><strong className="text-white">Offline Progress Cache:</strong> Caching the coding structures and simulated sandbox responses to reduce mobile bandwidth usage.</li>
                  <li><strong className="text-white">Analytics:</strong> Keeping track of total visitor numbers in our dynamic CMS without tracking individual personal identifiers.</li>
                </ul>

                <h5 className="font-bold text-white mt-4">3. Managing Your Choices</h5>
                <p>
                  You can choose to disable cookies or clear your browser's local storage database at any time through your web browser settings. Please note that clearing local storage will remove offline cached lessons, requiring a network reload upon your next visit.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#09080c] px-6 py-4 flex items-center justify-between border-t border-white/5 shrink-0 text-[10px] text-slate-500 font-mono uppercase">
          <span>Official Legal Compliance</span>
          <span>© 2026 KodeMamas</span>
        </div>
      </div>
    </div>
  );
}
