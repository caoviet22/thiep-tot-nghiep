// =========================================================================
// DATA & CONFIGURATION — BÁC SĨ CAO VIỆT · Y KHOA 2026
// =========================================================================
const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  personalMessage: "",
  guestPhoto: "",
  // ⚡ URL DEPLOY GOOGLE APPS SCRIPT CỦA CAO VIỆT ⚡
  webhookUrl: "https://script.google.com/macros/s/AKfycbzZvio1tnh9Tb1dlBwCb5pZ6Y3MQcFoL6rfxayJVAN1UcPAfjl1In4SC-7hJfabaK5P/exec",

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
// 2. ĐỌC THÔNG TIN KHÁCH MỜI TỪ GOOGLE SHEET HOẶC URL
// =========================================================================
async function checkUrlPersonalParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const guestId = urlParams.get('id') || urlParams.get('to') || urlParams.get('name');
  const saltParam = urlParams.get('salt') || urlParams.get('salutation');
  const msgParam = urlParams.get('msg') || urlParams.get('message');
  const imgParam = urlParams.get('img') || urlParams.get('photo');

  const personalView = document.getElementById('personalized-view');
  const defaultView = document.getElementById('default-input-view');

  if (guestId) {
    APP_STATE.guestName = guestId;
    if (saltParam) APP_STATE.salutation = saltParam;
    if (msgParam) APP_STATE.personalMessage = msgParam;
    if (imgParam) APP_STATE.guestPhoto = imgParam;

    document.getElementById('personal-salutation').innerText = APP_STATE.salutation;
    document.getElementById('personal-guest-name').innerText = APP_STATE.guestName;
    if (msgParam) document.getElementById('personal-message-text').innerText = msgParam;
    if (imgParam) document.getElementById('guest-photo-img').src = imgParam;

    if (personalView) personalView.classList.remove('hidden');
    if (defaultView) defaultView.classList.add('hidden');

    if (APP_STATE.webhookUrl && !APP_STATE.webhookUrl.includes("EXAMPLE_REPLACE")) {
      try {
        const res = await fetch(`${APP_STATE.webhookUrl}?action=getGuest&id=${encodeURIComponent(guestId)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.status === "success" && data.guest) {
            if (data.guest.salutation) document.getElementById('personal-salutation').innerText = data.guest.salutation;
            if (data.guest.guestName) document.getElementById('personal-guest-name').innerText = data.guest.guestName;
            if (data.guest.message) document.getElementById('personal-message-text').innerText = data.guest.message;
            if (data.guest.photo) document.getElementById('guest-photo-img').src = data.guest.photo;
          }
        }
      } catch (err) {
        console.log("Dùng thông tin từ URL.");
      }
    }
  } else {
    if (personalView) personalView.classList.remove('hidden');
    if (defaultView) defaultView.classList.add('hidden');
  }
}

// =========================================================================
// 3. SALUTATION & UNLOCK HÀNH TRÌNH
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

    document.getElementById('disp-salutation').innerText = APP_STATE.salutation;
    document.getElementById('disp-name').innerText = APP_STATE.guestName;

    const greetingBox = document.getElementById('personalized-greeting');
    if (greetingBox) greetingBox.classList.remove('hidden');

    triggerGrandFireworks();

    const lockedContent = document.getElementById('locked-content');
    if (lockedContent) {
      lockedContent.classList.remove('hidden');
      lockedContent.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('is-visible'));
    }

    // 🎵 Phát nhạc khi tương tác người dùng
    playAudioMusic();

    const navbar = document.getElementById('main-navbar');
    if (navbar) navbar.classList.remove('hidden-nav');

    // 📜 Cuộn trang siêu mượt & êm ái (1800ms)
    setTimeout(() => {
      const target = document.getElementById('chapters') || document.getElementById('personalized-greeting');
      if (target) scrollToElementSlowly(target, 1800);
    }, 450);
  };

  if (continueBtn) continueBtn.addEventListener('click', handleUnlock);
  if (continueDefaultBtn) continueDefaultBtn.addEventListener('click', handleUnlock);
}

// Hàm cuộn trang siêu mượt với Cubic-Bezier Easing 60FPS
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
// 9. MUSIC PLAYER & AUDIO FALLBACK
// =========================================================================
function playAudioMusic() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');

  if (audio) {
    audio.play().then(() => {
      if (toggleBtn) toggleBtn.style.transform = 'scale(1.2)';
    }).catch(err => {
      console.log("Audio play attempt:", err);
    });
  }
}

function initMusicPlayer() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  let isPlaying = false;

  if (toggleBtn && audio) {
    toggleBtn.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        toggleBtn.style.transform = 'scale(1)';
      } else {
        audio.play().then(() => {
          toggleBtn.style.transform = 'scale(1.2)';
        }).catch(e => console.log("Audio play error:", e));
      }
      isPlaying = !isPlaying;
    });
  }
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
  try {
    const res = await fetch(APP_STATE.webhookUrl + "?action=getConfig");
    if (!res.ok) return;
    const data = await res.json();
    if (data.status === "success" && data.config) {
      if (data.config["SĐT_Admin"]) {
        const el = document.getElementById("admin-phone");
        if (el) el.innerText = data.config["SĐT_Admin"];
      }
      if (data.config["Ngày_Giờ"]) {
        const el = document.getElementById("event-date-time");
        if (el) el.innerText = data.config["Ngày_Giờ"];
      }
      if (data.config["Địa_Điểm"]) {
        const el = document.getElementById("event-location");
        if (el) el.innerText = data.config["Địa_Điểm"];
      }
    }
  } catch (err) {
    console.log("Lưu ý: Không thể tải Cấu Hình Web:", err);
  }
}
