import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight, Shield, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_INFO } from '../data/firmData';
import { DSK_LOGO_IMAGE_URL } from './DSKLogo';

interface HeaderProps {
  onOpenConsultation: (practiceArea?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-[#2D2517] shadow-[0_4px_30px_rgba(0,0,0,0.7)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with DSK Emblem */}
        <a href="#home" className="flex items-center gap-3 sm:gap-3.5 group my-auto h-full py-1">
          <div className="flex items-center justify-center max-h-[56px] sm:max-h-[64px] h-14 sm:h-16 w-auto shrink-0">
            <img
              src={DSK_LOGO_IMAGE_URL}
              alt="DSK Law Chambers Logo"
              className="max-h-[56px] sm:max-h-[64px] h-14 sm:h-16 w-auto object-contain rounded-full mix-blend-lighten filter drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="block font-serif-editorial text-lg sm:text-2xl tracking-wider text-[#F9F1E0] font-bold group-hover:text-[#F5D061] transition-colors leading-tight">
              DSK LAW CHAMBERS
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.22em] text-[#A39C8E] uppercase font-sans mt-0.5">
              Advocates & Legal Consultants
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs tracking-widest uppercase text-[#E2DDD3] font-medium">
          <a href="#home" className="hover:text-[#F5D061] transition-colors py-1">Home</a>
          <a href="#practice-areas" className="hover:text-[#F5D061] transition-colors py-1">Practice Areas</a>
          <a href="#why-choose-us" className="hover:text-[#F5D061] transition-colors py-1 text-[#E6C77B]">Why Choose Us</a>
          <a href="#jurisdictions" className="hover:text-[#F5D061] transition-colors py-1">Judicial Forums</a>
          <a href="#engagement-protocol" className="hover:text-[#F5D061] transition-colors py-1">Protocol</a>
          <a href="#contact" className="hover:text-[#F5D061] transition-colors py-1">Contact</a>
        </nav>

        {/* Right Desktop CTA Action */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenConsultation()}
            className="flex items-center gap-2 px-4.5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] font-bold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 font-bold" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#11100d] border border-[#2D2517] text-[#E2DDD3] hover:text-[#F5D061] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#F5D061]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="sm:hidden bg-[#090806] border-b border-[#2D2517] px-6 py-6 space-y-5 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col space-y-3.5 text-sm tracking-wider uppercase text-[#E2DDD3] font-semibold">
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 border-b border-[#11100d] hover:text-[#F5D061] flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-[10px] text-[#A39C8E]">01</span>
              </a>
              <a 
                href="#practice-areas" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 border-b border-[#11100d] hover:text-[#F5D061] flex items-center justify-between"
              >
                <span>Practice Areas</span>
                <span className="text-[10px] text-[#A39C8E]">02</span>
              </a>
              <a 
                href="#why-choose-us" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 border-b border-[#11100d] text-[#E6C77B] flex items-center justify-between"
              >
                <span>Why Choose Us</span>
                <span className="text-[10px] text-[#D4AF37]">03</span>
              </a>
              <a 
                href="#jurisdictions" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 border-b border-[#11100d] hover:text-[#F5D061] flex items-center justify-between"
              >
                <span>Judicial Forums</span>
                <span className="text-[10px] text-[#A39C8E]">04</span>
              </a>
              <a 
                href="#engagement-protocol" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 border-b border-[#11100d] hover:text-[#F5D061] flex items-center justify-between"
              >
                <span>Engagement Protocol</span>
                <span className="text-[10px] text-[#A39C8E]">05</span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-1.5 hover:text-[#F5D061] flex items-center justify-between"
              >
                <span>Contact Us</span>
                <span className="text-[10px] text-[#A39C8E]">06</span>
              </a>
            </nav>
            
            <div className="pt-4 border-t border-[#2D2517] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] text-[#050505] font-bold text-xs tracking-wider uppercase shadow-lg"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 font-bold" />
              </button>

              <div className="flex items-center justify-around text-xs text-[#A39C8E] pt-2">
                <a href={`tel:${FIRM_INFO.contact.phone}`} className="flex items-center gap-1.5 text-[#F5D061] font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{FIRM_INFO.contact.phone}</span>
                </a>
                <a 
                  href="https://wa.me/917019302979" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 text-[#25D366] font-medium"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
