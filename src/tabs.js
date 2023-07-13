import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestautantHomePage from "./restaurant";

const createTabs = () => {
  const content = document.querySelector("#content");

  // Create three divs
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");

  //Set id's for div
  div1.setAttribute("id", "home-btn");
  div2.setAttribute("id", "menu-btn");
  div3.setAttribute("id", "contact-btn");

  //Set classes on divs
  div1.classList.add("tab");
  div2.classList.add("tab");
  div3.classList.add("tab");

  //Set text content for tabs
  div1.textContent = "Home";
  div2.textContent = "Menu";
  div3.textContent = "Contact";

  //Append divs to content div
  content.appendChild(div1);
  content.appendChild(div2);
  content.appendChild(div3);

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
