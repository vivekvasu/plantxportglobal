const DATA = [
  {
    name: "Indoor Plants",
    desc: "Home & office greenery",
    img: "assets/indoor/calathea.jpeg",
    items: [
      {
        name: "Monstera Deliciosa",
        img: "assets/indoor/monstera.jpeg",
        images: ["assets/indoor/monstera.jpeg"],
        videos: [],
        desc: "Iconic tropical indoor plant with large split leaves. Improves air quality and adds a lush aesthetic."
      },
      {
        name: "Calathea Beauty Star",
        img: "assets/indoor/calathea.jpeg",
        images: ["assets/indoor/calathea.jpeg"],
        videos: [],
        desc: "Decorative foliage plant known for its patterned leaves and air-purifying qualities."
      },
      {
        name: "Green Money Plant",
        img: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=600&q=80",
        images: ["https://images.unsplash.com/photo-1598880940080-ff9a29891b85?auto=format&fit=crop&w=900&q=80"],
        videos: [],
        desc: "A popular indoor vine plant known for its lush green leaves, easy maintenance, and natural air-purifying qualities. Ideal for homes, offices, and decorative spaces."
      },
      {
        name: "Spider Plant",
        img: "assets/indoor/spider.jpeg",
        images: ["assets/indoor/spider.jpeg"],
        videos: [],
        desc: "Easy-care trailing plant that removes toxins and grows quickly in indoor environments."
      },
      {
        name: "ZZ Plant (Zamioculcas zamiifolia)",
        img: "assets/indoor/zamioculcas.jpeg",
        images: ["assets/indoor/zamioculcas.jpeg", "assets/indoor/zz1.jpeg"],
        videos: [],
        desc: "Extremely hardy indoor plant that thrives in low light and requires minimal maintenance."
      },
      {
        name: "Snake Plant (Dracaena trifasciata)",
        img: "assets/indoor/snakeplant.jpeg",
        images: ["assets/indoor/snakeplant.jpeg"],
        videos: [],
        desc: "One of the best air-purifying plants that releases oxygen even at night."
      }
    ]
  },

  {
    name: "Outdoor Plants",
    desc: "Garden landscaping plants",
    img: "assets/outdoor/foxtailagave.jpeg",
    items: [
      {
        name: "Heliconia",
        img: "assets/outdoor/heliconia.jpeg",
        images: ["assets/outdoor/heliconia.jpeg"],
        videos: [],
        desc: "Bright tropical flowering plant known for its striking red and yellow bracts."
      },
      {
        name: "Ficus Panda Plant",
        img: "assets/outdoor/ficuspanda.jpeg",
        images: ["assets/outdoor/ficuspanda.jpeg"],
        videos: [],
        desc: "Ornamental outdoor plant with glossy leaves, ideal for landscaping and hedges."
      },
      {
        name: "Foxtail Agave",
        img: "assets/outdoor/foxtailagave.jpeg",
        images: ["assets/outdoor/foxtailagave.jpeg"],
        videos: [],
        desc: "Architectural succulent plant with dramatic rosette shape, perfect for dry gardens."
      }
    ]
  },

  {
    name: "Fruit Plants",
    desc: "Homegrown fruit trees",
    img: "assets/fruit/mango.jpeg",
    items: [
      {
        name: "Mango Tree",
        img: "assets/fruit/mango.jpeg",
        images: ["assets/fruit/mango.jpeg"],
        videos: [],
        desc: "Popular tropical fruit tree producing sweet, juicy mangoes."
      },
      {
        name: "Star Fruit (Carambola)",
        img: "assets/fruit/starfruit.jpeg",
        images: ["assets/fruit/starfruit.jpeg"],
        videos: [],
        desc: "Exotic fruit tree producing star-shaped tangy-sweet fruits rich in vitamin C."
      },
      {
        name: "Sapota (Chikoo)",
        img: "assets/fruit/sapota.jpeg",
        images: ["assets/fruit/sapota.jpeg"],
        videos: [],
        desc: "Sweet tropical fruit tree with soft brown pulp and caramel-like flavor."
      },
      {
        name: "Jamun",
        img: "assets/fruit/jamun.jpeg",
        images: ["assets/fruit/jamun.jpeg"],
        videos: [],
        desc: "Medicinal fruit tree known for deep purple berries with health benefits."
      },
      {
        name: "Pomegranate",
        img: "assets/fruit/pomegranate.jpeg",
        images: ["assets/fruit/pomegranate.jpeg"],
        videos: [],
        desc: "Fruit-bearing plant producing antioxidant-rich red seeded fruits."
      }
    ]
  },

  {
    name: "Flowering Plants / Trees",
    desc: "Colorful blooming plants",
    img: "assets/flower/peacockflower.jpeg",
    items: [
      {
        name: "Cherry Blossom",
        img: "assets/flower/cherryblossom.jpeg",
        images: ["assets/flower/cherryblossom.jpeg"],
        videos: [],
        desc: "Beautiful ornamental tree known for seasonal pink-white blossoms."
      },
      {
        name: "Bougainvillea",
        img: "assets/flower/bougainvillea.jpeg",
        images: ["assets/flower/bougainvillea.jpeg"],
        videos: [],
        desc: "Fast-growing climber with vibrant paper-like flowers."
      },
      {
        name: "Gulmohar",
        img: "assets/flower/gulmohar.jpeg",
        images: ["assets/flower/gulmohar.jpeg"],
        videos: [],
        desc: "Flamboyant tree with fiery red-orange flowers, ideal for avenues."
      },
      {
        name: "Peacock Flower",
        img: "assets/flower/peacockflower.jpeg",
        images: ["assets/flower/peacockflower.jpeg"],
        videos: [],
        desc: "Tropical flowering plant with bright, exotic ornamental blooms."
      },
      {
        name: "Red Ixora",
        img: "assets/flower/redIxora.jpeg",
        images: ["assets/flower/redIxora.jpeg"],
        videos: [],
        desc: "Compact shrub producing clusters of bright red flowers year-round."
      },
      {
        name: "Tecoma stans (Yellow Bells)",
        img: "assets/flower/tecoma.jpeg",
        images: ["assets/flower/tecoma.jpeg"],
        videos: [],
        desc: "Sun-loving flowering shrub with bright yellow trumpet-shaped flowers."
      }
    ]
  },

  {
    name: "Bonsai Plants",
    desc: "Miniature artistic trees",
    img: "assets/bonsai/ficus.jpeg",
    items: [
      {
        name: "Ficus Microcarpa (Chinese Banyan)",
        img: "assets/bonsai/ficus.jpeg",
        images: [
          "assets/bonsai/ficus.jpeg",
          "assets/bonsai/ficus1.jpeg",
          "assets/bonsai/ficus2.jpeg",
          "assets/bonsai/ficus3.jpeg"
        ],
        videos: [],
        desc: "Popular bonsai species with thick trunk and dense canopy, ideal for styling."
      }
    ]
  },

  {
    name: "Palm Plants",
    desc: "Tropical palm varieties",
    img: "assets/palm/bottlepalm.jpeg",
    items: [
      {
        name: "Bottle Palm",
        img: "assets/palm/bottlepalm.jpeg",
        images: ["assets/palm/bottlepalm.jpeg"],
        videos: [],
        desc: "Slow-growing ornamental palm with a swollen trunk base."
      },
      {
        name: "Bismarck Palm",
        img: "assets/palm/bismarckpalm.jpeg",
        images: ["assets/palm/bismarckpalm.jpeg"],
        videos: [],
        desc: "Large dramatic palm with silver-blue fan-shaped leaves."
      },
      {
        name: "Chinese Fan Palm",
        img: "assets/palm/chinesefanpalm.jpeg",
        images: ["assets/palm/chinesefanpalm.jpeg"],
        videos: [],
        desc: "Elegant palm with wide fan-shaped leaves used in landscaping."
      },
      {
        name: "Areca Palm",
        img: "assets/palm/arecapalm.jpeg",
        images: ["assets/palm/arecapalm.jpeg"],
        videos: [],
        desc: "Popular indoor palm that improves air quality and adds greenery."
      },
      {
        name: "Sago Palm",
        img: "assets/palm/sagopalm.jpeg",
        images: ["assets/palm/sagopalm.jpeg"],
        videos: [],
        desc: "Ancient-looking ornamental plant with slow growth and stiff leaves."
      },
      {
        name: "Bamboo Palm",
        img: "assets/palm/bamboopalm.jpeg",
        images: ["assets/palm/bamboopalm.jpeg"],
        videos: [],
        desc: "Indoor-friendly palm that thrives in shade and improves humidity."
      }
    ]
  }
];