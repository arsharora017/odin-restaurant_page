//module for creating menu page
import img1 from "../dist/img/ButterChicken.jpg";

const menuItems = [
  {
    img: img1,
    heading: "Butter Chicken",
    description: "The ultimate comfort food for your entire family!",
  },
  {
    img: img1,
    heading: "Palak Chicken",
    description: "Delicious",
  },
  {
    img: img1,
    heading: "Chicken Tikka Masala",
    description: "Delicious",
  },
  {
    img: img1,
    heading: "Chicken Korma",
    description: "Delicious",
  },
];

const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  pageContent.classList.add("menu-container");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  menuItems.forEach((element) => {
    const card = document.createElement("div");
    const menuCardImg = new Image();

    const cardHeading = document.createElement("h2");
    const cardPara = document.createElement("p");

    //add content to elements
    menuCardImg.src = `${element.img}`;
    cardHeading.textContent = `${element.heading}`;
    cardPara.textContent = `${element.description}`;

    //add classes
    card.classList.add("card");
    menuCardImg.classList.add("menu-card-img");
    cardHeading.classList.add("card-heading");
    cardPara.classList.add("card-para");

    //append elements
    card.appendChild(menuCardImg);
    card.appendChild(cardHeading);
    card.appendChild(cardPara);
    menu.appendChild(card);
  });

  // //create card elements
  // const card = document.createElement("div");
  // const menuCardImg = new Image();

  // const cardHeading = document.createElement("h2");
  // const cardPara = document.createElement("p");

  // //add content to elements
  // menuCardImg.src = img1;
  // cardHeading.textContent = "Butter Chicken";
  // cardPara.textContent = "Delicious";

  // //add classes
  // card.classList.add("card");
  // menuCardImg.classList.add("menu-card-img");
  // cardHeading.classList.add("card-heading");
  // cardPara.classList.add("card-para");

  // //append elements
  // card.appendChild(menuCardImg);
  // card.appendChild(cardHeading);
  // card.appendChild(cardPara);
  // menu.appendChild(card);
  pageContent.appendChild(menu);
  content.appendChild(pageContent);
};

export default createMenuPage;
