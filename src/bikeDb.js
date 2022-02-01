// import image2 from "./assets/TVS_RTR_Series_2020.jpg";
// import image3 from "./assets/TVS_Sport_2020.jpg";
// import image4 from "./assets/TVS_StarCity_2021.jpg";
// import image1 from "./assets/tvs_jupiter_125.jpg";
// import image5 from "./assets/TVS_XL_2021.jpg";
// import image6 from "./assets/tvs-radeon-2020.jpg";
// import image7 from "./assets/tvs-zest-2020.jpg";

const allBikes = [
  {
    image: require("./assets/TVS_RTR_Series_2020.jpg"),
    name: "TVS RTR Series",
    price: "₹ 85,350",
    description: "125cc | 93kgs | 9.25bhp",
  },
  {
    image: require("./assets/TVS_Sport_2020.jpg"),
    name: "TVS sport",
    price: "₹ 58,350",
    description: "109cc | 110kgs | 8.18bhp",
  },
  {
    image: require("./assets/TVS_StarCity_2021.jpg"),
    name: "TVS Star City",
    price: "₹ 70,350",
    description: "110cc | 116kgs | 8.08bhp",
  },
  {
    image: require("./assets/tvs_jupiter_125.jpg"),
    name: "TVS Jupiter",
    price: "₹ 66,350",
    description: "110cc | 108kgs | 7.8bhp",
  },
  {
    image: require("./assets/TVS_XL_2021.jpg"),
    name: "TVS XL100",
    price: "₹ 41,350",
    description: "99.7cc | 89kgs | 4.3bhp",
  },
  {
    image: require("./assets/tvs-radeon-2020.jpg"),
    name: "TVS Radeon",
    price: "₹ 59,650",
    description: "110cc | 116kgs | 8.08bhp",
  },
  {
    image: require("./assets/tvs-zest-2020.jpg"),
    name: "TVS Zest",
    price: "₹ 86,350",
    description: "175cc | 73kgs | 6.25bhp",
  },
];

const upcomingBikes = [
  {
    image: require("./assets/TVS_StarCity_2021.jpg"),
    name: "Star city",
    price: "₹ 55,350",
    description: "125cc | 93kgs | 9.25bhp",
  },
  {
    image: require("./assets/tvs-radeon-2020.jpg"),
    name: "TVS Radeon",
    price: "₹ 76,650",
    description: "155cc | 98kgs | 9.25bhp",
  },
  {
    image: require("./assets/tvs-zest-2020.jpg"),
    name: "TVS Zest",
    price: "₹ 86,350",
    description: "175cc | 73kgs | 6.25bhp",
  },
];

const sortedBikes = [
  {
    image: require("./assets/TVS_RTR_Series_2020.jpg"),
    name: "TVS RTR Series",
    price: "₹ 85,350",
    description: "125cc | 93kgs | 9.25bhp",
  },
  {
    image: require("./assets/TVS_Sport_2020.jpg"),
    name: "TVS sport",
    price: "₹ 58,350",
    description: "109cc | 110kgs | 8.18bhp",
  },
  {
    image: require("./assets/TVS_StarCity_2021.jpg"),
    name: "TVS Star City",
    price: "₹ 70,350",
    description: "110cc | 116kgs | 8.08bhp",
  },
  {
    image: require("./assets/tvs_jupiter_125.jpg"),
    name: "TVS Jupiter",
    price: "₹ 66,350",
    description: "110cc | 108kgs | 7.8bhp",
  },
];

const owners = [
  {
    image: require("./assets/tvs_jupiter_125.jpg"),
    name: "Rakesh Kumar Dan",
    description:
      "This is the string aboy info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorem ratione reprehenderit vero delectus illum fugiat eveniet eos, molestiae saepe inventore iure fuga totam tene necessitatibus assumenda ipsam ea fugit. y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },

  {
    image: require("./assets/tvs-zest-2020.jpg"),
    name: "Bablu Vishwakarma",
    description:
      "This is the string aboy info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolorem ratione reprehenderit vero delectus illum fugiat eveniet eos, molestiae saepe inventore iure fuga totam tene necessitatibus assumenda ipsam ea fugit. y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. . y info, Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
];

const showroomImages = [
  {
    photo: require("./assets/tvs_jupiter_125.jpg"),
    text: "tvs-jupiter-bike",
  },
  {
    photo: require("./assets/TVS_RTR_Series_2020.jpg"),
    text: "tvs-rtr-series-bike",
  },
  {
    photo: require("./assets/TVS_Sport_2020.jpg"),
    text: "tvs-sport-bike",
  },
  {
    photo: require("./assets/TVS_StarCity_2021.jpg"),
    text: "tvs-starcity-bike",
  },
  {
    photo: require("./assets/TVS_XL_2021.jpg"),
    text: "tvs-xl-bike",
  },
  {
    photo: require("./assets/tvs-radeon-2020.jpg"),
    text: "tvs-radeon",
  },
  {
    photo: require("./assets/tvs-zest-2020.jpg"),
    text: "tvs-zest",
  },
];

// export default upcomingBikes default export
exports.allBikes = allBikes;
exports.upcomingBikes = upcomingBikes;
exports.owners = owners;
exports.sortedBikes = sortedBikes;
exports.showroomImages = showroomImages;
