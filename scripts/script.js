
/* =========================
   INIT CATEGORY GRID
========================= */
document.addEventListener("DOMContentLoaded", renderCategories);

function renderCategories() {
  const grid = document.querySelector(".grid");
  if (!grid) return;

  grid.innerHTML = DATA.map((cat, catIndex) => `
    <div class="card" onclick="openCategory(${catIndex})">
      <img
        src="${cat.img}"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://picsum.photos/400/300?random=10';"
      >
      <div class="card-content">
        <h3>${cat.name}</h3>
        <p>${cat.desc || ""}</p>
      </div>
    </div>
  `).join("");
}


/* =========================
   OPEN CATEGORY
========================= */
function openCategory(catIndex) {
  const modal = document.getElementById("modal");
  const cat = DATA[catIndex];

  document.getElementById("modal-title").innerText = cat.name;
  document.getElementById("modal-desc").innerText = cat.desc || "";

  const modalGrid = document.getElementById("modal-grid");

  modalGrid.innerHTML = cat.items.map((item, itemIndex) => `
    <div class="card" onclick="openPlant(${catIndex}, ${itemIndex})">
      <img
        src="${item.img}"
        loading="lazy"
        onerror="this.onerror=null; this.src='https://picsum.photos/400/300?random=20';"
      >
      <div class="card-content">
        <h3>${item.name}</h3>
      </div>
    </div>
  `).join("");

  modal.classList.add("show");
}


/* =========================
   OPEN PLANT
========================= */
function openPlant(catIndex, itemIndex) {
  const plant = DATA[catIndex].items[itemIndex];

  document.getElementById("plant-title").innerText = plant.name;
  document.getElementById("plant-desc").innerText = plant.desc || "";

  const main = document.getElementById("plant-main-media");
  const thumbs = document.getElementById("plant-thumbs");

  const images = plant.images?.length ? plant.images : [plant.img];
  const videos = plant.videos || [];

  /* MAIN IMAGE */
  main.innerHTML = `
    <img
      src="${images[0]}"
      style="width:100%; border-radius:12px;"
      onerror="this.onerror=null; this.src='https://picsum.photos/800/600?random=30';"
    >
  `;

  /* RESET THUMBS */
  thumbs.innerHTML = "";

  /* IMAGE THUMBS */
  images.forEach(img => {
    thumbs.innerHTML += `
      <img
        src="${img}"
        onclick="changeMainMedia('${img}')"
        onerror="this.onerror=null; this.src='https://picsum.photos/100?random=40';"
      >
    `;
  });

  /* VIDEO THUMBS */
  videos.forEach((video, i) => {
    thumbs.innerHTML += `
      <div class="video-thumb" onclick="showMedia('${video}')">
        ▶ Video ${i + 1}
      </div>
    `;
  });

  document.getElementById("plantModal").classList.add("show");
}


/* =========================
   CHANGE IMAGE
========================= */
function changeMainMedia(src) {
  const main = document.getElementById("plant-main-media");

  main.innerHTML = `
    <img
      src="${src}"
      style="width:100%; border-radius:12px;"
      onerror="this.onerror=null; this.src='https://picsum.photos/800/600?random=50';"
    >
  `;
}


/* =========================
   EXTRACT YOUTUBE ID (FIXED)
========================= */
function extractYouTubeId(url) {
  try {
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1].split("?")[0];
    }

    if (url.includes("watch?v=")) {
      return url.split("watch?v=")[1].split("&")[0];
    }

    if (url.includes("embed/")) {
      return url.split("embed/")[1].split("?")[0];
    }

    return null;
  } catch (e) {
    return null;
  }
}


/* =========================
   SHOW MEDIA (VIDEO + MP4 FIXED)
========================= */
function showMedia(src) {
  const main = document.getElementById("plant-main-media");

  const isYouTube =
    src.includes("youtube.com") ||
    src.includes("youtu.be");

  if (isYouTube) {
    const videoId = extractYouTubeId(src);

    if (!videoId) {
      main.innerHTML = `<p>Invalid YouTube link</p>`;
      return;
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    main.innerHTML = `
      <iframe
        width="100%"
        height="400"
        style="border-radius:12px;"
        src="${embedUrl}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  } else {
    main.innerHTML = `
      <video controls autoplay style="width:100%; border-radius:12px;">
        <source src="${src}" type="video/mp4">
      </video>
    `;
  }
}


/* =========================
   CLOSE MODALS
========================= */
function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

function closePlantModal() {
  document.getElementById("plantModal").classList.remove("show");
}


/* =========================
   OUTSIDE CLICK CLOSE
========================= */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) closeModal();
});


/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.classList.toggle("active");
}