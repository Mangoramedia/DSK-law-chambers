import React, { useState, useEffect } from 'react';
import { ArrowUp, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PracticeAreas } from './components/PracticeAreas';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { JurisdictionSpectrum } from './components/JurisdictionSpectrum';
import { EngagementProtocol } from './components/EngagementProtocol';
import { ValuesSection } from './components/ValuesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledPracticeArea, setPrefilledPracticeArea] = useState<string | undefined>(undefined);
  const [prefilledAdvocate, setPrefilledAdvocate] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultation = (practiceArea?: string, advocateName?: string) => {
    setPrefilledPracticeArea(practiceArea);
    setPrefilledAdvocate(advocateName);
    setIsConsultationOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#E2DDD3] font-sans selection:bg-[#D4AF37]/30 selection:text-[#F5D061] relative">
      
      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Sticky Header */}
      <Header
        onOpenConsultation={(area) => handleOpenConsultation(area)}
      />

      {/* Main Page Layout */}
      <main>
        {/* Editorial Hero Section */}
        <HeroSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Practice Areas Grid */}
        <PracticeAreas
          onSelectPracticeArea={(areaTitle) => handleOpenConsultation(areaTitle)}
        />

        {/* Why Clients Choose DSK LAW CHAMBERS Section */}
        <WhyChooseUsSection
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Judicial Practice Spectrum Section */}
        <JurisdictionSpectrum
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Client Engagement Protocol Workflow Section */}
        <EngagementProtocol
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Core Values & Pillars Section */}
        <ValuesSection />

        {/* Direct Contact & Location Section */}
        <ContactSection
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Bar Council Compliant Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-3 rounded-full bg-[#11100d] border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#1a1813] hover:text-[#F5D061] transition-all shadow-lg hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chamber Appointment Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        prefilledPracticeArea={prefilledPracticeArea}
        prefilledAdvocate={prefilledAdvocate}
      />

      {/* Mandatory Bar Council Disclaimer Modal */}
      <DisclaimerModal />

      {/* Floating Interactive WhatsApp Legal Consultation Widget */}
      <WhatsAppWidget phoneNumber="917019302979" />

    </div>
  );
}

