//module for creating the contact page

const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  pageContent.classList.add("contact-container");

  //create elements
  const contactMainHeadingContainer = document.createElement("div");
  const contactMainHeading = document.createElement("h1");

  const contactBodyContainer = document.createElement("div");
  const location = document.createElement("div");
  const locationHeading = document.createElement("h2");
  const locationStreetName = document.createElement("p");
  const locationCityName = document.createElement("p");

  const hours = document.createElement("div");
  const hoursHeading = document.createElement("h2");
  const hoursSet1 = document.createElement("p");
  const hoursSet2 = document.createElement("p");
  const hoursDaysClose = document.createElement("p");

  const contact = document.createElement("div");
  const contactHeading = document.createElement("h2");
  const contactPhone = document.createElement("p");
  const contactEmail = document.createElement("p");

  //******add text******
  //contact main container
  contactMainHeading.textContent = "Contact";

  // add text location
  locationHeading.textContent = "Location";
  locationStreetName.textContent = "101 Rideau Street";
  locationCityName.textContent = "Ottawa, ON";

  //add text hours
  hoursHeading.textContent = "Hours";
  hoursSet1.textContent = "Tue - Thus, 8 am - 10pm";
  hoursSet2.textContent = "Fri - Sun, 8 am - 11 pm";
  hoursDaysClose.textContent = "Closed Mondays";

  //add text contact info
  contactHeading.textContent = "Contact";
  contactPhone.textContent = "(613) 555-1110";
  contactEmail.textContent = "info@indilicious.com";

  // add class
  contactMainHeadingContainer.classList.add("contact-main-heading-container");
  contactHeading.classList.add("contact-heading");
  contactBodyContainer.classList.add("contact-body-container");

  location.classList.add("location-wrapper");
  location.classList.add("info");

  hours.classList.add("hours-wrapper");
  hours.classList.add("info");

  contact.classList.add("contact-wrapper");
  contact.classList.add("info");

  //append
  contactMainHeadingContainer.appendChild(contactMainHeading);

  location.appendChild(locationHeading);
  location.appendChild(locationStreetName);
  location.appendChild(locationCityName);

  hours.appendChild(hoursHeading);
  hours.appendChild(hoursSet1);
  hours.appendChild(hoursSet2);
  hours.appendChild(hoursDaysClose);

  contact.appendChild(contactHeading);
  contact.appendChild(contactPhone);
  contact.appendChild(contactEmail);

  contactBodyContainer.appendChild(location);
  contactBodyContainer.appendChild(hours);
  contactBodyContainer.appendChild(contact);

  pageContent.appendChild(contactMainHeadingContainer);
  pageContent.appendChild(contactBodyContainer);

  content.appendChild(pageContent);
};

export default createContactPage;
