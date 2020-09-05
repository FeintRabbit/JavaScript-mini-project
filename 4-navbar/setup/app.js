// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// set nav button (nav-toggle) to
// turn on/off the show-links class for the links ul

const navBtn = document.querySelector(".nav-toggle");
const linksNav = document.querySelector(".links");

// toggle classlist
navBtn.addEventListener("click", () => {
  linksNav.classList.toggle("show-links");
});

// long soltuin: add remove method if statement

// navBtn.addEventListener("click", () => {
//   if (linksNav.classList.contains("show-links")) {
//     linksNav.classList.remove("show-links");
//   } else {
//     linksNav.classList.add("show-links");
//   }
// });
