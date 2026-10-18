import { PackageOption, ModuleItem, FAQItem, TestimonialItem } from '../types';

export const PACKAGES: PackageOption[] = [
  {
    id: '399',
    title: 'GÓI CƠ BẢN',
    price: '399.000 VNĐ',
    numericPrice: 399000,
    features: [
      'Toàn bộ video lộ trình làm Video AI thực chiến',
      'Tặng SKILL tạo ảnh theo khuôn mặt của mình',
      'Tặng App tạo Prompt video bán hàng triệu view',
      'Cập nhật nội dung chia sẻ mới khi thuật toán thay đổi',
      'Chỉ xem video không có người hỗ trợ'
    ]
  },
  {
    id: '699',
    title: 'GÓI CHUYÊN SÂU',
    price: '699.000 VNĐ',
    numericPrice: 699000,
    featured: true,
    badge: 'Phổ Biến Nhất',
    features: [
      'Bao gồm toàn bộ Gói 399k',
      'Tặng SKILL tạo ảnh theo khuôn mặt của mình',
      'Tham gia Nhóm Zalo hỗ trợ kỹ thuật xây kênh & sửa lỗi Video 24/7',
      'Tặng app tạo kịch bản bán hàng các ngàng nghề',
      'Tặng app tạo AI AFFILATE',
    ]
  },
  {
    id: '1990',
    title: 'GÓI CAO CẤP',
    price: '1.990.000 VNĐ',
    numericPrice: 1990000,
    features: [
      'Bao gồm toàn bộ Gói 699k',
      '1 Giờ Zoom chia sẻ 1-1 định hướng sản phẩm & ngách Affiliate lợi nhuận cao',
      'Audit & chỉnh sửa trực tiếp 5 video đầu tiên trước khi đăng',
    ]
  },
  {
    id: '4990',
    title: 'GÓI VIP',
    price: '5.990.000 VNĐ',
    numericPrice: 5990000,
    features: [
      'Bao gồm toàn bộ Gói Cao Cấp 1990k',
      'Đồng hành chia sẻ 1:1',
      'Gặp trực tiếp để trao đổi, truyền đạt kiến thức'
    ]
  }
];

export const MODULES: ModuleItem[] = [
  {
    id: 1,
    part: 'Bước 1',
    badge: 'NỀN TẢNG',
    topic: 'Tìm hiểu và hiểu nền tảng',
    details: 'Hiểu bản chất thuật toán phân phối nội dung video ngắn và tư duy xây kênh hiệu quả.',
    lessons: [
      'Hiểu rõ thuật toán phân phối của TikTok, Facebook Reels, YouTube Shorts',
      'Tư duy định vị kênh và lựa chọn chủ đề/ngách nội dung phù hợp',
      'Bản chất cách phân phối nội dung và cơ chế đề xuất video',
      'Các chính sách cộng đồng và lỗi cần tránh khi xây kênh'
    ],
    duration: '45 phút',
    highlight: 'Nắm vững luật chơi nền tảng để video đăng lên dễ cắn đề xuất'
  },
  {
    id: 2,
    part: 'Bước 2',
    badge: 'THỰC HÀNH',
    topic: 'Tạo Video AI đầu tiên',
    details: 'Thiết lập công cụ và tự tay làm ra thước phim chuyển động đầu tay bằng AI.',
    lessons: [
      'Làm quen với các công cụ tạo ảnh và video AI phổ biến nhất hiện nay',
      'Thực hành tạo hình ảnh nhân vật, bối cảnh và chuyển động video đầu tiên',
      'Tự tay xuất bản thước phim AI đầu tay chỉ trong vài phút',
      'Cách xử lý các lỗi cơ bản thường gặp cho người mới bắt đầu'
    ],
    duration: '60 phút',
    highlight: 'Chạm tay làm ra sản phẩm video AI đầu tay thành công'
  },
  {
    id: 3,
    part: 'Bước 3',
    badge: 'GIỮ CHÂN',
    topic: 'Hook 3s đầu',
    details: 'Bí quyết giật tít, tạo điểm nhấn thị giác và âm thanh giữ chân người xem 3 giây đầu.',
    lessons: [
      'Tầm quan trọng sống còn của 3 giây đầu tiên trong thuật toán giữ chân',
      'Công thức giật tít Hook thị giác, câu thoại mở đầu và hiệu ứng âm thanh',
      'Các mẫu Hook thu hút triệu view đã được kiểm chứng',
      'Kỹ thuật ngắt nhịp và xử lý tình huống để người xem không lướt qua'
    ],
    duration: '60 phút',
    highlight: 'Giữ chặt người xem không rời mắt trong những giây quyết định'
  },
  {
    id: 4,
    part: 'Bước 4',
    badge: 'PROMPT',
    topic: 'Công thức viết Prompt video',
    details: 'Công thức Prompt chuẩn xác tạo chuyển động camera, hình ảnh và kịch bản video.',
    lessons: [
      'Cấu trúc câu lệnh Prompt chuẩn quốc tế cho công cụ sinh ảnh và video',
      'Công thức Prompt tạo chuyển động camera sống động và chân thực',
      'Kỹ thuật giữ tính nhất quán của nhân vật và bối cảnh qua từng khung hình',
      'Bộ từ khóa độc quyền tối ưu độ nét và cảm xúc trong video'
    ],
    duration: '75 phút',
    highlight: 'Làm chủ Prompt để AI tạo đúng chính xác ý đồ của bạn'
  },
  {
    id: 5,
    part: 'Bước 5',
    badge: 'HOÀN THIỆN',
    topic: 'Sản xuất video hoàn chỉnh theo chủ đề mong muốn',
    details: 'Quy trình từ ý tưởng, kịch bản, âm thanh đến xuất bản video hoàn chỉnh theo chủ đề của bạn.',
    lessons: [
      'Quy trình khép kín: Ý tưởng → Kịch bản phân cảnh → Sinh video AI',
      'Lồng tiếng truyền cảm, chèn nhạc nền và hiệu ứng âm thanh sống động',
      'Cắt ghép, chèn phụ đề tự động bắt mắt trên CapCut',
      'Hoàn thiện và xuất bản video chất lượng cao theo chủ đề mong muốn'
    ],
    duration: '90 phút',
    highlight: 'Tự tay sản xuất video hoàn chỉnh chuyên nghiệp theo mọi chủ đề'
  }
];

