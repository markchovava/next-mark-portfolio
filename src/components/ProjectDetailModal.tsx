"use client"
import React from 'react';
import { Project } from '../types';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import {
  FiX,
  FiExternalLink,
  FiServer,
  FiDatabase,
  FiShield,
  FiLayers,
  FiCheckCircle,
  FiGlobe
} from 'react-icons/fi';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const { soundEnabled } = usePortfolioStore();

  if (!project) return null;

  const handleClose = () => {
    if (soundEnabled) sounds.playPop(440);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0d1019] border border-slate-700/80 shadow-2xl overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 bg-[#090b10] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <FiGlobe className="w-4 h-4" />
            </div>
            <div>
              <h2 id="modal-title" className="text-base font-bold text-white font-display">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>{project.client}</span>
                <span aria-hidden="true">·</span>
                <span>{project.sector}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">{project.year}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleClose}
            type="button"
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview & Live Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <div>
              <p className="text-sm text-slate-300 leading-relaxed">{project.summary}</p>
            </div>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm shadow-amber-400/20"
            >
              <span>Visit Live Website</span>
              <FiExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Key Deliverables & Features */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-display">
              Engineered Capabilities & Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60">
                  <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Deep Dive */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-display">
              Technical Architecture & Infrastructure
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                  <FiLayers className="w-4 h-4" />
                  <span>Frontend Engineering</span>
                </div>
                <p className="text-slate-300">{project.architecture.frontend}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-1">
                  <FiServer className="w-4 h-4" />
                  <span>Backend & API Layer</span>
                </div>
                <p className="text-slate-300">{project.architecture.backend}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-1">
                  <FiDatabase className="w-4 h-4" />
                  <span>Database & Schemas</span>
                </div>
                <p className="text-slate-300">{project.architecture.database}</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <div className="flex items-center gap-2 text-purple-400 font-semibold mb-1">
                  <FiShield className="w-4 h-4" />
                  <span>VPS Security & Deployment</span>
                </div>
                <p className="text-slate-300">{project.architecture.security}</p>
              </div>
            </div>
          </div>

          {/* Technology Badges (Unboxed typography with dots) */}
          <div className="pt-2 border-t border-slate-800">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
              Technology Stack Used
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300 font-mono">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  {idx > 0 && <span className="text-slate-600" aria-hidden="true">·</span>}
                  <span className="text-slate-200">{tech}</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#090b10] flex items-center justify-between text-xs text-slate-400">
          <span>Target domain: {project.displayUrl}</span>
          <button
            onClick={handleClose}
            type="button"
            className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
