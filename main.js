const myLibrary = [];

const list = document.getElementById("books");

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

// function render() {
//   let libraryEl = document.querySelector("#library");
//   libraryEl.innerHTML = ''
//   for (let i = 0; i < myLibrary.length; i++) {
//     let book = myLibrary[i];
//     let bookEl = document.createElement("div");
//     bookEl.className = 'book'
//     bookEl.innerHTML =
//       `
//     <div class="card-header">
//       <h3 class="title">${book.title}</h3>
//       <h5 class="author">by ${book.author}</h5>
//     </div>
//     <div class="card-body">
//       <p>${book.pages} pages</p>
//       <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
//       <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
//       <button class=toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
//     </div>
//     `
//     libraryEl.appendChild(bookEl);
//   }
// }

function render() {
  const libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const bookEl = document.createElement("div");
    bookEl.className = 'book';

    const cardHeader = document.createElement("div");
    cardHeader.className = 'card-header';

    const titleEl = document.createElement("h3");
    titleEl.className = 'title';
    titleEl.textContent = book.title;

    const authorEl = document.createElement("h5");
    authorEl.className = 'author';
    authorEl.textContent = `by ${book.author}`;

    cardHeader.appendChild(titleEl);
    cardHeader.appendChild(authorEl);

    const cardBody = document.createElement("div");
    cardBody.className = 'card-body';

    const pagesEl = document.createElement("p");
    pagesEl.textContent = `${book.pages} pages`;

    const readStatusEl = document.createElement("p");
    readStatusEl.className = 'read-status';
    readStatusEl.textContent = book.read ? "Read" : "Not Read Yet";

    const removeButton = document.createElement("button");
    removeButton.className = 'remove-btn';
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(i));

    const toggleReadButton = document.createElement("button");
    toggleReadButton.className = 'toggle-read-btn';
    toggleReadButton.textContent = 'Toggle Read';
    toggleReadButton.addEventListener('click', () => toggleRead(i));

    cardBody.appendChild(pagesEl);
    cardBody.appendChild(readStatusEl);
    cardBody.appendChild(removeButton);
    cardBody.appendChild(toggleReadButton);

    bookEl.appendChild(cardHeader);
    bookEl.appendChild(cardBody);

    libraryEl.appendChild(bookEl);
  }
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, pages, read)
  myLibrary.push(newBook)
  render();
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render()
}

let newBookbtn = document.querySelector('#new-book-btn');
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function () {
  event.preventDefault();
  addBookToLibrary();
})