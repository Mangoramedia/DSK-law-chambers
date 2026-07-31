import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Scale, 
  Landmark, 
  Gavel, 
  ShieldAlert, 
  Briefcase, 
  Users, 
  MapPin,
  ArrowUpRight, 
  CheckCircle2, 
  FileCheck, 
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectPracticeArea: (areaTitle: string) => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-[#E6C77B]" />,
  FileText: <FileText className="w-6 h-6 text-[#D4AF37]" />,
  Scale: <Scale className="w-6 h-6 text-[#E6C77B]" />,
  Landmark: <Landmark className="w-6 h-6 text-[#D4AF37]" />,
  Gavel: <Gavel className="w-6 h-6 text-[#E6C77B]" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#D4AF37]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#E6C77B]" />,
  Users: <Users className="w-6 h-6 text-[#D4AF37]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#E6C77B]" />
};

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPracticeArea }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalArea, setActiveModalArea] = useState<PracticeArea | null>(null);

  const categories = ['All', 'Real Estate & Land', 'Litigation & Writs', 'Banking & ADR', 'Drafting & Family'];

  const filteredAreas = PRACTICE_AREAS.filter(area => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Real Estate & Land') {
      return area.id === 'real-estate-due-diligence' || area.id === 'land-revenue-matters';
    }
    if (selectedFilter === 'Litigation & Writs') {
      return area.id === 'civil-litigation' || area.id === 'criminal-law' || area.id === 'high-court-practice';
    }
    if (selectedFilter === 'Banking & ADR') {
      return area.id === 'banking-drt-matters' || area.id === 'arbitration-dispute-resolution';
    }
    if (selectedFilter === 'Drafting & Family') {
      return area.id === 'legal-drafting-documentation' || area.id === 'family-law';
    }
    return true;
  });

  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-[#050505] border-b border-[#2D2517] relative overflow-hidden">
      
      {/* Background Subtle Radial Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11100d] border border-[#D4AF37]/40 text-xs font-bold text-[#E6C77B] tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Core Legal Specializations
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9F1E0]">
              Practice Areas & Legal Services
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    isActive
                      ? 'text-[#050505] font-bold shadow-md'
                      : 'bg-[#11100d] text-[#A39C8E] hover:text-[#F9F1E0] border border-[#2D2517]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] rounded-full z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Practice Areas Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAreas.map((area, idx) => (
              <motion.div
                layout
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#11100d]/90 backdrop-blur-md hover:bg-[#1a1813] border border-[#2D2517] hover:border-[#D4AF37]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)]"
                onClick={() => setActiveModalArea(area)}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center group-hover:scale-110 group-hover:border-[#D4AF37] transition-all">
                      {ICON_MAP[area.iconName] || <Scale className="w-6 h-6 text-[#E6C77B]" />}
                    </div>
                    <span className="text-[11px] font-semibold text-[#E6C77B] bg-[#070705] px-3 py-1 rounded-full border border-[#2D2517]">
                      {area.keyServices.length} Legal Matters
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors mb-3">
                    {area.title}
                  </h3>

                  <p className="text-xs text-[#A39C8E] leading-relaxed line-clamp-2 mb-5 font-sans">
                    {area.shortDesc}
                  </p>

                  {/* Service Bullet Highlights */}
                  <div className="bg-[#070705]/90 p-4 rounded-xl border border-[#2D2517] mb-6 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                      Featured Practice Scope:
                    </span>
                    {area.keyServices.slice(0, 4).map((srv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#E2DDD3]">
                        <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="truncate">{srv}</span>
                      </div>
                    ))}
                    {area.keyServices.length > 4 && (
                      <p className="text-[10px] text-[#E6C77B] italic font-semibold pt-1">
                        + {area.keyServices.length - 4} additional services included...
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="pt-4 border-t border-[#2D2517] flex items-center justify-between text-xs text-[#E6C77B] font-semibold group-hover:text-[#F5D061]">
                    <span>View Full Details & Requirements</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Practice Area Detail Modal */}
        <AnimatePresence>
          {activeModalArea && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050505]/90 backdrop-blur-md overflow-y-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#11100d] border border-[#D4AF37]/50 rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative shadow-[0_0_60px_rgba(212,175,55,0.2)] my-8 text-left max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalArea(null)}
                  className="absolute top-5 right-5 text-[#A39C8E] hover:text-[#F9F1E0] p-2 rounded-xl bg-[#070705] hover:bg-[#1a1813] transition-colors border border-[#2D2517]"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3.5 mb-5 pr-10">
                  <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center shrink-0">
                    {ICON_MAP[activeModalArea.iconName]}
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">DSK Practice Overview</span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0]">
                      {activeModalArea.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#E2DDD3] leading-relaxed mb-6 font-sans bg-[#070705] p-4 sm:p-5 rounded-xl border border-[#2D2517]">
                  {activeModalArea.fullDesc}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  
                  {/* Key Legal Services */}
                  <div className="bg-[#070705] p-5 rounded-xl border border-[#2D2517]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6C77B] flex items-center gap-2 mb-3">
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                      Services Included ({activeModalArea.keyServices.length})
                    </h4>
                    <ul className="space-y-2 max-h-80 overflow-y-auto pr-1">
                      {activeModalArea.keyServices.map((service, idx) => (
                        <li key={idx} className="text-xs text-[#E2DDD3] flex items-start gap-2 py-0.5">
                          <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Documents Needed */}
                  <div className="bg-[#070705] p-5 rounded-xl border border-[#2D2517]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] flex items-center gap-2 mb-3">
                      <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                      Recommended Case Documents
                    </h4>
                    <ul className="space-y-2.5">
                      {activeModalArea.commonDocumentsNeeded.map((doc, idx) => (
                        <li key={idx} className="text-xs text-[#E2DDD3] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E6C77B] shrink-0 mt-1.5" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Typical Case Example */}
                <div className="bg-[#070705]/80 p-4 rounded-xl border border-[#2D2517] mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#A39C8E] font-semibold block">Representative Precedent:</span>
                  <p className="text-xs sm:text-sm text-[#E2DDD3] italic mt-1 font-serif-editorial">
                    &ldquo;{activeModalArea.typicalCases}&rdquo;
                  </p>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#2D2517]">
                  <button
                    onClick={() => setActiveModalArea(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#2D2517] text-xs font-semibold text-[#A39C8E] hover:text-[#F9F1E0] hover:bg-[#070705] transition-all"
                  >
                    Close Window
                  </button>
                  <button
                    onClick={() => {
                      const title = activeModalArea.title;
                      setActiveModalArea(null);
                      onSelectPracticeArea(title);
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] text-[#050505] font-bold text-xs tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 hover:brightness-110"
                  >
                    <span>Book Consultation for this Area</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
