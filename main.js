const myLibrary = ["Book 1", "Book 2", "Book 3"];

const list = document.getElementById("books");

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
