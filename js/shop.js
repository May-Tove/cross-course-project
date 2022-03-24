import { data } from "./jackets/products.js";

const allProducts = document.querySelector(".list-of-products");

// getting and displaying popular products
data.forEach(function (product) {
  const img = product.image.fields.file.url;

  allProducts.innerHTML += `<article class="product">
    <a href="detail.html?id=${product.id}">
    <div class="img-container">
    <img src=${img} alt="${product.title}" class="product-img"/>
    </div>
    <h3>${product.title}</h3>
    <h4>$${product.price}</h4>
    </a>
    <button class="cta add-to-cart" data-product="${product.id}">Add to cart</button>
    </article>`;
});
