import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PainPoints } from './components/PainPoints';
import { Syllabus } from './components/Syllabus';
import { RegistrationForm } from './components/RegistrationForm';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FloatingCTA } from './components/FloatingCTA';
import { ZaloZoomModal } from './components/ZaloZoomModal';
import { PurchaseNotification } from './components/PurchaseNotification';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Sparkles, Zap } from 'lucide-react';
import { RegistrationData } from './types';

export default function App() {
  const [showZaloModal, setShowZaloModal] = useState(false);
  const [registeredUser, setRegisteredUser] = useState<RegistrationData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('ai_last_registered_user');
      if (stored) {
        setRegisteredUser(JSON.parse(stored));
      }
    } catch {
      // ignore storage error
    }
  }, []);

  // Smoothly scroll to the registration form section
  const scrollToRegistration = () => {
    const el = document.getElementById('registration-section') || document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegistrationSuccess = (data: RegistrationData) => {
    setRegisteredUser(data);
    setShowZaloModal(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0814] text-[#f3f4f6] selection:bg-purple-500 selection:text-white pb-24 md:pb-16">
      {/* Top Countdown / Free Zoom Notification Bar */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-purple-900 text-white text-xs md:text-sm py-2 px-4 text-center font-semibold border-b border-purple-500/30 flex items-center justify-center gap-2">
        <Zap className="w-4 h-4 text-yellow-300 animate-bounce" />
        <span>🎁 Quà tặng: Tặng SKILL tạo ảnh theo khuôn mặt của mình &amp; Vé Zoom chia sẻ AI miễn phí!</span>
        <button
          onClick={scrollToRegistration}
          className="underline font-extrabold text-yellow-300 hover:text-white ml-1 cursor-pointer"
        >
          Đăng Ký Nhận Vé &amp; Quà
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Header Section */}
        <Header onEnrollClick={scrollToRegistration} />

        {/* Section 1: Pain Points & Alert Box */}
        <PainPoints />

        {/* Section 2: Syllabus Table */}
        <Syllabus onEnroll={scrollToRegistration} />

        {/* Section 3: Registration Form (Replaces Package Pricing) */}
        <RegistrationForm onSuccess={handleRegistrationSuccess} />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[#3b2d54] text-center text-xs text-gray-500 space-y-2">
          <div className="flex items-center justify-center gap-2 text-purple-300 font-bold text-sm mb-1">
            <Sparkles className="w-4 h-4 text-pink-400" /> Chia sẻ Tạo Video AI Affiliate Bán Hàng Triệu View
          </div>
          <p>© 2026 AI Affiliate Marketing </p>
          <p className="max-w-md mx-auto text-gray-400 font-medium">
            Hotline / Zalo: <span className="text-pink-400 font-bold">098.102.8794</span>
          </p>
        </footer>
      </div>

      {/* Success Invitation Modal for Zalo Group & Zoom */}
      <ZaloZoomModal
        isOpen={showZaloModal}
        onClose={() => setShowZaloModal(false)}
        userData={registeredUser}
      />

      {/* Sticky Bottom Bar on Mobile/Scroll */}
      <FloatingCTA onEnrollClick={scrollToRegistration} />

      {/* Continuous Live Purchase Notification Popup at Bottom-Left */}
      <PurchaseNotification />

      {/* Floating Action Widgets at Bottom-Right: Contact 0981028794 + Scroll to Top */}
      <FloatingWidgets />
    </div>
  );
}
