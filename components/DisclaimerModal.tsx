import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield } from 'lucide-react';

export const DisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in the current session
    const accepted = sessionStorage.getItem('dsk_disclaimer_accepted');
    if (!accepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem('dsk_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-lg overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0e0d0b] border border-[#2D2517] shadow-[0_0_80px_rgba(0,0,0,0.9)] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative text-left my-auto"
          >
            {/* Disclaimer Title */}
            <div className="pb-4 border-b border-[#2D2517] flex items-center justify-between">
              <h2 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0] tracking-wide">
                Disclaimer
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11100d] border border-[#D4AF37]/40 text-[10px] font-bold text-[#E6C77B] tracking-wider uppercase">
                <Shield className="w-3 h-3 text-[#D4AF37]" />
                Bar Council Rules
              </span>
            </div>

            {/* Disclaimer Body Content */}
            <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#A39C8E] font-sans leading-relaxed">
              <p className="text-[#E2DDD3]">
                As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form or manner.
              </p>

              <p className="font-semibold text-[#E6C77B] pt-1">
                By accessing this website, you acknowledge and confirm that:
              </p>

              <ul className="space-y-2.5 pl-1">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                  <span>
                    You are seeking information relating to <strong className="text-[#F9F1E0] font-semibold">DSK Law Chambers</strong> voluntarily and of your own accord;
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                  <span>
                    There has been no form of solicitation, advertisement, personal communication, invitation, or inducement by the firm or its members through this website;
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                  <span>
                    The information made available herein is solely for informational purposes and should not be construed as legal advice or opinion;
                  </span>
                </li>

                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-2" />
                  <span>
                    Accessing this website or its contents does not create any advocate-client relationship.
                  </span>
                </li>
              </ul>

              <p className="pt-2 text-[11px] sm:text-xs text-[#8A8375] leading-relaxed border-t border-[#2D2517]">
                DSK Law Chambers shall not be liable for any action taken by any person relying upon the material/information contained on this website. All content and materials on this website are the intellectual property of DSK Law Chambers.
              </p>
            </div>

            {/* Accept Button */}
            <div className="mt-6 pt-2">
              <button
                onClick={handleAccept}
                className="w-full py-3.5 sm:py-4 px-6 rounded-xl bg-[#F9F1E0] hover:bg-white text-[#050505] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(249,241,224,0.15)] hover:shadow-[0_4px_30px_rgba(249,241,224,0.3)] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                I Accept &amp; Enter
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
