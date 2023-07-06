let myLibrary = [];
let UIbookCont = document.getElementById("bookCont");

class Book {
    constructor(author, title, pages, id) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.id = id;
    }
}

let createBook = document.getElementById("newbook");
createBook.addEventListener("click", addBook);

function addBook() {  
    let i = myLibrary.length;

    let newAuthor = prompt("Type name of author");
    let newTitle = prompt("Type name of title");
    let newPages = prompt("Type number of pages");
    let newId = i;

    let newBook = new Book(newAuthor, newTitle, newPages, newId);

    myLibrary.push(newBook);
    console.log(myLibrary);

    addBooksToUI();
}

function addBooksToUI() {
    UIbookCont.innerHTML = "";

    myLibrary.forEach(function(Book) {
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
            myLibrary.splice(Book, 1);
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
