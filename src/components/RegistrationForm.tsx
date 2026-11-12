import React, { useState } from 'react';
import { User, Phone, Briefcase, Gift, Video, ShieldCheck, ArrowRight, MessageSquare, Camera } from 'lucide-react';
import { RegistrationData } from '../types';
import { SectionHeading, Mark } from './SectionHeading';

interface Props {
  onSuccess: (data: RegistrationData) => void;
}

const POPULAR_FIELDS = [
  'Thời trang & Phụ kiện',
  'Mỹ phẩm & Làm đẹp',
  'Đồ gia dụng & Tiện ích',
  'Bất động sản',
  'F&B / Ăn uống',
  'Affiliate / MMO',
  'Mới bắt đầu / Chưa kinh doanh'
];

const GOOGLE_APPS_SCRIPT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxlJP4IMs5njKFVApM3n-0bmNJX4tb0c-9s0QTXh2BPN-99nDDmwPLLNIa4lp72aF2uXA/exec';

export const RegistrationForm: React.FC<Props> = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [question, setQuestion] = useState('');
  
  const [errors, setErrors] = useState<{ fullName?: string; phone?: string; industry?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cleanPhoneNumber = (raw: string) => {
    let p = raw.trim().replace(/[\s.-]/g, '');
    if (p.startsWith('+84')) {
      p = '0' + p.slice(3);
    }
    return p;
  };

  const validate = () => {
    const newErrors: { fullName?: string; phone?: string; industry?: string } = {};

    // 1. fullName: required
    if (!fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên của bạn';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Họ và tên phải có ít nhất 2 ký tự';
    }

    // 2. phone: required & 10 digits in Vietnam
    const cleanPhone = cleanPhoneNumber(phone);
    if (!cleanPhone) {
      newErrors.phone = 'Vui lòng nhập số điện thoại Zalo';
    } else if (!/^0\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Số điện thoại Zalo phải hợp lệ 10 chữ số (Ví dụ: 0981028794)';
    }

    // 3. industry: required (selected or typed)
    if (!industry.trim()) {
      newErrors.industry = 'Vui lòng chọn hoặc nhập ngành nghề kinh doanh';
    }

    // question: optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const cleanPhone = cleanPhoneNumber(phone);
    const payload = {
      fullName: fullName.trim(),
      phone: cleanPhone,
      industry: industry.trim(),
      question: question.trim(),
    };

    const registrationData: RegistrationData = {
      fullName: payload.fullName,
      phone: payload.phone,
      industry: payload.industry,
      question: payload.question,
      businessField: payload.industry,
      note: payload.question,
      registeredAt: new Date().toISOString(),
    };

    // Save to local storage for persistence
    try {
      const stored = localStorage.getItem('ai_course_registrations');
      const list = stored ? JSON.parse(stored) : [];
      list.push(registrationData);
      localStorage.setItem('ai_course_registrations', JSON.stringify(list));
      localStorage.setItem('ai_last_registered_user', JSON.stringify(registrationData));
    } catch {
      // ignore storage errors
    }

    // Send data to Google Apps Script Webhook
    // Header: { "Content-Type": "text/plain;charset=utf-8" } (avoids CORS Preflight OPTIONS check)
    try {
      await fetch(GOOGLE_APPS_SCRIPT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });
    } catch (primaryErr) {
      // If browser CORS triggers on Google Apps Script redirect, fallback to no-cors
      try {
        await fetch(GOOGLE_APPS_SCRIPT_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        });
      } catch (fallbackErr) {
        console.warn('Webhook dispatch status:', fallbackErr || primaryErr);
      }
    } finally {
      // Reset form fields
      setFullName('');
      setPhone('');
      setIndustry('');
      setQuestion('');
      setErrors({});
      setIsSubmitting(false);

      // Trigger success popup
      onSuccess(registrationData);
    }
  };

  const selectFieldSuggestion = (field: string) => {
    setIndustry(field);
    if (errors.industry) {
      setErrors((prev) => ({ ...prev, industry: undefined }));
    }
  };

  const inputCls = (hasError?: string) =>
    `w-full bg-white text-slate-800 text-sm pl-10 pr-4 py-3 rounded-xl border outline-none transition-colors placeholder:text-slate-400 ${
      hasError
        ? 'border-rose-300 focus:border-rose-400 focus:ring-2 focus:ring-rose-100'
        : 'border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100'
    }`;

  const BENEFITS = [
    {
      icon: Gift,
      title: 'Kho tài liệu AI bán hàng 2026',
      desc: 'Trọn bộ Prompt viết kịch bản triệu view, checklist quy trình quay dựng & link các tool AI tạo video miễn phí.'
    },
    {
      icon: Video,
      title: 'Vé tham gia buổi Zoom trực tiếp',
      desc: 'Chia sẻ thực chiến từ số 0, cầm tay chỉ việc tạo video AI đầu tiên. Hỏi đáp 1:1 giải quyết mọi khó khăn.'
    },
    {
      icon: MessageSquare,
      title: 'Tham gia nhóm Zalo hỗ trợ',
      desc: 'Kết nối cộng đồng cùng làm video, nhận thông báo lịch Zoom và link tải tài liệu trực tiếp.'
    }
  ];

  return (
    <section id="registration-section" className="mt-24 md:mt-32 scroll-mt-6">
      {/* Giữ anchor cũ để link cũ không bị hỏng */}
      <div id="pricing-section" />

      <SectionHeading
        step="4"
        eyebrow="Đăng ký · Miễn phí 100%"
        title={
          <>
            Đăng ký <Mark>Zoom chia sẻ AI</Mark> &amp; nhận quà
          </>
        }
        description={
          <>
            Dành cho <strong className="font-semibold text-slate-700">người mới bắt đầu</strong>: tạo video bán hàng triệu
            view, giữ nguyên gương mặt &amp; giọng nói của bạn.
          </>
        }
      />

      <div className="bg-white border border-violet-100 rounded-3xl p-5 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 shadow-[0_1px_2px_rgba(76,29,149,0.04),0_8px_32px_-12px_rgba(76,29,149,0.12)]">
        {/* Cột trái: quyền lợi */}
        <div className="lg:col-span-5">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Bạn nhận được miễn phí</h3>

          {/* Quà nổi bật */}
          <div className="relative bg-violet-600 text-white rounded-2xl p-5 mb-4 overflow-hidden">
            <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider bg-amber-300 text-amber-950 px-2 py-0.5 rounded-full">
              Quà tặng
            </span>
            <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-3">
              <Camera className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-extrabold leading-snug pr-16">SKILL tạo ảnh theo khuôn mặt của bạn</h4>
            <p className="text-sm text-violet-100 mt-1.5 leading-relaxed">
              Tạo ảnh AI chuyên nghiệp giữ <strong className="text-white">100% gương mặt thật</strong> để làm video, xây
              thương hiệu cá nhân và Affiliate mà không cần quay phim.
            </p>
          </div>

          <ul className="space-y-1">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3 p-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 text-violet-600 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột phải: form */}
        <div className="lg:col-span-7 lg:border-l lg:border-violet-50 lg:pl-10">
          <h3 className="text-xl font-bold text-slate-900">Điền thông tin để nhận vé</h3>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Điền chính xác để nhận link phòng Zoom và tài liệu qua Zalo của bạn.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Họ và tên */}
            <div>
              <label htmlFor="reg-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                Họ và tên <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="reg-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  placeholder="Ví dụ: Nguyễn Văn Nam"
                  autoComplete="name"
                  className={inputCls(errors.fullName)}
                />
              </div>
              {errors.fullName && <p className="text-rose-600 text-xs mt-1.5">{errors.fullName}</p>}
            </div>

            {/* Số điện thoại */}
            <div>
              <label htmlFor="reg-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                Số điện thoại (có dùng Zalo) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="reg-phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  placeholder="Ví dụ: 0981028794"
                  maxLength={11}
                  autoComplete="tel"
                  className={inputCls(errors.phone)}
                />
              </div>
              {errors.phone ? (
                <p className="text-rose-600 text-xs mt-1.5">{errors.phone}</p>
              ) : (
                <p className="text-xs text-slate-400 mt-1.5">
                  Dùng để mời bạn vào nhóm Zalo nhận tài liệu &amp; mật khẩu phòng Zoom.
                </p>
              )}
            </div>

            {/* Ngành nghề */}
            <div>
              <label htmlFor="reg-industry" className="block text-sm font-medium text-slate-700 mb-1.5">
                Ngành nghề / mặt hàng bạn muốn làm <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="reg-industry"
                  type="text"
                  value={industry}
                  onChange={(e) => {
                    setIndustry(e.target.value);
                    if (errors.industry) setErrors((prev) => ({ ...prev, industry: undefined }));
                  }}
                  placeholder="Thời trang, mỹ phẩm, gia dụng..."
                  className={inputCls(errors.industry)}
                />
              </div>
              {errors.industry && <p className="text-rose-600 text-xs mt-1.5">{errors.industry}</p>}

              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {POPULAR_FIELDS.map((item) => {
                  const active = industry === item;
                  return (
                    <button
                      type="button"
                      key={item}
                      onClick={() => selectFieldSuggestion(item)}
                      className={`text-xs px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                        active
                          ? 'bg-violet-600 border-violet-600 text-white'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-violet-300 hover:text-violet-700'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Câu hỏi */}
            <div>
              <label htmlFor="reg-question" className="block text-sm font-medium text-slate-700 mb-1.5">
                Câu hỏi / khó khăn lớn nhất khi làm video AI{' '}
                <span className="font-normal text-slate-400">(không bắt buộc)</span>
              </label>
              <textarea
                id="reg-question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ví dụ: Chưa biết chọn chủ đề gì, chưa biết dùng tool nào để đồng bộ giọng nói..."
                rows={3}
                className="w-full bg-white text-slate-800 text-sm px-3.5 py-3 rounded-xl border border-slate-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-colors placeholder:text-slate-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl shadow-lg shadow-violet-600/25 transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Đang xử lý đăng ký...
                </>
              ) : (
                <>
                  Đăng ký ngay — miễn phí
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              Thông tin được bảo mật. Lời mời vào nhóm Zalo hiện ngay sau khi bấm.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
