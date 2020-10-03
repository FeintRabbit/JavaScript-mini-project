// select all buttons
const tabBtns = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

// for each button
tabBtns.forEach((btn) => {
  // add event listener
  btn.addEventListener("click", (e) => {
    // get current target data-id
    const btnId = e.currentTarget.dataset.id;
    // remove 'active' class from existing and add to btn-container>tab-btn (currentTarget!) and about-content>content

    allContent.forEach((item) => {
      if (item.id !== btnId) {
        item.classList.remove("active");
      }
    });
    tabBtns.forEach((item) => {
      if (item.dataset.id !== btnId) {
        item.classList.remove("active");
      }
    });

    const content = document.getElementById(btnId);
    content.classList.add("active");
    e.currentTarget.classList.add("active");
  });
});
