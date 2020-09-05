const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

const valueOutput = document.querySelector("#value");
console.log(parseInt(valueOutput.textContent));

// add listeners for each button to change the total and update the output

decrease.addEventListener("click", function () {
  valueInput = parseInt(valueOutput.textContent);
  valueOutput.textContent = valueInput - 1;
  colorUpdate();
});

increase.addEventListener("click", function () {
  valueInput = parseInt(valueOutput.textContent);
  valueOutput.textContent = valueInput + 1;
  colorUpdate();
});

reset.addEventListener("click", function () {
  valueOutput.textContent = 0;
  colorUpdate();
});

function colorUpdate() {
  if (parseInt(valueOutput.textContent) > 0) {
    valueOutput.style.color = "green";
  } else if (valueOutput.textContent < 0) {
    valueOutput.style.color = "red";
  } else {
    valueOutput.style.color = "black";
  }
}

// project complete
