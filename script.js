let myLibrary = [];
let UIbookCont = document.getElementById("bookCont");
let formCont = document.getElementById("formCont");
let title = document.getElementById("title");
let author = document.getElementById("author");
let page = document.getElementById("page");
let addBut = document.getElementById("addBut");
const titleError = document.querySelector("#title + span.error");
const authorError = document.querySelector("#author + span.error");
const pageError = document.querySelector("#page + span.error");

title.addEventListener("input", () => {titleError.textContent = '';})
author.addEventListener("input", () => {authorError.textContent = '';})
page.addEventListener("input", () => {pageError.textContent = '';})


addBut.addEventListener("click", function checker() {
    if(title.validity.valid && author.validity.valid && page.validity.valid) {
        addBook()
        titleError.textContent = "";
        authorError.textContent = "";
        pageError.textContent = "";
    } else {
       if (!title.validity.valid) {titleError.textContent = "A book needs a title"}
       if (!author.validity.valid) {authorError.textContent = "A book needs an author"}
       if (!page.validity.valid) {pageError.textContent = "A book 1-1000 pages"}
    }
});

class Book {
    constructor(author, title, pages, id) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.id = id;
    }
}

let createBook = document.getElementById("newbook");
createBook.addEventListener("click", function() {
    formCont.classList.toggle('hide');
});

function addBook() {  
    let i = myLibrary.length;

    let newAuthor = author.value;
    author.value = '';
    let newTitle = title.value;
    title.value = '';
    let newPages = page.value;
    page.value = '';
    let newId = i;

    formCont.classList.toggle('hide');
    let newBook = new Book(newAuthor, newTitle, newPages, newId);

    myLibrary.push(newBook);
    console.log(myLibrary);

    addBooksToUI();
}

function addBooksToUI() {
    UIbookCont.innerHTML = "";

    myLibrary.forEach(function(Book, index) {
        let tempBook = document.createElement("div");
        let tempAuthor = document.createElement("p");
        tempAuthor.textContent = Book.author;
        let tempTitle = document.createElement("p");
        tempTitle.textContent = Book.title;
        let tempPages = document.createElement("p");
        tempPages.textContent = Book.pages;
        let tempButton = document.createElement("button");
        tempButton.textContent = "not read yet";
        tempButton.style.backgroundColor = "red";
        let tempRemove = document.createElement("button");
        tempRemove.textContent = "remove";
        tempRemove.addEventListener("click", remove => {
            myLibrary.splice(index, 1);
            addBooksToUI();
        });
        tempButton.addEventListener("click", switchColor => { 
            if (tempButton.style.backgroundColor == "red") {
                tempButton.style.backgroundColor = "green";
                tempButton.textContent = "read";
                return;
            }
            tempButton.style.backgroundColor = "red";
            tempButton.textContent = "not read yet";
            return;
        });
        tempBook.appendChild(tempAuthor);
        tempBook.appendChild(tempTitle);
        tempBook.appendChild(tempPages);
        tempBook.appendChild(tempButton);
        tempBook.appendChild(tempRemove);
        UIbookCont.appendChild(tempBook);
    });
}
