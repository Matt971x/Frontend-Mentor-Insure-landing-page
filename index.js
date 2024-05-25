const navBarMobile = document.querySelector(".nav-links-mobile");
const iconMenu = document.querySelector(".menu-burger img");

iconMenu.addEventListener("click", () => {
  let currentSrc = iconMenu.getAttribute("src");

  if (currentSrc === "./images/icon-hamburger.svg") {
    iconMenu.setAttribute("src", "./images/icon-close.svg");
    console.log("if");
    navBarMobile.style.display = "flex";
  } else {
    iconMenu.setAttribute("src", "./images/icon-hamburger.svg");
    console.log("else");
    navBarMobile.style.display = "none";
  }
});
