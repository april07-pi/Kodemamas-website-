import React from "react";
import { BlogArticle } from "../types";
import { BookOpen, User, Calendar, Clock, ArrowRight } from "lucide-react";

interface NewsProps {
  articles: BlogArticle[];
  onArticleClick?: (id: string) => void;
}

export default function News({ articles, onArticleClick }: NewsProps) {
  return (
    <section id="news" className="py-24 bg-[#09080c] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>News & Insights</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight">
            Latest Briefings & Tech Analysis
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-sans font-normal">
            Read perspectives and journey logs on digital inclusion, EdTech, and South African technology.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {articles.map((item, idx) => (
            <div
              key={item.id}
              className="bg-[#191624]/60 hover:bg-[#191624] rounded-3xl p-6 border border-white/5 shadow-2xl hover:shadow-purple-950/20 transition-all duration-300 flex flex-col justify-between"
              id={`blog-card-${item.id}`}
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-4 text-[10px] font-mono font-bold uppercase tracking-wider text-[#b388ff]">
                  <span className="bg-purple-950/40 border border-purple-800/30 px-2.5 py-1 rounded-full">{item.category}</span>
                  <span className="text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    <span>{item.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-3 hover:text-[#D4AF37] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {item.excerpt}
                </p>
              </div>

              {/* Author & Footer Row */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4B0082] to-[#D4AF37] flex items-center justify-center text-white font-bold text-xs">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white leading-none">{item.author}</h5>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block font-normal">{item.date}</span>
                  </div>
                </div>

                <button
                  onClick={() => onArticleClick?.(item.id)}
                  className="p-1.5 rounded-lg hover:bg-purple-950/40 text-purple-300 hover:text-[#D4AF37] transition-all cursor-pointer border border-transparent hover:border-white/5"
                  title="Read Briefing"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
