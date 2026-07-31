import React, { useState } from 'react';
import { MessageSquare, X, Send, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_INFO } from '../data/firmData';

interface WhatsAppWidgetProps {
  phoneNumber?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  phoneNumber = '917019302979',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Property Title Verification');
  const [customMessage, setCustomMessage] = useState(
    'Hello DSK Law Chambers, I would like to schedule a legal consultation regarding property title verification in Bengaluru.'
  );

  const topics = [
    {
      title: 'Property Title Verification',
      text: 'Hello DSK Law Chambers, I require legal due diligence and title verification for a land/property deal.',
    },
    {
      title: 'DRT & Bank Debt Recovery',
      text: 'Hello DSK Law Chambers, I need urgent legal assistance regarding a DRT notice / Securitisation / SARFAESI proceeding.',
    },
    {
      title: 'High Court & Civil Suit',
      text: 'Hello DSK Law Chambers, I want to consult on filing a Writ Petition / Civil Appeal / Injunction in High Court / Civil Court.',
    },
    {
      title: 'RERA & Builder Dispute',
      text: 'Hello DSK Law Chambers, I require legal counsel regarding a RERA project non-delivery / builder agreement issue.',
    },
    {
      title: 'General Legal Consultation',
      text: 'Hello DSK Law Chambers, I would like to book an initial legal consultation to discuss my case.',
    },
  ];

  const handleSelectTopic = (topic: { title: string; text: string }) => {
    setSelectedTopic(topic.title);
    setCustomMessage(topic.text);
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(customMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating WhatsApp Trigger Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-3 bg-gradient-to-r from-[#128C7E] to-[#25D366] text-white px-4 py-3 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] border border-[#25D366]/40 group"
          aria-label="Connect on WhatsApp"
        >
          {/* Animated pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

          {/* WhatsApp Icon */}
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5 fill-current text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.763.459 3.483 1.332 5.003L2 22l5.127-1.332c1.463.799 3.11 1.22 4.881 1.22h.004c5.503 0 9.986-4.478 9.986-9.985 0-2.667-1.039-5.176-2.924-7.062C17.189 3.04 14.68 2 12.012 2zm0 18.24h-.003c-1.5 0-2.97-.403-4.252-1.163l-.305-.182-3.045.795.811-2.964-.2-.317a8.212 8.212 0 01-1.258-4.43c.001-4.542 3.696-8.236 8.243-8.236 2.2 0 4.269.858 5.825 2.415a8.196 8.196 0 012.414 5.827c-.001 4.543-3.696 8.238-8.23 8.238zm4.516-6.17c-.247-.125-1.464-.722-1.692-.805-.228-.083-.393-.125-.559.124-.166.248-.642.805-.787.97-.145.166-.29.186-.537.063-.247-.124-1.045-.385-1.99-1.228-.737-.658-1.235-1.47-1.38-1.718-.145-.248-.015-.382.108-.505.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.311-.02-.435-.063-.124-.559-1.348-.766-1.848-.202-.487-.407-.421-.559-.428l-.477-.009c-.166 0-.435.063-.663.311-.228.248-.871.851-.871 2.074 0 1.224.891 2.408 1.015 2.573.125.166 1.754 2.678 4.249 3.754.593.256 1.056.409 1.417.524.596.19 1.138.163 1.567.099.479-.071 1.464-.598 1.671-1.177.207-.58.207-1.076.145-1.177-.062-.102-.227-.165-.474-.29z" />
            </svg>
          </div>

          <div className="text-left font-sans pr-1">
            <span className="block text-[10px] uppercase font-bold text-[#E2DDD3]/90 tracking-wider leading-tight">
              Instant Legal Chat
            </span>
            <span className="block text-xs font-bold text-white tracking-wide">
              WhatsApp Consultation
            </span>
          </div>
        </motion.button>
      </div>

      {/* WhatsApp Interactive Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-start p-4 sm:p-6 bg-[#050505]/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#11100d] border border-[#25D366]/40 rounded-2xl max-w-md w-full shadow-[0_0_50px_rgba(37,211,102,0.2)] overflow-hidden text-left"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-11 h-11 rounded-full bg-[#050505] border border-white/30 flex items-center justify-center text-[#D4AF37]">
                      <Scale className="w-6 h-6 text-[#F5D061]" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] rounded-full border-2 border-[#075E54]" />
                  </div>

                  <div>
                    <h4 className="font-serif-editorial text-lg font-bold leading-tight">
                      DSK Law Chambers
                    </h4>
                    <span className="text-[11px] text-emerald-100 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Direct WhatsApp Line: +91 7019302979</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                
                {/* Intro status bubble */}
                <div className="bg-[#181510] border border-[#2D2517] p-3 rounded-xl text-xs text-[#E2DDD3] space-y-1">
                  <div className="flex items-center justify-between text-[10px] text-[#D4AF37] font-bold">
                    <span>CHAMBER LEGAL CLERK</span>
                    <span>ONLINE</span>
                  </div>
                  <p>
                    Welcome to DSK Law Chambers. Select your matter of interest below or type your custom message to start a direct consultation on WhatsApp.
                  </p>
                </div>

                {/* Topic selection chips */}
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#A39C8E] tracking-wider mb-2">
                    Select Matter Topic:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {topics.map((t) => (
                      <button
                        key={t.title}
                        onClick={() => handleSelectTopic(t)}
                        className={`text-[11px] px-2.5 py-1.5 rounded-lg border transition-all text-left ${
                          selectedTopic === t.title
                            ? 'bg-[#25D366]/20 border-[#25D366] text-white font-semibold'
                            : 'bg-[#070705] border-[#2D2517] text-[#A39C8E] hover:text-[#E2DDD3]'
                        }`}
                      >
                        {t.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Message Area */}
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#A39C8E] tracking-wider mb-1">
                    Your Message Preview:
                  </label>
                  <textarea
                    rows={3}
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    className="w-full bg-[#070705] border border-[#2D2517] focus:border-[#25D366] rounded-xl p-3 text-xs text-[#F9F1E0] focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit / Open WhatsApp */}
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#128C7E] to-[#25D366] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Send className="w-4 h-4" />
                  <span>Start WhatsApp Chat (+91 7019302979)</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-[#A39C8E] pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Confidential Advocate-Client Communication</span>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
