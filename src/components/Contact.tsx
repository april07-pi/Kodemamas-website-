import React, { useState, useEffect } from "react";
import { Mail, Send, CheckCircle2, MapPin, Phone } from "lucide-react";

interface ContactProps {
  onSuccessSubmit?: () => void;
  prefilledMessage?: string;
}

export default function Contact({ onSuccessSubmit, prefilledMessage }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Corporate Partnership");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (prefilledMessage) {
      setMessage(prefilledMessage);
      if (prefilledMessage.toLowerCase().includes("beta tester")) {
        setType("Become a Beta Tester");
      } else {
        setType("Corporate Partnership");
      }
    }
  }, [prefilledMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setErr("Please fill out all required fields.");
      return;
    }
    setErr("");
    setLoading(true);

    const mailtoSubject = encodeURIComponent(`[KodeMamas Enquiry] ${type} from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nInquiry Category: ${type}\n\nMessage:\n${message}\n\n---\nSent via KodeMamas Platform`
    );
    const mailtoUrl = `mailto:Kodemamas@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, type, message, targetEmail: "Kodemamas@gmail.com" })
      });

      if (!response.ok) {
        throw new Error("Contact API response error");
      }

      setSuccess(true);
      
      // Attempt to trigger mail client for direct email delivery
      try {
        window.location.href = mailtoUrl;
      } catch (e) {
        console.log("Could not auto-open mailto:", e);
      }

      setName("");
      setEmail("");
      setMessage("");
      
      if (onSuccessSubmit) {
        onSuccessSubmit();
      }

      setTimeout(() => {
        setSuccess(false);
      }, 8000);
    } catch (error) {
      setErr("Trouble establishing connection with our server. You can also email us directly at Kodemamas@gmail.com");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
          
          {/* Left Column: Context Brief */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-purple-200 uppercase tracking-wider mb-4">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Contact Project</span>
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
                Partner with Us to Support Digital Inclusion
              </h2>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4 font-sans font-normal">
                Are you an advisory mentor, or a corporate CSI manager seeking to support a student-led digital upskilling project? Send us an inquiry to discuss pilot collaborations, and we will get back to you shortly.
              </p>
            </div>

            {/* Quick Contacts */}
            <div className="space-y-4 pt-6 border-t border-white/5 text-sm text-slate-300">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Project Location</h4>
                  <p className="text-xs text-slate-400 font-normal mt-0.5">Based in Bloemfontein, South Africa</p>
                </div>
              </div>
              <div className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white">Direct Email Enquiries</h4>
                  <a
                    href="mailto:Kodemamas@gmail.com"
                    className="text-xs text-[#D4AF37] hover:underline font-semibold block mt-0.5"
                  >
                    Kodemamas@gmail.com
                  </a>
                  <p className="text-xs text-slate-400 font-normal mt-0.5">+27 (0)72 539 4371</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#191624]/60 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
            
            {success ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
                <h3 className="font-display font-bold text-xl text-white">
                  Enquiry Prepared for Kodemamas@gmail.com!
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed font-normal">
                  Your message has been saved to our inquiry system and routed to <strong className="text-white">Kodemamas@gmail.com</strong>.
                </p>
                <a
                  href={`mailto:Kodemamas@gmail.com?subject=${encodeURIComponent("[KodeMamas Enquiry]")}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 text-white text-xs font-bold transition-all border border-purple-500/30 shadow-md mt-2"
                >
                  <Mail className="w-4 h-4 text-[#D4AF37]" />
                  <span>Email Kodemamas@gmail.com Directly</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col items-start">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Amina Ndlovu"
                      className="w-full bg-[#09080c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]/80"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col items-start">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. amina@venture.com"
                      className="w-full bg-[#09080c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]/80"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="flex flex-col items-start">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Inquiry Category
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-[#09080c] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]/80 cursor-pointer"
                  >
                    <option value="Corporate Partnership" className="bg-[#09080c] text-white">Corporate Partnership (CSI)</option>
                    <option value="Become a Beta Tester" className="bg-[#09080c] text-white">Become a Beta Tester</option>
                    <option value="Investment" className="bg-[#09080c] text-white">VC & Capital Investment</option>
                    <option value="Become a Mentor" className="bg-[#09080c] text-white">Become a Technical Mentor</option>
                    <option value="Media" className="bg-[#09080c] text-white">Media or speaking engagement</option>
                    <option value="General Enquiry" className="bg-[#09080c] text-white">General Inquiries</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col items-start">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    How can we build together? *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your venture interests, CSI scorecard targets, or mentorship goals..."
                    className="w-full bg-[#09080c] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#4B0082]/80 resize-none font-normal"
                  />
                </div>

                {err && (
                  <p className="text-xs font-medium text-red-400 text-left">
                    {err}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-[#4B0082] hover:bg-[#3c0066] text-white disabled:opacity-50 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer border border-purple-500/20"
                >
                  {loading ? (
                    <span>Submitting Proposal...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
