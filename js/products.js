const data = {
  jackets: [
    {
      id: 1,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "hiking jacket",
      price: 73.5,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
    {
      id: 2,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "skiing jacket",
      price: 70.99,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
    {
      id: 3,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "waterproof jacket",
      price: 83.99,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
    {
      id: 4,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "runner",
      price: 65.8,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
    {
      id: 5,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "hiking jacket",
      price: 70,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
    {
      id: 6,
      image: { fields: { file: { url: "../images/jacket.jpg" } } },
      title: "hiking jacket",
      price: 70,
      description:
        "jacket for men made in soft-shell is a lightweight and comfortable jacket made specifically for hiking and other outdoor activities",
      size: ["xs", "s", "m", "l", "xl"],
      color: ["blue", "red", "green", "yellow"],
    },
  ],
};

console.log(data);

const productsDOM = document.querySelector(".popular-products");

// fetching new products
function getProducts() {
  const productList = data.jackets;

  for (let i = 0; i < productList.length; i++) {
    if (i === 4) {
      break;
    }

    const img = productList[i].image.fields.file.url;
    const title = productList[i].title;
    const price = productList[i].price;

    productsDOM.innerHTML += `<article class="product">
    <a href="details.html?id=${productList[i].id}">
    <div class="img-container">
    <img src=${img} alt="product" class="product-img"/>
    </div>
    <h3>${title}</h3>
    <h4>$${price}</h4>
    </a>
    </article>`;
  }
}

getProducts();
