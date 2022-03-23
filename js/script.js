// showing menu when clicked on mobile version
const showMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const mainMenu = document.querySelector(".nav-links");
  const menuLinks = document.querySelectorAll(".nav-links li");

  //toggle nav
  hamburger.addEventListener("click", () => {
    mainMenu.classList.toggle("show");

    //animate links
    menuLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

showMenu();

// show cart when clicked
const showCart = () => {
  const cart = document.querySelector(".shopping-bag-icon");
  const cartItems = document.querySelector(".cart");
  const cartOverlay = document.querySelector(".cart-overlay");

  //toggle nav
  cart.addEventListener("click", () => {
    cartItems.classList.toggle("showCart");
    cartOverlay.classList.toggle("transparentBackground");
  });
};

showCart();

//show search input

const showSearch = () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchInput = document.querySelector("#search-input");
  const searchButton = document.querySelector(".search-btn");

  searchIcon.addEventListener("click", () => {
    searchInput.classList.toggle("showSearch");
    searchButton.classList.toggle("showSearch");
  });
};

showSearch();

/*searchIcon.onclick = function () {
  searchInput.style.display = "block";
  searchButton.style.display = "block";
};*/
