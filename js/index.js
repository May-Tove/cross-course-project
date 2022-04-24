// get popular products
const baseUrl =
  "https://mayth.one/rainydays/wp-json/wc/store/products?featured=true";
const popularProducts = document.querySelector(".popular-products");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    popularProducts.innerHTML = "";

    products.forEach(function (product) {
      popularProducts.innerHTML += `<article class="product">
      <a href="detail.html?id=${product.id}">
      <div class="img-container">
      <img src=${product.images[0].src} alt="${product.images[0].alt}" class="product-img"/>
      <button class="view-btn">View</button>
      </div>
      <h3>${product.name}</h3>
      <h4>kr ${product.prices.price}</h4>
      </a>
      </article>`;
    });
  } catch (error) {
    console.log(error);
    popularProducts.innerHTML = "an error occurred";
  }
}

getProducts(baseUrl);
