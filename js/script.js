import { coats } from "./jackets/products.js";

// showing menu when clicked on mobile version
const showMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const mainMenu = document.querySelector(".nav-links");
  const menuOverlay = document.querySelector(".menu-overlay");

  hamburger.addEventListener("click", () => {
    mainMenu.classList.toggle("show");
    menuOverlay.classList.toggle("transparentBackground");
  });
};

showMenu();

//close menu
const closeMenu = () => {
  const closeMenuButton = document.querySelector(".close-menu");
  const mainMenu = document.querySelector(".nav-links");
  const menuOverlay = document.querySelector(".menu-overlay");

  closeMenuButton.addEventListener("click", () => {
    mainMenu.classList.remove("show");
    menuOverlay.classList.remove("transparentBackground");
  });
};

closeMenu();

// cart variables
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
const cartIcon = document.querySelector(".shopping-bag-icon");
const cartOverlay = document.querySelector(".cart-overlay");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector(".close-cart");
const itemsInCart = JSON.parse(localStorage.getItem("cartList"));

// show cart when icon is clicked
cartIcon.onclick = function (event) {
  cart.classList.add("showCart");
  cartOverlay.classList.add("transparentBackground");
};

//let item added in cart stay in cart even if you visit other pages
if (itemsInCart) {
  let total = 0;
  itemsInCart.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    cartList.innerHTML += `<div class="cart-element">
                                  <div style="background-image: url(${cartImage})" class="product-img"></div>
                                  <div>
                                      <h3>${cartElement.title}</h3>
                                      <p>$${cartElement.price}</p>
                                  </div>
                                  <img src="../images/Icon feather-trash-2.svg" alt="trashcan icon">
                                  </div>`;
  });

  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}

//close cart
closeCart.onclick = function (event) {
  cart.classList.remove("showCart");
  cartOverlay.classList.remove("transparentBackground");
};

//show search input
const showSearch = () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchWrapper = document.querySelector(".search-wrapper");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector(".search-btn");

  searchIcon.addEventListener("click", () => {
    searchWrapper.classList.toggle("showSearch");
    searchInput.classList.toggle("showSearch");
    searchButton.classList.toggle("showSearch");
  });
};

showSearch();

//back button
const backButton = document.querySelector(".back-button");

function goBack() {
  history.back();
}

backButton.addEventListener("click", goBack);

//accessible back button
function goBackA() {
  history.back();
}

backButton.addEventListener("onkeydown", goBackA);
