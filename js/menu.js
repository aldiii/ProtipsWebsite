btnBurger = document.querySelector(".btn--burger");
mainNav = document.getElementById("main-nav__collapse");

const handleClick = function (e) {
  this.classList.toggle("active");
  mainNav.classList.toggle("active");
};

btnBurger.addEventListener("click", handleClick);
