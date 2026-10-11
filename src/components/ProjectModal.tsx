import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, Check } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  deliverables?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#121214] border border-[#2D333B] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
          >
            {/* Close */}
            <button
              onClick={onClose}
              type="button"
              className="absolute top-5 right-5 p-2 rounded-full text-[#A1B2C0] hover:text-white hover:bg-white/10 transition-colors z-20"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pr-10">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xl sm:text-2xl font-black text-white tabular-nums">
                    {project.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#BBCCD7]/70 font-medium">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 uppercase tracking-wider">
                  Featured Case Study
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#BBCCD7] leading-relaxed max-w-3xl mb-6">
              {project.description}
            </p>

            {/* Image Preview Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
              <div className="md:col-span-5 flex flex-col gap-4">
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 h-44 sm:h-52">
                  <img
                    src={project.col1Img1}
                    alt={`${project.title} render 1`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 h-52 sm:h-64">
                  <img
                    src={project.col1Img2}
                    alt={`${project.title} render 2`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="md:col-span-7 rounded-2xl overflow-hidden bg-black/40 border border-white/10 h-[380px] md:h-full min-h-[380px]">
                <img
                  src={project.col2Img}
                  alt={`${project.title} hero render`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Deliverables & Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#1C1F26] text-[#A1B2C0] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full border border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA]/10 uppercase text-xs tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Close Showcase</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
