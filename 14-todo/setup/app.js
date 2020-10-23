// ****** SELECT ITEMS **********

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener("click", clearItems);

// edit & delete btns are set in the addItem function. This avoids event delegation.
// CHALLENGE: refactor to use event delegation (dataset.id)

// Load items
window.addEventListener("DOMContentLoaded", setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    createListItem(id, value);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    // set element value to new value
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

// delete item
function deleteItem(e) {
  // target the list article
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  // remove from list
  list.removeChild(element);
  // if list is now empty, clear list
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  // alert
  displayAlert("item removed", "success");
  // set default
  setBackToDefault;
  // remove from storage
  removeFromLocalStorate(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // get edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  // edit
  editFlag = true;
  editId = element.dataset.id;
  submitBtn.textContent = "edit";
}

// display alert
function displayAlert(text, action) {
  // add alert
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  // select all items
  // NOTE: select items here, so they exist on the page when event occurs (this avoid evt delegation?)
  const items = document.querySelectorAll(".grocery-item");
  // if list has items, loop through and remove them
  // NOTE: This is a better method than innerHTML = '', as we can remove them from local storage directly.
  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item);
    });
  }
  // hide container
  container.classList.remove("show-container");
  // alert
  displayAlert("list items cleared", "success");
  // set to default
  setBackToDefault();
  // remove from local storage
  localStorage.removeItem("list");
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  // const grocery = {id, value} // ES6 shortcut
  const grocery = { id: id, value: value };
  // get items from local storage. If empty, create arr, else grab the list.
  let items = getLocalStorage();
  // add new item to list
  items.push(grocery);
  // set updated item in localstorage
  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorate(id) {
  // get items from local storage. If empty, create arr, else grab the list.
  let items = getLocalStorage();
  // * find index of item and then remove (splice)
  // * const item = items.find(item => item.id == id);
  // * let itemIndex = items.indexOf(item);
  // * items.splice(itemIndex, 1);
  // return new filtered array
  items = items.filter(item => {
    if (item.id != id) {
      return item;
    }
  });
  // set updated item in localstorage
  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(editId, value) {
  let items = getLocalStorage();
  // * find index of edit item & update arr
  // * const item = items.find(item => item.id == editId);
  // * items[items.indexOf(item)] = { id: editId, value: value };
  // Map new array
  items = items.map(item => {
    if (item.id === editId) {
      item.value = value;
    }
    return item;
  });
  // set updated item in localstorage
  localStorage.setItem("list", JSON.stringify(items));
}

// helper to remove repetition
function getLocalStorage() {
  return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// setItem
// getItem
// removeItem
// JSON.stringify
// JSON.parse

// ****** SETUP ITEMS **********

function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(item => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  // create article
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  element.dataset.id = id;
  // add html
  element.innerHTML = `
  <p class="title">${value}</p>
  <div class="btn-container">
    <button class="edit-btn"><i class="fas fa-edit"></i></button>
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  </div>`;
  // add event listeners to buttons here (avoids event delegation at list level)
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  // add to list
  list.appendChild(element);
}
