import { create } from 'zustand';
import { Project, ProjectCategory } from '../types';

interface PortfolioState {
  isCvModalOpen: boolean;
  openCvModal: () => void;
  closeCvModal: () => void;

  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;

  projectFilter: ProjectCategory;
  setProjectFilter: (category: ProjectCategory) => void;

  isCommandPaletteOpen: boolean;
  setCommandPaletteOpen: (open: boolean) => void;

  soundEnabled: boolean;
  toggleSound: () => void;

  isEstimatorModalOpen: boolean;
  setIsEstimatorModalOpen: (open: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  isCvModalOpen: false,
  openCvModal: () => set({ isCvModalOpen: true }),
  closeCvModal: () => set({ isCvModalOpen: false }),

  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),

  projectFilter: 'all',
  setProjectFilter: (category) => set({ projectFilter: category }),

  isCommandPaletteOpen: false,
  setCommandPaletteOpen: (open) => set({ isCommandPaletteOpen: open }),

  soundEnabled: false,
  toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),

  isEstimatorModalOpen: false,
  setIsEstimatorModalOpen: (open) => set({ isEstimatorModalOpen: open }),
}));
