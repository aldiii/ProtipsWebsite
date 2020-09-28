const menuLinks = document.querySelectorAll(".main-nav__link, .footer__links");
console.log(menuLinks);
const clickHandler = (e) => {
  e.preventDefault();
  const destination = e.target.getAttribute("href");
  const offsetTop =
    destination === "#" ? 0 : document.querySelector(destination).offsetTop;
  console.log("smooth scroll to: ", destination);
  window.scroll({
    behavior: "smooth",
    top: offsetTop,
    left: 0,
  });
};

for (link of menuLinks) {
  link.addEventListener("click", clickHandler);
}
