btnBurger = document.querySelector(".btn--burger");

const handleClick = function (e) {
  this.classList.toggle("active");
};

btnBurger.addEventListener("click", handleClick);
