import React from 'react';
import { FIRM_INFO } from '../data/firmData';
import { Mail, Phone, MapPin, Clock, Shield, Calendar, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenConsultation?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20 bg-[#050505] relative border-b border-[#2D2517]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-2">
            Direct Contact & Location
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F9F1E0]">
            Contact DSK Law Chambers
          </h2>
          <p className="text-sm text-[#E2DDD3] font-sans mt-2">
            Confidential consultation for individuals, property developers, institutions, and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Office Address */}
          <div className="bg-[#11100d] border border-[#2D2517] rounded-2xl p-8 text-left space-y-4 shadow-xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center text-[#D4AF37] mb-6">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#F9F1E0] mb-2">
                Chamber Office
              </h3>
              <p className="text-xs text-[#E2DDD3] font-sans leading-relaxed whitespace-pre-line">
                {FIRM_INFO.contact.address}
              </p>
            </div>

            <div className="pt-4 border-t border-[#2D2517]">
              <span className="text-[11px] text-[#D4AF37] font-bold uppercase tracking-wider block">
                Bengaluru, Karnataka
              </span>
            </div>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="bg-[#11100d] border border-[#2D2517] rounded-2xl p-8 text-left space-y-4 shadow-xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center text-[#D4AF37] mb-6">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#F9F1E0] mb-4">
                Direct Communication
              </h3>
              
              <div className="space-y-4 text-xs text-[#E2DDD3]">
                <div>
                  <strong className="block text-[#A39C8E] uppercase tracking-wider text-[10px] mb-0.5">Phone & Call Hotline</strong>
                  <a href={`tel:${FIRM_INFO.contact.phone}`} className="text-base font-bold text-[#F5D061] hover:underline">
                    {FIRM_INFO.contact.phone}
                  </a>
                </div>

                <div>
                  <strong className="block text-[#A39C8E] uppercase tracking-wider text-[10px] mb-0.5">WhatsApp Direct Line</strong>
                  <a 
                    href="https://wa.me/917019302979?text=Hello%20DSK%20Law%20Chambers%2C%20I%20would%20like%20to%20consult%20regarding%20a%20legal%20matter."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:underline bg-[#25D366]/10 px-3 py-1.5 rounded-lg border border-[#25D366]/40 mt-1"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.003L2 22l5.127-1.332c1.463.799 3.11 1.22 4.881 1.22h.004c5.503 0 9.986-4.478 9.986-9.985 0-2.667-1.039-5.176-2.924-7.062C17.189 3.04 14.68 2 12.012 2zm0 18.24h-.003c-1.5 0-2.97-.403-4.252-1.163l-.305-.182-3.045.795.811-2.964-.2-.317a8.212 8.212 0 01-1.258-4.43c.001-4.542 3.696-8.236 8.243-8.236 2.2 0 4.269.858 5.825 2.415a8.196 8.196 0 012.414 5.827c-.001 4.543-3.696 8.238-8.23 8.238zm4.516-6.17c-.247-.125-1.464-.722-1.692-.805-.228-.083-.393-.125-.559.124-.166.248-.642.805-.787.97-.145.166-.29.186-.537.063-.247-.124-1.045-.385-1.99-1.228-.737-.658-1.235-1.47-1.38-1.718-.145-.248-.015-.382.108-.505.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.063-.124-.559-1.348-.766-1.848-.202-.487-.407-.421-.559-.428l-.477-.009c-.166 0-.435.063-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.408 1.015 2.573.125.166 1.754 2.678 4.249 3.754.593.256 1.056.409 1.417.524.596.19 1.138.163 1.567.099.479-.071 1.464-.598 1.671-1.177.207-.58.207-1.076.145-1.177-.062-.102-.227-.165-.474-.29z"/>
                    </svg>
                    <span>Chat on WhatsApp (+91 7019302979)</span>
                  </a>
                </div>

                <div>
                  <strong className="block text-[#A39C8E] uppercase tracking-wider text-[10px] mb-0.5">Email Address</strong>
                  <a href={`mailto:${FIRM_INFO.contact.email}`} className="text-sm font-semibold text-[#F9F1E0] hover:text-[#F5D061] transition-colors underline decoration-[#D4AF37]/40">
                    {FIRM_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#2D2517] flex items-center gap-2 text-[11px] text-[#A39C8E]">
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>Prompt attorney response within 24 hours</span>
            </div>
          </div>

          {/* Card 3: Hours & Privilege */}
          <div className="bg-[#11100d] border border-[#2D2517] rounded-2xl p-8 text-left space-y-4 shadow-xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between lg:col-span-1 md:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center justify-center text-[#D4AF37] mb-6">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-serif-editorial text-2xl font-bold text-[#F9F1E0] mb-2">
                Chamber Hours
              </h3>
              <p className="text-xs text-[#E2DDD3] font-sans leading-relaxed mb-6">
                {FIRM_INFO.contact.hours}
              </p>

              <div className="p-3.5 rounded-xl bg-[#070705] border border-[#2D2517] flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <p className="text-[11px] text-[#A39C8E] leading-tight">
                  All shared documents and communications are protected under legal professional privilege.
                </p>
              </div>
            </div>

            {onOpenConsultation && (
              <div className="pt-4 border-t border-[#2D2517]">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
