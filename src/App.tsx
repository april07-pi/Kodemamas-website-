import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import About from "./components/About";
import ProductShowcase from "./components/ProductShowcase";
import LanguagesSection from "./components/Languages";
import OfflineFirst from "./components/OfflineFirst";
import AITutorPlayground from "./components/AITutorPlayground";
import Technology from "./components/Technology";
import ProductStatus from "./components/ProductStatus";
import ImpactDashboard from "./components/ImpactDashboard";
import PledgeCalculator from "./components/PledgeCalculator";
import WhyKodeMamas from "./components/WhyKodeMamas";
import Testimonials from "./components/Testimonials";
import TalentPipeline from "./components/TalentPipeline";
import Partnerships from "./components/Partnerships";
import Founder from "./components/Founder";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CMSAdmin from "./components/CMSAdmin";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModal";
import MarketingVideoModal from "./components/MarketingVideoModal";
import { CmsContent } from "./types";
import { Cpu, Terminal, Sparkles, MessageSquare, ShieldCheck, Database, Award, Video } from "lucide-react";

export default function App() {
  const [cmsActive, setCmsActive] = useState(false);
  const [pledgeMessage, setPledgeMessage] = useState("");
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<"privacy" | "terms" | "popia" | "cookie">("privacy");
  const [cmsContent, setCmsContent] = useState<CmsContent>({
    hero: {
      title: "Code in Your Language. Build Your Future.",
      subtitle: "Empowering township and rural mothers, girls, and underserved communities in South Africa with software engineering skills through an AI-powered, multilingual, offline-first education platform.",
    },
    stats: {
      learners: 1420,
      communitiesReached: 18,
      activeBetaTesters: 340,
      languagesSupported: 6,
      hoursLearned: 12500,
      mentorsJoined: 85,
      partnerOrganizations: 12,
      scholarshipsAwarded: 150,
    },
    blog: [
      {
        id: "1",
        title: "Breaking Barriers: Bringing Coding to South African Townships Offline",
        author: "Nokwazi Nobuhle Xaba",
        category: "Digital Inclusion",
        readTime: "5 min read",
        date: "June 25, 2026",
        excerpt: "How offline-first learning is unlocking software engineering for rural mothers and daughters who face expensive mobile data and zero connectivity.",
      },
      {
        id: "2",
        title: "Why Multilingual AI is the Key to Unlocking Tech Potential",
        author: "Nokwazi Nobuhle Xaba",
        category: "AI & EdTech",
        readTime: "4 min read",
        date: "June 18, 2026",
        excerpt: "Learning to code in a second or third language is a double barrier. Here is how multilingual education and AI tutors change the game in township communities.",
      },
      {
        id: "3",
        title: "Empowering Mothers: The Ripple Effect of Educating Women",
        author: "Nokwazi Nobuhle Xaba",
        category: "Women in STEM",
        readTime: "6 min read",
        date: "May 29, 2026",
        excerpt: "When you teach a mother to code, you do not just build a developer; you uplift an entire household, feed a family, and create community inspiration.",
      }
    ],
    visitorCount: 1284,
  });

  // Fetch live CMS content on mount
  useEffect(() => {
    fetch("/api/cms/content")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load CMS content");
        return res.json();
      })
      .then((data) => setCmsContent(data))
      .catch((err) => console.log("Using pre-seeded fallback CMS state", err));
  }, []);

  // Sync visitor counts or submission refreshes
  const handleSuccessInquirySubmit = () => {
    // Re-fetch content to increment dynamic statistics on the dashboard!
    fetch("/api/cms/content")
      .then((res) => res.json())
      .then((data) => setCmsContent(data))
      .catch((err) => console.log("Error updating after submit", err));
  };

  const handleUpdateContent = (newContent: CmsContent) => {
    setCmsContent(newContent);
  };

  const scrollToSection = (id: string) => {
    setCmsActive(false); // return to home context if viewing CMS admin
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased selection:bg-purple-100 selection:text-[#3c0c66]" id="app-root">
      
      {/* Structural Header */}
      <Header
        onSectionClick={scrollToSection}
        onTutorClick={() => scrollToSection("ai-playground-section")}
        onCmsClick={() => setCmsActive(!cmsActive)}
        cmsActive={cmsActive}
      />

      {cmsActive ? (
        /* Headless CMS Dynamic Manager */
        <main className="animate-fade-in">
          <CMSAdmin
            cmsContent={cmsContent}
            onUpdateContent={handleUpdateContent}
            onClose={() => setCmsActive(false)}
          />
        </main>
      ) : (
        /* Executive Brand Landing Page Flow */
        <main className="relative">
          {/* Hero Section */}
          <Hero
            title={cmsContent.hero.title}
            subtitle={cmsContent.hero.subtitle}
            onCtaClick={(id) => {
              if (id === "contact") {
                setPledgeMessage("Sanibonani! I am interested in joining the upcoming pilot as an active beta tester to test the offline Android app.");
              }
              scrollToSection(id);
            }}
            onTutorClick={() => scrollToSection("ai-playground-section")}
          />

          {/* South Africa's Problem Scope */}
          <Problem />

          {/* The Innovation Solution Blueprint */}
          <Solution />

          {/* About KodeMamas Origin & Story */}
          <About />

          {/* Product Showcase, Technical Stack and Translation Status */}
          <ProductShowcase />

          {/* Dedicated Languages Section */}
          <LanguagesSection />

          {/* Offline First Educational Experience Section */}
          <OfflineFirst />

          {/* Core Technology Interactive AI Tutor Playground */}
          <section id="ai-playground-section" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-150">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-semibold text-[#3c0c66] uppercase tracking-wider mb-4">
                  <Cpu className="w-3.5 h-3.5 text-[#d9a73d]" />
                  <span>Try our Core Technology</span>
                </div>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 leading-tight">
                  Interact with KodeMamas AI Coding Tutor
                </h2>
                <p className="text-gray-500 text-base sm:text-lg mt-4 font-sans">
                  Investors and CSI directors can explore a live simulation of our localized AI translation intelligence. Ask a question and watch it clarify concepts in real South African mother tongues.
                </p>
              </div>

              {/* Chat Window Component */}
              <AITutorPlayground />
            </div>
          </section>

          {/* Advanced Tech Stack & Architecture */}
          <Technology />

          {/* Deployment Roadmap / Milestones */}
          <ProductStatus />

          {/* Live Impact Analytics Dashboard */}
          <ImpactDashboard stats={cmsContent.stats} />

          {/* Pledge Impact Calculator */}
          <PledgeCalculator 
            onPledgeSubmit={(message) => {
              setPledgeMessage(message);
              scrollToSection("contact");
            }}
            initialStats={cmsContent.stats}
          />

          {/* Differentiator Comparison Matrix */}
          <WhyKodeMamas />

          {/* Learner Success & Community Feedback */}
          <Testimonials />

          {/* Learner Pipeline Lifecycle */}
          <TalentPipeline />

          {/* Partnership & Sponsorship Packages */}
          <Partnerships onSponsorClick={() => scrollToSection("contact")} />

          {/* Founder Profile */}
          <Founder />

          {/* Dynamic news blog preview */}
          <News articles={cmsContent.blog} />

          {/* Accordion FAQ Guidance */}
          <FAQ />

          {/* Interactive Contact & Bid Submission */}
          <Contact 
            onSuccessSubmit={handleSuccessInquirySubmit} 
            prefilledMessage={pledgeMessage}
          />
        </main>
      )}

      {/* Corporate Footnotes & Contacts */}
      <Footer 
        onSectionClick={scrollToSection} 
        onCmsClick={() => setCmsActive(!cmsActive)}
        onLegalClick={(tab) => {
          setLegalTab(tab);
          setLegalModalOpen(true);
        }}
      />

      {/* South African Legal & Compliance Framework Modal */}
      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        initialTab={legalTab} 
      />

      {/* Interactive Portfolio Marketing Video Generator Modal */}
      <MarketingVideoModal 
        isOpen={videoModalOpen} 
        onClose={() => setVideoModalOpen(false)} 
        userEmail="xabanokwazi008@gmail.com"
      />

      {/* Floating Marketing Video Studio Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setVideoModalOpen(true)}
          className="flex items-center space-x-2 px-4 py-3 rounded-full bg-[#D4AF37] hover:bg-[#F3C63F] text-gray-950 text-xs font-bold shadow-2xl transition-all transform hover:scale-105 active:scale-95 border border-white/20 cursor-pointer animate-bounce"
          style={{ animationDuration: '3s' }}
          title="Video Studio: Generate Portfolio Video"
        >
          <Video className="w-4 h-4 text-gray-950 shrink-0" />
          <span>Marketing Video Studio</span>
        </button>
      </div>

    </div>
  );
}
