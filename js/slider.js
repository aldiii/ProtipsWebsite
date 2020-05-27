class Slider {
  constructor(sectionName, auto = true, intervalTime = 5000) {
    this.carousel = document.querySelector(`.${sectionName}__carousel`);
    this.items = document.querySelectorAll(`.${sectionName}__slide`);
    this.dots = document.querySelector(`.${sectionName}__dots`);
    this.auto = auto;
    this.intervalTime = intervalTime;
    this.slideInterval;
    this.slideCount = Math.ceil(
      (this.carousel.offsetWidth / this.items[0].offsetWidth) *
        this.items.length
    );
    this.currentSlide = 0;
    this.generateDots(this.slideCount);
    if (auto) this.runSlider();
  }

  generateDots(count) {
    for (let i = 0; i < count; ++i) {
      const dot = document.createElement("span");
      dot.id = i;
      dot.classList.add("dot");
      if (i === this.currentSlide) dot.classList.add("active");
      dot.onclick = this.goToSlide.bind(this);
      this.dots.appendChild(dot);
    }
  }

  runSlider() {
    this.slideInterval = setInterval(
      this.nextSlide.bind(this),
      this.intervalTime
    );
  }
  moveSlide(slide) {
    this.toggleActive(this.currentSlide);
    this.currentSlide = slide;

    this.carousel.style.transform = `translateX(${this.currentSlide * -100}%)`;
    this.toggleActive(this.currentSlide);
  }
  toggleActive(dot) {
    this.dots.children[dot].classList.toggle("active");
  }
  goToSlide(e) {
    if (this.slideInterval) clearInterval(this.slideInterval);
    let slide = e.target.id * 1;
    this.moveSlide(slide);
    if (this.auto) this.runSlider();
  }
  nextSlide() {
    let slide =
      this.currentSlide < this.slideCount - 1 ? this.currentSlide + 1 : 0;
    this.moveSlide(slide);
  }
}

const testimonialSlider = new Slider("testimonial");
