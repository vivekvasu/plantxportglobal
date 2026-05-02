const DATA = [
  {
    name: "Indoor Plants",
    desc: "Office & home greenery",
    img: "https://images.unsplash.com/photo-1634185905643-af5d08cf5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb29yJTIwcGxhdG5zfGVufDB8fDB8fHww?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Aloe Vera",
        img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5"
      },
      {
        name: "Snake Plant",
        img: "https://images.unsplash.com/photo-1593691509543-c55fb32e5b6b"
      }
    ]
  },
  {
    name: "Outdoor Plants",
    desc: "Garden & landscaping plants",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    items: [
      {
        name: "Rose",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
      },
      {
        name: "Hibiscus",
        img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
      }
    ]
  },
  {
    name: "Air Purifying Plants",
    desc: "Natural air cleaning plants",
    img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Medicinal Plants",
    desc: "Herbal & Ayurvedic plants",
    img: "https://images.unsplash.com/photo-1570295835271-04c05b4ed943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmFsJTIwcGxhbnRzfGVufDB8fDB8fHww?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Ornamental Plants",
    desc: "Decorative flowering plants",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Landscaping Plants",
    desc: "Bulk supply for projects",
    img: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Gifting Plants",
    desc: "Office & home greenery",
    img: "https://images.unsplash.com/photo-1634185905643-af5d08cf5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb29yJTIwcGxhdG5zfGVufDB8fDB8fHww?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Divine Plants",
    desc: "Office & home greenery",
    img: "https://images.unsplash.com/photo-1634185905643-af5d08cf5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb29yJTIwcGxhdG5zfGVufDB8fDB8fHww?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Landscaping Plants",
    desc: "Bulk supply for projects",
    img: "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=1200&q=80"
  },
   {
    name: "Ornamental Plants",
    desc: "Decorative flowering plants",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
  }
];

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