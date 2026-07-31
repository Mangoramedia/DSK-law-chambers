import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRACTICE_AREAS } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPracticeArea?: string;
  prefilledAdvocate?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  prefilledPracticeArea,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [practiceArea, setPracticeArea] = useState(prefilledPracticeArea || PRACTICE_AREAS[0].title);
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/90 backdrop-blur-md overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#11100d] border border-[#D4AF37]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(212,175,55,0.15)] my-8 text-left"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#A39C8E] hover:text-[#F9F1E0] p-2 rounded-lg bg-[#070705] hover:bg-[#1a1813] transition-colors border border-[#2D2517]"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-8 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#070705] border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-editorial text-3xl font-bold text-[#F9F1E0]">
                  Chamber Appointment Reserved
                </h3>
                <p className="text-xs text-[#E2DDD3] max-w-sm mx-auto leading-relaxed">
                  Your consultation request for <strong>{preferredDate || 'Next Available Date'}</strong> regarding <strong>{practiceArea}</strong> has been logged. Our office clerk will confirm via phone call to <strong>{phone}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition-transform"
                >
                  Done & Close
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="mb-6 border-b border-[#2D2517] pb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#E6C77B] font-bold">DSK Law Chambers</span>
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl font-bold text-[#F9F1E0]">
                    Schedule Chamber Consultation
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#A39C8E] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adv. / Mr. / Ms. Name"
                        className="w-full bg-[#070705] border border-[#2D2517] rounded-xl px-3.5 py-2.5 text-xs text-[#F9F1E0] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#A39C8E] uppercase tracking-wider mb-1">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 7019302979"
                        className="w-full bg-[#070705] border border-[#2D2517] rounded-xl px-3.5 py-2.5 text-xs text-[#F9F1E0] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Practice Area & Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#A39C8E] uppercase tracking-wider mb-1">
                        Practice Area *
                      </label>
                      <select
                        value={practiceArea}
                        onChange={(e) => setPracticeArea(e.target.value)}
                        className="w-full bg-[#070705] border border-[#2D2517] rounded-xl px-3.5 py-2.5 text-xs text-[#F9F1E0] focus:outline-none focus:border-[#D4AF37]"
                      >
                        {PRACTICE_AREAS.map((pa) => (
                          <option key={pa.id} value={pa.title} className="bg-[#070705] text-[#F9F1E0]">
                            {pa.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#A39C8E] uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-[#070705] border border-[#2D2517] rounded-xl px-3.5 py-2.5 text-xs text-[#F9F1E0] focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                  </div>

                  {/* Brief Case / Property Notes */}
                  <div>
                    <label className="block text-[11px] font-semibold text-[#A39C8E] uppercase tracking-wider mb-1">
                      Brief Case Summary / Property Details
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Mention land location, court suit number, DRT notice, or agreement drafting scope..."
                      className="w-full bg-[#070705] border border-[#2D2517] rounded-xl p-3 text-xs text-[#F9F1E0] placeholder-[#64748b] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  {/* Submit - Single Primary Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#C59B27] hover:brightness-110 text-[#050505] font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02]"
                    >
                      <span>Confirm Consultation Reservation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
