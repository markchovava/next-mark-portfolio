"use client"
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import { FiFileText, FiCommand, FiVolume2, FiVolumeX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const { openCvModal, setCommandPaletteOpen, soundEnabled, toggleSound } = usePortfolioStore();

  const handleCvClick = () => {
    if (soundEnabled) sounds.playPop(520);
    openCvModal();
  };

  const handleCommandClick = () => {
    if (soundEnabled) sounds.playPop(480);
    setCommandPaletteOpen(true);
  };

  const handleSoundToggle = () => {
    toggleSound();
    if (!soundEnabled) sounds.playSuccess();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090b10]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors font-display"
        >
          Mark C. Chovava
        </a>

        {/* Zone 2: 4–5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#projects"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline decoration-amber-400/60"
          >
            Selected Works
          </a>
          <a
            href="#architecture"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline decoration-amber-400/60"
          >
            System Architecture
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline decoration-amber-400/60"
          >
            Skills & Stack
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline decoration-amber-400/60"
          >
            Career Journey
          </a>
          <a
            href="#contact"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 underline-offset-8 hover:underline decoration-amber-400/60"
          >
            Contact & Hire
          </a>
        </nav>

        {/* Zone 3: 1 primary action + subtle secondary utility triggers */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleCommandClick}
            type="button"
            title="Open Command Palette (⌘K)"
            aria-label="Open Command Palette"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-slate-400 hover:text-slate-200 bg-slate-900/80 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <FiCommand className="w-3.5 h-3.5" />
            <kbd className="font-mono text-[10px] text-slate-400">⌘K</kbd>
          </button>

          <button
            onClick={handleSoundToggle}
            type="button"
            title={soundEnabled ? 'Mute Interface Audio' : 'Enable Subtle Interface Audio'}
            aria-label={soundEnabled ? 'Mute audio' : 'Enable audio'}
            className="p-2 text-slate-400 hover:text-slate-200 bg-slate-900/60 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            {soundEnabled ? <FiVolume2 className="w-4 h-4 text-amber-400" /> : <FiVolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={handleCvClick}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-sm shadow-amber-400/10 cursor-pointer whitespace-nowrap shrink-0"
          >
            <FiFileText className="w-3.5 h-3.5" />
            <span>View Official CV (PDF)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
