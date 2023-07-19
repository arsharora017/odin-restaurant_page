//module for creating menu page
import butterChicken from "../dist/img/butter-chicken.jpg";
import palakChicken from "../dist/img/palak-chicken.jpg";
import chikenTikka from "../dist/img/chicken-tikka-masala.jpg";
import chickenKorma from "../dist/img/chicken-korma.jpg";
import tandooriChicken from "../dist/img/tandoori-chicken.jpg";
import chickenCurry from "../dist/img/chicken-curry.jpg";

const menuItems = [
  {
    img: butterChicken,
    heading: "Butter Chicken",
    description: "Ultimate comfort food for your entire family!",
  },
  {
    img: palakChicken,
    heading: "Palak Chicken",
    description:
      "Creamy, flavorsome, amazingly delicious & makes for a comforting food!",
  },
  {
    img: chikenTikka,
    heading: "Chicken Tikka Masala",
    description: "Spicy, creamy, flavorable, and crazy delicious! ",
  },
  {
    img: chickenKorma,
    heading: "Chicken Korma",
    description: "Curried dish made from ground spices and coconut",
  },
  {
    img: tandooriChicken,
    heading: "Tandoori Chicken",
    description: "Tender, juicy, moist and outrageously delicious ",
  },
  {
    img: chickenCurry,
    heading: "Chicken Curry",
    description:
      "Traditional Indian dish made with plenty of spices, herbs, onions and tomatoes.",
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
