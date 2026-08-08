// =========================================================================
// DATA & CONFIGURATION — BÁC SĨ CAO VIỆT · Y KHOA 2026
// =========================================================================
const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  personalMessage: "",
  guestPhoto: "",
  // ⚡ URL DEPLOY GOOGLE APPS SCRIPT CỦA CAO VIỆT ⚡
  webhookUrl: "https://script.google.com/macros/s/AKfycbyDvDY6YXZLBdrS0S4KamZu0HafPaA0aIDFwX4ZpEKJhqEsliC9o_yvcSbvjQo3ZYGZ/exec",

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
      title: "Năm 1: Đặt Chân Vào Cổng Trường Y",
      desc: "Bắt đầu làm quen với Giải phẫu học, Sinh hóa và những trang giáo trình dày cộp. Ngọn lửa ước mơ bắt đầu bùng cháy trong chiếc áo Blouse trắng đầu tiên.",
      tags: ["🔬 Sinh hóa", "🦴 Giải phẫu", "🧬 Tế bào học", "📚 Lý thuyết"],
      photos: [
        { url: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80", caption: "Ngày đầu tiên tại trường Y ✨" },
        { url: "https://images.unsplash.com/photo-1606206873764-fd15e242b815?auto=format&fit=crop&w=800&q=80", caption: "Phòng thí nghiệm sinh hóa 🔬" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Những trang sách Y khoa đầu tiên 📖" }
      ]
    },
    "2": {
      title: "Năm 2: Môn Tiền Lâm Sàng",
      desc: "Bắt đầu học Điều dưỡng cơ bản, Dược lý học và cách lắng nghe ống nghe. Những buổi thực tập mannequin thật đáng nhớ!",
      tags: ["💉 Điều dưỡng", "💊 Dược lý", "🫀 Tim mạch học", "🩺 Kỹ năng khám"],
      photos: [
        { url: "https://images.unsplash.com/photo-1579684453377-48ec05c6b30a?auto=format&fit=crop&w=800&q=80", caption: "Thực hành kỹ năng điều dưỡng 💉" },
        { url: "https://images.unsplash.com/photo-1583912267550-d974bd86e787?auto=format&fit=crop&w=800&q=80", caption: "Học dược lý với thầy hướng dẫn 💊" },
        { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80", caption: "Tập nghe tim phổi lần đầu 🫀" }
      ]
    },
    "3": {
      title: "Năm 3: Chặng Đường Đi Bệnh Viện",
      desc: "Những buổi học lâm sàng đầu tiên tại bệnh viện, tập khám bệnh nhân thật. Cảm giác mặc Blouse đến bệnh viện thật thiêng liêng!",
      tags: ["🏥 Lâm sàng", "🩻 X-quang", "🔬 Vi sinh", "👨‍⚕️ Nội tổng quát"],
      photos: [
        { url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80", caption: "Ngày đầu thực tập tại bệnh viện 🏥" },
        { url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80", caption: "Tập đọc phim X-quang 🩻" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Khám bệnh nhân đầu tiên 🩺" }
      ]
    },
    "4": {
      title: "Năm 4: Trực Bệnh Viện Đêm",
      desc: "Đêm trực ròng rã tại khoa Cấp cứu, Ngoại khoa, Nhi khoa. Mỗi ca trực là một bài học cuộc đời không thể quên.",
      tags: ["🚨 Cấp cứu", "🔪 Ngoại khoa", "👶 Nhi khoa", "🌙 Ca trực đêm"],
      photos: [
        { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80", caption: "Ca cấp cứu lúc 3 giờ sáng 🚨" },
        { url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f3?auto=format&fit=crop&w=800&q=80", caption: "Khoa Nhi — những thiên thần nhỏ 👶" },
        { url: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80", caption: "Sau một đêm trực dài 💪" }
      ]
    },
    "5": {
      title: "Năm 5: Thực Tập Chuyên Khoa",
      desc: "Đi qua đủ các chuyên khoa lẻ — Tim mạch, Thần kinh, Sản phụ khoa, Nhãn khoa. Mỗi khoa là một thế giới riêng.",
      tags: ["🫀 Tim mạch", "🧠 Thần kinh", "🤰 Sản phụ khoa", "👁️ Nhãn khoa"],
      photos: [
        { url: "https://images.unsplash.com/photo-1581594693702-f26b390a3692?auto=format&fit=crop&w=800&q=80", caption: "Thực tập tại khoa Tim mạch 🫀" },
        { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80", caption: "Khám Thần kinh học với GS hướng dẫn 🧠" },
        { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80", caption: "Cùng đồng đội năm cuối chuyên khoa 💪" }
      ]
    },
    "6": {
      title: "Năm 6: Thi Tốt Nghiệp Bác Sĩ",
      desc: "Áp lực thi tốt nghiệp lý thuyết và lâm sàng, viết khóa luận tốt nghiệp. Đây là năm khó khăn nhất nhưng cũng đáng nhớ nhất!",
      tags: ["📋 Khóa luận", "🎯 Ôn thi", "🏆 Lâm sàng cuối", "✍️ Luận văn"],
      photos: [
        { url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80", caption: "Những đêm thức ôn thi cuối kỳ 📚" },
        { url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", caption: "Viết khóa luận tốt nghiệp ✍️" },
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Ngày thi vấn đáp lâm sàng cuối cùng 🎯" }
      ]
    },
    "grad": {
      title: "2026: TỐT NGHIỆP BÁC SĨ Y KHOA!",
      desc: "Chính thức khoác lên mình tấm bằng tốt nghiệp Bác Sĩ và lời thề Hippocrates linh thiêng. Hành trình 6 năm đã chạm tới vì sao!",
      tags: ["🎓 Tốt nghiệp", "🩺 Bác sĩ Y Khoa", "✚ Hippocratic Oath", "⭐ Class of 2026"],
      photos: [
        { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", caption: "Lễ nhận bằng Bác Sĩ 2026 🎓" },
        { url: "https://images.unsplash.com/photo-1627556704283-8e7dd77abf48?auto=format&fit=crop&w=800&q=80", caption: "Khoảnh khắc cùng gia đình ❤️" },
        { url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80", caption: "Bác sĩ Cao Việt — Chạm tới vì sao ⭐" }
      ]
    }
  }
};

const carouselState = { current: 0, total: 0 };
const modalCarouselState = { current: 0, total: 0 };

document.addEventListener("DOMContentLoaded", () => {
  initSpaceCanvas();
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
// 1. CANVAS BẦU TRỜI SAO & HẠT KIM CƯƠNG LẤP LÁNH NHẸ NHÀNG (CELESTIAL STARDUST)
// =========================================================================
let stardustParticles = [];

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
  const starCount = Math.min(Math.floor((width * height) / 2200), 380);

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.01 + 0.003,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    });
  }

  let shootingStar = null;
  function resetShootingStar() {
    shootingStar = {
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.4,
      length: Math.random() * 100 + 50,
      speed: Math.random() * 8 + 5,
      angle: Math.PI / 4,
      alpha: 1
    };
  }

  setInterval(() => {
    if (!shootingStar && Math.random() > 0.35) resetShootingStar();
  }, 4000);

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Stars
    for (let s of stars) {
      s.alpha += s.speed;
      if (s.alpha > 1 || s.alpha < 0.12) s.speed = -s.speed;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // Shooting star
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

    // 🌟 CELESTIAL STARDUST PARTICLES (Hiệu ứng tinh vân nhẹ nhàng sang trọng)
    for (let i = stardustParticles.length - 1; i >= 0; i--) {
      let p = stardustParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy -= 0.012; // Nhẹ nhàng bay lên như làn khói ánh kim
      p.alpha -= p.decay;

      if (p.alpha <= 0) {
        stardustParticles.splice(i, 1);
        continue;
      }

      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    requestAnimationFrame(render);
  }
  render();
}

// 🌟 HIỆU ỨNG ÁNH KIM THIÊN HÀ NHẸ NHÀNG (CELESTIAL CELEBRATION SHIMMER)
function triggerGrandFireworks() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  for (let i = 0; i < 70; i++) {
    const colors = ["#d4af37", "#fef08a", "#ffffff", "#f3e5ab", "#cbd5e1"];
    stardustParticles.push({
      x: Math.random() * width,
      y: height * 0.6 + Math.random() * (height * 0.3),
      vx: (Math.random() - 0.5) * 1.8,
      vy: -Math.random() * 2.5 - 1.2,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.008 + 0.005
    });
  }
}

// =========================================================================
// HELPER: Chuyển link Google Drive bất kỳ sang URL ảnh trực tiếp (bypass CORS)
// =========================================================================
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

// =========================================================================
// 2. ĐỌC THÔNG TIN KHÁCH MỜI TỪ GOOGLE SHEET HOẶC URL
// =========================================================================
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

// =========================================================================
// 3. SALUTATION & UNLOCK HÀNH TRÌNH VỚI HIỆU ỨNG LUỚT SIÊU MƯỢT VÀ ĐỀU
// =========================================================================
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
      // Đảm bảo các phần tử xuất hiện mượt mà
      requestAnimationFrame(() => {
        lockedContent.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
      });
    }

    playAudioMusic();

    const navbar = document.getElementById('main-navbar');
    if (navbar) navbar.classList.remove('hidden-nav');

    // Chờ 1 frame render để tính chính xác Y coordinate và cuộn mượt
    requestAnimationFrame(() => {
      setTimeout(() => {
        const target = document.getElementById('chapters') || document.getElementById('personalized-greeting');
        if (target) scrollToElementSlowly(target, 1600);
      }, 150);
    });
  };

  if (continueBtn) continueBtn.addEventListener('click', handleUnlock);
  if (continueDefaultBtn) continueDefaultBtn.addEventListener('click', handleUnlock);
}

// 🌟 HÀM CUỘN TRANG SIÊU MƯỢT VÀ ĐỀU VỚI EASING QUINTIC 60FPS/120FPS
function scrollToElementSlowly(element, duration = 1600) {
  // Tạm tắt scroll-behavior native của CSS để không xung đột với JS animation frame
  const originalScrollBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  // Tính Y chính xác của target
  const navOffset = 70;
  const targetY = Math.max(0, element.getBoundingClientRect().top + window.pageYOffset - navOffset);
  const startY = window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 5) {
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
    return;
  }

  let startTime = null;

  // Quartic Easing function cho cảm giác chuyển động mượt, đằm và đều đặn
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(currentTime) {
    if (startTime === null) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutQuart(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }
  }

  requestAnimationFrame(step);
}

// =========================================================================
// 4. PHOTO CAROUSEL LOGIC
// =========================================================================
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
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 35) { dx < 0 ? onNext() : onPrev(); }
    startX = null;
  }, { passive: true });
}

