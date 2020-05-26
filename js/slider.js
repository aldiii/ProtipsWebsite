const carousel = document.querySelector(".testimonial__carousel");
const items = document.querySelectorAll(".testimonial__slide");
const auto = true;
const intervalTime = 5000;
let slideInterval;
const slideCount = Math.ceil(
  (carousel.offsetWidth / items[0].offsetWidth) * items.length
);
let currentSlide = 0;
const dots = document.querySelector(".testimonial__dots");

const runSlider = () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, intervalTime);
};
const moveSlide = (slide) => {
  carousel.style.transform = `translateX(${slide * -100}%)`;
};
const toogleActive = (dot) => {
  dots.children[dot].classList.toggle("active");
};
const generateDots = function (count) {
  for (let i = 0; i < count; ++i) {
    const dot = document.createElement("span");
    dot.id = i;
    dot.classList.add("dot");
    if (i === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", goToSlide);
    dots.appendChild(dot);
  }
};

const goToSlide = function (e) {
  toogleActive(currentSlide);
  currentSlide = this.id * 1;
  moveSlide(currentSlide);
  toogleActive(currentSlide);
  if (auto) runSlider;
};

const nextSlide = () => {
  toogleActive(currentSlide);
  currentSlide = currentSlide < slideCount - 1 ? ++currentSlide : 0;
  moveSlide(currentSlide);
  toogleActive(currentSlide);
};

generateDots(slideCount);

if (auto) runSlider();
