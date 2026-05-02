const plants = [
  {
    name: "Aloe Vera",
    image: "https://source.unsplash.com/300x300/?aloe",
    desc: "Medicinal plant, easy to grow.",
    video: "https://www.youtube.com/embed/l0kqYh9Kz8k"
  },
  {
    name: "Snake Plant",
    image: "https://source.unsplash.com/300x300/?snake-plant",
    desc: "Low maintenance indoor plant.",
    video: "https://www.youtube.com/embed/qGz9g4wF6ds"
  },
  {
    name: "Peace Lily",
    image: "https://source.unsplash.com/300x300/?peace-lily",
    desc: "Beautiful flowering indoor plant.",
    video: "https://www.youtube.com/embed/kpQzR1FJd8A"
  }
];

const catalog = document.getElementById("catalog");

plants.forEach((plant, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${plant.image}" />
    <h3>${plant.name}</h3>
  `;
  card.onclick = () => openModal(index);
  catalog.appendChild(card);
});

function openModal(i) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("plantName").innerText = plants[i].name;
  document.getElementById("plantImage").src = plants[i].image;
  document.getElementById("plantDesc").innerText = plants[i].desc;
  document.getElementById("plantVideo").src = plants[i].video;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("plantVideo").src = "";
}