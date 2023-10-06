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
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;
  let newBook = new Book(title, author, pages, read)
  console.log(newBook)
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function() {
  event.preventDefault();
  addBookToLibrary();
})