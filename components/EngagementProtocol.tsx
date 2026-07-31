import React from 'react';
import { FileSearch, Layers, ShieldCheck, Scale, ArrowRight, CheckCircle } from 'lucide-react';

interface EngagementProtocolProps {
  onOpenConsultation: () => void;
}

export const EngagementProtocol: React.FC<EngagementProtocolProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      number: "01",
      title: "Confidential Consultation & Briefing",
      subtitle: "In-Depth Case Analysis",
      description: "Direct confidential session with Senior Advocates to review case facts, land title history, statutory notices, or contractual objectives.",
      icon: <FileSearch className="w-5 h-5 text-[#D4AF37]" />,
      highlights: ["Attorney-client privilege", "Document preliminary audit"]
    },
    {
      number: "02",
      title: "Meticulous Due Diligence & Search",
      subtitle: "Title & Statutory Verification",
      description: "Conducting exhaustive searches across Sub-Registrar offices, Revenue Departments, Encumbrance Certificates (EC), RTC records, and court register searches.",
      icon: <Layers className="w-5 h-5 text-[#D4AF37]" />,
      highlights: ["30 to 42-year title trace", "Litigation search across forums"]
    },
    {
      number: "03",
      title: "Strategic Drafting & Legal Opinion",
      subtitle: "Impervious Documentation",
      description: "Formulating thorough, watertight legal opinions, Joint Development Agreements (JDA), Sale Deeds, Written Statements, and Writs.",
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      highlights: ["Tailored legal opinions", "Risk mitigation clauses"]
    },
    {
      number: "04",
      title: "Vigorous Courtroom Representation",
      subtitle: "Trial & Appellate Advocacy",
      description: "Effective, persuasive oral and written advocacy before Trial Courts, Tribunals, DRT, and the High Court of Karnataka.",
      icon: <Scale className="w-5 h-5 text-[#D4AF37]" />,
      highlights: ["Interim relief & stays", "Precedent-backed argument"]
    }
  ];

  return (
    <section id="engagement-protocol" className="py-20 bg-[#070705] border-b border-[#2D2517] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-2">
            Chamber Workflow
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F9F1E0]">
            Client Engagement Protocol
          </h2>
          <p className="text-sm text-[#E2DDD3] mt-3 font-sans">
            How DSK Law Chambers delivers rigorous legal scrutiny and strategic advocacy for every client matter.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#11100d] border border-[#2D2517] hover:border-[#D4AF37]/60 rounded-2xl p-6 relative transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif-editorial text-3xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-[#070705] border border-[#2D2517] group-hover:border-[#D4AF37]/40 transition-all">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E6C77B] block mb-1">
                  {step.subtitle}
                </span>
                <h3 className="font-serif-editorial text-lg font-bold text-[#F9F1E0] mb-3 group-hover:text-[#F5D061] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#A39C8E] font-sans leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2D2517] space-y-1.5">
                {step.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-[11px] text-[#E2DDD3]">
                    <CheckCircle className="w-3 h-3 text-[#D4AF37] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Chamber Commitment Banner */}
        <div className="bg-[#11100d] border border-[#2D2517] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left space-y-1">
            <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#F9F1E0]">
              Schedule a Direct Chamber Consultation
            </h3>
            <p className="text-xs text-[#A39C8E]">
              Discuss your property, civil, or corporate matter with senior legal counsel in total confidentiality.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] font-bold text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2 shrink-0"
          >
            <span>Initiate Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
