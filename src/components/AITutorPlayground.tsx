import React, { useState, useRef, useEffect } from "react";
import { Cpu, Send, Languages, RefreshCw, Sparkles, Terminal, ArrowUpRight, Globe } from "lucide-react";
import { ChatMessage } from "../types";

export default function AITutorPlayground() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial_1",
      sender: "tutor",
      text: "Molo! Sawubona! Dumela! Welcome! I am your KodeMamas AI Coding Tutor. Select a language below and ask me any coding question. I can explain things using South African stories and analogies! Let's build your future together.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("isiZulu");
  const [googleSearch, setGoogleSearch] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "isiZulu", label: "isiZulu (Zulu)" },
    { code: "isiXhosa", label: "isiXhosa (Xhosa)" },
    { code: "Afrikaans", label: "Afrikaans" },
    { code: "Sepedi", label: "Sepedi (Northern Sotho)" },
    { code: "Setswana", label: "Setswana (Tswana)" },
    { code: "English", label: "English" }
  ];

  const suggestedQuestions = [
    {
      q: "Explain what a variable is in coding.",
      context: "Explain using a kitchen jar storing sugar or salt."
    },
    {
      q: "How does a 'loop' work in programming?",
      context: "Explain using a recipe for baking amagwinya (vetkoek) or a traditional dance step."
    },
    {
      q: "Latest tech news in South Africa today?",
      context: "Give me factual tech events from live search results."
    }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: textToSend,
          language: language,
          codeContext: "",
          googleSearch: googleSearch
        })
      });

      if (!response.ok) {
        throw new Error("Tutor API failed");
      }

      const data = await response.json();
      
      const tutorMessage: ChatMessage = {
        id: `tutor_${Date.now()}`,
        sender: "tutor",
        text: data.response,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources
      };

      setMessages((prev) => [...prev, tutorMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `err_${Date.now()}`,
        sender: "tutor",
        text: "Yikes! I had trouble reaching the Mzansi satellite. (Make sure your internet connection is active and your API Key is verified in Secrets). But remember: you are highly capable, Mama! Try again shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#12101a] rounded-3xl border border-white/5 shadow-2xl overflow-hidden max-w-4xl mx-auto flex flex-col h-[600px]" id="ai-playground">
      {/* Header Panel */}
      <div className="bg-gradient-to-r from-[#4B0082] via-[#5c1c99] to-[#7c3aed] text-white px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
            <Cpu className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div className="text-left">
            <h3 className="font-display font-bold text-base tracking-tight flex items-center space-x-1.5">
              <span>Interactive Multilingual Tutor</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold bg-green-500/20 text-green-300 uppercase tracking-widest border border-green-500/20">
                Live Demo
              </span>
            </h3>
            <p className="text-xs text-purple-200">Powered by Gemini AI (Google Cloud & Mzansi Logic)</p>
          </div>
        </div>

        {/* Language & Search Controls */}
        <div className="flex items-center space-x-3">
          {/* Google Search Grounding Toggle */}
          <button
            onClick={() => setGoogleSearch(!googleSearch)}
            type="button"
            id="tutor-grounding-toggle"
            aria-label="Toggle Google Search grounding"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border transition-all text-xs font-semibold shrink-0 cursor-pointer ${
              googleSearch
                ? "bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]"
                : "bg-black/20 text-purple-300 border-white/10 hover:border-purple-300"
            }`}
            title="Fact-check or find recent news in real-time with Google Search Grounding"
          >
            <Globe className={`w-3.5 h-3.5 ${googleSearch ? "text-[#D4AF37]" : "text-purple-300"}`} />
            <span className="hidden sm:inline">Search Grounding</span>
            <span className="sm:hidden">Search</span>
          </button>

          {/* Language Selection */}
          <div className="flex items-center space-x-2 bg-black/20 px-3 py-1.5 rounded-xl border border-white/10">
            <Languages className="w-3.5 h-3.5 text-purple-300" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              id="tutor-lang-select"
              aria-label="Select tutoring language"
              className="bg-transparent text-white text-xs font-semibold focus:outline-none border-none cursor-pointer pr-1"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code} className="text-gray-900 bg-white">
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Messages Stream */}
      <div className="grow overflow-y-auto p-6 bg-[#09080c]/50 space-y-4 font-sans text-sm">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
          >
            <div className="flex items-center space-x-1.5 mb-1 text-[10px] text-slate-400 font-mono">
              <span>{msg.sender === "user" ? "You (Learner)" : "KodeMamas AI Tutor"}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed text-left ${
                msg.sender === "user"
                  ? "bg-[#4B0082] text-white rounded-tr-none shadow-md font-medium border border-purple-500/20"
                  : "bg-[#191624] text-slate-200 border border-white/5 rounded-tl-none shadow-md whitespace-pre-wrap"
              }`}
            >
              <div>{msg.text}</div>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/5">
                  <div className="flex items-center space-x-1 text-[10px] text-slate-400 font-mono mb-2 uppercase tracking-wider font-bold">
                    <Globe className="w-3 h-3 text-[#D4AF37]" />
                    <span>Real-Time Web Citations:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {msg.sources.map((src, srcIdx) => (
                      <a
                        key={srcIdx}
                        href={src.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center space-x-1 text-[11px] text-[#D4AF37] hover:text-white bg-purple-950/40 hover:bg-purple-900/50 border border-purple-800/40 px-2.5 py-1 rounded-lg transition-colors font-sans font-medium"
                      >
                        <span className="truncate max-w-[180px]">{src.title}</span>
                        <ArrowUpRight className="w-3 h-3 shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-1.5 mb-1 text-[10px] text-slate-400 font-mono animate-pulse">
              <span>KodeMamas AI Tutor is thinking...</span>
            </div>
            <div className="bg-[#191624] border border-white/5 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm text-slate-300 italic flex items-center space-x-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#D4AF37]" />
              <span className="text-xs">Ukuphawula/Translating with Ubuntu... please wait</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Suggestions / Predefined queries */}
      <div className="bg-[#09080c] px-6 py-3 border-t border-white/5 flex items-center gap-2 overflow-x-auto scrollbar-none whitespace-nowrap">
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">
          Try Question:
        </span>
        {suggestedQuestions.map((sq, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(`${sq.q} ${sq.context}`)}
            disabled={loading}
            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-[#D4AF37]/50 font-medium transition-all cursor-pointer truncate shrink-0 max-w-[240px]"
          >
            {sq.q}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
        className="p-4 bg-[#09080c] border-t border-white/5 flex items-center space-x-3"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Type a coding question in ${language}...`}
          disabled={loading}
          id="tutor-message-input"
          aria-label="Tutor question input field"
          className="grow bg-[#12101a] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:ring-1 focus:ring-[#4B0082] focus:border-[#D4AF37]"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          id="tutor-send-button"
          aria-label="Send query"
          className="p-3 rounded-xl bg-[#4B0082] hover:bg-[#3c0066] text-white disabled:opacity-50 transition-colors flex items-center justify-center cursor-pointer border border-purple-500/20"
        >
          <Send className="w-4 h-4 text-[#D4AF37]" />
        </button>
      </form>
    </div>
  );
}
