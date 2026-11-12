import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Video, Gift, Check, Copy, ExternalLink } from 'lucide-react';
import { RegistrationData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  userData: RegistrationData | null;
}

// Link nhóm Zalo chính thức & liên hệ Admin
const ZALO_GROUP_URL = 'https://zalo.me/g/bkpvvufx233ybrqgph3p';
const ADMIN_ZALO_URL = 'https://zalo.me/0981028794';
const ADMIN_PHONE = '0981028794';

export const ZaloZoomModal: React.FC<Props> = ({ isOpen, onClose, userData }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Đóng bằng phím Esc
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl z-10 animate-scale-up text-left max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 sm:px-7 pt-6 pb-4 flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" strokeWidth={3} />
            </div>
            <div>
              <div className="text-xs font-semibold text-emerald-600">Đăng ký thành công</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Mời bạn vào nhóm Zalo</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-2 -m-1 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 sm:px-7 pb-6 overflow-y-auto space-y-5 flex-1 custom-scrollbar">
          <p className="text-sm text-slate-600 leading-relaxed">
            Xin chào <strong className="font-semibold text-slate-900">{userData?.fullName || 'bạn'}</strong>
            {(userData?.industry || userData?.businessField) && (
              <> — ngành <strong className="font-semibold text-slate-900">{userData?.industry || userData?.businessField}</strong></>
            )}
            . Link Zoom và tài liệu sẽ được gửi qua Zalo số{' '}
            <strong className="font-semibold text-violet-700">{userData?.phone || ''}</strong>. Hãy vào nhóm Zalo bên dưới để
            nhận tài liệu AI &amp; lịch phòng Zoom miễn phí.
          </p>

          {/* Nhóm Zalo – hành động chính */}
          <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5 text-center">
            <h4 className="text-base font-semibold text-slate-900">Bấm để vào nhóm Zalo ngay</h4>
            <p className="text-xs text-slate-500 mt-1">Admin đã ghim sẵn tài liệu và lịch Zoom trong nhóm.</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
              <a
                href={ZALO_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Tham gia nhóm Zalo
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
              <button
                onClick={handleCopyLink}
                className="py-3 px-4 bg-white border border-violet-200 hover:border-violet-300 text-violet-700 text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                {copiedLink ? 'Đã sao chép' : 'Copy link nhóm'}
              </button>
            </div>
          </div>

          {/* Bạn sẽ nhận được */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-slate-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                <Gift className="w-4 h-4 text-violet-600" />
                Quà tặng &amp; tài liệu
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed list-disc pl-4 marker:text-violet-300">
                <li><strong className="font-semibold text-slate-800">SKILL tạo ảnh theo khuôn mặt</strong> (giữ 100% gương mặt thật)</li>
                <li>Bộ Prompt viết kịch bản video triệu view các ngành</li>
                <li>Ebook quy trình làm video AI từ con số 0</li>
                <li>Danh sách tool AI giữ giọng &amp; mặt thật miễn phí</li>
              </ul>
            </div>
            <div className="border border-slate-100 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-2">
                <Video className="w-4 h-4 text-violet-600" />
                Buổi Zoom cho người mới
              </div>
              <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed list-disc pl-4 marker:text-violet-300">
                <li>Trực tiếp qua Zoom Meetings</li>
                <li>Cầm tay chỉ việc tạo video AI đầu tiên</li>
                <li>Link &amp; mật khẩu phòng Zoom gửi trong nhóm Zalo</li>
              </ul>
            </div>
          </div>

          {/* Liên hệ Admin */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 pt-1">
            <span className="text-center sm:text-left">
              Chưa vào được nhóm? Zalo Admin:{' '}
              <strong className="font-semibold text-slate-800">{ADMIN_PHONE} (Lê Văn Nam)</strong>
            </span>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1.5 border border-slate-200 hover:border-violet-300 text-slate-600 rounded-lg font-medium flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copiedPhone ? 'Đã chép' : 'Copy SĐT'}
              </button>
              <a
                href={ADMIN_ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-lg font-semibold flex items-center gap-1 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Nhắn Admin
              </a>
            </div>
          </div>
        </div>

        <div className="px-5 sm:px-7 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl font-medium transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
