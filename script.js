/* ==========================================================================
   SAMPLE DATA (DỄ DÀNG THAY ĐỔI & CHỈNH SỬA)
   ========================================================================== */

// 1. Dữ liệu các chương hành trình THPT
const journeyChapters = [
  {
    id: "chuong-1",
    badge: "Lớp 10 — 2024",
    title: "Chương I: Gặp Gỡ",
    shortDesc: "Bỡ ngỡ bước vào cổng trường mới, những ánh mắt xa lạ dần trở nên thân quen qua buổi khai giảng rực rỡ nắng hạ.",
    thumb: "https://picsum.photos/id/1025/600/400",
    fullContent: `
      <h3>Rực Rỡ Những Ngày Đầu Tiên</h3>
      <p>Năm Lớp 10 bắt đầu bằng sự ngập ngừng. Chúng ta từ nhiều ngôi trường THCS khác nhau tụ hội về đây under cùng một mái mái trường THPT thân yêu.</p>
      <br/>
      <p><strong>Cột mốc đáng nhớ:</strong></p>
      <ul>
        <li>🎈 Buổi sinh hoạt lớp đầu tiên với màn giới thiệu bản thân ngượng ngùng.</li>
        <li>⚽ Giải bóng đá khối 10 náo nhiệt trên sân trường.</li>
        <li>📸 Tấm ảnh tập thể lớp đầu tiên chụp dưới bóng cây phượng vĩ.</li>
      </ul>
    `
  },
  {
    id: "chuong-2",
    badge: "Lớp 11 — 2025",
    title: "Chương II: Đồng Hành",
    shortDesc: "Khi những áp lực học tập tăng dần cũng là lúc tinh thần đồng đội bùng cháy qua các hội trại và đêm văn nghệ.",
    thumb: "https://picsum.photos/id/1015/600/400",
    fullContent: `
      <h3>Cháy Hết Mình Với Tuổi Trẻ</h3>
      <p>Lớp 11 là khoảng thời gian vui vẻ nhất! Không còn sự bỡ ngỡ của lớp 10, cũng chưa gặp phải sự căng thẳng tột cùng của kỳ thi tốt nghiệp.</p>
      <br/>
      <p><strong>Cột mốc đáng nhớ:</strong></p>
      <ul>
        <li>🏕️ Cắm trại 26/3 overnight với bao nhiêu trò chơi dân gian.</li>
        <li>🎵 Giải Nhất đêm văn nghệ chào mừng Ngày Nhà giáo Việt Nam 20/11.</li>
        <li>☕ Những buổi học nhóm kéo dài tận chiều muộn tại quán café quen thuộc.</li>
      </ul>
    `
  },
  {
    id: "chuong-3",
    badge: "Lớp 12 — 2026",
    title: "Chương III: Rực Rỡ",
    shortDesc: "Những chồng đề thi cao ngút, tiếng ve kêu xao xuyến và hành trình chuẩn bị chạm tay vào giấc mơ đại học.",
    thumb: "https://picsum.photos/id/1050/600/400",
    fullContent: `
      <h3>Chặng Đích Rực Rỡ Bụi Phấn</h3>
      <p>Năm học cuối cùng trôi qua nhanh như một chớp mắt. Những tờ lịch đếm ngược kỳ thi được dán trên góc bảng đen mỗi ngày.</p>
      <br/>
      <p><strong>Cột mốc đáng nhớ:</strong></p>
      <ul>
        <li>✍️ Chuyến đi chụp ảnh Kỷ yếu lưu giữ thanh xuân.</li>
        <li>🎓 Lễ Trưởng thành và Tri ân đầy giọt nước mắt cùng cái ôm chặt.</li>
        <li>🚀 Bước vào phòng thi với tâm thế của những chiến binh trưởng thành!</li>
      </ul>
    `
  }
];

// 2. Dữ liệu Kho lưu trữ ảnh kỷ niệm
const galleryItems = [
  { id: 1, category: "lop10", src: "https://picsum.photos/id/1011/800/600", caption: "Khai giảng Lớp 10 — Nắng sớm mai" },
  { id: 2, category: "lop10", src: "https://picsum.photos/id/1012/800/600", caption: "Buổi picnic dã ngoại đầu tiên" },
  { id: 3, category: "lop11", src: "https://picsum.photos/id/1013/800/600", caption: "Hội trại 26/3 rực rỡ sắc màu" },
  { id: 4, category: "lop11", src: "https://picsum.photos/id/1016/800/600", caption: "Tiết học Thể dục tràn ngập tiếng cười" },
  { id: 5, category: "lop12", src: "https://picsum.photos/id/1020/800/600", caption: "Buổi chụp ảnh kỷ yếu đáng nhớ" },
  { id: 6, category: "lop12", src: "https://picsum.photos/id/1024/800/600", caption: "Bữa tiệc chia tay Lớp 12" }
];

// 3. Dữ liệu Những mảnh ghép thanh xuân
const memoryCards = [
  { quote: "“Đừng quên góc bàn thứ hai dãy trong - nơi chúng ta đã cùng gục đầu ngủ gật!”", author: "— Bạn Nam Lớp Trưởng" },
  { quote: "“Thanh xuân không phải là thời gian, thanh xuân là những con người cùng ta đi qua năm tháng đó.”", author: "— Trích Lưu bút Lớp 12A" },
  { quote: "“Nhớ nhất là những buổi chiều mưa, cả lũ chia nhau từng gói mì tôm sống.”", author: "— Nhóm Cạ Cứng" }
];

