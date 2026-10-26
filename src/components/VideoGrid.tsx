import React, { useState, useEffect } from 'react';
import { Facebook, RotateCcw } from 'lucide-react';

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
    badge: 'Affilate Đồ Chơi',
    videoUrl: 'https://www.facebook.com/reel/28521001257493050'
  },
  {
    id: '10',
    title: 'Video Dạn Hài Hước Gia Đình',
    badge: 'Affilate Thời Trang',
    videoUrl: 'https://www.facebook.com/reel/2782271052168418'
  },
  {
    id: '11',
    title: 'Video Dạng Chia Sẻ Kiến Thức',
    badge: 'Affilate Đồ Chơi',
    videoUrl: 'https://www.facebook.com/reel/1599864041834425'
  },
  {
    id: '12',
    title: 'Video Dạng Chia Sẻ Kiến Thức',
    badge: 'Affilate Đồ Chơi ',
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
    <div className="my-8 relative">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 bg-[#15102a]/80 p-4 rounded-xl border border-[#3b2d54]">
        <div className="p-2.5 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-xl">
          <Facebook className="w-6 h-6 text-[#1877f2]" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <span>XEM VIDEO DEMO RA ĐƠN TRÊN FACEBOOK</span>
          </h3>
          <p className="text-xs text-gray-400">
            Video chuyển đổi tốt
          </p>
        </div>
      </div>

      {/* 12 Video Grid - Displaying Facebook Iframes directly in 9:16 layout (3 rows x 4 columns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {DEFAULT_VIDEOS.map((video, idx) => {
          const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.videoUrl)}&show_text=0&mute=0`;
          return (
            <div
              key={video.id}
              className="bg-[#100c22] border border-[#3b2d54] hover:border-purple-500/60 rounded-2xl overflow-hidden shadow-xl flex flex-col transition-all duration-300 group"
            >
              {/* Title & Badge Header */}
              <div className="p-3 bg-[#17112e] border-b border-[#2d2244] flex flex-col gap-1">
                <div className="flex items-center justify-between gap-1">
                  {video.badge ? (
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-pink-300 bg-pink-950/60 border border-pink-500/30 px-2 py-0.5 rounded-md shrink-0">
                      {video.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => handleReloadVideo(video.id, e)}
                      title="Xem lại video từ đầu (loại bỏ màn hình xem thêm)"
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-600/60 border border-purple-500/30 px-2 py-0.5 rounded transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-2.5 h-2.5 text-pink-400" />
                      <span>Xem lại</span>
                    </button>
                    <span className="w-5 h-5 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 text-[10px] font-bold flex items-center justify-center">
                      #{idx + 1}
                    </span>
                  </div>
                </div>
                <h4 className="text-xs font-bold text-white truncate" title={video.title}>
                  {video.title}
                </h4>
              </div>

              {/* Facebook iFrame Embed - 9:16 Aspect Ratio - Sandboxed to lock redirects & cropped to hide header */}
              <div className="relative aspect-[9/16] bg-black w-full overflow-hidden group/player">
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
                />

                {/* Quick Replay Button at Top-Right on Hover to bypass Facebook's 'Xem thêm' end-screen */}
                <button
                  type="button"
                  onClick={(e) => handleReloadVideo(video.id, e)}
                  title="Xem lại video từ đầu"
                  className="absolute top-2 right-2 z-10 bg-black/80 hover:bg-purple-700 text-white text-[10px] font-medium px-2 py-1 rounded-lg border border-purple-500/40 backdrop-blur-md opacity-0 group-hover/player:opacity-100 transition-opacity flex items-center gap-1 shadow-lg cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3 text-pink-400" />
                  <span>Xem lại</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
