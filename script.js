// DATA MOCK & CONFIGURATION STATE
const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  // ⚡ https://script.google.com/macros/s/AKfycbw68P2n9HLXFDchJRNHVP-hiQ8m1KPQxMlCqhjZ74IB_X1Lf5JWTvNx6oo76XS-RZgS/exec ⚡
  webhookUrl: "https://script.google.com/macros/s/AKfycbw68P2n9HLXFDchJRNHVP-hiQ8m1KPQxMlCqhjZ74IB_X1Lf5JWTvNx6oo76XS-RZgS/exec",
  yearsData: {
    "1": { title: "Năm 1: Đặt Chân Vào Trường Y", desc: "Làm quen với Giải phẫu, Sinh hóa và giảng đường Y khoa đồ sộ.", img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80" },
    "2": { title: "Năm 2: Môn Tiền Lâm Sàng", desc: "Bắt đầu học Điều dưỡng cơ bản, Dược lý và học cách lắng nghe ống nghe.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" },
    "3": { title: "Năm 3: Chặng Đường Đi Bệnh Viện", desc: "Những buổi học lâm sàng đầu tiên, tập khám bệnh nhân thật.", img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" },
    "4": { title: "Năm 4: Trực Bệnh Viện Đêm", desc: "Đêm trực ròng rã tại khoa Cấp cứu, Ngoại khoa, Nhi khoa.", img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80" },
    "5": { title: "Năm 5: Thực Tập Chuyên Khoa", desc: "Đi qua đủ các chuyên khoa lẻ, chuẩn bị hành trang thực tế.", img: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80" },
    "6": { title: "Năm 6: Thi Tốt Nghiệp Bác Sĩ", desc: "Áp lực thi tốt nghiệp lý thuyết, lâm sàng và viết khóa luận.", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80" },
    "grad": { title: "2026: TỐT NGHIỆP BÁC SĨ / Y KHOA", desc: "Chính thức khoác lên mình tấm bằng tốt nghiệp và lời thề Hippocrates!", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80" }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  initSalutation();
  initYearStepper();
  initCountdown();
  initMusicPlayer();
  initRSVPForm();
  fetchWebConfig();
});

// 1. Chọn danh xưng & Nhập tên khách mời
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
  if (continueBtn) {
    continueBtn.addEventListener('click', () => {
      const nameVal = document.getElementById('guest-name-input').value.trim();
      if(nameVal) APP_STATE.guestName = nameVal;

      document.getElementById('disp-salutation').innerText = APP_STATE.salutation;
      document.getElementById('disp-name').innerText = APP_STATE.guestName;
      document.getElementById('personalized-greeting').classList.remove('hidden');

      // Scroll nhẹ xuống
      document.getElementById('personalized-greeting').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// 2. Chuyển đổi mốc Năm học (Timeline Stepper)
function initYearStepper() {
  const nodes = document.querySelectorAll('.year-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const yr = node.dataset.year;
      const data = APP_STATE.yearsData[yr];
      if(data) {
        document.getElementById('yd-title').innerText = data.title;
        document.getElementById('yd-desc').innerText = data.desc;
        document.getElementById('yd-img').src = data.img;
      }
    });
  });
}

// 3. Đếm ngược thời gian sự kiện
function initCountdown() {
  const eventDate = new Date("July 23, 2026 11:45:00").getTime();
  
  setInterval(() => {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if(diff > 0) {
      document.getElementById('days').innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
      document.getElementById('hours').innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
      document.getElementById('minutes').innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      document.getElementById('seconds').innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    }
  }, 1000);
}

// 4. Trình phát nhạc nền
function initMusicPlayer() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  let isPlaying = false;

  if (toggleBtn && audio) {
    toggleBtn.addEventListener('click', () => {
      if(isPlaying) {
        audio.pause();
        toggleBtn.style.transform = 'scale(1)';
      } else {
        audio.play().catch(e => console.log("Auto-play blocked:", e));
        toggleBtn.style.transform = 'scale(1.2)';
      }
      isPlaying = !isPlaying;
    });
  }
}

// 5. Kết nối Form RSVP với Google Apps Script Webhook (POST)
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

    // 🔄 Trạng thái 1: Bật Loading trên Button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Đang gửi lời chúc...`;

    try {
      // Kịch bản A: Nếu chưa dán URL Apps Script thực tế -> Giả lập phản hồi thành công
      if (!APP_STATE.webhookUrl || APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) {
        console.warn("⚠️ Đang chạy chế độ Demo (chưa dán Webhook URL thật).");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        // Kịch bản B: Gửi dữ liệu thực tế tới Google Apps Script
        // Dùng 'text/plain' để tránh kích hoạt CORS preflight (OPTIONS request) từ trình duyệt
        const response = await fetch(APP_STATE.webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json().catch(() => ({ status: "success" }));
        console.log("✅ Kết quả gửi Webhook:", result);
      }

      // 🔄 Trạng thái 2: Gửi thành công -> Hiển thị màn hình Cảm ơn
      document.getElementById('thanks-name').innerText = `${APP_STATE.salutation} ${APP_STATE.guestName}`;
      form.classList.add('hidden');
      document.getElementById('rsvp-success').classList.remove('hidden');

    } catch (error) {
      console.error("❌ Lỗi khi gửi RSVP Webhook:", error);
      alert("Đã xảy ra lỗi kết nối khi gửi lời chúc! Vui lòng thử lại sau ít phút.");
      
      // Khôi phục trạng thái nút bấm nếu có lỗi
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// 6. Đọc Cấu Hình Web từ Tab 'Cấu Hình Web' trên Google Sheet (GET)
async function fetchWebConfig() {
  if (!APP_STATE.webhookUrl || APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) {
    return;
  }

  try {
    const res = await fetch(APP_STATE.webhookUrl + "?action=getConfig");
    if (!res.ok) return;

    const data = await res.json();
    if (data.status === "success" && data.config) {
      console.log("📋 Đã tải Cấu hình Web từ Sheet:", data.config);
      
      // Tự động cập nhật nếu có các trường tương ứng trong Sheet 'Cấu Hình Web'
      if (data.config["SĐT_Admin"]) {
        const phoneElem = document.getElementById("admin-phone");
        if (phoneElem) phoneElem.innerText = data.config["SĐT_Admin"];
      }
      if (data.config["Ngày_Giờ"]) {
        const timeElem = document.getElementById("event-date-time");
        if (timeElem) timeElem.innerText = data.config["Ngày_Giờ"];
      }
      if (data.config["Địa_Điểm"]) {
        const locElem = document.getElementById("event-location");
        if (locElem) locElem.innerText = data.config["Địa_Điểm"];
      }
    }
  } catch (err) {
    console.log("Lưu ý: Không thể tải trước Cấu Hình Web:", err);
  }
}
