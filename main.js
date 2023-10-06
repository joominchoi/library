const myLibrary = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6"];

const list = document.getElementById("books");

myLibrary.forEach(book => {
  let item = document.createElement("div");
  item.className = 'book'
  item.innerText = book;
  list.appendChild(item);
})

function Book(title, author, pages, read) {
  this.title = title;
  this.auther = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(book);
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})