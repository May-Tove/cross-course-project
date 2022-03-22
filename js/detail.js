import { data } from "./jackets/products.js";

const detailContainer = document.querySelector(".detail-result");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
const url = "data.jackets" + id;

function getProductDetails() {}

getProductDetails();

//add to cart
