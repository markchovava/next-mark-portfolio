"use client"
import React, { useState } from 'react';
import { SKILL_CATEGORIES, EDUCATION_LIST } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import {
  FiSearch,
  FiAward,
  FiCode,
  FiCheckCircle,
  FiBookOpen,
  FiClock
} from 'react-icons/fi';

export const SkillsSection: React.FC = () => {
  const { soundEnabled } = usePortfolioStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    const matchesCategory = selectedCategory === 'all' || selectedCategory === cat.title;
    if (!matchesCategory) return null;

    const filteredSkills = cat.skills.filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm && filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80 bg-[#090b10] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 font-mono">
              03. Technical Skills & Academic Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight text-balance">
              Verified Technical Stack & Proficiencies
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Over a decade of programming, API engineering, relational database modeling, and commercial digital graphic design.
          </p>
        </div>

        {/* Filter & Live Search Toolbar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    if (soundEnabled) sounds.playPop(520);
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${isSelected
                      ? 'bg-amber-400 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                >
                  {cat === 'all' ? 'All Disciplines' : cat.split(' ')[0]}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <FiSearch className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter skill (e.g. Laravel, Next.js)..."
              className="w-full pl-9 pr-3 py-2 text-xs text-white bg-slate-900/90 border border-slate-800 rounded-xl focus:outline-none focus:border-amber-400/80 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl bg-[#0d1019] border border-slate-800 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white font-display mb-1.5">{cat.title}</h3>
                <p className="text-xs text-slate-400 mb-6">{cat.description}</p>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                          {skill.experienceYears && (
                            <span className="text-amber-400 tabular-nums">
                              {skill.experienceYears}+ yrs
                            </span>
                          )}
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{skill.percentage}%</span>
                        </div>
                      </div>

                      {/* Progress bar with smooth width */}
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{cat.skills.length} Competencies</span>
                <span className="text-slate-300">Verified in Production</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Row */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-6 font-mono">
            <FiAward className="w-4 h-4" />
            <span>Formal Education & Continuous Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="rounded-xl bg-[#0c0f17] border border-slate-800 p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-2 font-mono">
                    <span className="text-amber-400">{edu.badge}</span>
                    <span className="tabular-nums">{edu.period}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white font-display mb-1">{edu.degree}</h4>
                  <div className="text-xs font-medium text-slate-400 mb-3">{edu.institution}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{edu.details}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <FiCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Qualification</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
