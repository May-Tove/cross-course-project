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

// show cart when icon is clicked
const showCart = () => {
  const cart = document.querySelector(".shopping-bag-icon");
  const cartItems = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  cart.addEventListener("click", () => {
    cartItems.classList.add("showCart");
    cartOverlay.classList.add("transparentBackground");
  });
};

showCart();

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
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector(".cart");
const CartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
let cartArray = [];

addToCartButtons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = coats.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(itemToAdd);
    showCartItems(cartArray);
    localStorage.setItem("cartList", JSON.stringify(cartArray));
  };
});

function showCartItems(cartItems) {
  cart.style.display = "block";
  CartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    CartList.innerHTML += `<div class="cart-element">
    <div style="background-image: url(${cartImage})" class="product-img"></div>
      <h3>${cartElement.title}</h3>
      <p>$${cartElement.price}</p>
      <button>Remove</button>
      </div>`;
  });
  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}

//show search input

const showSearch = () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector(".search-btn");

  searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("showSearch");
    searchButton.classList.toggle("showSearch");
  });
};

showSearch();

/*searchIcon.onclick = function () {
  searchInput.style.display = "block";
  searchButton.style.display = "block";
};*/