// =========================================================================
// 5. YEAR STEPPER + CAROUSEL
// =========================================================================
function initYearStepper() {
  const trackEl = document.getElementById('carousel-track');
  const dotsEl = document.getElementById('carousel-dots');
  const captionEl = document.getElementById('carousel-caption');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  loadYearData('1', trackEl, dotsEl, captionEl);

  if (prevBtn) prevBtn.addEventListener('click', () => {
    prevSlide(trackEl, dotsEl, captionEl, APP_STATE.yearsData[currentYear].photos, carouselState);
  });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    nextSlide(trackEl, dotsEl, captionEl, APP_STATE.yearsData[currentYear].photos, carouselState);
  });

  const wrapper = document.querySelector('.photo-carousel-wrapper');
  if (wrapper) {
    initSwipe(wrapper,
      () => nextSlide(trackEl, dotsEl, captionEl, APP_STATE.yearsData[currentYear].photos, carouselState),
      () => prevSlide(trackEl, dotsEl, captionEl, APP_STATE.yearsData[currentYear].photos, carouselState)
    );
  }

  const nodes = document.querySelectorAll('.year-node');
  nodes.forEach(node => {
    node.addEventListener('click', () => {
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      loadYearData(node.dataset.year, trackEl, dotsEl, captionEl);
    });
  });
}

