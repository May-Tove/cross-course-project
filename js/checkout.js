// order summary
const itemsInCart = JSON.parse(localStorage.getItem("cartList"));
const orderSummary = document.querySelector(".summary-content");
const totalContainer = document.querySelector(".order-total");
const confirmTotal = document.querySelector(".confirm-total");
console.log(itemsInCart);

if (itemsInCart) {
  let total = 0;
  itemsInCart.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    orderSummary.innerHTML += `<div class="cart-element">
                                <div style="background-image: url(${cartImage})" class="product-img"></div>
                                <div>
                                    <h3>${cartElement.title}</h3>
                                    <p>$${cartElement.price}</p>
                                </div>
                                <button class="remove-button">Remove</button>
                                </div>`;
  });

  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
  confirmTotal.innerHTML = `<h3>Total: $${total}</h3>`;
}

// details form
const infoForm = document.querySelector(".info-form");

const fullName = document.querySelector("#full-name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const phoneNumber = document.querySelector("#phone");
const phoneNumberError = document.querySelector("#phone-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zip-error");

const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");

const confirmButton = document.querySelector(".confirm");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
    fullName.style.borderColor = "#caeec2";
    fullName.style.backgroundColor = "#e5f5df";
  } else {
    nameError.style.display = "block";
    fullName.style.border = "1px solid red";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.borderColor = "#caeec2";
    email.style.backgroundColor = "#e5f5df";
  } else {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
  }

  if (validatePhoneNumber(phoneNumber.value) === true) {
    phoneNumberError.style.display = "none";
    phoneNumber.style.borderColor = "#caeec2";
    phoneNumber.style.backgroundColor = "#e5f5df";
  } else {
    phoneNumberError.style.display = "block";
    phoneNumber.style.border = "1px solid red";
  }

  if (checkLength(address.value, 5) === true) {
    addressError.style.display = "none";
    address.style.borderColor = "#caeec2";
    address.style.backgroundColor = "#e5f5df";
  } else {
    addressError.style.display = "block";
    address.style.border = "1px solid red";
  }

  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
    zip.style.borderColor = "#caeec2";
    zip.style.backgroundColor = "#e5f5df";
  } else {
    zipError.style.display = "block";
    zip.style.border = "1px solid red";
  }

  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
    city.style.borderColor = "#caeec2";
    city.style.backgroundColor = "#e5f5df";
  } else {
    cityError.style.display = "block";
    city.style.border = "1px solid red";
  }
}

confirmButton.addEventListener("click", validateForm);

//Payment details form
const paymentForm = document.querySelector(".payment-form");
const creditCard = document.querySelector("#credit-card");
const cardError = document.querySelector("#card-error");

const expiration = document.querySelector("#expiration");
const expirationError = document.querySelector("#expiration-error");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvc-error");

function validatePaymentForm(event) {
  event.preventDefault();

  if (checkLength(creditCard.value, 16) === true) {
    cardError.style.display = "none";
    creditCard.style.borderColor = "#caeec2";
    creditCard.style.backgroundColor = "#e5f5df";
  } else {
    cardError.style.display = "block";
    creditCard.style.border = "1px solid red";
  }

  if (checkLength(expiration.value, 3) === true) {
    expirationError.style.display = "none";
    expiration.style.borderColor = "#caeec2";
    expiration.style.backgroundColor = "#e5f5df";
  } else {
    expirationError.style.display = "block";
    expiration.style.border = "1px solid red";
  }

  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
    cvc.style.borderColor = "#caeec2";
    cvc.style.backgroundColor = "#e5f5df";
  } else {
    cvcError.style.display = "block";
    cvc.style.border = "1px solid red";
  }
}

confirmButton.addEventListener("click", validatePaymentForm);

// Checking length of input
function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Checking for valid email address
function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

// Checking for valid phone number
function validatePhoneNumber(phoneNumber) {
  const regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
  const patternMatches = regEx.test(phoneNumber);
  return patternMatches;
}

//Check if input field is valid while typing
function checkName() {
  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
    fullName.style.border = "1px solid #caeec2";
    fullName.style.backgroundColor = "#e5f5df";
  } else {
    nameError.style.display = "block";
    fullName.style.border = "1px solid red";
  }
}

function checkEmail() {
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.border = "1px solid #caeec2";
    email.style.backgroundColor = "#e5f5df";
  } else {
    emailError.style.display = "block";
    email.style.border = "1px solid red";
  }
}

function checkPhone() {
  if (validatePhoneNumber(phoneNumber.value) === true) {
    phoneNumberError.style.display = "none";
    phoneNumber.style.border = "1px solid #caeec2";
    phoneNumber.style.backgroundColor = "#e5f5df";
  } else {
    phoneNumberError.style.display = "block";
    phoneNumber.style.border = "1px solid red";
  }
}

function checkAddress() {
  if (checkLength(address.value, 5) === true) {
    addressError.style.display = "none";
    address.style.border = "1px solid #caeec2";
    address.style.backgroundColor = "#e5f5df";
  } else {
    addressError.style.display = "block";
    address.style.border = "1px solid red";
  }
}

function checkZip() {
  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
    zip.style.border = "1px solid #caeec2";
    zip.style.backgroundColor = "#e5f5df";
  } else {
    zipError.style.display = "block";
    zip.style.border = "1px solid red";
  }
}

function checkCity() {
  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
    city.style.border = "1px solid #caeec2";
    city.style.backgroundColor = "#e5f5df";
  } else {
    cityError.style.display = "block";
    city.style.border = "1px solid red";
  }
}

function checkCreditCard() {
  if (checkLength(creditCard.value, 16) === true) {
    cardError.style.display = "none";
    creditCard.style.border = "1px solid #caeec2";
    creditCard.style.backgroundColor = "#e5f5df";
  } else {
    cardError.style.display = "block";
    creditCard.style.border = "1px solid red";
  }
}

function checkExp() {
  if (checkLength(expiration.value, 3) === true) {
    expirationError.style.display = "none";
    expiration.style.border = "1px solid #caeec2";
    expiration.style.backgroundColor = "#e5f5df";
  } else {
    expirationError.style.display = "block";
    expiration.style.border = "1px solid red";
  }
}

function checkCvc() {
  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
    cvc.style.border = "1px solid #caeec2";
    cvc.style.backgroundColor = "#e5f5df";
  } else {
    cvcError.style.display = "block";
    cvc.style.border = "1px solid red";
  }
}

fullName.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);
phoneNumber.addEventListener("keyup", checkPhone);
address.addEventListener("keyup", checkAddress);
zip.addEventListener("keyup", checkZip);
city.addEventListener("keyup", checkCity);
creditCard.addEventListener("keyup", checkCreditCard);
expiration.addEventListener("keyup", checkExp);
cvc.addEventListener("keyup", checkCvc);

//show order confirmation
const orderConfirmed = document.querySelector(".order-confirmed");
const messageOverlay = document.querySelector(".message-overlay");

function showSuccess() {
  if (
    checkLength(fullName.value, 0) &&
    validateEmail(email.value) &&
    validatePhoneNumber(phoneNumber.value) &&
    checkLength(address.value, 0) &&
    checkLength(zip.value, 3) &&
    checkLength(city.value, 0) &&
    checkLength(creditCard.value, 15) &&
    checkLength(expiration.value, 3) &&
    checkLength(cvc.value, 2)
  ) {
    messageOverlay.style.visibility = "visible";
    form.reset();
  } else {
    messageOverlay.style.visibility = "hidden";
  }
}
showSuccess();

confirmButton.addEventListener("click", showSuccess);
