"use strict";

let myLibrary = [];

// test book
const testBook = {
  book: "I Am a Test Book",
  author: "Im the Test Book Author",
  pages: "56",
  read: "Read"
};
myLibrary.push(testBook);
addBookToLibrary();
// end test book

function Book(book, author, pages, read) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

// Adds books to the Dom
function addBookToLibrary() {
  const bookContainer = document.querySelector(".book-container");
  bookContainer.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookId = i;

    book.bookId = bookId;

    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("id", bookId);
    bookContainer.append(bookCard);

    const bookName = document.createElement("h2");
    bookName.classList.add("book-name");
    bookName.innerHTML = book.book;
    bookCard.append(bookName);

    const div = document.createElement("div");
    bookCard.append(div);

    const author = document.createElement("p");
    author.classList.add("author-name");
    author.innerHTML = `Author: ${book.author}`;
    div.append(author);

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerHTML = `Pages: ${book.pages}`;
    div.append(pages);

    const read = document.createElement("button");
    read.classList.add("read-status");
    read.innerHTML = book.read;
    read.addEventListener("click", () => {
      if (read.innerHTML === "Read") {
        read.innerHTML = "Have not Read";
        myLibrary[bookId].read = "Have not Read";
      } else {
        read.innerHTML = "Read";
        myLibrary[bookId].read = "Read";
      };
    });
    bookCard.append(read);

    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = "Remove";
    bookCard.append(remove);

    remove.addEventListener("click", removeBook);
  }
};

function removeBook() {
  let book = this.parentNode;
  let bookId = book.getAttribute("id");
  book.parentNode.removeChild(book);
  myLibrary.splice(bookId, 1);
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
  myLibrary.push(newBook); // Add book to Array

  addBookToLibrary();

  formContainer.classList.add("hidden");
  backgroundblur.classList.add("hidden");
  bookForm.reset();
});