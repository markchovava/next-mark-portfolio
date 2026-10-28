"use client"
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiSend,
  FiCheck,
  FiCopy,
  FiSliders,
  FiArrowUpRight
} from 'react-icons/fi';

const PROJECT_TYPES = [
  { id: 'fullstack', label: 'Full-Stack Web Application', estWeeks: '4–8 Weeks' },
  { id: 'ecommerce', label: 'eCommerce Platform & Custom POS', estWeeks: '6–10 Weeks' },
  { id: 'corporate', label: 'Corporate Brand & Next.js Website', estWeeks: '3–5 Weeks' },
  { id: 'vps-audit', label: 'VPS Hardening, SEO & Performance', estWeeks: '1–2 Weeks' },
  { id: 'advisory', label: 'Technical Mentorship & Code Review', estWeeks: 'Flexible Retainer' }
];

const STACK_PREFERENCES = [
  'Next.js + TypeScript (Modern React)',
  'Laravel + MySQL (Robust REST APIs)',
  'Complete Full Stack (Next.js + Laravel + MySQL)',
  'UI/UX Brand Identity + Frontend'
];

export const ProjectEstimator: React.FC = () => {
  const { openCvModal, soundEnabled } = usePortfolioStore();
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0].id);
  const [preferredStack, setPreferredStack] = useState(STACK_PREFERENCES[2]);
  const [includeBranding, setIncludeBranding] = useState(true);
  const [includeVps, setIncludeVps] = useState(true);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedTypeObj = PROJECT_TYPES.find((p) => p.id === projectType) || PROJECT_TYPES[0];

  const generatedBrief = `Hello Mark,

I would like to inquire about initiating a project with you:

• Project Focus: ${selectedTypeObj.label}
• Preferred Stack: ${preferredStack}
• Deliverables: ${[
      selectedTypeObj.label,
      includeBranding ? 'Complete Brand Identity & UI/UX' : '',
      includeVps ? 'Hardened VPS Setup & SEO Strategy' : ''
    ].filter(Boolean).join(', ')}
• Estimated Timeline: ${selectedTypeObj.estWeeks}
• Client/Company: ${clientName || '[Your Organization]'}
• Contact Email: ${clientEmail || '[Your Email]'}

Additional Details:
${clientMessage || 'We are looking forward to discussing technical architecture, scope, and milestones.'}

Best regards,
${clientName || 'Prospective Client'}`;

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    if (soundEnabled) sounds.playSuccess();
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    } catch {
      // ignore
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${selectedTypeObj.label} - Mark C. Chovava`);
    const body = encodeURIComponent(generatedBrief);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    if (soundEnabled) sounds.playSuccess();
    try {
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.8 } });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0c0f17] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              06. Direct Contact & Scope Estimator
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Let's Build Something High-Yield Together
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Available for full-stack engineering roles, contract architectural builds, and enterprise technical consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#090b10] border border-slate-800 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white font-display mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs">
                {/* Email */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 truncate">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Primary Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-white hover:text-amber-400 transition-colors font-medium truncate block font-mono text-xs"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <FiPhone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Direct Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="text-white hover:text-emerald-400 transition-colors font-medium font-mono text-xs"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-cyan-400/10 text-cyan-400 flex items-center justify-center shrink-0">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</div>
                    <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-mono">
                  Verified Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FiLinkedin className="w-4 h-4 text-sky-400" />
                      <span>LinkedIn</span>
                    </span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FiGithub className="w-4 h-4 text-white" />
                      <span>GitHub</span>
                    </span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* CV Action */}
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white">Full Official CV Available</div>
                  <div className="text-[11px] text-slate-400">PDF document with complete career history</div>
                </div>
                <button
                  onClick={() => {
                    if (soundEnabled) sounds.playPop(520);
                    openCvModal();
                  }}
                  type="button"
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <FiFileText className="w-3.5 h-3.5" />
                  <span>Open PDF</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Scope Estimator & Inquiry Generator */}
          <div className="lg:col-span-7 rounded-2xl bg-[#090b10] border border-slate-800 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center">
                  <FiSliders className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Interactive Scope & Quotation Builder
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400 tabular-nums">
                Est: {selectedTypeObj.estWeeks}
              </span>
            </div>

            {/* Step 1: Project Type */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 font-mono">
                1. Select Engagement or Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = projectType === pt.id;
                  return (
                    <button
                      key={pt.id}
                      type="button"
                      onClick={() => {
                        if (soundEnabled) sounds.playPop(560);
                        setProjectType(pt.id);
                      }}
                      className={`p-3 rounded-xl text-left border text-xs transition-colors cursor-pointer flex flex-col justify-between ${isSelected
                          ? 'bg-slate-900 border-amber-400 text-white font-semibold'
                          : 'bg-slate-900/30 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                        }`}
                    >
                      <span className="text-slate-200">{pt.label}</span>
                      <span className="text-[11px] text-amber-400/80 font-mono mt-1 tabular-nums">
                        {pt.estWeeks}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Stack preference */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                2. Target Architectural Stack
              </label>
              <select
                value={preferredStack}
                onChange={(e) => setPreferredStack(e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs text-white bg-slate-900 border border-slate-800 rounded-xl focus:outline-none focus:border-amber-400 font-mono"
              >
                {STACK_PREFERENCES.map((stack) => (
                  <option key={stack} value={stack}>
                    {stack}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                3. Additional Turnkey Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBranding}
                    onChange={(e) => setIncludeBranding(e.target.checked)}
                    className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                  />
                  <span className="text-slate-200">Brand Identity & Digital UI/UX (Photoshop/Illustrator)</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeVps}
                    onChange={(e) => setIncludeVps(e.target.checked)}
                    className="rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                  />
                  <span className="text-slate-200">VPS Hardening, Nginx, SSL & Search Optimization</span>
                </label>
              </div>
            </div>

            {/* Step 4: Client info input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs text-slate-400 mb-1">Your Name or Organization</label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Acme Corp / Sarah Jenkins"
                  className="w-full px-3 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">Your Contact Email</label>
                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="e.g. sarah@acme.com"
                  className="w-full px-3 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs text-slate-400 mb-1">Brief Description of Objectives</label>
              <textarea
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                rows={2}
                placeholder="Key requirements, launch dates, or specific integrations needed..."
                className="w-full px-3 py-2 text-xs text-white bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-md shadow-amber-400/20 whitespace-nowrap shrink-0"
              >
                <FiSend className="w-3.5 h-3.5" />
                <span>Send Brief to markchovava@gmail.com</span>
              </button>

              <button
                type="button"
                onClick={handleCopyBrief}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                {copied ? <FiCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Brief Copied!' : 'Copy Formatted Brief'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
