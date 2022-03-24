import { data } from "./jackets/products.js";

// showing product details
const detailContainer = document.querySelector(".detail-result");
const activePageNav = document.querySelector("#active-detail");
const pageTitle = document.querySelector(".page-title");

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const product = data.find(function (product) {
  if (product.id === id) {
    return true;
  }

  const img = product.image.fields.file.url;
  pageTitle.innerHTML = `Rainydays | ${product.title}`;
  activePageNav.innerHTML = `${product.title}`;

  detailContainer.innerHTML = `
  <div class="img-container">
  <img src=${img} alt="${product.title}" class="product-img"/>
  </div>
  <div class="product-details">
  <h1>${product.title}</h1>
  <h2>$${product.price}</h2>
  <select name="color" required>
    <option>Select color</option>
    <option>${product.color[0]}</option>
    <option>${product.color[1]}</option>
    <option>${product.color[2]}</option>
    <option>${product.color[3]}</option>
   </select> 
  <select name="size" required>
      <option>Select size</option>
      <option>${product.size[0]}</option>
      <option>${product.size[1]}</option>
      <option>${product.size[2]}</option>
      <option>${product.size[3]}</option>
      <option>${product.size[4]}</option>
  </select>
  <button class="cta add-to-cart" data-product="${product.id}">Add to cart</button>
  <h2>Product information</h2>
  <p>${product.description}</p>
  </div>`;
});

// adding products to cart
const addToCartButton = document.querySelector(".add-to-cart");
const cart = document.querySelector(".cart");
const CartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
let cartArray = [];

addToCartButton.onclick = function (product) {
  const itemToAdd = product.id;
  cartArray.push(itemToAdd);
  showCartItems(cartArray);
  localStorage.setItem("cartList", JSON.stringify(cartArray));
};

// show cart when add to cart button is clicked
const showCart = () => {
  const addToCartButton = document.querySelector(".add-to-cart");
  const cartItems = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  addToCartButton.addEventListener("click", () => {
    cartItems.classList.add("showCart");
    cartOverlay.classList.add("transparentBackground");
  });
};

showCart();

/*const showCart = () => {
  addToCartButton.addEventListener("click", () => {
    cartItems.classList.toggle("showCart");
    cartOverlay.classList.toggle("transparentBackground");
  });
};

showCart();*/

// displaying products in cart
function showCartItems(cartItems) {
  CartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    CartList.innerHTML += `<div class="cart-element">
    <div style="background-image: url${cartImage}" class="product-img"></div>
      <h3>${cartElement.title}</h3>
      <p>$${cartElement.price}</p>
      </div>`;
  });
  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}
