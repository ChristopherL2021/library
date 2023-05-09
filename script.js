"use strict";

let myLibrary = [];

function Book() {

}

function addBookToLibrary() {
  
}

// Create variables for document elements
const showFormButton = document.getElementById("show-form-button");
const formContainer = document.getElementById("form-container");

// Shows the form
showFormButton.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
});

// Grabs form element
const bookForm = document.getElementById("book-form");

// Collects form data and resets the form
formContainer.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookForm);
  const book = formData.get("book");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read");

  console.log(book + ", " + author + ", " + pages + ", " + read + ".");

  formContainer.classList.add("hidden");
  bookForm.reset();
});