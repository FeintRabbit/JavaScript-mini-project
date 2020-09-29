//using selectors inside the element

const questions = document.querySelectorAll(".question");

// for each question
questions.forEach((question) => {
  // select question button
  const btn = question.querySelector(".question-btn");
  // addevent listener & toggle
  btn.addEventListener("click", () => {
    question.classList.toggle("show-text");
    // IF article != the one being clicked, remove 'show-items'
    questions.forEach((item) => {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });
  });
});

/*
// traversing the dom

// queryselector all = button class
const btns = document.querySelectorAll(".question-btn");
const textArticle = document.querySelectorAll(".question");

// add .show-text to article, sets article open & updates buttons
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // target the parent article of the button
    const article = e.currentTarget.parentElement.parentElement;

    // condition for closing an open text card only
    if (article.classList.contains("show-text")) {
      article.classList.remove("show-text");
    }
    // condition for opening a text card & closing others
    else {
      // loop through all articles and remove class
      textArticle.forEach((text) => {
        text.classList.remove("show-text");
      });
      // add show class to specific clicked button parent
      article.classList.add("show-text");
    }
  });
});
*/
