"use client"
import { useState } from 'react';
import { CLIENT_ROSTER } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import { FiCheck, FiBriefcase } from 'react-icons/fi';

export const ClientsRoster: React.FC = () => {
  const { soundEnabled } = usePortfolioStore();
  const [selectedSector, setSelectedSector] = useState('All');

  const sectors = ['All', 'Automotive', 'Energy', 'Healthcare', 'Education', 'Cybersecurity', 'Retail'];

  const filteredClients = CLIENT_ROSTER.filter((client) => {
    if (selectedSector === 'All') return true;
    return client.sector.toLowerCase().includes(selectedSector.toLowerCase());
  });

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              05. Selected Clients & Commercial Partnerships
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Trusted by Industry Leaders & Institutions
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Delivering robust eCommerce, custom POS, and corporate web platforms across enterprise, healthcare, and educational sectors.
          </p>
        </div>

        {/* Sector Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl mb-10 overflow-x-auto scrollbar-none">
          {sectors.map((sec) => {
            const isActive = selectedSector === sec;
            return (
              <button
                key={sec}
                onClick={() => {
                  if (soundEnabled) sounds.playPop(520);
                  setSelectedSector(sec);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
              >
                {sec}
              </button>
            );
          })}
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.name}
              className="p-5 rounded-xl bg-[#0c0f17] border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span className="text-amber-400">{client.country}</span>
                  <span>{client.sector}</span>
                </div>
                <h3 className="text-base font-bold text-white font-display mb-1.5">
                  {client.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <FiCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Delivered & Maintained</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
