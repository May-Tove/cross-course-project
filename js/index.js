import { data } from "./jackets/products.js";

const popularProducts = document.querySelector(".popular-products");
const cart = document.querySelector(".cart");
const CartList = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total-container");
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

//going to details page by clicking a product
/*const product = document.querySelectorAll(".product");
product.onclick = function (productDetails) {
  const productDetails = data.find(productDetails.id);
  console.log(productDetails);
};*/

// adding products to cart
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(function (button) {
  button.onclick = function (event) {
    const itemToAdd = data.find(
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

    CartList.innerHTML += `<div class="cart-element">
    <img src="${cartElement.image} alt="${cartElement.title}>
      <h3>${cartElement.title}</h3>
      <p>$${cartElement.price}</p>
      </div>`;
  });
  totalContainer.innerHTML = `<h4>Total: $${total}</h4>`;
}