/* ==========================================================================
   FUNCTIONS & EVENT LISTENERS
   ========================================================================== */

let currentLightboxIndex = 0;
let filteredGallery = [...galleryItems];

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  renderJourney();
  renderGallery('all');
  renderMemories();
  initModal();
  initLightbox();
});

// Mobile Nav Toggle
function initNavbar() {
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close nav on click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

// Render Journey Timeline
function renderJourney() {
  const container = document.getElementById("timelineContainer");
  container.innerHTML = journeyChapters.map((ch, idx) => `
    <div class="chapter-card scrapbook-card ${idx % 2 !== 0 ? 'reverse' : ''}">
      <div class="washi-tape ${idx % 2 === 0 ? 'tape-top-left' : 'tape-top-right'}"></div>
      <div class="chapter-thumb">
        <img src="${ch.thumb}" alt="${ch.title}">
      </div>
      <div class="chapter-info">
        <span class="chapter-badge">${ch.badge}</span>
        <h3 class="chapter-title">${ch.title}</h3>
        <p class="chapter-desc">${ch.shortDesc}</p>
        <button class="btn-scrapbook" onclick="openChapterModal('${ch.id}')">
          📖 Khám phá chương
        </button>
      </div>
    </div>
  `).join('');
}

// Render Gallery with Filtering
function renderGallery(filter) {
  const grid = document.getElementById("galleryGrid");
  filteredGallery = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  grid.innerHTML = filteredGallery.map((item, index) => `
    <div class="gallery-item" onclick="openLightbox(${index})">
      <img src="${item.src}" alt="${item.caption}">
      <p class="gallery-item-caption">${item.caption}</p>
    </div>
  `).join('');

  // Update Filter Buttons
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === filter);
    btn.onclick = () => renderGallery(btn.dataset.filter);
  });
}

// Render Memories
function renderMemories() {
  const grid = document.getElementById("memoriesGrid");
  grid.innerHTML = memoryCards.map(m => `
    <div class="scrapbook-card memory-card">
      <div class="washi-tape tape-top-center"></div>
      <p class="memory-quote">${m.quote}</p>
      <p class="memory-author">${m.author}</p>
    </div>
  `).join('');
}

// Chapter Modal Logic
function initModal() {
  const modal = document.getElementById("chapterModal");
  const closeBtn = document.getElementById("modalClose");
  const overlay = document.getElementById("modalOverlay");

  const closeModal = () => modal.classList.remove("active");

  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;
}

function openChapterModal(chapterId) {
  const chapter = journeyChapters.find(c => c.id === chapterId);
  if (!chapter) return;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = `
    <span class="chapter-badge">${chapter.badge}</span>
    <h2 class="section-title" style="text-align:left; margin: 0.5rem 0 1rem 0;">${chapter.title}</h2>
    <div>${chapter.fullContent}</div>
  `;

  document.getElementById("chapterModal").classList.add("active");
}

// Lightbox Logic
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  const close = () => lightbox.classList.remove("active");

  closeBtn.onclick = close;
  prevBtn.onclick = () => navigateLightbox(-1);
  nextBtn.onclick = () => navigateLightbox(1);
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  document.getElementById("lightbox").classList.add("active");
}

function updateLightboxContent() {
  const item = filteredGallery[currentLightboxIndex];
  if (!item) return;

  document.getElementById("lightboxImg").src = item.src;
  document.getElementById("lightboxCaption").innerText = item.caption;
}

function navigateLightbox(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) currentLightboxIndex = filteredGallery.length - 1;
  if (currentLightboxIndex >= filteredGallery.length) currentLightboxIndex = 0;
  updateLightboxContent();
}

/* ==========================================================================
   FLIPBOOK LOGIC (QUẢN LÝ LẬT TRANG SỔ LƯU NIỆM)
   ========================================================================== */
let currentPage = 1;
const totalPages = 8; // Tổng số trang trong cấu trúc HTML

function updateFlipbook() {
  const pages = document.querySelectorAll(".page");
  
  pages.forEach((page, index) => {
    const pageNum = index + 1;
    if (pageNum === currentPage) {
      page.classList.add("active");
      page.style.transform = "rotateY(0deg)";
      page.style.zIndex = "5";
    } else if (pageNum < currentPage) {
      page.classList.remove("active");
      page.style.transform = "rotateY(-180deg)";
      page.style.zIndex = "1";
    } else {
      page.classList.remove("active");
      page.style.transform = "rotateY(0deg)";
      page.style.zIndex = "1";
    }
  });

  // Cập nhật chỉ số trang
  document.getElementById("pageIndicator").innerText = `Trang ${currentPage} / ${totalPages}`;

  // Vô hiệu hóa nút điều hướng khi ở đầu hoặc cuối
  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateFlipbook();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updateFlipbook();
  }
}

// Hỗ trợ bấm phím mũi tên trái / phải trên bàn phím
document.addEventListener("keydown", (e) => {
  // Chỉ kích hoạt khi người dùng đang cuộn gần khu vực hành trình
  const journeySection = document.getElementById("journey");
  const rect = journeySection.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    if (e.key === "ArrowRight") nextPage();
    if (e.key === "ArrowLeft") prevPage();
  }
});

// Khởi chạy khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  updateFlipbook();
});
