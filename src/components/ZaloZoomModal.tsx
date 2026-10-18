import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, Video, Gift, Check, Copy, ArrowRight, ShieldCheck, Users, ExternalLink, QrCode } from 'lucide-react';
import { RegistrationData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  userData: RegistrationData | null;
}

export const ZaloZoomModal: React.FC<Props> = ({ isOpen, onClose, userData }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen) return null;

  // Official Zalo Group link and Admin contact
  // Zalo Group link: opens directly in Zalo
  const ZALO_GROUP_URL = 'https://zalo.me/g/bkpvvufx233ybrqgph3p';
  const ADMIN_ZALO_URL = 'https://zalo.me/0981028794';
  const ADMIN_PHONE = '0981028794';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(ADMIN_PHONE);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(ZALO_GROUP_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#160f33] via-[#100a26] to-[#0a0718] border-2 border-purple-500/50 rounded-3xl shadow-[0_0_60px_rgba(139,92,246,0.3)] overflow-hidden z-10 my-6 animate-scaleUp text-left max-h-[92vh] flex flex-col">
        
        {/* Top Glow bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shrink-0" />

        {/* Modal Header */}
        <div className="relative p-5 sm:p-6 pb-3 flex items-start justify-between border-b border-[#2e2349] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/30 shrink-0">
              <Sparkles className="w-6 h-6 text-yellow-300 animate-spin-slow" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full mb-1">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>ĐĂNG KÝ THÀNH CÔNG!</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                Mời Bạn Tham Gia Nhóm Zalo
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            title="Đóng popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
          
          {/* Welcome User Banner with Exact Required Success Message */}
          <div className="bg-gradient-to-r from-emerald-950/60 via-purple-900/40 to-indigo-900/40 border-2 border-emerald-500/40 rounded-2xl p-4 text-xs sm:text-sm text-gray-200 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <p className="font-extrabold text-sm sm:text-base text-emerald-300 leading-snug">
                  Đăng ký thành công! Link Zoom và tài liệu sẽ được gửi qua Zalo số <span className="text-yellow-300 font-black underline underline-offset-4 decoration-yellow-400">{userData?.phone || ''}</span> của bạn.
                </p>
                <p className="mt-1.5 text-gray-300 leading-relaxed text-xs sm:text-sm">
                  🎉 Xin chào <strong className="text-white">{userData?.fullName || 'bạn'}</strong> — Ngành: <strong className="text-pink-300">{userData?.industry || userData?.businessField || 'Kinh doanh & Affiliate'}</strong>. Hãy bấm tham gia ngay Nhóm Zalo bên dưới để nhận trọn bộ tài liệu AI &amp; cập nhật lịch phòng Zoom miễn phí:
                </p>
              </div>
            </div>
          </div>

          {/* 2 Key Deliverables in Zalo Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            
            {/* Box 1: Free Documents & Gifts */}
            <div className="bg-[#140e2b] border border-pink-500/30 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-pink-400 font-bold text-xs sm:text-sm">
                <Gift className="w-4 h-4 shrink-0" />
                <span>Bộ Quà Tặng &amp; Tài Liệu AI Miễn Phí</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-1.5 leading-snug">
                <li className="flex items-start gap-1.5 text-amber-300 font-bold bg-amber-500/10 p-1.5 rounded-lg border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Tặng SKILL tạo ảnh theo khuôn mặt của mình (chuẩn nét 100% gương mặt thật)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-pink-400 font-bold">•</span>
                  <span>Trọn bộ Prompt viết kịch bản video triệu view các ngành</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-pink-400 font-bold">•</span>
                  <span>Ebook quy trình làm video AI từ con số 0</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-pink-400 font-bold">•</span>
                  <span>Danh sách Tool AI giữ giọng &amp; mặt thật miễn phí</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Zoom Sharing */}
            <div className="bg-[#140e2b] border border-purple-500/30 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-purple-300 font-bold text-xs sm:text-sm">
                <Video className="w-4 h-4 shrink-0" />
                <span>Buổi Zoom Chia Sẻ AI Cho Người Mới</span>
              </div>
              <ul className="text-xs text-gray-300 space-y-1.5 leading-snug">
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Hình thức: Trực tiếp qua Zoom Meetings</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Cầm tay chỉ việc tạo video AI đầu tiên</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-purple-400 font-bold">•</span>
                  <span>Link &amp; Mật khẩu phòng Zoom gửi trong Nhóm Zalo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* MAIN ACTION: Big Zalo Group Join Button */}
          <div className="bg-[#130d28] border-2 border-blue-500/50 rounded-2xl p-5 text-center space-y-3.5 shadow-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-full">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span>Cộng Đồng Chia Sẻ AI Affiliate 2026</span>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                Bấm nút bên dưới để vào Nhóm Zalo ngay
              </h4>
              <p className="text-xs text-gray-300 mt-0.5">
                Admin đã ghim sẵn tài liệu và thông báo lịch Zoom trong nhóm.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-1">
              <a
                href={ZALO_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 py-3.5 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
              >
                <MessageSquare className="w-5 h-5 text-yellow-300" />
                <span>THAM GIA NHÓM ZALO NGAY</span>
                <ExternalLink className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full sm:w-auto py-3 px-4 bg-[#1e153d] hover:bg-[#281c52] border border-purple-500/40 text-purple-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="Sao chép link nhóm"
              >
                {copiedLink ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedLink ? 'Đã sao chép link' : 'Copy Link Nhóm'}</span>
              </button>
            </div>
          </div>

          {/* Backup Contact / Zalo Admin direct chat */}
          <div className="bg-[#100b22] border border-[#2d2244] rounded-xl p-3.5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="text-center sm:text-left">
              <span className="text-gray-400 block sm:inline">Chưa vào được nhóm hoặc cần hỗ trợ riêng?</span>{' '}
              <span className="text-gray-200">Liên hệ Zalo Admin: </span>
              <strong className="text-pink-400 font-bold">{ADMIN_PHONE} (Lê Văn Nam)</strong>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyPhone}
                className="px-2.5 py-1.5 bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/30 text-purple-300 rounded-lg font-semibold flex items-center gap-1 transition-all cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPhone ? 'Đã chép SĐT' : 'Copy SĐT'}</span>
              </button>

              <a
                href={ADMIN_ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold flex items-center gap-1 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Nhắn Admin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a0718] border-t border-[#2e2349] flex items-center justify-between text-xs text-gray-400 shrink-0">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Thông tin được bảo mật an toàn</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/15 text-gray-300 hover:text-white rounded-xl font-bold transition-all cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
