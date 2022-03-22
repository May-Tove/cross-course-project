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
