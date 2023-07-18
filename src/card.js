const card = (img, heading, description) => {
  // create elements
  const card = document.createElement("div");
  const menuCardImg = new Image();

  const cardHeading = document.createElement("h2");
  const cardPara = document.createElement("p");

  //add content to elements
  menuCardImg.src = `${img}`;
  cardHeading.textContent = `${heading}`;
  cardPara.textContent = `${description}`;

  //add classes
  card.classList.add("card");
  menuCardImg.classList.add("menuCardImg");
  cardHeading.classList.add("cardHeading");
  cardPara.classList.add("cardPara");

  //append elements
  card.appendChild(menuCardImg);
  card.appendChild(cardHeading);
  card.appendChild(cardPara);
};

export default card;
