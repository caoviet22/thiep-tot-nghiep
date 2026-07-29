// DATA MOCK STATE (Sẵn sàng biến đổi linh hoạt bằng Admin Webhook)
const APP_STATE = {
  salutation: "Anh",
  guestName: "Khách Mời",
  webhookUrl: "https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec", // Nối Google Sheet sau
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
});

// 1. Chọn danh xưng & Nhập tên
function initSalutation() {
  const btns = document.querySelectorAll('.salt-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      APP_STATE.salutation = btn.dataset.salt;
    });
  });

  document.getElementById('btn-continue').addEventListener('click', () => {
    const nameVal = document.getElementById('guest-name-input').value.trim();
    if(nameVal) APP_STATE.guestName = nameVal;

    document.getElementById('disp-salutation').innerText = APP_STATE.salutation;
    document.getElementById('disp-name').innerText = APP_STATE.guestName;
    document.getElementById('personalized-greeting').classList.remove('hidden');

    // Scroll nhẹ xuống
    document.getElementById('personalized-greeting').scrollIntoView({ behavior: 'smooth' });
  });
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

// 3. Đếm ngược thời gian
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

// 4. Phát nhạc nền
function initMusicPlayer() {
  const audio = document.getElementById('bg-music');
  const toggleBtn = document.getElementById('music-toggle');
  let isPlaying = false;

  toggleBtn.addEventListener('click', () => {
    if(isPlaying) {
      audio.pause();
      toggleBtn.style.transform = 'scale(1)';
    } else {
      audio.play();
      toggleBtn.style.transform = 'scale(1.2)';
    }
    isPlaying = !isPlaying;
  });
}

// 5. Gửi Form RSVP & Webhook
function initRSVPForm() {
  const form = document.getElementById('rsvp-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const payload = {
      salutation: APP_STATE.salutation,
      guestName: APP_STATE.guestName,
      status: document.getElementById('rsvp-status').value,
      message: document.getElementById('rsvp-message').value,
      timestamp: new Date().toISOString()
    };

    // Bật trạng thái gửi Webhook
    console.log("Sending Webhook Payload:", payload);

    // Giả lập gửi thành công
    document.getElementById('thanks-name').innerText = `${APP_STATE.salutation} ${APP_STATE.guestName}`;
    form.classList.add('hidden');
    document.getElementById('rsvp-success').classList.remove('hidden');

    // Nối fetch thực tế khi xây Admin Webhook:
    /*
    fetch(APP_STATE.webhookUrl, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    */
  });
}
