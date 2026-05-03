/* =========================
   INIT CATEGORY GRID
========================= */
document.addEventListener("DOMContentLoaded", renderCategories);

function renderCategories() {
  const grid = document.querySelector(".grid");

  if (!grid) return;

  grid.innerHTML = DATA.map((cat, index) => `
    <div class="card" onclick="openCategory(${index})">
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
   OPEN MODAL
========================= */
function openCategory(index) {
  const modal = document.getElementById("modal");
  const cat = DATA[index];

  // set title + description
  document.getElementById("modal-title").innerText = cat.name;
  document.getElementById("modal-desc").innerText = cat.desc || "";

  const modalGrid = document.getElementById("modal-grid");

  // render items safely
  if (!cat.items || cat.items.length === 0) {
    modalGrid.innerHTML = `
      <p style="padding:10px; color:#666;">
        No products available in this category.
      </p>
    `;
  } else {
    modalGrid.innerHTML = cat.items.map(item => `
      <div class="card">
        <img src="${item.img}" 
             onerror="this.src='https://via.placeholder.com/400x300?text=Plant'">
        <div class="card-content">
          <h3>${item.name}</h3>
        </div>
      </div>
    `).join("");
  }

  // show modal
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

/* =========================
   CLOSE MODAL
========================= */
function closeModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

/* =========================
   CLOSE WHEN CLICK OUTSIDE
========================= */
document.addEventListener("click", function (e) {
  const modal = document.getElementById("modal");

  if (e.target === modal) {
    closeModal();
  }
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.classList.toggle("active");
  }
}