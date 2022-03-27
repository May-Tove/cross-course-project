import { coats } from "./jackets/products.js";

// showing product details
const detailContainer = document.querySelector(".detail-result");
const activePageNav = document.querySelector("#active-detail");
const pageTitle = document.querySelector(".page-title");

const querystring = document.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

const product = coats.find(function (product) {
  if (product.id === id) {
    return true;
  }
});

function displayDetails() {
  //loader
  detailContainer.innerHTML = "";

  const img = product.image.fields.file.url;
  pageTitle.innerHTML = `Rainydays | ${product.title}`;
  activePageNav.innerHTML = `${product.title}`;

  //display details
  detailContainer.innerHTML = `<div class="img-container">
                                    <img src=${img} alt="${product.title}" class="product-img"/>
                                </div>
                                <div class="product-details">
                                    <h1>${product.title}</h1>
                                    <h2>$${product.price}</h2>
                                    <p>Color: ${product.color}</p>
                                    <select name="size id="size-select">
                                        <option value="">Select size</option>
                                        <option value="1">${product.size[0]}</option>
                                        <option value="2">${product.size[1]}</option>
                                        <option value="3">${product.size[2]}</option>
                                        <option value="4">${product.size[3]}</option>
                                        <option value="5">${product.size[4]}</option>
                                    </select>
                                    <button class="cta add-to-cart" data-product="${product.id}">Add to cart</button>
                                    <h3 class="product-info">Product information</h3>
                                    <p>${product.description}</p>
                                    <h4>Shipping</h4>
                                    <p>${product.shipping}</p>
                                    <h4>Designed for</h4>
                                    <p>${product.designedFor}</p>
                                    <h4>Materials</h4>
                                    <p>${product.material}</p>
                                    </div>`;
}

displayDetails();

// show cart when add to cart button is clicked
function showCart() {
  const addToCartButton = document.querySelector(".add-to-cart");
  const cart = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  addToCartButton.addEventListener("click", () => {
    cart.classList.add("showCart");
    cartOverlay.classList.add("transparentBackground");
  });
}

showCart();

// adding products to cart and showing cart

const addToCartButton = document.querySelector(".add-to-cart");
const CartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
let cartArray = [];

addToCartButton.onclick = function (event) {
  //const cartArray = JSON.parse(localStorage.getItem("cartList"));
  cartArray.push(product);
  showCartItems(cartArray);

  localStorage.setItem("cartList", JSON.stringify(cartArray));
};

// displaying products in cart
function showCartItems(cartItems) {
  CartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    const cartImage = cartElement.image.fields.file.url;

    CartList.innerHTML += `<div class="cart-element">
                            <div style="background-image: url(${cartImage})" class="product-img"></div>
                            <div>
                            <h3>${cartElement.title}</h3>
                            <p>$${cartElement.price}</p>
                            </div>
                            <button class="remove-button">Remove</button>
                            </div>`;
  });
  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}
