import { coats } from "./jackets/products.js";

// get popular products and display them on page
const popularProducts = document.querySelector(".popular-products");

popularProducts.innerHTML = "";

for (let i = 0; i < coats.length; i++) {
  if (i === 4) {
    break;
  }
  let popular = coats[i];
  const img = popular.image.fields.file.url;

  popularProducts.innerHTML += `<article class="product">
          <a href="detail.html?id=${popular.id}">
          <div class="img-container">
          <img src=${img} alt="${popular.title}" class="product-img"/>
          <button class="view-btn">View</button>
          </div>
          <h3>${popular.title}</h3>
          <h4>$${popular.price}</h4>
          </a>
          </article>`;
}
