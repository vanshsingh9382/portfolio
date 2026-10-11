import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0C0C0C] text-[#D7E2EA] pt-20 pb-12 px-6 md:px-10 border-t border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Banner CTA */}
        <FadeIn delay={0.1} y={30} className="w-full">
          <div className="rounded-[40px] border border-white/10 bg-gradient-to-b from-[#141417] to-[#0C0C0C] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-medium mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Available for New Projects</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
                Have a 3D Concept?
              </h3>
              <p className="text-sm sm:text-base text-[#D7E2EA]/60 max-w-lg">
                Let&apos;s create photorealistic 3D visuals, motion sequences, and brand experiences that captivate your audience.
              </p>
            </div>

            <div className="shrink-0">
              <ContactButton onClick={onOpenContact} label="Get in Touch" />
            </div>
          </div>
        </FadeIn>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5 text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-widest">JACK</span>
            <span>&copy; {new Date().getFullYear()}</span>
            <span>&middot;</span>
            <span>3D Creator &amp; Motion Artist</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Twitter / X
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ArtStation
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
