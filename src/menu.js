//module for creating menu page
// import "./style.css";

const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const heading = document.createElement("h1");
  heading.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Butter Chicken";

  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Chicken Tikka";

  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Chicken Korma";

  pageContent.appendChild(heading);

  menuList.appendChild(menuItem1);
  menuList.appendChild(menuItem2);
  menuList.appendChild(menuItem3);

  pageContent.appendChild(menuList);

  content.appendChild(pageContent);
};

export default createMenuPage;
