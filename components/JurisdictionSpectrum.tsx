import React, { useState } from 'react';
import { Landmark, Shield, ChevronRight, FileText, Gavel, Scale, Building, ArrowUpRight } from 'lucide-react';

interface JurisdictionSpectrumProps {
  onOpenConsultation: () => void;
}

export const JurisdictionSpectrum: React.FC<JurisdictionSpectrumProps> = ({ onOpenConsultation }) => {
  const [activeForum, setActiveForum] = useState<number>(0);

  const forums = [
    {
      title: "High Court of Karnataka",
      category: "Appellate & Constitutional Jurisdiction",
      icon: <Landmark className="w-6 h-6 text-[#D4AF37]" />,
      description: "Representation in Original Side Writs, Commercial Appeals, First & Second Appeals, Civil Revision Petitions, and Criminal Appeals before the Principal Bench at Bengaluru and Circuit Benches.",
      keyCapabilities: [
        "Writ Petitions (Articles 226 & 227)",
        "Commercial Appellate Division Appeals",
        "RERA & Land Acquisition Challenges",
        "Quashing Petitions (Section 482 CrPC / BNSS)"
      ]
    },
    {
      title: "Debt Recovery Tribunals (DRT & DRAT)",
      category: "Banking & Financial Recovery Forum",
      icon: <Gavel className="w-6 h-6 text-[#D4AF37]" />,
      description: "Dedicated representation for high-stakes banking disputes, SARFAESI proceedings, Securitisation Appeals (SA), Original Applications (OA) by financial institutions, and interim stay petitions.",
      keyCapabilities: [
        "SARFAESI Measure Objections & SA Appeals",
        "Bank Auction & Possession Stay Petitions",
        "Original Applications (OA) Defense",
        "One-Time Settlement (OTS) Negotiations"
      ]
    },
    {
      title: "Trial Courts & District Sessions",
      category: "Civil, Criminal & Property Litigation",
      icon: <Scale className="w-6 h-6 text-[#D4AF37]" />,
      description: "End-to-end trial advocacy across Bengaluru City Civil Courts, Rural Courts, Sessions Courts, and Magistrate Courts for property partition, declaration suits, injunctions, and commercial matters.",
      keyCapabilities: [
        "Partition Suits & Title Declaration",
        "Permanent & Temporary Injunctions",
        "Specific Performance of Contracts",
        "Summary Suits & Commercial Disputes"
      ]
    },
    {
      title: "Real Estate Regulatory Authority (RERA)",
      category: "Developer & Homebuyer Disputes",
      icon: <Building className="w-6 h-6 text-[#D4AF37]" />,
      description: "Comprehensive advocacy before Karnataka RERA Authority and RERA Appellate Tribunal regarding project delay compensation, execution of orders, project registration, and promoter compliance.",
      keyCapabilities: [
        "Delay Compensation & Refund Claims",
        "Execution Petitions for RERA Orders",
        "Promoter Project Title Compliance",
        "Joint Development Agreement (JDA) Audits"
      ]
    },
    {
      title: "Land Revenue Authorities",
      category: "Revenue Records & Revenue Courts",
      icon: <FileText className="w-6 h-6 text-[#D4AF37]" />,
      description: "Expert advocacy before Tahsildar, Assistant Commissioner, Deputy Commissioner, and Karnataka Revenue Appellate Tribunal (KRAT) for RTC conversions, khata disputes, and land classification.",
      keyCapabilities: [
        "Section 79A/B Revenue Appeals",
        "Khata Bifurcation & RTC Mutation Suits",
        "Podhi & Boundary Dispute Resolution",
        "Agricultural to Non-Agricultural Conversion"
      ]
    }
  ];

  return (
    <section id="jurisdictions" className="py-20 bg-[#050505] border-b border-[#2D2517] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11100d] border border-[#D4AF37]/40 text-xs font-bold text-[#E6C77B] uppercase tracking-widest mb-3">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            Judicial Forums
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F9F1E0]">
            Judicial Practice Spectrum
          </h2>
          <p className="text-sm text-[#E2DDD3] mt-3 font-sans max-w-xl mx-auto">
            Strategic representation across Constitutional, Appellate, Banking, Revenue, and Commercial Legal Forums in Karnataka.
          </p>
        </div>

        {/* Interactive Forum Grid / Tabs Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Forum Selector Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {forums.map((forum, idx) => {
              const isSelected = activeForum === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveForum(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#11100d] border-[#D4AF37] text-[#F9F1E0] shadow-lg scale-[1.01]'
                      : 'bg-[#070705] border-[#2D2517] text-[#A39C8E] hover:border-[#D4AF37]/40 hover:text-[#E2DDD3]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-lg border ${
                      isSelected ? 'bg-[#070705] border-[#D4AF37]' : 'bg-[#11100d] border-[#2D2517]'
                    }`}>
                      {forum.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block">
                        {forum.category}
                      </span>
                      <h3 className="font-serif-editorial text-base font-bold text-[#F9F1E0]">
                        {forum.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#D4AF37] translate-x-1' : 'text-[#2D2517]'}`} />
                </button>
              );
            })}
          </div>

          {/* Active Forum Detail View */}
          <div className="lg:col-span-7 bg-[#11100d] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[#2D2517] pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  {forums[activeForum].category}
                </span>
                <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0]">
                  {forums[activeForum].title}
                </h3>
              </div>
              <div className="p-3 rounded-xl bg-[#070705] border border-[#2D2517] text-[#D4AF37]">
                {forums[activeForum].icon}
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E2DDD3] font-sans leading-relaxed mb-6">
              {forums[activeForum].description}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Key Representation Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {forums[activeForum].keyCapabilities.map((cap, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#070705] border border-[#2D2517] text-xs text-[#E2DDD3] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#2D2517] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#A39C8E]">
                Need specific advice for this judicial forum?
              </span>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md transition-all"
              >
                <span>Consult Senior Advocate</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
