const myLibrary = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6"];

const list = document.getElementById("books");
let newBookbtn = document.querySelector('#new-book-btn');

newBookbtn.addEventListener("click", function() {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

myLibrary.forEach(book => {
  let item = document.createElement("div");
  item.className = 'book'
  item.innerText = book;
  list.appendChild(item);
})

function Book(title, author, pages) {
  this.title = title
  this.auther = author
  this.pages = pages
}

function addBookToLibrary() {
  myLibrary.push(book);
}
