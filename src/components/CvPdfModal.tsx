"use client"
import { useState } from 'react';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_LIST } from '../data/cvData';
import { sounds } from '../utils/sound';
import {
  FiX,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiCheck,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLayers
} from 'react-icons/fi';

export const CvPdfModal: React.FC = () => {
  const { isCvModalOpen, closeCvModal, soundEnabled } = usePortfolioStore();
  const [viewMode, setViewMode] = useState<'embed' | 'summary'>('embed');

  if (!isCvModalOpen) return null;

  const handleClose = () => {
    if (soundEnabled) sounds.playPop(420);
    closeCvModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] rounded-2xl bg-[#0d1019] border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-3.5 border-b border-slate-800 bg-[#090b10] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FiFileText className="w-4 h-4" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-sm font-bold text-white font-display">
                Mark_Chovava_CV_fullstack.pdf
              </h2>
              <div className="text-[11px] text-slate-400 font-mono">
                Official Curriculum Vitae · Harare, Zimbabwe
              </div>
            </div>
          </div>

          {/* Mode Switcher + Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium">
              <button
                type="button"
                onClick={() => setViewMode('embed')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${viewMode === 'embed' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                PDF Document
              </button>
              <button
                type="button"
                onClick={() => setViewMode('summary')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${viewMode === 'summary' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                Quick Reader
              </button>
            </div>

            <a
              href={PERSONAL_INFO.pdfPath}
              download="Mark_Chovava_CV_fullstack.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm shadow-amber-400/20"
            >
              <FiDownload className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={PERSONAL_INFO.pdfPath}
              target="_blank"
              rel="noreferrer"
              title="Open full PDF in browser tab"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleClose}
              type="button"
              aria-label="Close CV Modal"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 bg-[#090b10] overflow-hidden relative">
          {viewMode === 'embed' ? (
            <div className="w-full h-full flex flex-col">
              <object
                data={PERSONAL_INFO.pdfPath}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                  <FiFileText className="w-12 h-12 text-amber-400 mb-4" />
                  <h3 className="text-base font-bold text-white mb-2">
                    PDF Preview Available
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md mb-6 leading-relaxed">
                    Your browser does not support inline PDF viewing or has plugin sandboxing enabled. You can open the full PDF directly or use our Quick Reader.
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={PERSONAL_INFO.pdfPath}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                    >
                      Open PDF in New Window
                    </a>
                    <button
                      type="button"
                      onClick={() => setViewMode('summary')}
                      className="px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Switch to Quick Reader
                    </button>
                  </div>
                </div>
              </object>
            </div>
          ) : (
            <div className="w-full h-full overflow-y-auto p-6 sm:p-10 space-y-8 max-w-4xl mx-auto">
              {/* Header Profile Section */}
              <div className="border-b border-slate-800 pb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {PERSONAL_INFO.name}
                </h1>
                <div className="text-sm font-semibold text-amber-400 mt-1">
                  {PERSONAL_INFO.role}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  {PERSONAL_INFO.focus}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-3 font-mono">
                  <span>{PERSONAL_INFO.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PERSONAL_INFO.phone}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 font-mono">
                  Professional Summary
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-4 font-mono">
                  Professional Experience
                </h2>
                <div className="space-y-6">
                  {WORK_EXPERIENCE.map((exp) => (
                    <div key={exp.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-1 font-mono">
                        <span className="font-bold text-white">{exp.role}</span>
                        <span className="text-amber-400">{exp.period}</span>
                      </div>
                      <div className="text-xs text-slate-400 mb-2">{exp.company} — {exp.location}</div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-amber-400 font-bold">·</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 font-mono">
                  Education & Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {EDUCATION_LIST.map((edu) => (
                    <div key={edu.id} className="p-3 rounded-lg bg-slate-900/30 border border-slate-800">
                      <div className="font-bold text-white">{edu.degree}</div>
                      <div className="text-slate-400 font-mono text-[11px]">{edu.institution} ({edu.period})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-2.5 border-t border-slate-800 bg-[#090b10] flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono">Direct Source: /public/assets/aistudio/Mark_Chovava_CV_fullstack_ac404f06.pdf</span>
          <button
            onClick={handleClose}
            type="button"
            className="px-3 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
