const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  randHex = getRandHex();
  color.textContent = randHex;
  document.body.style.backgroundColor = randHex;
});

// get random hex code
// 6 random selection from hex arr (16)
function getRandHex() {
  let hexResult = "#";
  for (let i = 0; i < 6; i++) {
    hexResult += hex[Math.floor(Math.random() * hex.length)];
  }
  return hexResult;
}
