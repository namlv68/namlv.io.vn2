import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

interface ResultImage {
  id: string;
  title: string;
  caption: string;
}

const RESULTS: ResultImage[] = [
  {
    id: '187PRVA0nYwj5jeQKpzwqXdv17E9Fogso',
    title: 'Kết quả đơn hàng Shopee #1',
    caption: 'Đơn hàng về liên tục từ video AI'
  },
  {
    id: '1M5eA0qu7dBBDEm8lBrA6ki83nmtupVJa',
    title: 'Kết quả đơn hàng Shopee #2',
    caption: 'Chuyển đổi thực tế từ tiếp thị liên kết'
  }
];

export const ShopeeAffiliateResults: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  return (
    <section className="mt-14">
      <SectionHeading
        as="h3"
        title="Ra đơn Affiliate Shopee từ video AI"
        description="Đơn hàng và hoa hồng thực tế từ các video AI gắn link tiếp thị liên kết Shopee."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {RESULTS.map((r) => {
          const src = imgErrors[r.id]
            ? `https://drive.google.com/uc?export=view&id=${r.id}`
            : `https://lh3.googleusercontent.com/d/${r.id}`;
          return (
            <div key={r.id} className="bg-white border border-violet-100 rounded-2xl overflow-hidden flex flex-col">
              <div className="px-4 py-3 flex items-center justify-between border-b border-violet-50">
                <span className="text-sm font-semibold text-slate-800">{r.title}</span>
                <span className="text-[11px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-md">
                  Shopee Affiliate
                </span>
              </div>

              <div className="bg-slate-50 flex items-center justify-center p-3 min-h-[260px]">
                <img
                  src={src}
                  alt={r.title}
                  className="w-full h-auto max-h-[500px] object-contain rounded-lg"
                  onError={() => setImgErrors((prev) => ({ ...prev, [r.id]: true }))}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              <div className="px-4 py-3 flex items-center justify-center gap-1.5 text-xs text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>{r.caption}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
