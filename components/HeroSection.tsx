import React from 'react';
import { ArrowUpRight, Award, FileSearch, Scale, ShieldCheck } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { BackgroundCanvas } from './BackgroundCanvas';
import { DSK_LOGO_IMAGE_URL } from './DSKLogo';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="home" className="relative bg-[#050505] pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden border-b border-[#2D2517]">
      
      {/* Background canvas and ambient lighting */}
      <BackgroundCanvas />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-[#D4AF37]/12 blur-[120px] sm:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Seamlessly Blended Enlarged Official Logo Emblem */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative my-4 sm:my-8 w-full max-w-[280px] sm:max-w-md md:max-w-lg mx-auto flex items-center justify-center group"
        >
          {/* Ambient Gold Glow Orb */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37]/25 via-[#F5D061]/15 to-transparent blur-3xl group-hover:bg-[#D4AF37]/35 transition-all duration-700 pointer-events-none" />
          
          {/* Circular Decorative Ring Frame */}
          <div className="relative p-5 sm:p-8 rounded-full bg-[#070705]/80 border border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.3)] flex items-center justify-center transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.45)]">
            <img
              src={DSK_LOGO_IMAGE_URL}
              alt="DSK Law Chambers Official Emblem"
              className="max-h-[200px] sm:max-h-[280px] md:max-h-[340px] w-auto object-contain rounded-full mix-blend-lighten filter drop-shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Tagline Header Below Logo */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-2 sm:mt-4 mb-8 sm:mb-10 max-w-3xl mx-auto space-y-2.5 px-2"
        >
          <p className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#E6C77B]">
            Full Service Advocates & Real Estate
          </p>
          <h1 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#F9F1E0] leading-tight sm:leading-tight uppercase">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] bg-clip-text text-transparent drop-shadow-sm">
              Strategic Legal Solutions
            </span> <br className="hidden sm:inline" />
            <span className="text-[#F9F1E0]">for Individuals & Businesses</span>
          </h1>
        </motion.div>

        {/* Action Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-sm flex items-center justify-center"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_4px_30px_rgba(212,175,55,0.35)] hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-4 h-4 font-bold" />
          </button>
        </motion.div>

        {/* Key Statistics / Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          <div className="bg-[#11100d]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#2D2517] hover:border-[#D4AF37]/50 transition-all shadow-lg group">
            <div className="flex items-center gap-2.5 mb-1.5">
              <Award className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors">22+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#A39C8E] font-medium leading-tight">
              Years High Court Practice
            </p>
          </div>

          <div className="bg-[#11100d]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#2D2517] hover:border-[#D4AF37]/50 transition-all shadow-lg group">
            <div className="flex items-center gap-2.5 mb-1.5">
              <FileSearch className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors">4,500+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#A39C8E] font-medium leading-tight">
              Acres Land Title Audited
            </p>
          </div>

          <div className="bg-[#11100d]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#2D2517] hover:border-[#D4AF37]/50 transition-all shadow-lg group">
            <div className="flex items-center gap-2.5 mb-1.5">
              <Scale className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors">₹1,200 Cr+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#A39C8E] font-medium leading-tight">
              Land & Property Matters
            </p>
          </div>

          <div className="bg-[#11100d]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#2D2517] hover:border-[#D4AF37]/50 transition-all shadow-lg group">
            <div className="flex items-center gap-2.5 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors">10,000+</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#A39C8E] font-medium leading-tight">
              Client Consultations Logged
            </p>
          </div>
        </motion.div>

        {/* Mission Statement Quote Section */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-[#2D2517] text-center max-w-4xl mx-auto w-full">
          <p className="font-serif-editorial text-xl sm:text-3xl md:text-4xl leading-relaxed text-[#E2DDD3] font-medium italic">
            &ldquo;{FIRM_INFO.aboutFull}&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-[#A39C8E] uppercase tracking-widest font-sans">
            <span className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              22+ Years Senior Leadership
            </span>
            <span className="hidden sm:inline">•</span>
            <span>Bengaluru Principal Bench</span>
            <span className="hidden sm:inline">•</span>
            <span>Bar Council Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};
