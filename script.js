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
  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookContainer.append(bookCard);

    const bookName = document.createElement("h2");
    bookName.classList.add("book-name");
    bookName.innerHTML = book.book;
    bookCard.append(bookName);

    const div = document.createElement("div");
    bookCard.append(div);

    const author = document.createElement("p");
    author.classList.add("author-name");
    author.innerHTML = book.author;
    div.append(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerHTML = book.pages;
    div.append(pages);

    const read = document.createElement("p");
    read.classList.add("read");
    read.innerHTML = book.read;
    div.append(read);
  }
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

  addBookToLibrary();

  formContainer.classList.add("hidden");
  backgroundblur.classList.add("hidden");
  bookForm.reset();
});