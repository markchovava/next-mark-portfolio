"use client"
import React from 'react';
import { motion } from 'motion/react';
import { LIVE_PROJECTS } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import { Project, ProjectCategory } from '../types';
import {
  FiExternalLink,
  FiMaximize2,
  FiLock,
  FiGlobe,
  FiActivity,
  FiCpu,
  FiLayers
} from 'react-icons/fi';

const FILTER_TABS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All Live Projects (8)' },
  { id: 'fullstack', label: 'Full-Stack Architecture' },
  { id: 'nextjs', label: 'Next.js & React' },
  { id: 'laravel', label: 'Laravel & APIs' },
  { id: 'ecommerce', label: 'eCommerce & Services' },
  { id: 'corporate', label: 'Enterprise & Advisory' }
];

export const ProjectsSection: React.FC = () => {
  const { projectFilter, setProjectFilter, setSelectedProject, soundEnabled } = usePortfolioStore();

  const filteredProjects = LIVE_PROJECTS.filter((p) => {
    if (projectFilter === 'all') return true;
    return p.category.includes(projectFilter);
  });

  const handleInspect = (project: Project) => {
    if (soundEnabled) sounds.playPop(500);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Natural Editorial Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              01. Selected Works & Live Deployments
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Production Web Applications & Platforms
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Real enterprise and commercial systems delivered across finance, energy, automotive, healthcare, and hospitality in live production.
          </p>
        </div>

        {/* Interactive Filter Controls (Segmented Bar) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl mb-10 overflow-x-auto scrollbar-none">
          {FILTER_TABS.map((tab) => {
            const isActive = projectFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (soundEnabled) sounds.playPop(540);
                  setProjectFilter(tab.id);
                }}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm shadow-amber-400/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            // First two projects in full list get prominence when unfiltered
            const isFeatured = projectFilter === 'all' && (idx === 0 || idx === 1);

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`group rounded-2xl bg-[#0d1019] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 ${isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
              >
                {/* Browser Window Frame Header */}
                <div className="px-4 py-2.5 border-b border-slate-800/90 bg-[#080a0f] flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-rose-500/80 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-amber-500/80 transition-colors" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-emerald-500/80 transition-colors" />
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-slate-800/80 text-[11px] font-mono text-slate-400 max-w-[200px] sm:max-w-xs truncate">
                    <FiLock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    title={`Open ${project.displayUrl} in new tab`}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata (Anti-pill) */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="font-medium text-slate-300">{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.sector}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-slate-400 mb-4 font-mono">
                      {project.tagline}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {/* Architectural Highlights / Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="text-base font-bold text-white font-mono tabular-nums">
                              {metric.value}
                            </div>
                            <div className="text-[11px] text-slate-400 font-medium">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tech stack items rendered cleanly with dot separators */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 font-mono mb-4">
                      {project.techStack.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          {idx > 0 && <span className="text-slate-700" aria-hidden="true">·</span>}
                          <span className="text-slate-300">{tech}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Dual Action Controls: Inspect Specs + Live External Link */}
                    <div className="flex items-center justify-between gap-3 pt-2">
                      <button
                        onClick={() => handleInspect(project)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
                      >
                        <FiMaximize2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>Inspect Architecture</span>
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline underline-offset-4 transition-colors cursor-pointer"
                      >
                        <span>Visit Site</span>
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
