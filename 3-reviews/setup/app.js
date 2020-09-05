// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// set-up DOM elements
// set-up buttons

// reviews[id].value
// buttons increase or decrease id
// then run function to update all data

// ======================================= //

// DOM elements
const authorImg = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

// Button elements
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randBtn = document.querySelector(".random-btn");

// solution 1
// use array number to loop over objects. Handy for going sequentially, and if more are added.

// initial id value (value of array item)
let personId = 0;

// start with correct DOM data
updateData();

// button function
nextBtn.addEventListener("click", () => {
  personId++;
  if (personId > reviews.length - 1) {
    personId = 0;
  }
  console.log(`personId= ${personId}`);
  updateData();
});
prevBtn.addEventListener("click", () => {
  personId--;
  if (personId < 0) {
    personId = reviews.length - 1;
  }
  console.log(`personId= ${personId}`);
  updateData();
});

// random button function
randBtn.addEventListener("click", () => {
  personId = Math.floor(Math.random() * reviews.length);
  console.log(personId);
  updateData();
});

// function to update DOM based on new personId
function updateData() {
  authorImg.src = reviews[personId].img;
  author.textContent = reviews[personId].name;
  job.textContent = reviews[personId].job;
  info.textContent = reviews[personId].text;
}

// Solution 2:
// .find() method on the object, to look for the person id.  then loop through resulting person array. This is good if object never changes, as an array would be out of sequence if ref by array position alone.

// project complete
