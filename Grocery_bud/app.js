// ******** Select items **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ******** Event Listeners **********
// submit form
form.addEventListener("submit", addItem);

// Functions

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  if (value) {
    console.log("value is falsy");
  }
  const id = new Date().getTime().toString();
  if (value !== '' && !editFlag) {
    console.log("adding item to the list");
  } else if (value !== '' && editFlag === true) {
    console.log("editing");
  } else {
    alert.textContent = "please enter value";
  }
}
