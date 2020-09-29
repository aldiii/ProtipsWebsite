scrollTopBtn = document.querySelector(".btn--scroll-top");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
});

const scrollTop = () => {
  window.scroll({
    behavior: "smooth",
    top: 0,
    left: 0,
  });
};

scrollTopBtn.addEventListener("click", scrollTop);
