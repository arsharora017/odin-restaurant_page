import createContactPage from "./contact.js";
import createMenuPage from "./menu.js";
import createRestautantHomePage from "./restaurant.js";
import "./style.css";

const createTabs = () => {
  const content = document.querySelector("#content");

  //create header, h1 and main nav container
  const header = document.createElement("header");
  const pageHeading = document.createElement("h1");
  const navDiv = document.createElement("div");

  // Create three divs
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  //Set id's for div
  div1.setAttribute("id", "home-btn");
  div2.setAttribute("id", "menu-btn");
  div3.setAttribute("id", "contact-btn");

  //Set classes
  header.classList.add("header");
  pageHeading.classList.add("page-heading");
  navDiv.classList.add("nav-container");
  div1.classList.add("tab");
  div2.classList.add("tab");
  div3.classList.add("tab");

  //Set text content
  pageHeading.textContent = "Indilicious";
  div1.textContent = "Home";
  div2.textContent = "Menu";
  div3.textContent = "Contact";

  //Append divs to navDiv
  navDiv.appendChild(div1);
  navDiv.appendChild(div2);
  navDiv.appendChild(div3);

  //append to content
  header.appendChild(pageHeading);
  header.appendChild(navDiv);
  content.appendChild(header);

  div1.addEventListener("click", () => {
    clearContent();
    createRestautantHomePage();
  });

  div2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  div3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
