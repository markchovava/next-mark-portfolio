"use client"
import React from 'react';
import { WORK_EXPERIENCE } from '../data/cvData';
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiCheckCircle,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 bg-[#0c0f17] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              04. Professional Experience & Engineering Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Career Journey & Industry Impact
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Leading development teams, reviewing code, architecting full-stack systems, and mentoring the next generation of African software engineers.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 md:before:-translate-x-1/2 before:w-0.5 before:bg-slate-800/80">
          {WORK_EXPERIENCE.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''
                  } gap-6 md:gap-12`}
              >
                {/* Center marker */}
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0c0f17] border-2 border-amber-400 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                </div>

                {/* Content Card */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <div className="rounded-2xl bg-[#090b10] border border-slate-800 hover:border-slate-700/80 p-6 sm:p-7 shadow-lg transition-all">
                    {/* Header info */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 mb-2 font-mono">
                      <div className="flex items-center gap-2 text-amber-400 font-semibold">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span className="tabular-nums">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <FiMapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display mb-1">{exp.role}</h3>
                    <div className="text-sm font-semibold text-slate-300 mb-3">{exp.company}</div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-5">{exp.summary}</p>

                    {/* Responsibilities */}
                    <div className="space-y-2 mb-5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <FiCheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    {exp.achievements.length > 0 && (
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-5">
                        <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono flex items-center gap-1.5">
                          <FiTrendingUp className="w-3.5 h-3.5" />
                          <span>Key Accomplishments</span>
                        </div>
                        <div className="space-y-1.5">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-amber-400 font-bold">·</span>
                              <span>{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tech stack inline */}
                    <div className="pt-3 border-t border-slate-800/80">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                        {exp.technologies.map((t, tIdx) => (
                          <React.Fragment key={t}>
                            {tIdx > 0 && <span className="text-slate-700" aria-hidden="true">·</span>}
                            <span className="text-slate-300">{t}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty spacer for opposing side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
