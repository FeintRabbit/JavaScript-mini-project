// select all elements
const about = document.querySelector(".about");
const tabBtns = document.querySelectorAll(".tab-btn");
const allContent = document.querySelectorAll(".content");

// add a listener to the whole section, use bubble up to catch id.
about.addEventListener("click", (e) => {
  // buttons have data-id, so catch the id
  const id = e.target.dataset.id;
  // if the thing that was clicked is a button (i.e. has data-id)
  if (id) {
    // remove active btns from all then add the button
    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // remove active from content and add to this content, matching on id.
    allContent.forEach((article) => {
      article.classList.remove("active");
      document.getElementById(id).classList.add("active");
    });
  }
});

/*
First attempt
Not using e.target.

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
*/
