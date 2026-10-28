"use client"
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/cvData';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { sounds } from '../utils/sound';
import {
  FiArrowRight,
  FiFileText,
  FiCheck,
  FiCopy,
  FiTerminal,
  FiDatabase,
  FiServer,
  FiLayers,
  FiExternalLink
} from 'react-icons/fi';

const CODE_TABS = [
  {
    id: 'nextjs',
    title: 'Next.js App Router',
    icon: FiLayers,
    language: 'typescript',
    fileName: 'app/api/resilience/route.ts',
    code: `// Next.js 15+ Server Route with TypeScript & Strict Typing
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const clientSector = searchParams.get('sector') || 'all';

  // Optimized database query via Laravel backend handshake
  const response = await fetch(\`\${process.env.BACKEND_API}/v1/projects?sector=\${clientSector}\`, {
    headers: { 'Authorization': \`Bearer \${process.env.INTERNAL_TOKEN}\` },
    next: { revalidate: 60 } // Incremental Static Regeneration
  });

  const payload = await response.json();
  return NextResponse.json({ success: true, data: payload });
}`
  },
  {
    id: 'laravel',
    title: 'Laravel REST API',
    icon: FiTerminal,
    language: 'php',
    fileName: 'app/Http/Controllers/VehicleController.php',
    code: `<?php
namespace App\\Http\\Controllers;

use App\\Models\\Vehicle;
use Illuminate\\Http\\Request;
use Illuminate\\Http\\JsonResponse;

class VehicleController extends Controller
{
    /**
     * Fetch filtered vehicle inventory with normalized relationships.
     */
    public function index(Request $request): JsonResponse
    {
        $query = Vehicle::with(['specifications', 'dealership'])
            ->where('is_published', true);

        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->input('min_price'));
        }

        return response()->json([
            'status' => 'success',
            'inventory' => $query->paginate(12)
        ]);
    }
}`
  },
  {
    id: 'mysql',
    title: 'MySQL Relational Schema',
    icon: FiDatabase,
    language: 'sql',
    fileName: 'database/migrations/2024_create_pos_orders.sql',
    code: `-- Enterprise POS & Transaction Database Engine (InnoDB)
CREATE TABLE IF NOT EXISTS pos_transactions (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    receipt_no VARCHAR(48) NOT NULL UNIQUE,
    store_id BIGINT UNSIGNED NOT NULL,
    subtotal DECIMAL(10, 2) NOT NULL,
    tax_amount DECIMAL(10, 2) NOT NULL,
    total_payable DECIMAL(10, 2) NOT NULL,
    payment_method ENUM('cash', 'card', 'mobile_money', 'split') NOT NULL,
    synced_at TIMESTAMP NULL DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_receipt_store (receipt_no, store_id),
    CONSTRAINT fk_store_tx FOREIGN KEY (store_id) REFERENCES stores(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;`
  },
  {
    id: 'vps',
    title: 'VPS Nginx & Hardening',
    icon: FiServer,
    language: 'nginx',
    fileName: '/etc/nginx/sites-available/production.conf',
    code: `# VPS Production Reverse Proxy with Strict Hardening Headers
server {
    listen 443 ssl http2;
    server_name zenithspace.co.zw;

    ssl_certificate /etc/letsencrypt/live/zenithspace/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zenithspace/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;

    # Enterprise security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_http_version 1.1;
    }
}`
  }
];

export const Hero: React.FC = () => {
  const { openCvModal, setIsEstimatorModalOpen, soundEnabled } = usePortfolioStore();
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_TABS[activeTab].code);
    setCopied(true);
    if (soundEnabled) sounds.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTab = CODE_TABS[activeTab];

  return (
    <section id="home" className="relative pt-12 pb-20 border-b border-slate-800/80 overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              {/* Unboxed Metadata Kicker (Anti-pill discipline) */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-5">
                <span className="text-amber-400 font-semibold uppercase tracking-wider">Available for Global & Regional Roles</span>
                <span aria-hidden="true">·</span>
                <span>Harare, Zimbabwe</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">10+ Years Shipped</span>
              </div>

              {/* Display Headline with balanced wrapping */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6 font-display text-balance">
                Full Stack Architect & Digital Designer
              </h1>

              {/* Lead Body Copy */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl">
                Engineering high-converting web applications, eCommerce systems, and point-of-sale platforms. Expert in{' '}
                <strong className="text-white font-medium">Next.js</strong>,{' '}
                <strong className="text-white font-medium">TypeScript</strong>,{' '}
                <strong className="text-white font-medium">Laravel</strong>, and{' '}
                <strong className="text-white font-medium">MySQL</strong>, delivering complete digital solutions from brand identity to hardened VPS production.
              </p>

              {/* Unboxed key specialties */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 mb-8 font-mono">
                <span className="text-slate-300">Next.js (5+ yrs)</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">TypeScript (5+ yrs)</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">Laravel (5+ yrs)</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">MySQL & REST APIs</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-300">UI/UX & Branding (8+ yrs)</span>
              </div>
            </div>

            {/* Interactive Primary & Secondary CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={() => soundEnabled && sounds.playPop(500)}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all shadow-md shadow-amber-400/10 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Explore Live Production Works</span>
                <FiArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  if (soundEnabled) sounds.playPop(520);
                  openCvModal();
                }}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <FiFileText className="w-4 h-4 text-amber-400" />
                <span>Open PDF Resume</span>
              </button>

              <button
                onClick={() => {
                  if (soundEnabled) sounds.playPop(480);
                  setIsEstimatorModalOpen(true);
                }}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Hire / Project Inquiry</span>
                <FiExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Code & Architecture Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="h-full rounded-2xl border border-slate-800 bg-[#0c0f17] shadow-xl overflow-hidden flex flex-col">
              {/* Window Header Bar */}
              <div className="px-4 py-3 border-b border-slate-800 bg-[#090b10] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 truncate">
                    {currentTab.fileName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    type="button"
                    title="Copy Code Snippet"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 rounded-md transition-colors cursor-pointer"
                  >
                    {copied ? <FiCheck className="w-3.5 h-3.5 text-emerald-400" /> : <FiCopy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Segmented Tab Controls (Buttons for interactive state) */}
              <div className="px-3 pt-2 pb-0 bg-[#0c0f17] border-b border-slate-800/80 flex items-center gap-1 overflow-x-auto scrollbar-none">
                {CODE_TABS.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        if (soundEnabled) sounds.playPop(580);
                        setActiveTab(idx);
                      }}
                      className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-t-lg transition-colors whitespace-nowrap cursor-pointer border-b-2 ${isActive
                          ? 'bg-[#121622] text-amber-400 border-amber-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50'
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Editor Body */}
              <div className="p-4 flex-1 bg-[#121622]/60 overflow-x-auto font-mono text-xs leading-relaxed text-slate-300">
                <pre className="selection:bg-amber-500/30 selection:text-white">
                  <code>{currentTab.code}</code>
                </pre>
              </div>

              {/* Terminal Status Footer */}
              <div className="px-4 py-2.5 border-t border-slate-800/80 bg-[#090b10] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-3">
                  <span>Language: {currentTab.language}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">Syntax Validated</span>
                </div>
                <span className="tabular-nums">Mark C. Chovava · Tech Stack</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Metrics Strip (Below Hero Split per domain rules) */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {PERSONAL_INFO.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</span>
              <span className="text-xs text-slate-400 mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
