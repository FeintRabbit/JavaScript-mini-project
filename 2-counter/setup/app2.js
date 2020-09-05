const value = document.querySelector("#value");
let count = 0;

// loop through nodeList (array like - forEach)

const btns = document.querySelectorAll(".btn");

btns.forEach(function (items) {
  items.addEventListener("click", function (e) {
    if (items.classList.contains("decrease")) {
      count--;
    } else if (items.classList.contains("increase")) {
      count++;
    } else if (items.classList.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
    if (count < 0) {
      value.style.color = "red";
    }
    if (count > 0) {
      value.style.color = "Green";
    }
    if (count === 0) {
      value.style.color = "black";
    }
  });
});

// project complete