let currentYear = '1';
function loadYearData(yr, trackEl, dotsEl, captionEl) {
  const data = APP_STATE.yearsData[yr];
  if (!data) return;
  currentYear = yr;

  const titleEl = document.getElementById('yd-title');
  const descEl = document.getElementById('yd-desc');
  const tagsEl = document.getElementById('yd-tags');

  if (titleEl) { titleEl.style.opacity = '0'; titleEl.style.transform = 'translateY(6px)'; }
  if (descEl) { descEl.style.opacity = '0'; }

  setTimeout(() => {
    if (titleEl) {
      titleEl.innerText = data.title;
      titleEl.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      titleEl.style.opacity = '1'; titleEl.style.transform = 'translateY(0)';
    }
    if (descEl) {
      descEl.innerText = data.desc;
      descEl.style.transition = 'opacity 0.4s ease';
      descEl.style.opacity = '1';
    }
    if (tagsEl && data.tags) {
      tagsEl.innerHTML = data.tags.map(t => `<span class="med-tag">${t}</span>`).join('');
    }
  }, 160);

  buildCarousel(trackEl, dotsEl, captionEl, data.photos, carouselState);
}

// =========================================================================
// 6. CHAPTER MODAL
// =========================================================================
function initChapterModal() {
  const modal = document.getElementById('chapter-modal');
  const closeBtn = document.getElementById('modal-close');
  const cards = document.querySelectorAll('.click-reveal-card');
  const modalTrack = document.getElementById('modal-carousel-track');
  const modalDots = document.getElementById('modal-dots');
  const modalPrev = document.getElementById('modal-prev');
  const modalNext = document.getElementById('modal-next');

  if (!modal) return;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const chKey = card.dataset.chapter;
      const data = APP_STATE.chaptersData[chKey];
      if (!data) return;

      document.getElementById('modal-badge').innerText = data.badge;
      document.getElementById('modal-title').innerText = data.title;
      document.getElementById('modal-desc').innerText = data.desc;

      buildCarousel(modalTrack, modalDots, null, data.photos, modalCarouselState);

      modal.classList.remove('hidden');
      triggerGrandFireworks();
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

// =========================================================================
// 7. SCROLL OBSERVER
// =========================================================================
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

// =========================================================================
// 8. COUNTDOWN (28/08/2026 11:30 AM)
// =========================================================================
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

// =========================================================================
// 9. MUSIC PLAYER & GLOBAL AUDIO UNLOCK (Castle in the Sky - Gentle Piano)
// =========================================================================
let audioIsPlaying = false;

function playAudioMusic() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  if (!audio) return;

  audio.play().then(() => {
    audioIsPlaying = true;
    if (toggleBtn) {
      toggleBtn.style.transform = 'scale(1.15)';
      toggleBtn.style.boxShadow = '0 0 35px rgba(212, 175, 55, 0.85)';
    }
  }).catch(err => {
    console.log("Trình duyệt tạm giữ phát nhạc tự động, cần bấm nút 🎵 để phát:", err);
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
    document.removeEventListener('click', unlockAudioOnFirstTouch);
    document.removeEventListener('touchstart', unlockAudioOnFirstTouch);
  };

  document.addEventListener('click', unlockAudioOnFirstTouch, { once: true });
  document.addEventListener('touchstart', unlockAudioOnFirstTouch, { once: true });
}

// =========================================================================
// 10. RSVP FORM → GOOGLE APPS SCRIPT
// =========================================================================
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
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

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

// =========================================================================
// 11. FETCH WEB CONFIG TỪ GOOGLE SHEET
// =========================================================================
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
    if (brandEl) brandEl.innerHTML = `${cfg["Tên_Chủ_Nhân"]} · <span id="admin-phone">${cfg["SĐT_Admin"] || ""}</span>`;
  }
}
