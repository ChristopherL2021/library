"use strict";

let myLibrary = [];

function Book(book, author, pages, read) {
  const bookObj = {};
  bookObj.book = book;
  bookObj.author = author;
  bookObj.pages = pages;
  bookObj.read = read;

  return bookObj;
};

function addBookToLibrary() {
  
};

// Create variables for document elements
const showFormButton = document.getElementById("show-form-button");
const formContainer = document.getElementById("form-container");
const backgroundblur = document.getElementById("background-blur");

// Shows the form
showFormButton.addEventListener("click", () => {
  formContainer.classList.remove("hidden");
  backgroundblur.classList.remove("hidden");
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

  const newBook = new Book(book, author, pages, read);
  myLibrary.push(newBook);

  console.log(myLibrary);

  formContainer.classList.add("hidden");
  backgroundblur.classList.add("hidden");
  bookForm.reset();
});