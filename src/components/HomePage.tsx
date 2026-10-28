"use client"
import { ArchitecturePhilosophy } from "@/components/ArchitecturePhilosophy";
import { ClientsRoster } from "@/components/ClientsRoster";
import { CommandPalette } from "@/components/CommandPalette";
import { CvPdfModal } from "@/components/CvPdfModal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { ProjectEstimator } from "@/components/ProjectEstimator";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { usePortfolioStore } from "@/store/usePortfolioStore";


export default function HomePage() {
    const { selectedProject, setSelectedProject } = usePortfolioStore();

    return (
        <div className="min-h-screen bg-[#090b10] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
            {/* Navigation bar following strict 3-zone contract */}
            <Navbar />

            {/* Main Content Sections */}
            <main className="flex-1">
                <Hero />
                <ProjectsSection />
                <ArchitecturePhilosophy />
                <SkillsSection />
                <ExperienceTimeline />
                <ClientsRoster />
                <ProjectEstimator />
            </main>

            {/* Footer */}
            <Footer />

            {/* Modals & Overlays */}
            <ProjectDetailModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
            <CvPdfModal />
            <CommandPalette />
        </div>
    );
}
