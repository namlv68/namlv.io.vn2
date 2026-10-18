import React from 'react';
import { TESTIMONIALS } from '../data/courseData';
import { Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="my-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full mb-2">
          <Award className="w-3.5 h-3.5" /> Góc Chia Sẻ
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#c084fc]">
          Những người từng tham gia buổi chia sẻ Video AI
        </h2>
        <p className="text-gray-300 text-sm mt-1 max-w-lg mx-auto">
          Cảm nhận thực tế từ cộng đồng sau khi áp dụng quy trình tạo video AI bán hàng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#15102a] border border-[#3b2d54] hover:border-purple-500/50 rounded-2xl p-6 flex flex-col justify-between shadow-xl relative"
          >
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-purple-500/30 mb-2" />

              <p className="text-gray-200 text-sm italic leading-relaxed mb-6">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#3b2d54]">
              <div className="font-bold text-white text-sm">{item.name}</div>
              <div className="text-xs text-purple-300 font-semibold mt-0.5">{item.channel}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
