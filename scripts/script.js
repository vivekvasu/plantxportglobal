
/* =========================
   INIT CATEGORY GRID
========================= */
document.addEventListener("DOMContentLoaded", renderCategories);

function renderCategories() {
  const grid = document.querySelector(".grid");
  if (!grid) return;

  grid.innerHTML = DATA.map((cat, catIndex) => `
    <div class="card" onclick="openCategory(${catIndex})">
      <img src="${cat.img}" 
           onerror="this.src='https://via.placeholder.com/400x300?text=Category'">
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
      <img src="${item.img}" 
           onerror="this.src='https://via.placeholder.com/400x300?text=Plant'">
      <div class="card-content">
        <h3>${item.name}</h3>
      </div>
    </div>
  `).join("");

  modal.classList.add("show");
}


/* =========================
   OPEN PLANT (AMAZON STYLE VIEWER)
========================= */
function openPlant(catIndex, itemIndex) {
  const plant = DATA[catIndex].items[itemIndex];

  document.getElementById("plant-title").innerText = plant.name;
  document.getElementById("plant-desc").innerText = plant.desc || "";

  const main = document.getElementById("plant-main-media");
  const thumbs = document.getElementById("plant-thumbs");

  const images = plant.images?.length ? plant.images : [plant.img];
  const videos = plant.videos || [];

  // reset main
  main.innerHTML = `
    <img id="main-img" src="${images[0]}" 
         style="width:100%; border-radius:12px;">
  `;

  /* =========================
     IMAGE THUMBNAILS
  ========================= */
  thumbs.innerHTML = images.map(img => `
    <img src="${img}" onclick="changeMainMedia('${img}')">
  `).join("");

  /* =========================
     VIDEO THUMBNAILS
  ========================= */
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
    <img id="main-img" src="${src}" 
         style="width:100%; border-radius:12px;">
  `;
}


/* =========================
   SHOW VIDEO (MP4 + YOUTUBE AUTO SUPPORT)
========================= */
function showMedia(src) {
  const main = document.getElementById("plant-main-media");

  // Detect YouTube links
  const isYouTube =
    src.includes("youtube.com") ||
    src.includes("youtu.be");

  if (isYouTube) {
    let videoId = "";

    // Convert youtu.be/ID
    if (src.includes("youtu.be")) {
      videoId = src.split("/").pop();
    }

    // Convert youtube.com/watch?v=ID
    else if (src.includes("watch?v=")) {
      videoId = src.split("v=")[1].split("&")[0];
    }

    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

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
  }

  // MP4 fallback
  else {
    main.innerHTML = `
      <video controls autoplay style="width:100%; border-radius:12px;">
        <source src="${src}" type="video/mp4">
      </video>
    `;
  }
}


/* =========================
   CLOSE CATEGORY MODAL
========================= */
function closeModal() {
  document.getElementById("modal").classList.remove("show");
}


/* =========================
   CLOSE PLANT MODAL
========================= */
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