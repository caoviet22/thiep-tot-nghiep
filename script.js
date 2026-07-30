/**
 * GRADUATION INVITATION SYSTEM JS
 * Bác sĩ Cao Việt - Graduation 2026
 */

const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  personalMessage: "",
  guestPhoto: "",
  webhookUrl: "https://script.google.com/macros/s/AKfycbw68P2n9HLXFDchJRNHVP-hiQ8m1KPQxMlCqhjZ74IB_X1Lf5JWTvNx6oo76XS-RZgS/exec",

  chaptersData: {
    "ch1": {
      title: "Chương 1: AWAKEN (Thức Tỉnh)",
      badge: "Chương 1",
      desc: "Khởi đầu hành trình 6 năm với chiếc áo Blouse trắng tinh khôi, ngọn lửa đam mê và giấc mơ trở thành Bác sĩ bắt đầu bùng cháy.",
      photos: [
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Ngày đầu nhận Blouse trắng ✨" },
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Phòng thí nghiệm sinh hóa 🔬" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Cùng các bạn cùng lớp năm 1 🎓" }
      ]
    },
    "ch2": {
      title: "Chương 2: EXPLORE (Khám Phá)",
      badge: "Chương 2",
      desc: "Những đêm trực cấp cứu miệt mài, từng bước làm quen với những ca lâm sàng thực tế và bài học sâu sắc từ các thầy cô.",
      photos: [
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Tập khám lâm sàng đầu tiên 🏥" },
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Đêm trực cấp cứu ⚕️" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Buổi học với thầy hướng dẫn 📖" }
      ]
    },
    "ch3": {
      title: "Chương 3: IGNITE (Bứt Phá)",
      badge: "Chương 3",
      desc: "Vượt qua thử thách, tích lũy kiến thức qua các chuyên khoa, tôi luyện bản lĩnh và y đức của người thầy thuốc.",
      photos: [
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Thực tập ngoại khoa 🔪" },
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Chuyên khoa nội tổng quát 💊" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Đội nhóm bác sĩ trẻ 👨‍⚕️" }
      ]
    },
    "ch4": {
      title: "Chương Cuối: AMONG THE STARS (Vì Sao Rực Rỡ)",
      badge: "Chương Cuối",
      desc: "Chính thức chạm tới cột mốc Tốt Nghiệp Bác Sĩ Y Khoa 2026. Một khởi đầu mới trên hành trình cứu người cao quý!",
      photos: [
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Lễ nhận bằng tốt nghiệp 🎓" },
        { url: "https://images.unsplash.com/photo-1627556704283-8e7dd77abf48?auto=format&fit=crop&w=800&q=80", caption: "Cùng gia đình trong ngày đặc biệt ❤️" },
        { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", caption: "Bác sĩ Cao Việt — Class of 2026 🩺" }
      ]
    }
  },

  yearsData: {
    "1": {
      title: "BEGIN: Đặt Chân Vào Cổng Trường Y",
      desc: "Những bước chân đầu tiên bỡ ngỡ bước vào giảng đường đại học. Bắt đầu làm quen với Giải phẫu học, Sinh hóa và những trang giáo trình dày cộp.",
      tags: ["✨ ĐAM MÊ", "🌟 TƯ DUY", "🚀 BỨT PHÁ", "🔬 Sinh hóa", "🦴 Giải phẫu"],
      photos: [
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Ngày đầu tiên tại trường Y ✨" },
        { url: "https://images.unsplash.com/photo-1606206873764-fd15e242b815?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Thực hành phòng thí nghiệm 🔬" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Những trang sách Y khoa đầu tiên 📖" },
        { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Cùng bạn bè giảng đường 🎓" },
        { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Áo Blouse trắng tinh khôi 🩺" },
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Giờ học Sinh hóa 🧪" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Thư viện đêm muộn 📚" },
        { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Hoạt động ngoại khóa sinh viên 🌟" },
        { url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Nhóm học tập Giải phẫu 🦴" },
        { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 1: Khép lại học kỳ đầu tiên 💫" }
      ]
    },
    "2": {
      title: "Năm 2: Môn Tiền Lâm Sàng",
      desc: "Bắt đầu học Điều dưỡng cơ bản, Dược lý học và cách lắng nghe ống nghe. Những buổi thực tập mannequin thật đáng nhớ!",
      tags: ["💉 Điều dưỡng", "💊 Dược lý", "🫀 Tim mạch học", "🩺 Kỹ năng khám", "📋 Bệnh học"],
      photos: [
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Thực hành điều dưỡng 💉" },
        { url: "https://images.unsplash.com/photo-1583912267550-d974bd86e787?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Học dược lý lâm sàng 💊" },
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Tập nghe tim phổi lần đầu 🫀" },
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Phòng thực hành kỹ năng 🩺" },
        { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Đội nhóm thực tập tiền lâm sàng 🤝" },
        { url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Thảo luận ca bệnh mẫu 📝" },
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Ôn thi kỹ năng lâm sàng 🎯" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Hội thảo y khoa sinh viên 💡" },
        { url: "https://images.unsplash.com/photo-1606206873764-fd15e242b815?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Thực hành vi sinh y học 🔬" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 2: Chuẩn bị bước sang năm 3 🏥" }
      ]
    },
    "3": {
      title: "Năm 3: Chặng Đường Đi Bệnh Viện",
      desc: "Những buổi học lâm sàng đầu tiên tại bệnh viện, tập khám bệnh nhân thật. Cảm giác mặc Blouse bước vào bệnh viện thật thiêng liêng!",
      tags: ["🏥 Lâm sàng", "🩻 X-quang", "🔬 Vi sinh", "👨‍⚕️ Nội tổng quát", "🩺 Khám lâm sàng"],
      photos: [
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Ngày đầu thực tập tại bệnh viện 🏥" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Tập đọc phim X-quang 🩻" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Khám bệnh nhân đầu tiên 🩺" },
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Đi giao đợt lâm sàng 📋" },
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Khoa Nội tổng hợp 💊" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Đi buồng cùng các bác sĩ đàn anh 👨‍⚕️" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Học lý thuyết lâm sàng bệnh viện 📖" },
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Trải nghiệm khoa Cấp cứu 🚨" },
        { url: "https://images.unsplash.com/photo-1583912267550-d974bd86e787?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Nhóm bạn trực đêm bệnh viện 🌙" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 3: Thi kết thúc đợt lâm sàng 🌟" }
      ]
    },
    "4": {
      title: "Năm 4: Trực Bệnh Viện Đêm",
      desc: "Những đêm trực ròng rã tại khoa Cấp cứu, Ngoại khoa, Nhi khoa. Mỗi ca trực là một bài học cuộc đời sâu sắc không thể quên.",
      tags: ["🚨 Cấp cứu", "🔪 Ngoại khoa", "👶 Nhi khoa", "🌙 Ca trực đêm", "💪 Bản lĩnh"],
      photos: [
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Ca cấp cứu lúc 3 giờ sáng 🚨" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Khoa Nhi — những nụ cười trẻ thơ 👶" },
        { url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Phụ mổ khoa Ngoại 🔪" },
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Đêm trực giao thừa bệnh viện 🌙" },
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Trao đổi bệnh án cùng Thầy Cô 🩺" },
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Học chuyên khoa Sản Nhi 🤰" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Đội hình trực đêm kiên cường 💪" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Bình bệnh án giao ban sáng ☀️" },
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Giây phút nghỉ ngơi sau ca trực ☕" },
        { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 4: Vững bước sang năm 5 Y khoa ✨" }
      ]
    },
    "5": {
      title: "Năm 5: Thực Tập Chuyên Khoa sâu",
      desc: "Đi qua đủ các chuyên khoa lẻ — Tim mạch, Thần kinh, Sản phụ khoa, Nhãn khoa. Mỗi khoa là một thế giới y học kỳ diệu.",
      tags: ["🫀 Tim mạch", "🧠 Thần kinh", "🤰 Sản phụ khoa", "👁️ Nhãn khoa", "🏥 Chuyên khoa"],
      photos: [
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Thực tập tại khoa Tim mạch 🫀" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Khám Thần kinh học 🧠" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Cùng đồng đội chuyên khoa sản 🤰" },
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Thực hành soi đáy mắt Nhãn khoa 👁️" },
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Phòng điều trị tích cực ICU 🏥" },
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Đọc điện tâm đồ ECG phức tạp 📈" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Thực tập Răng Hàm Mặt & Tai Mũi Họng 🩺" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Nghiên cứu đề tài khoa học sinh viên 📊" },
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Những chuyến đi thực tế cộng đồng 🚑" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 5: Sẵn sàng cho chặng đích năm 6 🏁" }
      ]
    },
    "6": {
      title: "Năm 6: Thi Tốt Nghiệp & Khóa Luận",
      desc: "Áp lực thi tốt nghiệp lý thuyết và lâm sàng, viết khóa luận tốt nghiệp. Đây là năm nhiều thử thách nhất nhưng cũng vinh quang nhất!",
      tags: ["📋 Khóa luận", "🎯 Ôn thi", "🏆 Lâm sàng cuối", "✍️ Luận văn", "🩺 Bác sĩ tương lai"],
      photos: [
        { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Những đêm thức bảo vệ đề tài 📚" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Hoàn thành khóa luận tốt nghiệp ✍️" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Ngày thi lâm sàng quốc gia 🎯" },
        { url: "https://images.unsplash.com/photo-1627556704283-8e7dd77abf48?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Chụp ảnh kỷ yếu cùng tập thể 🎓" },
        { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Nụ cười nhẹ nhõm sau môn thi cuối 😊" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Tri ân Thầy Cô hướng dẫn ❤️" },
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Cùng nhóm bạn thân 6 năm gắn bó 🤝" },
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Buổi giao ban lâm sàng cuối cùng 🏥" },
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Chuẩn bị trang phục Lễ Tốt Nghiệp 👔" },
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Năm 6: Giờ phút lịch sử đang đến ⏳" }
      ]
    },
    "grad": {
      title: "2026: TỐT NGHIỆP BÁC SĨ Y KHOA!",
      desc: "Chính thức khoác lên mình tấm bằng Bác Sĩ Y Khoa và đọc lời thề Hippocrates linh thiêng. 6 năm rực rỡ đã đơm hoa kết trái!",
      tags: ["🎓 Tốt nghiệp", "🩺 Bác sĩ Y Khoa", "✚ Hippocratic Oath", "⭐ Class of 2026", "💖 Tự hào"],
      photos: [
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Lễ nhận bằng Bác Sĩ 2026 🎓" },
        { url: "https://images.unsplash.com/photo-1627556704283-8e7dd77abf48?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Vui mừng cùng gia đình & người thân ❤️" },
        { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Bác sĩ Cao Việt — Chạm tới vì sao ⭐" },
        { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Tung mũ tốt nghiệp rực rỡ 🎩" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Ôm thắm thiết bạn bè đồng khóa 🤝" },
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Những bó hoa tươi thắm mến tặng 💐" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Đọc lời thề Hippocrates trang trọng ✚" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Chụp hình kỷ niệm tại Nguyễn Văn Đạo 📸" },
        { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Nụ cười mãn nguyện của Bác Sĩ Cao Việt 😊" },
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Kỷ niệm Grad: Mở ra tương lai bác sĩ rực rỡ 🚀" }
      ]
    }
  }
};

const carouselState = { current: 0, total: 0 };
const modalCarouselState = { current: 0, total: 0 };

document.addEventListener("DOMContentLoaded", () => {
  initSpaceCanvas();
  init3DTilt();
  checkUrlPersonalParameters();
  initSalutation();
  initYearStepper();
  initCountdown();
  initMusicPlayer();
  initRSVPForm();
  initChapterModal();
  initScrollObserver();
  fetchWebConfig();
});

// =========================================================================
// 1. CANVAS BẦU TRỜI SAO 3D DEEP & HẠT LẤP LÁNH SANG TRỌNG (3D PARALLAX STARDUST)
// =========================================================================
let stardustParticles = [];
let mouseX = 0, mouseY = 0;
let targetMouseX = 0, targetMouseY = 0;

document.addEventListener('mousemove', (e) => {
  targetMouseX = (e.clientX - window.innerWidth / 2) * 0.04;
  targetMouseY = (e.clientY - window.innerHeight / 2) * 0.04;
});

function initSpaceCanvas() {
  const canvas = document.getElementById('space-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const starColors = ["#ffffff", "#f8fafc", "#e2e8f0", "#d4af37", "#fef08a", "#cbd5e1"];
  const stars = [];
  const starCount = Math.min(Math.floor((width * height) / 1800), 450);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2.5 + 0.2,
      size: Math.random() * 1.8 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.012 + 0.003,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    });
  }

  let shootingStar = null;
  function resetShootingStar() {
    shootingStar = {
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      length: Math.random() * 120 + 60,
      speed: Math.random() * 9 + 6,
      angle: Math.PI / 4,
      alpha: 1
    };
  }

  setInterval(() => {
    if (!shootingStar && Math.random() > 0.3) resetShootingStar();
  }, 3500);

  function render() {
    ctx.clearRect(0, 0, width, height);

    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    for (let s of stars) {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0.1) s.speed = -s.speed;
      
      const renderX = s.x + mouseX * s.z;
      const renderY = s.y + mouseY * s.z;

      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(renderX, renderY, s.size * s.z * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (shootingStar) {
      const grad = ctx.createLinearGradient(
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length,
        shootingStar.x, shootingStar.y
      );
      grad.addColorStop(0, `rgba(255,248,220,0)`);
      grad.addColorStop(1, `rgba(255,248,220,${shootingStar.alpha})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
      );
      ctx.stroke();
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
      shootingStar.alpha -= 0.014;
      if (shootingStar.alpha <= 0) shootingStar = null;
    }

    requestAnimationFrame(render);
  }

  render();
}

function fixDriveImageUrl(url) {
  if (!url || !url.trim()) return url;
  const u = url.trim();
  if (!u.includes('drive.google.com')) return u;

  let fileId = null;
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/d\/([a-zA-Z0-9_-]+)/,
    /open\?id=([a-zA-Z0-9_-]+)/
  ];
  for (const p of patterns) {
    const m = u.match(p);
    if (m) { fileId = m[1]; break; }
  }

  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
  }
  return u;
}

async function checkUrlPersonalParameters() {
  const urlParams = new URLSearchParams(window.location.search);

  const guestId   = urlParams.get('id');
  const saltParam = urlParams.get('salt') || urlParams.get('salutation');
  const nameParam = urlParams.get('name');
  const toParam   = urlParams.get('to');
  const msgParam  = urlParams.get('msg') || urlParams.get('message');
  const imgParam  = urlParams.get('img') || urlParams.get('photo');

  const personalView   = document.getElementById('personalized-view');
  const defaultView    = document.getElementById('default-input-view');
  const salutationElem = document.getElementById('personal-salutation');
  const guestNameElem  = document.getElementById('personal-guest-name');
  const msgElem        = document.getElementById('personal-message-text');
  const photoElem      = document.getElementById('guest-photo-img');

  if (toParam) {
    const parts = toParam.trim().split(" ");
    const knownSalutations = ["Anh", "Chị", "Bạn", "Em", "Bác", "Chú", "Cô", "Thầy"];
    if (parts.length > 1 && knownSalutations.includes(parts[0])) {
      APP_STATE.salutation = parts[0];
      APP_STATE.guestName  = parts.slice(1).join(" ");
    } else {
      APP_STATE.guestName = toParam;
    }
  }
  if (nameParam) APP_STATE.guestName      = nameParam;
  if (saltParam) APP_STATE.salutation     = saltParam;
  if (msgParam)  APP_STATE.personalMessage = msgParam;
  if (imgParam)  APP_STATE.guestPhoto     = fixDriveImageUrl(imgParam);

  if (nameParam || toParam || saltParam || msgParam || imgParam) {
    if (salutationElem) salutationElem.innerText = APP_STATE.salutation;
    if (guestNameElem)  guestNameElem.innerText  = APP_STATE.guestName;
    if (msgParam  && msgElem)   msgElem.innerText   = APP_STATE.personalMessage;
    if (imgParam  && photoElem) photoElem.src        = APP_STATE.guestPhoto;
    if (personalView) personalView.classList.remove('hidden');
    if (defaultView)  defaultView.classList.add('hidden');
  }

  if (guestId && APP_STATE.webhookUrl && !APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) {
    if (personalView) personalView.classList.remove('hidden');
    if (defaultView)  defaultView.classList.add('hidden');

    const cacheKey = `guest_${guestId}`;
    const cached   = sessionStorage.getItem(cacheKey);
    if (cached) {
      try {
        const guest = JSON.parse(cached);
        applyGuestData(guest, salutationElem, guestNameElem, msgElem, photoElem);
        return;
      } catch (_) {}
    }

    try {
      const res = await fetch(`${APP_STATE.webhookUrl}?action=getGuest&id=${encodeURIComponent(guestId)}`);
      if (res.ok) {
        const data = await res.json();
        if (data.status === "success" && data.guest) {
          sessionStorage.setItem(cacheKey, JSON.stringify(data.guest));
          applyGuestData(data.guest, salutationElem, guestNameElem, msgElem, photoElem);
        }
      }
    } catch (err) {
      console.log("⚠️ Không thể đọc Google Sheet:", err);
    }
  }
}

function applyGuestData(guest, salutationElem, guestNameElem, msgElem, photoElem) {
  if (guest.salutation) { APP_STATE.salutation      = guest.salutation; }
  if (guest.guestName)  { APP_STATE.guestName       = guest.guestName; }
  if (guest.message)    { APP_STATE.personalMessage = guest.message; }
  if (guest.photo)      { APP_STATE.guestPhoto      = fixDriveImageUrl(guest.photo); }

  if (salutationElem) salutationElem.innerText = APP_STATE.salutation;
  if (guestNameElem)  guestNameElem.innerText  = APP_STATE.guestName;
  if (guest.message  && msgElem)   msgElem.innerText = guest.message;
  if (guest.photo    && photoElem) photoElem.src     = fixDriveImageUrl(guest.photo);
}

function initSalutation() {
  const btns = document.querySelectorAll('.salt-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP_STATE.salutation = btn.dataset.salt;
    });
  });

  const continueBtn = document.getElementById('btn-continue');
  const continueDefaultBtn = document.getElementById('btn-continue-default');

  const handleUnlock = () => {
    const nameInput = document.getElementById('guest-name-input');
    if (nameInput && nameInput.value.trim()) {
      APP_STATE.guestName = nameInput.value.trim();
    }

    const displaySalt = document.getElementById('personal-salutation')?.innerText || APP_STATE.salutation;
    const displayName = document.getElementById('personal-guest-name')?.innerText || APP_STATE.guestName;

    const dispSaltEl = document.getElementById('disp-salutation');
    const dispNameEl = document.getElementById('disp-name');
    if (dispSaltEl) dispSaltEl.innerText = displaySalt;
    if (dispNameEl) dispNameEl.innerText = displayName;

    APP_STATE.salutation = displaySalt;
    APP_STATE.guestName  = displayName;

    const greetingBox = document.getElementById('personalized-greeting');
    if (greetingBox) greetingBox.classList.remove('hidden');

    triggerGrandFireworks();

    const lockedContent = document.getElementById('locked-content');
    if (lockedContent) {
      lockedContent.classList.remove('hidden');
      lockedContent.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
    }

    playAudioMusic();

    const navbar = document.getElementById('main-navbar');
    if (navbar) navbar.classList.remove('hidden-nav');

    setTimeout(() => {
      const target = document.getElementById('chapters') || document.getElementById('personalized-greeting');
      if (target) scrollToElementSlowly(target, 1800);
    }, 450);
  };

  if (continueBtn) continueBtn.addEventListener('click', handleUnlock);
  if (continueDefaultBtn) continueDefaultBtn.addEventListener('click', handleUnlock);
}

function scrollToElementSlowly(element, duration = 1800) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 75;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function initYearStepper() {
  const nodes = document.querySelectorAll('.year-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const yearKey = node.dataset.year;
      updateYearContent(yearKey);
    });
  });
  updateYearContent("1");
}

function updateYearContent(yearKey) {
  const data = APP_STATE.yearsData[yearKey];
  if (!data) return;

  const titleEl = document.getElementById('yd-title');
  const descEl  = document.getElementById('yd-desc');
  const tagsEl  = document.getElementById('yd-tags');

  if (titleEl) titleEl.innerText = data.title;
  if (descEl)  descEl.innerText  = data.desc;

  if (tagsEl) {
    tagsEl.innerHTML = data.tags.map(t => `<span class="med-tag">${t}</span>`).join('');
  }

  const trackEl   = document.getElementById('carousel-track');
  const dotsEl    = document.getElementById('carousel-dots');
  const captionEl = document.getElementById('carousel-caption');
  const prevBtn   = document.getElementById('carousel-prev');
  const nextBtn   = document.getElementById('carousel-next');

  if (trackEl) {
    buildCarousel(trackEl, dotsEl, captionEl, data.photos, carouselState);

    const newPrevBtn = prevBtn.cloneNode(true);
    const newNextBtn = nextBtn.cloneNode(true);
    prevBtn.parentNode.replaceChild(newPrevBtn, prevBtn);
    nextBtn.parentNode.replaceChild(newNextBtn, nextBtn);

    newPrevBtn.addEventListener('click', () => prevSlide(trackEl, dotsEl, captionEl, data.photos, carouselState));
    newNextBtn.addEventListener('click', () => nextSlide(trackEl, dotsEl, captionEl, data.photos, carouselState));

    initSwipe(trackEl.parentNode,
      () => nextSlide(trackEl, dotsEl, captionEl, data.photos, carouselState),
      () => prevSlide(trackEl, dotsEl, captionEl, data.photos, carouselState)
    );
  }
}

function buildCarousel(trackEl, dotsEl, captionEl, photos, stateObj) {
  trackEl.innerHTML = '';
  if (dotsEl) dotsEl.innerHTML = '';
  stateObj.current = 0;
  stateObj.total = photos.length;

  photos.forEach((photo, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.caption || '';
    slide.appendChild(img);
    trackEl.appendChild(slide);

    if (dotsEl) {
      const dot = document.createElement('span');
      dot.className = 'carousel-dot' + (idx === 0 ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(trackEl, dotsEl, captionEl, photos, stateObj, idx));
      dotsEl.appendChild(dot);
    }
  });

  if (captionEl && photos[0]) captionEl.textContent = photos[0].caption || '';
  updateCarouselTransform(trackEl, stateObj);
}

function updateCarouselTransform(trackEl, stateObj) {
  trackEl.style.transform = `translateX(-${stateObj.current * 100}%)`;
}

function goToSlide(trackEl, dotsEl, captionEl, photos, stateObj, idx) {
  stateObj.current = idx;
  updateCarouselTransform(trackEl, stateObj);
  if (dotsEl) {
    dotsEl.querySelectorAll('.carousel-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }
  if (captionEl && photos[idx]) captionEl.textContent = photos[idx].caption || '';
}

function nextSlide(trackEl, dotsEl, captionEl, photos, stateObj) {
  const next = (stateObj.current + 1) % stateObj.total;
  goToSlide(trackEl, dotsEl, captionEl, photos, stateObj, next);
}
function prevSlide(trackEl, dotsEl, captionEl, photos, stateObj) {
  const prev = (stateObj.current - 1 + stateObj.total) % stateObj.total;
  goToSlide(trackEl, dotsEl, captionEl, photos, stateObj, prev);
}

function initSwipe(wrapper, onNext, onPrev) {
  let startX = null;
  wrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener('touchend', e => {
    if (startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) onNext(); else onPrev();
    }
    startX = null;
  }, { passive: true });
}

function initChapterModal() {
  const modal = document.getElementById('chapter-modal');
  const closeBtn = document.getElementById('modal-close');
  const modalTrack = document.getElementById('modal-carousel-track');
  const modalDots = document.getElementById('modal-dots');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');

  document.querySelectorAll('.click-reveal-card').forEach(card => {
    card.addEventListener('click', () => {
      const chKey = card.dataset.chapter;
      const data = APP_STATE.chaptersData[chKey];
      if (!data || !modal) return;

      document.getElementById('modal-badge').innerText = data.badge;
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-desc').innerText  = data.desc;

      buildCarousel(modalTrack, modalDots, null, data.photos, modalCarouselState);
      modal.classList.remove('hidden');
    });
  });

  if (modalPrev) modalPrev.addEventListener('click', () => {
    const yr = Object.keys(APP_STATE.chaptersData).find(k =>
      APP_STATE.chaptersData[k].badge === document.getElementById('modal-badge').innerText
    );
    const photos = yr ? APP_STATE.chaptersData[yr].photos : [];
    prevSlide(modalTrack, modalDots, null, photos, modalCarouselState);
  });
  if (modalNext) modalNext.addEventListener('click', () => {
    const yr = Object.keys(APP_STATE.chaptersData).find(k =>
      APP_STATE.chaptersData[k].badge === document.getElementById('modal-badge').innerText
    );
    const photos = yr ? APP_STATE.chaptersData[yr].photos : [];
    nextSlide(modalTrack, modalDots, null, photos, modalCarouselState);
  });

  if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
}

function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

function initCountdown() {
  const eventDate = new Date("August 28, 2026 11:30:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;
    if (diff > 0) {
      document.getElementById('days').innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      document.getElementById('hours').innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      document.getElementById('minutes').innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      document.getElementById('seconds').innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    }
  }, 1000);
}

let audioIsPlaying = false;

function playAudioMusic() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  if (!audio) return;

  audio.onerror = function() {
    console.log("Audio link error, trying backup stream...");
    audio.src = "https://cdn.pixabay.com/audio/2022/10/14/audio_9939f792e7.mp3";
    audio.play().catch(e => console.log("Backup audio error:", e));
  };

  audio.play().then(() => {
    audioIsPlaying = true;
    if (toggleBtn) {
      toggleBtn.style.transform = 'scale(1.15)';
      toggleBtn.style.boxShadow = '0 0 35px rgba(212, 175, 55, 0.8)';
    }
  }).catch(err => {
    console.log("Trình duyệt chờ người dùng chạm màn hình để phát nhạc:", err);
  });
}

function initMusicPlayer() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  if (!toggleBtn || !audio) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (audioIsPlaying) {
      audio.pause();
      audioIsPlaying = false;
      toggleBtn.style.transform = 'scale(1)';
      toggleBtn.style.boxShadow = '0 0 25px rgba(212, 175, 55, 0.35)';
    } else {
      playAudioMusic();
    }
  });

  const unlockAudioOnFirstTouch = () => {
    if (!audioIsPlaying) {
      playAudioMusic();
    }
  };

  document.addEventListener('click', unlockAudioOnFirstTouch, { once: true });
  document.addEventListener('touchstart', unlockAudioOnFirstTouch, { once: true });
}

function triggerGrandFireworks() {
  if (typeof confetti !== 'function') return;
  const count = 200;
  const defaults = { origin: { y: 0.7 } };

  function fire(particleRatio, opts) {
    confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

  fire(0.25, { spread: 26, startVelocity: 55, colors: ['#d4af37', '#ffffff'] });
  fire(0.2, { spread: 60, colors: ['#4ade80', '#60a5fa'] });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#f43f5e', '#d4af37'] });
  fire(0.1, { spread: 120, startVelocity: 45 });
}

function initRSVPForm() {
  const form = document.getElementById('rsvp-form');
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const payload = {
      salutation: APP_STATE.salutation,
      guestName: APP_STATE.guestName,
      status: document.getElementById('rsvp-status').value,
      message: document.getElementById('rsvp-message').value,
      timestamp: new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })
    };

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Đang gửi lời chúc...`;

    try {
      const response = await fetch(APP_STATE.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      triggerGrandFireworks();
      document.getElementById('thanks-name').innerText = `${APP_STATE.salutation} ${APP_STATE.guestName}`;
      form.classList.add('hidden');
      document.getElementById('rsvp-success').classList.remove('hidden');
    } catch (error) {
      console.error("❌ Lỗi RSVP Webhook:", error);
      alert("Đã xảy ra lỗi kết nối! Vui lòng thử lại sau.");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

async function fetchWebConfig() {
  if (!APP_STATE.webhookUrl || APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) return;

  const configCache = sessionStorage.getItem('web_config');
  if (configCache) {
    try { applyWebConfig(JSON.parse(configCache)); return; } catch (_) {}
  }

  try {
    const res = await fetch(APP_STATE.webhookUrl + "?action=getConfig");
    if (!res.ok) return;
    const data = await res.json();
    if (data.status === "success" && data.config) {
      sessionStorage.setItem('web_config', JSON.stringify(data.config));
      applyWebConfig(data.config);
    }
  } catch (err) {
    console.log("Lưu ý: Không thể tải Cấu Hình Web:", err);
  }
}

function applyWebConfig(cfg) {
  const set = (id, val) => { const el = document.getElementById(id); if (el && val) el.innerText = val; };
  const setSrc = (id, val) => { const el = document.getElementById(id); if (el && val) el.src = fixDriveImageUrl(val); };

  set("admin-phone",     cfg["SĐT_Admin"]);
  set("event-date-time", cfg["Ngày_Giờ"]);
  set("event-location",  cfg["Địa_Điểm"]);

  if (cfg["Ảnh_Bìa"]) {
    setSrc("guest-photo-img", cfg["Ảnh_Bìa"]);
  }
  if (cfg["Lời_Nhắn_Mặc_Định"]) {
    const msgEl = document.getElementById("personal-message-text");
    if (msgEl && msgEl.innerText.includes("Cảm ơn bạn đã luôn")) {
      msgEl.innerText = cfg["Lời_Nhắn_Mặc_Định"];
    }
  }
  if (cfg["Tên_Chủ_Nhân"]) {
    const brandEl = document.querySelector('.nav-brand');
    if (brandEl) brandEl.innerHTML = `${cfg["Tên_Chủ_Nhân"]} - <span id="admin-phone">${cfg["SĐT_Admin"] || ""}</span>`;
  }
}

function init3DTilt() {
  const tiltElements = document.querySelectorAll('.chapter-photo-frame, .invitation-banner-card, .year-detail-box, .welcome-card');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}
