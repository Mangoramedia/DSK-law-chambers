import React from 'react';
import { Shield, CheckCircle2, Scale, Award, Building2, Gavel, FileCheck2, Lightbulb, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

interface WhyChooseUsSectionProps {
  onOpenConsultation?: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = () => {
  const reasons = [
    {
      title: "Property Due Diligence & Title Verification",
      description: "Extensive experience in property due diligence and title verification across complex land titles and revenue records.",
      icon: <FileCheck2 className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "High-Value Real Estate Legal Opinions",
      description: "Comprehensive legal opinions for high-value real estate transactions, JDA agreements, and developer title audits.",
      icon: <Building2 className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Mastery in Legal Drafting",
      description: "Strong drafting expertise across property, commercial, corporate, and personal legal documents with watertight contractual clarity.",
      icon: <Scale className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Strategic Multi-Disciplinary Representation",
      description: "Strategic representation in civil, family, criminal, banking (DRT/SARFAESI), and complex land disputes.",
      icon: <Gavel className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Effective Courtroom Advocacy",
      description: "Effective advocacy before Trial Courts, Tribunals, and the High Court of Karnataka with proven precedent setting matters.",
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Solution-Oriented Arbitration & Mediation",
      description: "Practical, solution-oriented approach to arbitration and mediation for swift, amicable dispute resolutions.",
      icon: <Lightbulb className="w-6 h-6 text-[#D4AF37]" />
    },
    {
      title: "Transparent & Personalized Advice",
      description: "Transparent communication and personalized legal advice tailored specifically to client objectives without template-based solutions.",
      icon: <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#050505] border-b border-[#2D2517] relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11100d] border border-[#D4AF37]/50 text-xs font-bold text-[#E6C77B] tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(212,175,55,0.15)]">
            <Shield className="w-4 h-4 text-[#D4AF37]" />
            Chamber Distinction
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9F1E0] leading-tight">
            Why Clients Entrust <br />
            <span className="italic font-normal bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#AA7C11] bg-clip-text text-transparent">
              DSK LAW CHAMBERS
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#E2DDD3] mt-4 font-sans leading-relaxed max-w-3xl mx-auto">
            With years of legal experience, DSK LAW CHAMBERS delivers trusted legal solutions through strategic advocacy, meticulous property title verification, and practical legal counsel. Guided by integrity, precision, and professionalism, we are committed to protecting our clients' rights and achieving the best possible outcomes.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#11100d]/90 backdrop-blur-md border border-[#2D2517] hover:border-[#D4AF37]/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)] flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center mb-5 group-hover:border-[#D4AF37] group-hover:bg-[#11100d] group-hover:scale-110 transition-all">
                  {item.icon}
                </div>
                <h3 className="font-serif-editorial text-xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#A39C8E] font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2D2517]/60 flex items-center justify-between text-[11px] text-[#E6C77B] font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Core Distinction</span>
                </div>
                <span className="text-[10px] text-[#A39C8E] tracking-widest uppercase">DSK Legal Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
