const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const background = document.body;
  const colorRand = colors[randomArrNum()];

  background.style.backgroundColor = colorRand;
  color.textContent = colorRand;
});

function randomArrNum() {
  return Math.floor(Math.random() * colors.length);
}
