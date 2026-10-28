"use client"
import { useState, useEffect } from 'react';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { PERSONAL_INFO } from '../data/cvData';
import { sounds } from '../utils/sound';
import {
  FiSearch,
  FiX,
  FiFileText,
  FiBriefcase,
  FiLayers,
  FiAward,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSliders,
  FiVolume2
} from 'react-icons/fi';

export const CommandPalette: React.FC = () => {
  const {
    isCommandPaletteOpen,
    setCommandPaletteOpen,
    openCvModal,
    setIsEstimatorModalOpen,
    toggleSound,
    soundEnabled
  } = usePortfolioStore();

  const [query, setQuery] = useState('');

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
      if (e.key === 'Escape' && isCommandPaletteOpen) {
        setCommandPaletteOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const actions = [
    {
      id: 'projects',
      title: 'Navigate to Selected Works',
      category: 'Navigation',
      icon: FiBriefcase,
      action: () => {
        window.location.hash = '#projects';
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'architecture',
      title: 'Explore System Architecture & Security',
      category: 'Navigation',
      icon: FiLayers,
      action: () => {
        window.location.hash = '#architecture';
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'skills',
      title: 'View Verified Technical Stack',
      category: 'Navigation',
      icon: FiAward,
      action: () => {
        window.location.hash = '#skills';
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'experience',
      title: 'View Career Journey & Leadership',
      category: 'Navigation',
      icon: FiBriefcase,
      action: () => {
        window.location.hash = '#experience';
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'estimator',
      title: 'Open Scope & Quotation Builder',
      category: 'Inquiry',
      icon: FiSliders,
      action: () => {
        setIsEstimatorModalOpen(true);
        window.location.hash = '#contact';
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'cv',
      title: 'Open Official CV Document (PDF)',
      category: 'Resume',
      icon: FiFileText,
      action: () => {
        openCvModal();
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'email',
      title: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Contact',
      icon: FiMail,
      action: () => {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        if (soundEnabled) sounds.playSuccess();
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'phone',
      title: `Call / WhatsApp (${PERSONAL_INFO.phone})`,
      category: 'Contact',
      icon: FiPhone,
      action: () => {
        window.location.href = `tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`;
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      category: 'External',
      icon: FiLinkedin,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank');
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      category: 'External',
      icon: FiGithub,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'audio',
      title: soundEnabled ? 'Mute Interface Audio' : 'Enable Subtle Interface Audio',
      category: 'Preferences',
      icon: FiVolume2,
      action: () => {
        toggleSound();
        setCommandPaletteOpen(false);
      }
    }
  ];

  const filteredActions = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) ||
    act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cmd-palette-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/75 backdrop-blur-sm"
      onClick={() => setCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-xl rounded-2xl bg-[#0d1019] border border-slate-700 shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="px-4 py-3.5 border-b border-slate-800 bg-[#090b10] flex items-center gap-3">
          <FiSearch className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            id="cmd-palette-title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            onClick={() => setCommandPaletteOpen(false)}
            type="button"
            className="p-1 text-slate-500 hover:text-white"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              No matching actions found for "{query}".
            </div>
          ) : (
            filteredActions.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (soundEnabled) sounds.playPop(520);
                    item.action();
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800/60 text-left transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-400/30 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800 bg-[#090b10] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span>Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
