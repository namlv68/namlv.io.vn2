import React, { useState } from 'react';
import { Sparkles, User, Phone, Briefcase, Send, CheckCircle2, Gift, Video, ShieldCheck, ArrowRight, MessageSquare, Camera } from 'lucide-react';
import { RegistrationData } from '../types';

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

  return (
    <section id="registration-section" className="my-12 scroll-mt-6">
      {/* Also keep id="pricing-section" anchor to avoid broken jump links from any previous references */}
      <div id="pricing-section" className="-mt-6 pt-6" />

      {/* Section Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 border border-purple-500/35 text-purple-300 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-sm mb-3">
          <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          <span>CHƯƠNG TRÌNH CHIA SẺ MIỄN PHÍ 100%</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
          Đăng Ký Tham Gia Zoom Chia Sẻ AI &amp; Nhận Tài Liệu
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
          Dành riêng cho <strong className="text-yellow-300">người mới bắt đầu</strong>: Học cách tạo video bán hàng triệu view, xây kênh Affiliate rút đơn bằng AI giữ nguyên gương mặt &amp; giọng nói của bạn.
        </p>
      </div>

      {/* Main Registration Card */}
      <div className="bg-gradient-to-b from-[#15102a] via-[#130d28] to-[#0d091e] border-2 border-purple-500/40 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(139,92,246,0.15)] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Benefits & What you get */}
          <div className="lg:col-span-5 space-y-4">
            <div className="border-b border-purple-500/20 pb-4">
              <span className="text-[11px] font-extrabold text-pink-400 uppercase tracking-wider">Quyền Lợi &amp; Quà Tặng Đăng Ký</span>
              <h3 className="text-xl font-bold text-white mt-1">Những gì bạn nhận được miễn phí:</h3>
            </div>

            <div className="space-y-3.5">
              {/* Special Gift: SKILL Tạo Ảnh Theo Khuôn Mặt */}
              <div className="relative bg-gradient-to-br from-[#2a133d] via-[#1f1138] to-[#160d2e] border-2 border-amber-400/70 p-4 rounded-2xl shadow-xl shadow-amber-500/10 overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-pink-500 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                    <Sparkles className="w-3 h-3 text-yellow-200" />
                    QUÀ TẶNG ĐẶC BIỆT
                  </span>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                    HOT NHẤT 2026
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/50 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                    <Camera className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                      Tặng SKILL Tạo Ảnh Theo Khuôn Mặt Của Mình
                    </h4>
                    <p className="text-xs text-amber-100/90 mt-1.5 leading-relaxed font-normal">
                      Quy trình &amp; câu lệnh chuyên sâu giúp bạn tạo ra các bức ảnh AI chuyên nghiệp giữ trọn vẹn <strong className="text-amber-300 font-bold">100% gương mặt thật</strong> của chính bạn để làm video triệu view, xây dựng thương hiệu cá nhân và làm Affiliate mà không cần trực tiếp quay phim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#1a1236]/80 border border-purple-500/30 p-3.5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400 flex items-center justify-center shrink-0">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Kho Tài Liệu AI Bán Hàng 2026</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Tặng trọn bộ Prompt viết kịch bản triệu view, checklist quy trình quay dựng &amp; link các Tool AI tạo video miễn phí.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#1a1236]/80 border border-purple-500/30 p-3.5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Vé Tham Gia Buổi Zoom Trực Tiếp</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Chia sẻ thực chiến từ số 0, cầm tay chỉ việc tạo video AI đầu tiên. Hỏi đáp 1:1 giải quyết mọi khó khăn.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#1a1236]/80 border border-purple-500/30 p-3.5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Tham Gia Nhóm Zalo Hỗ Trợ</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Kết nối cộng đồng cùng làm video, nhận thông báo lịch Zoom và link tải tài liệu trực tiếp.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Registration Form */}
          <div className="lg:col-span-7 bg-[#0e0a22]/90 border border-[#3b2d54] rounded-2xl p-5 sm:p-7 shadow-2xl">
            <div className="mb-5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Thông Tin Người Nhận Vé &amp; Tài Liệu</span>
                <span className="text-[10px] bg-pink-500/20 text-pink-300 border border-pink-500/40 px-2 py-0.5 rounded-full font-bold">
                  Miễn phí
                </span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Điền thông tin chính xác để nhận link phòng Zoom và tài liệu qua Zalo của bạn.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Họ và tên */}
              <div>
                <label className="block text-xs font-bold text-gray-200 mb-1.5">
                  1. Họ và tên của bạn <span className="text-pink-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    placeholder="Ví dụ: Nguyễn Văn Nam"
                    className={`w-full bg-[#15102a] text-white text-sm pl-10 pr-4 py-3 rounded-xl border focus:outline-none transition-all placeholder:text-gray-500 ${
                      errors.fullName
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#3b2d54] focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-rose-400 text-[11px] mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Field 2: Số điện thoại (Zalo) */}
              <div>
                <label className="block text-xs font-bold text-gray-200 mb-1.5">
                  2. Số điện thoại (Có dùng Zalo) <span className="text-pink-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="Ví dụ: 0981028794"
                    maxLength={11}
                    className={`w-full bg-[#15102a] text-white text-sm pl-10 pr-4 py-3 rounded-xl border focus:outline-none transition-all placeholder:text-gray-500 ${
                      errors.phone
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#3b2d54] focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-rose-400 text-[11px] mt-1 font-medium">{errors.phone}</p>
                )}
                <p className="text-[10px] text-gray-400 mt-1">
                  💡 Số điện thoại được dùng để mời bạn vào nhóm Zalo nhận tài liệu &amp; mật khẩu phòng Zoom.
                </p>
              </div>

              {/* Field 3: Ngành nghề kinh doanh */}
              <div>
                <label className="block text-xs font-bold text-gray-200 mb-1.5">
                  3. Ngành nghề kinh doanh / Mặt hàng bạn muốn làm <span className="text-pink-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => {
                      setIndustry(e.target.value);
                      if (errors.industry) setErrors((prev) => ({ ...prev, industry: undefined }));
                    }}
                    placeholder="Ví dụ: Thời trang, Mỹ phẩm, Bất động sản, Gia dụng,..."
                    className={`w-full bg-[#15102a] text-white text-sm pl-10 pr-4 py-3 rounded-xl border focus:outline-none transition-all placeholder:text-gray-500 ${
                      errors.industry
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-[#3b2d54] focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                    }`}
                  />
                </div>
                {errors.industry && (
                  <p className="text-rose-400 text-[11px] mt-1 font-medium">{errors.industry}</p>
                )}

                {/* Popular Suggestion Chips */}
                <div className="mt-2.5">
                  <span className="text-[10px] text-gray-400 block mb-1.5 font-medium">Hoặc bấm chọn nhanh gợi ý:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {POPULAR_FIELDS.map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => selectFieldSuggestion(item)}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          industry === item
                            ? 'bg-purple-600 border-pink-400 text-white font-bold shadow-sm'
                            : 'bg-[#15102a]/80 border-[#3b2d54] text-gray-300 hover:text-white hover:border-purple-400'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Optional Field: Câu hỏi / Khó khăn */}
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">
                  4. Câu hỏi / Khó khăn lớn nhất của bạn khi làm Video AI <span className="text-gray-400 font-normal">(không bắt buộc)</span>
                </label>
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ví dụ: Chưa biết chọn chủ đề gì, chưa biết dùng tool nào để đồng bộ giọng nói..."
                  rows={2}
                  className="w-full bg-[#15102a] text-white text-xs px-3.5 py-2.5 rounded-xl border border-[#3b2d54] focus:border-purple-500 focus:outline-none transition-all placeholder:text-gray-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:from-purple-800 disabled:via-gray-700 disabled:to-indigo-900 disabled:opacity-75 disabled:cursor-not-allowed text-white font-black text-sm sm:text-base rounded-2xl shadow-[0_0_30px_rgba(236,72,153,0.35)] transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2 group mt-2"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang xử lý đăng ký...</span>
                  </span>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-yellow-300 group-hover:translate-x-1 transition-transform" />
                    <span>ĐĂNG KÝ NGAY — MIỄN PHÍ 100%</span>
                    <ArrowRight className="w-4 h-4 text-purple-200" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bảo mật thông tin. Popup mời tham gia nhóm Zalo sẽ hiện ngay sau khi bấm.</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
