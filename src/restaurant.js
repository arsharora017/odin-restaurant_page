import resImage from "../dist/img/res-photo.jpg";

const createRestautantHomePage = () => {
  const content = document.querySelector("#content");

  // Create and append headline element
  // const headline = document.createElement("h1");
  // headline.textContent = "Welcome to our restaurant!";
  // pageContent.appendChild(headline);

  // Create and append image elementnpm run build

  // const image = new Image();
  // image.src = resImage;
  // image.height = "300";
  // pageContent.appendChild(image);

  //Create and append copy element
  // const copy = document.createElement("p");
  // copy.textContent = "We serve the best food in town. Come and taste it.";
  // pageContent.appendChild(copy);
  // content.appendChild(pageContent);

  //creating elements

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
