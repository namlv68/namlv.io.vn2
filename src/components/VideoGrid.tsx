import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export interface VideoItem {
  id: string;
  title: string;
  badge?: string;
  videoUrl: string;
}

const DEFAULT_VIDEOS: VideoItem[] = [
  // Hàng 1
  {
    id: '1',
    title: 'Video Affiliate Shopee',
    badge: '12 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/1610633120047856'
  },
  {
    id: '2',
    title: 'Video Affiliate Shopee',
    badge: '11 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/2080390022825466'
  },
  {
    id: '3',
    title: 'Video Affiliate Shopee',
    badge: '1.8 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/863649770090680'
  },
  {
    id: '4',
    title: 'Video Affiliate Shopee',
    badge: '1.3 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/997413472798926'
  },
  // Hàng 2
  {
    id: '5',
    title: 'Video Hành Động Ngắn',
    badge: '84 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/1005816538574123'
  },
  {
    id: '6',
    title: 'Hài hước gia đình',
    badge: '',
    videoUrl: 'https://www.facebook.com/reel/2417498395723832'
  },
  {
    id: '7',
    title: 'Xây kênh phong thủy',
    badge: '',
    videoUrl: 'https://www.facebook.com/reel/1643102853916070'
  },
  {
    id: '8',
    title: 'Video Hành Động Ngắn',
    badge: '29 TRIỆU VIEW',
    videoUrl: 'https://www.facebook.com/reel/1386257570071211'
  },
  // Hàng 3
  {
    id: '9',
    title: 'Video Dạng Chia Sẻ Kiến Thức',
    badge: 'Affiliate Đồ Chơi',
    videoUrl: 'https://www.facebook.com/reel/28521001257493050'
  },
  {
    id: '10',
    title: 'Video Dạng Hài Hước Gia Đình',
    badge: 'Affiliate Thời Trang',
    videoUrl: 'https://www.facebook.com/reel/2782271052168418'
  },
  {
    id: '11',
    title: 'Video Dạng Chia Sẻ Kiến Thức',
    badge: 'Affiliate Đồ Chơi',
    videoUrl: 'https://www.facebook.com/reel/1599864041834425'
  },
  {
    id: '12',
    title: 'Video Dạng Chia Sẻ Kiến Thức',
    badge: 'Affiliate Đồ Chơi',
    videoUrl: 'https://www.facebook.com/reel/2472795696551086'
  }
];

export const VideoGrid: React.FC = () => {
  const [reloadKeys, setReloadKeys] = useState<Record<string, number>>({});

  const handleReloadVideo = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setReloadKeys(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.origin === 'string' && event.origin.includes('facebook.com')) {
        try {
          const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
          if (
            data && (
              data.event === 'finishedPlaying' ||
              data.event === 'ended' ||
              data.event === 'finish' ||
              data.status === 'finished' ||
              data.type === 'video_ended'
            )
          ) {
            setReloadKeys(prev => {
              const updated = { ...prev };
              DEFAULT_VIDEOS.forEach(v => {
                updated[v.id] = (updated[v.id] || 0) + 1;
              });
              return updated;
            });
          }
        } catch {
          // ignore parsing error
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="mt-20">
      <SectionHeading
        eyebrow="Video demo trên Facebook"
        title="Những video AI đang ra đơn tốt"
        description="Bấm vào video để xem trực tiếp. Nếu video dừng ở màn hình “Xem thêm”, bấm “Xem lại”."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {DEFAULT_VIDEOS.map((video) => {
          const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.videoUrl)}&show_text=0&mute=0`;
          return (
            <div
              key={video.id}
              className="bg-white border border-violet-100 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="px-3 py-2.5 flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 truncate" title={video.title}>
                    {video.title}
                  </h4>
                  {video.badge && (
                    <span className="text-[11px] font-semibold text-violet-600">{video.badge}</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={(e) => handleReloadVideo(video.id, e)}
                  title="Xem lại video từ đầu"
                  aria-label="Xem lại video từ đầu"
                  className="shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-violet-600 hover:bg-violet-50 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Facebook iFrame 9:16 – cắt phần header của FB */}
              <div className="relative aspect-[9/16] bg-slate-100 w-full overflow-hidden">
                <iframe
                  key={`${video.id}-${reloadKeys[video.id] || 0}`}
                  src={embedUrl}
                  title={video.title}
                  className="absolute w-full border-0"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                    top: '-55px',
                    height: 'calc(100% + 55px)',
                  }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen={true}
                  scrolling="no"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin allow-presentation"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
