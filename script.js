// DATA MOCK & CONFIGURATION STATE
const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  // ⚡ DÁtransaction: THAY URL DEPLOY GOOGLE APPS SCRIPT CỦA BẠN VÀO ĐÂY ⚡
  webhookUrl: "https://script.google.com/macros/s/AKfycbw68P2n9HLXFDchJRNHVP-hiQ8m1KPQxMlCqhjZ74IB_X1Lf5JWTvNx6oo76XS-RZgS/exec",
  chaptersData: {
    "ch1": {
      title: "Chương 1: AWAKEN (Thức Tỉnh)",
      badge: "Chương 1",
      desc: "Khởi đầu hành trình 6 năm với chiếc áo Blouse trắng tinh khôi, ngọn lửa đam mê và giấc mơ trở thành Bác sĩ bắt đầu bùng cháy.",
      img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
    },
    "ch2": {
      title: "Chương 2: EXPLORE (Khám Phá)",
      badge: "Chương 2",
      desc: "Những đêm trực cấp cứu miệt mài, từng bước làm quen với những ca lâm sàng thực tế và bài học sâu sắc từ các thầy cô.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
    },
    "ch3": {
      title: "Chương 3: IGNITE (Bứt Phá)",
      badge: "Chương 3",
      desc: "Vượt qua thử thách, tích lũy kiến thức qua các chuyên khoa, tôi luyện bản lĩnh và y đức của người thầy thuốc.",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    "ch4": {
      title: "Chương Cuối: AMONG THE STARS (Vì Sao Rực Rỡ)",
      badge: "Chương Cuối",
      desc: "Chính thức chạm tới cột mốc Tốt Nghiệp Bác Sĩ / Y Khoa 2026. Một khởi đầu mới trên hành trình cứu người cao quý!",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
    }
  },
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
  initSpaceCanvas();
  initSalutation();
  initYearStepper();
  initCountdown();
  initMusicPlayer();
  initRSVPForm();
  initChapterModal();
  initScrollObserver();
  fetchWebConfig();
});

// ==============================================================================
// 1. CANVAS BẦU TRỜI SAO, SAO BĂNG & HẠT LẤP LÁNH CHUỘT (DYNAMIC SPARKLE CANVAS)
// ==============================================================================
let fireworkParticles = [];

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

  // Khởi tạo các vì sao tĩnh & nhấp nháy
  const stars = [];
  const starCount = Math.floor((width * height) / 3000);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      gold: Math.random() > 0.75
    });
  }

  // Khởi tạo sao băng (shooting star)
  let shootingStar = null;
  function resetShootingStar() {
    shootingStar = {
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 10 + 6,
      angle: Math.PI / 4,
      alpha: 1
    };
  }

  setInterval(() => {
    if (!shootingStar && Math.random() > 0.4) {
      resetShootingStar();
    }
  }, 4000);

  // Hiệu ứng kim tuyến lấp lánh chạy theo con trỏ chuột
  const mouseParticles = [];
  window.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.5) return;
    mouseParticles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 3 + 1,
      color: `hsl(${Math.random() * 30 + 40}, 100%, 75%)`,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      alpha: 1,
      decay: Math.random() * 0.03 + 0.015
    });
  });

  // Vòng lặp Animation Render
  function render() {
    ctx.clearRect(0, 0, width, height);

    // Vẽ vì sao
    for (let s of stars) {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0.2) s.speed = -s.speed;

      ctx.fillStyle = s.gold ? `rgba(212, 175, 55, ${s.alpha})` : `rgba(255, 255, 255, ${s.alpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Vẽ sao băng
    if (shootingStar) {
      ctx.strokeStyle = `rgba(255, 240, 180, ${shootingStar.alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
      );
      ctx.stroke();

      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
      shootingStar.alpha -= 0.015;

      if (shootingStar.alpha <= 0) shootingStar = null;
    }

    // Vẽ hạt kim tuyến chuột
    for (let i = mouseParticles.length - 1; i >= 0; i--) {
      let p = mouseParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        mouseParticles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // Vẽ hiệu ứng pháo hoa sao nổ khi mở phần
    for (let i = fireworkParticles.length - 1; i >= 0; i--) {
      let fp = fireworkParticles[i];
      fp.x += fp.vx;
      fp.y += fp.vy;
      fp.vy += 0.05; // gravity
      fp.alpha -= fp.decay;

      if (fp.alpha <= 0) {
        fireworkParticles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = fp.color;
      ctx.globalAlpha = fp.alpha;
      ctx.beginPath();
      ctx.arc(fp.x, fp.y, fp.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    requestAnimationFrame(render);
  }

  render();
}

// Bắn hiệu ứng pháo hoa hạt vàng lấp lánh khi mở phần
function triggerSparkleBurst(originX, originY) {
  const x = originX || window.innerWidth / 2;
  const y = originY || window.innerHeight / 3;

  for (let i = 0; i < 70; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 2;
    fireworkParticles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: Math.random() * 3.5 + 1.5,
      color: `hsl(${Math.random() * 45 + 35}, 100%, ${Math.random() * 30 + 60}%)`,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.01
    });
  }
}

// ==============================================================================
// 2. CHỌN DANH XƯNG & MỞ BẤM TỪNG PHẦN HÀNH TRÌNH
// ==============================================================================
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
    continueBtn.addEventListener('click', (e) => {
      const nameVal = document.getElementById('guest-name-input').value.trim();
      if(nameVal) APP_STATE.guestName = nameVal;

      document.getElementById('disp-salutation').innerText = APP_STATE.salutation;
      document.getElementById('disp-name').innerText = APP_STATE.guestName;
      
      const greetingBox = document.getElementById('personalized-greeting');
      greetingBox.classList.remove('hidden');

      // 🎆 Bắn pháo hoa lấp lánh!
      const rect = continueBtn.getBoundingClientRect();
      triggerSparkleBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);

      // 🔓 Mở khóa các phần bên dưới
      const lockedContent = document.getElementById('locked-content');
      if (lockedContent) {
        lockedContent.classList.remove('hidden-content');
        lockedContent.classList.add('unlocked');
      }

      // Cuộn mượt xuống phần Kỷ niệm
      setTimeout(() => {
        document.getElementById('chapters').scrollIntoView({ behavior: 'smooth' });
      }, 300);
    });
  }
}

