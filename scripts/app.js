const navbtn = document.querySelector(".nav__btn");
const navMenu = document.querySelector(".nav-menu");
let navOpen = false;
navbtn.addEventListener("click", () => {
  if (navOpen == true) {
    navbtn.classList.remove("nav__btn--open");
    navMenu.classList.remove("nav-menu--open");

    navOpen = false;
  } else {
    navbtn.classList.add("nav__btn--open");
    navOpen = true;
    navMenu.classList.add("nav-menu--open");
  }
});
