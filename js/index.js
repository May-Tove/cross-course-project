import { data } from "./jackets/products.js";

const popularProducts = document.querySelector(".popular-products");
const cartIcon = document.querySelector(".shopping-bag-icon");
const cart = document.querySelector(".cart");
const CartItem = document.querySelector(".specific-product");
const cartOverlay = document.querySelector(".cart-overlay");
let cartArray = [];

// fetching popular products
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
    productInCart(cartArray);
  };
});

function productInCart(cartItems) {
  cartItems.style.display = "block";
}

/*function getProducts() {
  const productList = data.jackets;

  for (let i = 0; i < productList.length; i++) {
    if (i === 4) {
      break;
    }

    const img = productList[i].image.fields.file.url;
    const title = productList[i].title;
    const price = productList[i].price;

    popularProducts.innerHTML += `<article class="product">
    <a href="details.html?id=${productList[i].id}">
    <div class="img-container">
    <img src=${img} alt="${title}" class="product-img"/>
    </div>
    <h3>${title}</h3>
    <h4>$${price}</h4>
    </a>
    <button class="cta add-to-cart" data-product="${productList[i].id}">Add to cart</button>
    </article>`;
  }
}

getProducts();*/
