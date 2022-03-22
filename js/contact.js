const form = document.querySelector(".contact-form");

const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const phoneNumber = document.querySelector("#phone");
const phoneNumberError = document.querySelector("#phone-error");

const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");

const submitButton = document.querySelector(".submit-btn");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validatePhoneNumber(phoneNumber.value) === true) {
    phoneNumberError.style.display = "none";
  } else {
    phoneNumberError.style.display = "block";
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

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
