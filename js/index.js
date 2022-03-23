import { data } from "./jackets/products.js";

const popularProducts = document.querySelector(".popular-products");
const cart = document.querySelector(".cart");
const CartList = document.querySelector(".specific-product");
let cartArray = [];

// getting and displaying popular products
data.forEach(function (product) {
  const img = product.image.fields.file.url;

  popularProducts.innerHTML += `<article class="product">
    <a href="details.html?id=${product.id}">
    <div class="img-container">
    <img src=${img} alt="${product.title}" class="product-img"/>
    </div>
    <h3>${product.title}</h3>
    <h4>$${product.price}</h4>
    </a>
    <button class="cta add-to-cart" data-product="${product.id}">Add to cart</button>
    </article>`;
});

// adding products to cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function (button) {
  button.onclick = function (event) {
    const productToAdd = data.find(
      (item) => item.id === event.target.dataset.product
    );
    cartArray.push(productToAdd);
    console.log(productToAdd);
  };
});
