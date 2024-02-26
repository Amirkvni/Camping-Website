const navbtn = document.querySelector(".nav__btn");
let navOpen = false;
navbtn.addEventListener("click", () => {
  if (navOpen == true) {
    navbtn.classList.remove("nav__btn--open");
    navOpen = false;
  } else {
    navbtn.classList.add("nav__btn--open");
    navOpen = true;
  }
});
