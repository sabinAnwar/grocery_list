// ******** Select items **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
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

  if (!value) {
    console.log("value is falsy");
  }
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add id
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p><div class="btn-container">
    <button class="edit-btn" type="button">
    <i class="fas fa-edit"></i>
    </button>
    <button class="delete-btn" type="button">
    <i class="fas fa-trash"></i>
    </button>
    </div>`;
    //   append Child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    container.classList.add("show-container");
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("please enter a value", "danger");
  }
}
//display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

//****** Local Storage *******/
