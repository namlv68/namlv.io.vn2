import React, { useState } from 'react';
import { ShoppingBag, CheckCircle } from 'lucide-react';

export const ShopeeAffiliateResults: React.FC = () => {
  // Google Drive IDs
  const imageId1 = '187PRVA0nYwj5jeQKpzwqXdv17E9Fogso';
  const imageId2 = '1M5eA0qu7dBBDEm8lBrA6ki83nmtupVJa';

  // Direct image embed links with fallbacks
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  const driveImgSrc1 = `https://lh3.googleusercontent.com/d/${imageId1}`;
  const driveImgSrc2 = `https://lh3.googleusercontent.com/d/${imageId2}`;

  const driveBackupSrc1 = `https://drive.google.com/uc?export=view&id=${imageId1}`;
  const driveBackupSrc2 = `https://drive.google.com/uc?export=view&id=${imageId2}`;

  return (
    <div className="mt-10 pt-8 border-t border-[#3b2d54]/70">
      {/* Header Tag */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500/15 via-pink-500/15 to-purple-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm mb-2">
          <ShoppingBag className="w-3.5 h-3.5 text-orange-400" />
          <span>KẾT QUẢ THỰC CHIẾN TỪ VIDEO AI</span>
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
          Kết Quả Ra Đơn Affiliate Shopee Từ Video AI
        </h3>
        <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
          Minh chứng đơn hàng và hoa hồng thực tế được tạo ra tự động từ các video AI gắn link tiếp thị liên kết Shopee
        </p>
      </div>

      {/* 2 Results Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        
        {/* Result Image 1 */}
        <div className="bg-[#130d2a]/80 border border-[#3b2d54] hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col">
          <div className="p-3 bg-[#1a1435] border-b border-[#2d2244] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Kết Quả Đơn Hàng Shopee #1</span>
            </div>
            <span className="text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded font-semibold">
              Shopee Affiliate
            </span>
          </div>

          <div className="relative min-h-[260px] sm:min-h-[320px] bg-black/40 flex items-center justify-center p-2">
            <img
              src={img1Error ? driveBackupSrc1 : driveImgSrc1}
              alt="Kết quả ra đơn Affiliate Shopee từ Video AI 1"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              onError={() => setImg1Error(true)}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="p-3.5 bg-[#0e0920] border-t border-[#221a38] flex items-center justify-center text-xs text-gray-300">
            <div className="flex items-center gap-1.5 text-green-400 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Đơn hàng về liên tục từ Video AI</span>
            </div>
          </div>
        </div>

        {/* Result Image 2 */}
        <div className="bg-[#130d2a]/80 border border-[#3b2d54] hover:border-orange-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col">
          <div className="p-3 bg-[#1a1435] border-b border-[#2d2244] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-bold text-white">Kết Quả Đơn Hàng Shopee #2</span>
            </div>
            <span className="text-[10px] bg-orange-500/20 text-orange-300 border border-orange-500/30 px-2 py-0.5 rounded font-semibold">
              Shopee Affiliate
            </span>
          </div>

          <div className="relative min-h-[260px] sm:min-h-[320px] bg-black/40 flex items-center justify-center p-2">
            <img
              src={img2Error ? driveBackupSrc2 : driveImgSrc2}
              alt="Kết quả ra đơn Affiliate Shopee từ Video AI 2"
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-md"
              onError={() => setImg2Error(true)}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>

          <div className="p-3.5 bg-[#0e0920] border-t border-[#221a38] flex items-center justify-center text-xs text-gray-300">
            <div className="flex items-center gap-1.5 text-green-400 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Chuyển đổi thực tế từ tiếp thị liên kết</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
