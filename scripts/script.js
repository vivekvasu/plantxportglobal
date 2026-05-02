const data = [
  {
    name: "Indoor Plants",
    desc: "Office & home greenery",
    img: "https://images.unsplash.com/photo-1634185905643-af5d08cf5ef3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb29yJTIwcGxhdG5zfGVufDB8fDB8fHww?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Outdoor Plants",
    desc: "Garden & landscaping plants",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80"
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
  },{
    name: "Tropical Plants",
    desc: "Decorative flowering plants",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
  },
];

const grid = document.querySelector(".grid");

function render() {
  grid.innerHTML = data.map(d => `
    <div class="card">
      <img src="${d.img}">
      <div class="card-content">
        <h3>${d.name}</h3>
        <p>${d.desc}</p>
      </div>
    </div>
  `).join("");
}

render();

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}