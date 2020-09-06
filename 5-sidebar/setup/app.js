// toggle .show-sidebar to .sidebar when toggle is clicked
// remove .show-sidebar to aside.sidebar when bars exit is clicked

// DOM variable
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

// open sidebar event & function
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

// close sidebar event & function
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
