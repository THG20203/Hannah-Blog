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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
    navbar.classList.remove("navbar__background--transparent");
    navbar.classList.add("navbar__background--colored");
    btn.style.top = "-50vh";
  }
  else {
    navbar.classList.remove("navbar__background--colored");
    navbar.classList.add("navbar__background--transparent");
    btn.style.top = "3vh";
  }
});
