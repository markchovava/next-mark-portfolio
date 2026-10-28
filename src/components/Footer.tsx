"use client"
import { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import { FiArrowUp, FiFileText, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const Footer: React.FC = () => {
  const { openCvModal, soundEnabled } = usePortfolioStore();
  const [currentYear, setCurrentYear] = useState<number>(2026); // Fallback static year for SSR

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    if (soundEnabled) sounds.playPop(580);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] py-14 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-slate-800/60">
          <div>
            <div className="text-base font-bold text-white font-display">Mark C. Chovava</div>
            <div className="text-xs text-slate-400 mt-0.5">
              Full Stack Web Developer & Digital Designer · 10+ Years Experience
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-slate-400 font-mono text-[11px]">
              <span>Harare, Zimbabwe</span>
              <span aria-hidden="true">·</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-amber-400 transition-colors">
                {PERSONAL_INFO.email}
              </a>
              <span aria-hidden="true">·</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-amber-400 transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (soundEnabled) sounds.playPop(520);
                openCvModal();
              }}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            >
              <FiFileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Official CV (PDF)</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            >
              GitHub
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to top"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {currentYear} Mark C. Chovava. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Next.js</span>
            <span aria-hidden="true">·</span>
            <span>TypeScript</span>
            <span aria-hidden="true">·</span>
            <span>Laravel</span>
            <span aria-hidden="true">·</span>
            <span>MySQL</span>
            <span aria-hidden="true">·</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
