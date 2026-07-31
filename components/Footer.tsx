import React from 'react';
import { ShieldAlert, Phone, Mail, MapPin } from 'lucide-react';
import { FIRM_INFO } from '../data/firmData';
import { DSKLogo } from './DSKLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-[#2D2517] text-[#A39C8E] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center shrink-0">
                <DSKLogo maxHeight="40px" />
              </div>
              <span className="font-serif-editorial text-2xl font-bold text-[#F9F1E0]">
                DSK LAW CHAMBERS
              </span>
            </div>

            <p className="text-xs text-[#A39C8E] leading-relaxed max-w-sm">
              Full-service law firm with specialized focus on Real Estate Law, Property Due Diligence, High Court Practice, DRT Matters, and Civil/Criminal Litigation.
            </p>

            <div className="pt-2 text-xs text-[#E2DDD3] space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[#A39C8E]">{FIRM_INFO.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <a href={`tel:${FIRM_INFO.contact.phone}`} className="hover:text-[#F5D061] transition-colors">{FIRM_INFO.contact.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E6C77B] shrink-0" />
                <a href={`mailto:${FIRM_INFO.contact.email}`} className="hover:text-[#F5D061] transition-colors">{FIRM_INFO.contact.email}</a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9F1E0]">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Real Estate & Property Due Diligence</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Legal Documentation & Contracts</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">High Court Practice & Writs</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Banking & DRT SARFAESI Suits</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Civil & Criminal Litigation</a></li>
              <li><a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">Arbitration & Dispute Resolution</a></li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F9F1E0]">
              Chambers Overview
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#why-choose-us" className="hover:text-[#F5D061] transition-colors text-[#E6C77B]">Why Clients Choose DSK Law Chambers</a></li>
              <li><a href="#jurisdictions" className="hover:text-[#D4AF37] transition-colors">Judicial Practice Spectrum</a></li>
              <li><a href="#engagement-protocol" className="hover:text-[#D4AF37] transition-colors">Client Engagement Protocol</a></li>
              <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Chamber Location & Office Hours</a></li>
            </ul>
          </div>

        </div>

        {/* Bar Council Disclaimer Box */}
        <div className="p-5 rounded-xl bg-[#070705] border border-[#2D2517] text-[11px] text-[#A39C8E] leading-relaxed text-left space-y-2">
          <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Bar Council of India Legal Disclaimer</span>
          </div>
          <p>
            As per the rules of the Bar Council of India, law firms and advocates are not permitted to solicit work or advertise in any form or manner. By accessing this website (www.dsklawchambers.com), the user acknowledges that they are seeking information relating to DSK Law Chambers of their own accord and that there has been no form of solicitation, advertisement, or inducement.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#2D2517] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A39C8E]">
          <p>© {new Date().getFullYear()} DSK LAW CHAMBERS. All Rights Reserved.</p>
          <p className="mt-2 sm:mt-0 font-serif-editorial text-xs text-[#E6C77B]">
            Developed and maintained by <span className="font-sans font-bold text-[#F9F1E0]">Mangoro Media</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};