export const PAIN_POINTS = [
  {
    icon: 'CameraOff',
    title: 'Ngại xuất hiện & sợ nói trước máy quay',
    description: 'Thiếu tự tin khi lên hình, sợ người quen phán xét, giọng nói chưa hay, quay đi quay lại hàng chục lần vẫn thấy gượng gạo và mệt mỏi.'
  },
  {
    icon: 'DollarSign',
    title: 'Tốn kém chi phí máy móc & trường quay',
    description: 'Nghĩ rằng phải sắm máy ảnh đắt tiền, đèn studio, micro chuyên nghiệp hoặc tốn hàng chục triệu thuê mẫu ảnh/KOL thì video mới hút khách.'
  },
  {
    icon: 'Clock',
    title: 'Tốn cả ngày quay dựng thủ công',
    description: 'Mất hàng giờ setup bối cảnh, quay hỏng liên tục rồi thức trắng đêm cắt ghép từng khung hình. Làm 1 video mất 5-7 tiếng, kiệt sức không duy trì được đều đặn.'
  },
  {
    icon: 'FileText',
    title: 'Bí ý tưởng & kịch bản không giữ chân được 3s đầu',
    description: 'Không biết cách viết Hook mở đầu thu hút, kịch bản lan man làm người xem lướt qua ngay lập tức, đăng lên lẹt đẹt vài chục view rồi nản lòng.'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Tôi không có sản phẩm thật thì có làm Affiliate AI được không?',
    answer: 'Hoàn toàn được! Bạn chỉ cần lấy hình ảnh/video sản phẩm có sẵn trên Shopee, TikTok Shop hoặc Taobao. Buổi chia sẻ sẽ hướng dẫn bạn dùng AI biến thành video của bạn gắn link ăn hoa hồng.'
  },
  {
    question: 'Tôi chưa từng làm video & chưa biết về AI thì có tham gia buổi chia sẻ được không?',
    answer: 'Buổi chia sẻ được thiết kế cầm tay chỉ việc từ con số 0. Hướng dẫn từng cú click chuột trên các công cụ AI phổ biến nhất cực kỳ đơn giản.'
  },
  {
    question: 'Làm video AI có cần máy tính cấu hình khủng không?',
    answer: 'Không cần! Tất cả các công cụ AI đều xử lý trên đám mây (Cloud AI), bạn có thể làm việc dễ dàng trên điện thoại hoặc máy tính văn phòng thông thường.'
  },
  {
    question: 'Làm video AI bán hàng có sợ bị TikTok / Shopee dính gậy không?',
    answer: 'Chia sẻ Prompt & Hậu kỳ CapCut giúp video hạn chế bị thuật toán quét lỗi "AI rác" hay nội dung lặp lại.'
  },
  {
    question: 'Sau khi đăng ký gói Chuyên Sâu, tôi được hỗ trợ như thế nào?',
    answer: 'Bạn sẽ được tham gia Nhóm Zalo riêng tư. Có người hỗ trợ 24/7 từ khâu tư vấn chọn ngách sản phẩm hot, kiểm tra kịch bản đến sửa lỗi video giúp bạn nhanh ra đơn hàng.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Nguyễn Tiến Đạt',
    channel: 'Gia Dụng Thông Minh TĐ',
    views: '',
    avatar: '',
    quote: 'Nhờ buổi chia sẻ Video AI Affiliate, mình không cần nhập hàng hay quay chụp gì cả. Chỉ cần dùng AI tạo video review đồ gia dụng, tháng rồi cắn xu hướng!',
    role: 'Người tham gia chia sẻ'
  },
  {
    name: 'Phạm Anh Dũng',
    channel: 'Thời Trang Trẻ Em',
    views: '',
    avatar: '',
    quote: 'Trước đây mình tốn 10-15 triệu/tháng thuê mẫu chụp đồ. Từ khi áp dụng công nghệ Nhân Vật AI , hình ảnh và video vừa lung linh vừa tiết kiệm 95% chi phí.',
    role: 'Người tham gia chia sẻ'
  },
  {
    name: 'Trần Quốc Bảo',
    channel: 'Review Công Nghệ',
    views: '',
    avatar: '',
    quote: 'Lộ trình làm video AI dạy cực kỳ thực chiến! Nhất là công thức viết Prompt và kỹ thuật Hook 3s đầu. Video nào đăng lên cũng thu hút người xem bấm thẳng vào giỏ hàng.',
    role: 'Người tham gia chia sẻ'
  }
];
