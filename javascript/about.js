'use strict';

const btn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

btn.addEventListener("click", () => {
    navbar.classList.remove("navbar__animation--moveIn");  // reset animation
    navbar.classList.add("navbar__initial");
    void navbar.offsetWidth; // trigger reflow
    navbar.classList.add("navbar__animation--moveIn"); // start animation
    navbar.classList.remove("navbar__initial");
});

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
    navbar.classList.remove("navbar__background--opaque");
    navbar.classList.add("navbar__background--white");
    btn.style.top = "-50vh";
  }
  else {
    navbar.classList.remove("navbar__background--white");
    navbar.classList.add("navbar__background--opaque");
    btn.style.top = "3vh";
  }
});
