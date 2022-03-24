// order summary
const cartItems = JSON.parse(localStorage.getItem("cartList"));
const orderSummary = document.querySelector(".summary-content");
const totalContainer = document.querySelector(".total");
console.log(cartItems);

let total = 0;
cartItems.forEach(function (cartElement) {
  total += cartElement.price;

  orderSummary.innerHTML += `<div class="cart-element">
    <img src="${cartElement.image} alt="${cartElement.title}>
      <h3>${cartElement.title}</h3>
      <p>$${cartElement.price}</p>
      </div>`;
});
totalContainer.innerHTML = `<h4>Total $${total}</h4>`;

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

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
    fullName.style.borderColor = "#caeec2";
    fullName.style.backgroundColor = "#e5f5df";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    email.style.borderColor = "#caeec2";
    email.style.backgroundColor = "#e5f5df";
  } else {
    emailError.style.display = "block";
  }

  if (validatePhoneNumber(phoneNumber.value) === true) {
    phoneNumberError.style.display = "none";
    phoneNumber.style.borderColor = "#caeec2";
    phoneNumber.style.backgroundColor = "#e5f5df";
  } else {
    phoneNumberError.style.display = "block";
  }

  if (checkLength(address.value, 0) === true) {
    addressError.style.display = "none";
    address.style.borderColor = "#caeec2";
    address.style.backgroundColor = "#e5f5df";
  } else {
    addressError.style.display = "block";
  }

  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
    zip.style.borderColor = "#caeec2";
    zip.style.backgroundColor = "#e5f5df";
  } else {
    zipError.style.display = "block";
  }

  if (checkLength(city.value, 0) === true) {
    cityError.style.display = "none";
    city.style.borderColor = "#caeec2";
    city.style.backgroundColor = "#e5f5df";
  } else {
    cityError.style.display = "block";
  }
}

infoForm.addEventListener("submit", validateForm);

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
  }

  if (checkLength(expiration.value, 3) === true) {
    expirationError.style.display = "none";
    expiration.style.borderColor = "#caeec2";
    expiration.style.backgroundColor = "#e5f5df";
  } else {
    expirationError.style.display = "block";
  }

  if (checkLength(cvc.value, 2) === true) {
    cvcError.style.display = "none";
    cvc.style.borderColor = "#caeec2";
    cvc.style.backgroundColor = "#e5f5df";
  } else {
    cvcError.style.display = "block";
  }
}

paymentForm.addEventListener("submit", validatePaymentForm);

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

// confirmation that order is confirmed
/*const confirmOrder = document.querySelector(".confirm-order");
const openConfirmation = document.querySelector("#confirm-order-btn");
const closeButton = document.querySelector(".close-btn");

openConfirmation.addEventListener("click", () => {
  confirmOrder.showConfirmOrder();
});

closeButton.addEventListener("click", () => {
  confirmOrder.close();
});*/

/*confirmButton.onclick = function () {
  if (
    checkLength(fullName.value, 0) &&
    validateEmail(email.value) &&
    validatePhoneNumber(phoneNumber.value) &&
    checkLength(address.value, 0) &&
    checkLength(zip.value, 3) &&
    checkLength(city.value, 0) &&
    checkLength(creditCard.value, 0) &&
    checkLength(expiration.value, 0) &&
    checkLength(cvc.value, 0)
  ) {
    confirmOrder.innerHTML = `<div>
      <h2>Your order is confirmed</h2>
      <p>Thank you for shopping at Rainydays, your order will be delivered within 2-3 working days</p>
      <button class="cta close-btn">Home</button>
      </div>`;
    form.reset();
  } else {
    submitMessage.innerHTML = "";
  }
  form.reset();
};*/