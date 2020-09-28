const scrollOffset = 100;

const scrollElements = document.querySelectorAll(".animated-on-scroll");

//check if element is in view
const elementInView = (el) => {
  const elTop = el.getBoundingClientRect().top;
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
