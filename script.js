// Select all elements
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// When submit the form add a new element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Create a new item
  const item = document.createElement("div");
  item.innerText = input.value;
  item.classList.add("list-item");

  // Add that item to the list
  list.appendChild(item);

  // Clear input
  input.value = "";

  // Setup event listener to delete item when clicked
  item.addEventListener("click", () => {
    list.removeChild(item);
  });
});
