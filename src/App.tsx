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
import { Gift } from 'lucide-react';
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

  // Cuộn mượt tới form đăng ký
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
    <div className="min-h-screen bg-[#faf8ff] text-slate-600 pb-24 md:pb-16">
      {/* Thanh thông báo quà tặng */}
      <div className="bg-violet-50 border-b border-violet-100 text-violet-900 text-xs md:text-sm py-2.5 px-4 text-center flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <Gift className="w-4 h-4 text-violet-500 shrink-0" />
        <span>Tặng SKILL tạo ảnh theo khuôn mặt của bạn &amp; vé Zoom chia sẻ AI miễn phí</span>
        <button
          onClick={scrollToRegistration}
          className="font-semibold text-violet-700 underline underline-offset-4 decoration-violet-300 hover:decoration-violet-600 cursor-pointer"
        >
          Đăng ký nhận
        </button>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header onEnrollClick={scrollToRegistration} />
        <PainPoints />
        <Syllabus onEnroll={scrollToRegistration} />
        <RegistrationForm onSuccess={handleRegistrationSuccess} />
        <Testimonials />
        <FAQ />

        <footer className="mt-20 py-10 border-t border-violet-100 text-center text-sm text-slate-500 space-y-1.5">
          <div className="font-semibold text-slate-800">Chia sẻ Tạo Video AI Affiliate Bán Hàng Triệu View</div>
          <p>© 2026 AI Affiliate Marketing</p>
          <p>
            Hotline / Zalo:{' '}
            <a href="tel:0981028794" className="font-semibold text-violet-700 hover:text-violet-800">
              098.102.8794
            </a>
          </p>
        </footer>
      </main>

      <ZaloZoomModal
        isOpen={showZaloModal}
        onClose={() => setShowZaloModal(false)}
        userData={registeredUser}
      />
      <FloatingCTA onEnrollClick={scrollToRegistration} />
      <PurchaseNotification />
      <FloatingWidgets />
    </div>
  );
}
