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
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", validateForm);

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

  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
    message.style.borderColor = "#caeec2";
    message.style.backgroundColor = "#e5f5df";
  } else {
    messageError.style.display = "block";
    message.style.border = "1px solid red";
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
  if (validatePhoneNumber(phoneNumber.value, 8) === true) {
    phoneNumberError.style.display = "none";
    phoneNumber.style.border = "1px solid #caeec2";
    phoneNumber.style.backgroundColor = "#e5f5df";
  } else {
    phoneNumberError.style.display = "block";
    phoneNumber.style.border = "1px solid red";
  }
}

function checkMessage() {
  if (checkLength(message.value, 10) === true) {
    messageError.style.display = "none";
    message.style.border = "1px solid #caeec2";
    message.style.backgroundColor = "#e5f5df";
  } else {
    messageError.style.display = "block";
    message.style.border = "1px solid red";
  }
}

fullName.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);
phoneNumber.addEventListener("keyup", checkPhone);
message.addEventListener("keyup", checkMessage);

//Form submit success
function showSuccess() {
  if (
    checkLength(fullName.value, 0) &&
    validateEmail(email.value) &&
    validatePhoneNumber(phoneNumber.value, 7) &&
    checkLength(message.value, 10)
  ) {
    successMessage.style.display = "block";
    form.reset();
    fullName.style.border = "1px solid black";
    fullName.style.backgroundColor = "transparent";
    email.style.border = "1px solid black";
    email.style.backgroundColor = "transparent";
    phoneNumber.style.border = "1px solid black";
    phoneNumber.style.backgroundColor = "transparent";
    message.style.border = "1px solid black";
    message.style.backgroundColor = "transparent";
  } else {
    successMessage.style.display = "none";
  }
}
showSuccess();

form.addEventListener("submit", showSuccess);
