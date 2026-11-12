import React from 'react';
import { SectionHeading, Mark } from './SectionHeading';
import { VideoGrid } from './VideoGrid';
import { ViralShowcase } from './ViralShowcase';
import { ShopeeAffiliateResults } from './ShopeeAffiliateResults';

/** Mục 3: bằng chứng thực tế – video, ảnh viral, đơn Shopee */
export const Proof: React.FC = () => (
  <section className="mt-24 md:mt-32">
    <SectionHeading
      step="3"
      eyebrow="Kết quả thực tế"
      title={
        <>
          Video AI đạt <Mark>hàng chục triệu view</Mark> và ra đơn thật
        </>
      }
    />
    <VideoGrid />
    <ViralShowcase />
    <ShopeeAffiliateResults />
  </section>
);
