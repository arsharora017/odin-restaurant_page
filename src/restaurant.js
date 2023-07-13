import "./style.css";
import res_image from "/dist/img/res_photo.jpg";

const createRestautantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and append headline element
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our restaurant!";
  pageContent.appendChild(headline);

  // Create and append image elementnpm run build

  const image = new Image();
  image = document.createElement("img");
  image.src = res_image;
  image.height = "300";
  pageContent.appendChild(image);

  //Create and append copy element
  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town. Come and taste it.";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestautantHomePage;
