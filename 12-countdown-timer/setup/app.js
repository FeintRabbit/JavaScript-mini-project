const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// element containing giveaway formatted for sub-heading
const giveaway = document.querySelector(".giveaway");
// div of timers
const deadline = document.querySelector(".deadline");
// all text countdown timers
const items = document.querySelectorAll(".deadline-format h4");

// set due date
const deadlineDate = new Date(2020, 10, 3, 8);
// format mins as two zeros
let deadlineMins = deadlineDate.getMinutes();
if (deadlineMins < 10) {
  deadlineMins = `0${deadlineMins}`;
}

// dynamically set date in the sub-heading
giveaway.textContent = `giveaway ends on 
  ${weekdays[deadlineDate.getDay()]},
  ${deadlineDate.getDate()} 
  ${months[deadlineDate.getMonth()]} 
  ${deadlineDate.getFullYear()}, 
  ${deadlineDate.getHours()}:${deadlineMins}am`;

// Run count update function every second
countUpdate();
setInterval(countUpdate, 1000);

function countUpdate() {
  // set current date
  const todayDate = new Date();
  // calculate days, hrs, mins & secs until giveaway
  const countdown = deadlineDate - todayDate;

  // create an object with the values
  const countdowns = {};
  // convert the countdown to days, round off the rest.
  countdowns.days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  // convert the countdown to full hrs, modulus 24, leaves remained of hours not fitting in 24. I.e. hours after full days
  countdowns.hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  countdowns.mins = Math.floor((countdown / (1000 * 60)) % 60);
  countdowns.secs = Math.floor((countdown / 1000) % 60);

  // update DOM
  items.forEach((item) => {
    // naming the object key the same as the DOM class allows loop & asssign automatically
    item.textContent = countdowns[item.classList];
  });
}

/*
Manually looping the DOM

items.forEach((item) => {
  if (item.classList.contains("days")) {
    item.textContent = countDays;
  }
  if (item.classList.contains("hours")) {
    item.textContent = countHrs;
  }
  if (item.classList.contains("mins")) {
    item.textContent = countMins;
  }
  if (item.classList.contains("secs")) {
    item.textContent = countSecs;
  }
}); */
