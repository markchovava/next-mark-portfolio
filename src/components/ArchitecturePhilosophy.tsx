"use client"
import React, { useState } from 'react';
import { ARCHITECTURE_PILLARS } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import {
  FiCheck,
  FiShield,
  FiTerminal,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLock,
  FiServer
} from 'react-icons/fi';

export const ArchitecturePhilosophy: React.FC = () => {
  const { soundEnabled } = usePortfolioStore();
  const [selectedPillar, setSelectedPillar] = useState(0);

  const activePillar = ARCHITECTURE_PILLARS[selectedPillar];

  const hardeningChecklist = [
    { title: 'SSH Key-Only Authentication', desc: 'Password login disabled, non-standard SSH port, brute-force throttling.' },
    { title: 'UFW Firewall Rules & Fail2ban', desc: 'Strict inbound port filtering (80, 443 only), automatic IP ban on repeated failures.' },
    { title: 'Automated TLS 1.3 / Let’s Encrypt', desc: 'Grade A+ SSL certificates, OCSP stapling, HTTP/2 multiplexing.' },
    { title: 'Sanitized SQL & Parameterized Queries', desc: 'Zero raw concatenated queries, ORM escaping, strict input validation.' },
    { title: 'Granular RBAC & Token Auth', desc: 'Role-based middleware, CSRF protections, Bearer token revocation.' },
    { title: 'Automated Daily Backups & Offsite Sync', desc: 'Encrypted MySQL dumps and document storage with point-in-time recovery.' }
  ];

  return (
    <section id="architecture" className="py-20 border-b border-slate-800/80 bg-[#0c0f17] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              02. Technical Architecture & Engineering Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Full Stack Delivery From Brand to VPS Production
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Taking products from Figma / Photoshop interfaces through Next.js and Laravel backends down to Linux server security and SEO optimization.
          </p>
        </div>

        {/* 4 Pillars Interactive Tab Controls */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {ARCHITECTURE_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillar === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  if (soundEnabled) sounds.playPop(560);
                  setSelectedPillar(idx);
                }}
                className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${isSelected
                    ? 'bg-slate-900 border-amber-400/80 shadow-md shadow-amber-400/5'
                    : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
              >
                <div className="text-[11px] font-mono text-slate-400 mb-1">Pillar 0{idx + 1}</div>
                <div className={`text-sm font-bold font-display ${isSelected ? 'text-amber-400' : 'text-white'}`}>
                  {pillar.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Detail card */}
          <div className="lg:col-span-5 rounded-2xl bg-[#090b10] border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-amber-400 mb-2">{activePillar.subtitle}</div>
              <h3 className="text-2xl font-bold text-white font-display mb-4">{activePillar.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">{activePillar.description}</p>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                Key Technologies
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-300 font-mono">
                {activePillar.stack.map((item, i) => (
                  <React.Fragment key={item}>
                    {i > 0 && <span className="text-slate-600">/</span>}
                    <span className="text-amber-300/90">{item}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Standard: Production Ready</span>
              <span className="text-emerald-400">Security Hardened</span>
            </div>
          </div>

          {/* Code & config viewer */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090b10] border border-slate-800 overflow-hidden flex flex-col">
            <div className="px-4 py-2.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-slate-300">Architecture Implementation Spec</span>
              <span className="text-amber-400">Mark C. Chovava Standard</span>
            </div>
            <div className="p-5 flex-1 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300 bg-[#06080c]">
              <pre>
                <code>{activePillar.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Web Security Hardening Matrix */}
        <div className="rounded-2xl bg-[#090b10] border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <FiShield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-display">
                Web Security Hardening & VPS Administration Protocol
              </h3>
              <p className="text-xs text-slate-400">
                Rigorous operational checklist applied to every client web deployment.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardeningChecklist.map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <FiCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-bold text-slate-200">{item.title}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
