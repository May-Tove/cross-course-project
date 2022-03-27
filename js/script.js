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

// show cart when icon is clicked
const cartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
const cartIcon = document.querySelector(".shopping-bag-icon");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart");

cartIcon.onclick = function (event) {
  cartItems.classList.add("showCart");
  cartOverlay.classList.add("transparentBackground");
  const cartProducts = JSON.parse(localStorage.getItem("cartList"));

  showCartItems(cartProducts);
  console.log("hello", cartItems);

  localStorage.setItem("cartList", JSON.stringify(cartProducts));
};

/*cartIcon.onclick = function (event) {
cart.classList.add("showCart");
    cartOverlay.classList.add("transparentBackground");
    const cartItems = JSON.parse(localStorage.getItem("cartList"));
  showCartItems(cartArray);

  localStorage.setItem("cartList", JSON.stringify(cartArray));
};*/

//tidligere kode
/*const showCart = () => {
  const cartIcon = document.querySelector(".shopping-bag-icon");
  const cart = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  cartIcon.addEventListener("click", () => {
    cart.classList.add("showCart");
    cartOverlay.classList.add("transparentBackground");
    const cartProducts = JSON.parse(localStorage.getItem("cartList"));
    const cartItems = JSON.parse(localStorage.getItem("cartList"));
    showCartItems(cartProducts);
    showCartItems(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  });
};

showCart();*/

//close cart
const closeCart = () => {
  const closeCartButton = document.querySelector(".close-cart");
  const cartItems = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  closeCartButton.addEventListener("click", () => {
    cartItems.classList.remove("showCart");
    cartOverlay.classList.remove("transparentBackground");
  });
};

closeCart();

// adding products to cart
/*const addToCartButton = document.querySelectorAll(".add-to-cart");
const CartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
let cartArray = [];

addToCartButton.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = coats.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCartItems(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});*/

//display cart
/*if (cartItems) {
  const cartList = document.querySelector(".cart-list");
  let total = 0;
  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    cartList.innerHTML += `<div class="cart-element">
                                  <div style="background-image: url(${cartImage})" class="product-img"></div>
                                  <div>
                                      <h3>${cartElement.title}</h3>
                                      <p>$${cartElement.price}</p>
                                  </div>
                                  <button class="remove-button">Remove</button>
                                  </div>`;
  });

  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}*/

const cartItems = document.querySelector(".cart");

function showCartItems(cartItems) {
  const cartList = document.querySelector(".cart-list");
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    cartList.innerHTML += `<div class="cart-element">
                            <div style="background-image: url(${cartImage})" class="product-img"></div>
                            <div>  
                                <h3>${cartElement.title}</h3>
                                <p>$${cartElement.price}</p>
                            </div>
                            <button class="remove-button">Remove</button>
                            </div>`;
  });
  totalContainer.innerHTML = `<h3>Total: $${total}</h3>`;
}

//remove items from cart
/*const removeButton = document.querySelector(".remove-button");

removeButton.onclick = function (event) {
  console.log("clicked");
  const cartProducts = JSON.parse(localStorage.getItem("cartList"));
  updateCartTotal();
  localStorage.setItem("cartList", JSON.stringify(cartProducts));
};

function updateCartTotal() {}*/

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
