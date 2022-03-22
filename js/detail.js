const detailContainer = document.querySelector(".detail-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "http://127.0.0.1:5502/detail.html/" + id;

async function getProductDetails() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);
  } catch (erro) {
    console.log(error);
  }
}

getProductDetails();
