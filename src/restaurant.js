import resImage from "../dist/img/res-photo.jpg";

const createRestautantHomePage = () => {
  const content = document.querySelector("#content");

  const pageContent = document.createElement("div");
  const outerDiv = document.createElement("div");
  const heading = document.createElement("h1");
  const paragraph1 = document.createElement("p");
  const image = new Image();
  image.src = resImage;
  const paragraph2 = document.createElement("p");

  // adding classes
  pageContent.classList.add("page-content");
  pageContent.classList.add("main");

  outerDiv.classList.add("outer-div");
  heading.classList.add("outer-div-heading");
  paragraph1.classList.add("outer-div-para1");
  image.classList.add("image");
  paragraph2.classList.add("outer-div-para2");

  //set text content
  heading.textContent = "Welcome to Indilicious";
  paragraph1.textContent = "Indian Restaurant. Serving North Indian Food";
  paragraph2.textContent = "Order online or visit us";

  //appending
  outerDiv.appendChild(heading);
  outerDiv.appendChild(paragraph1);
  outerDiv.appendChild(image);
  outerDiv.appendChild(paragraph2);

  pageContent.appendChild(outerDiv);
  content.appendChild(pageContent);
};

export default createRestautantHomePage;