// ==============================================================================
// 3. CHI TIẾT TỪNG CHƯƠNG (LIGHTBOX MODAL KHI BẤM VÀO TỪNG CHƯƠNG)
// ==============================================================================
function initChapterModal() {
  const modal = document.getElementById('chapter-modal');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.click-reveal-card');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const chKey = card.dataset.chapter;
      const data = APP_STATE.chaptersData[chKey];

      if (data) {
        document.getElementById('modal-badge').innerText = data.badge;
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-desc').innerText = data.desc;
        document.getElementById('modal-img').src = data.img;

        modal.classList.remove('hidden');
        triggerSparkleBurst(window.innerWidth / 2, window.innerHeight / 2);
      }
    });
  });

  closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}

// ==============================================================================
// 4. CHUYỂN ĐỔI MỐC NĂM HỌC (TIMELINE STEPPER)
// ==============================================================================
function initYearStepper() {
  const nodes = document.querySelectorAll('.year-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const yr = node.dataset.year;
      const data = APP_STATE.yearsData[yr];
      if(data) {
        const titleElem = document.getElementById('yd-title');
        const descElem = document.getElementById('yd-desc');
        const imgElem = document.getElementById('yd-img');

        imgElem.style.opacity = '0';
        setTimeout(() => {
          titleElem.innerText = data.title;
          descElem.innerText = data.desc;
          imgElem.src = data.img;
          imgElem.style.opacity = '1';
        }, 200);
      }
    });
  });
}

// ==============================================================================
// 5. HIỆU ỨNG HIỆN MƯỢT KHI CUỘN (SCROLL REVEAL OBSERVER)
// ==============================================================================
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// ==============================================================================
// 6. ĐẾM NGƯỢC THỜI GIAN
// ==============================================================================
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

// ==============================================================================
// 7. PHÁT NHẠC NỀN FLOATING
// ==============================================================================
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

// ==============================================================================
// 8. KẾT NỐI FORM RSVP VỚI GOOGLE APPS SCRIPT WEBHOOK (POST)
// ==============================================================================
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
      if (!APP_STATE.webhookUrl || APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) {
        console.warn("⚠️ Đang chạy chế độ Demo (chưa dán Webhook URL thật).");
        await new Promise(resolve => setTimeout(resolve, 1000));
      } else {
        const response = await fetch(APP_STATE.webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      }

      // 🎆 Bắn pháo hoa lấp lánh ăn mừng khi gửi lời chúc thành công!
      triggerSparkleBurst(window.innerWidth / 2, window.innerHeight / 2);

      // 🔄 Trạng thái 2: Hiển thị màn hình Cảm ơn
      document.getElementById('thanks-name').innerText = `${APP_STATE.salutation} ${APP_STATE.guestName}`;
      form.classList.add('hidden');
      document.getElementById('rsvp-success').classList.remove('hidden');

    } catch (error) {
      console.error("❌ Lỗi khi gửi RSVP Webhook:", error);
      alert("Đã xảy ra lỗi kết nối khi gửi lời chúc! Vui lòng thử lại sau ít phút.");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

// ==============================================================================
// 9. ĐỌC CẤU HÌNH WEB TỪ GOOGLE SHEET (GET)
// ==============================================================================
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
