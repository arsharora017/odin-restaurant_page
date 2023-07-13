//module for creating the contact page

const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  const form = document.createElement("form");
  form.classList.add("contact-form");

  const headingInput = document.createElement("input");
  headingInput.type = "text";
  headingInput.placeholder = "Enter heading";
  form.appendChild(headingInput);

  const addressInput = document.createElement("input");
  addressInput.type = "text";
  addressInput.placeholder = "Enter address";
  form.appendChild(addressInput);

  const phoneInput = document.createElement("input");
  phoneInput.type = "text";
  phoneInput.placeholder = "Enter phone";
  form.appendChild(phoneInput);

  const submitButton = document.createElement("input");
  submitButton.type = "button";
  submitButton.value = "Submit";
  form.appendChild(submitButton);

  pageContent.appendChild(form);
  content.appendChild(pageContent);
};

export default createContactPage;
