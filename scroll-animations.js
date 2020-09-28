const scrollOffset = 100;

const scrollElements = document.querySelectorAll(".animated-on-scroll");

const elementInView = (el) => {
  const elTop = el.getBoundingClientRect().top;
  if (
    elTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  ) {
    console.log(el, "scrolled");
  }
  return (
    elTop <=
    (window.innerHeight || document.documentElement.clientHeight) - scrollOffset
  );
};

const animateOnScroll = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add("scrolled");
    } else {
      el.classList.remove("scrolled");
    }
  });
};

window.addEventListener("scroll", () => {
  animateOnScroll();
});
