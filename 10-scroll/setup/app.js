// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = new Date();
const dateFooter = document.querySelector(".date");
dateFooter.textContent = date.getFullYear();

// ********** close links ************
const linkCont = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// hardcoded class change to show links container.
// navToggle.addEventListener("click", () => {
//   linkCont.classList.toggle("show-links");
// });

// Using JS to dynamically calc size and show
navToggle.addEventListener("click", () => {
  // get the height of the container (default hides links at 0 height)
  const containerHeight = linkCont.getBoundingClientRect().height;
  // get height of the list, within the above container that is being hidden
  const linksHeight = links.getBoundingClientRect().height;
  // check, if height is 0 (hidden) change height to fully open dynamically
  if (containerHeight === 0) {
    linkCont.style.height = `${linksHeight}px`;
  } else {
    linkCont.style.height = "";
  }
});

// ********** fixed navbar ************
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default scrolling
    e.preventDefault();
    // close links dropdown
    linkCont.style.height = "";
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href");
    // calculate heights
    const element = document.querySelector(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const elementHeight = element.offsetTop;
    let position = elementHeight - navHeight;
    // if navbar isn't fixed when clicked, account for introduction of fixed nav in calculation
    const fixedNav = navbar.classList.contains("fixed-nav");
    if (!fixedNav) {
      position = position - navHeight;
    }
    // if small screen links panel is open
    const linkContainerHeight = linkCont.getBoundingClientRect().height;
    if (linkContainerHeight > 82) {
      // 82 just because we know the nav height is 82
      // add the links height to account for the maths when links are open
      position = position + linkContainerHeight;
    }
    // scroll to final position
    window.scrollTo({ left: 0, top: position });
  });
});
