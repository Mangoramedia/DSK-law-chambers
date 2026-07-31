import React from 'react';
import { VALUES_DATA } from '../data/firmData';
import { ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E6C77B]" />,
  Clock: <Clock className="w-6 h-6 text-[#D4AF37]" />,
  Award: <Award className="w-6 h-6 text-[#E6C77B]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />
};

export const ValuesSection: React.FC = () => {
  return (
    <section id="values" className="py-20 lg:py-28 bg-[#050505] border-b border-[#2D2517] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout with Big Title on Left, List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-bold block mb-2">
              Our Operational Ethos
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F9F1E0] leading-tight">
              Our Core <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#AA7C11] bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#E2DDD3] font-sans mt-4 leading-relaxed max-w-md">
              At DSK Law Chambers, we reject template-based legal advice. We adopt a client-centric view to guide individuals, businesses, developers, and institutions toward the optimal legal outcome.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-5 text-left">
            {VALUES_DATA.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="bg-[#11100d]/90 backdrop-blur-md border border-[#2D2517] hover:border-[#D4AF37]/60 rounded-xl p-6 transition-all duration-300 flex items-start gap-5 group shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.12)] cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-[#070705] border border-[#2D2517] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#D4AF37]/50 group-hover:bg-[#11100d] transition-all duration-300">
                  {ICON_MAP[val.icon]}
                </div>
                <div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#F9F1E0] group-hover:text-[#F5D061] transition-colors mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A39C8E] font-sans leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
