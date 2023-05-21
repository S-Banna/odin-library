let myLibrary = [];

function Book(title, author, pages, read, number) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.number = number
}

let formCont = document.getElementById("formCont");
let create = document.getElementById("newbook");
create.addEventListener("click", toggleForm);
function toggleForm() {
    event.preventDefault();
    formCont.classList.toggle("active");
}

let i = -1;
let formSub = document.getElementById("add");
add.addEventListener("click", makeBook);
function makeBook() {
    event.preventDefault();
    let titleTemp = document.getElementById("title").value;
    let authorTemp = document.getElementById("author").value;
    let pagesTemp = document.getElementById("pages").value;
    let read = document.getElementById("is-read").checked;
    i = i + 1;
    let tempBook = new Book(titleTemp, authorTemp, pagesTemp, read, i);
    myLibrary[i] = tempBook;
    toggleForm();
    display();
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("is-read").checked = false;
}

function display() {
    let j = myLibrary.length;
    document.getElementById("bookCont").textContent = '';
    for (let l = 0; l < j; l++) {
        let cont = document.createElement("div");
        document.getElementById("bookCont").appendChild(cont);
        let titleBookTemp = myLibrary[l].title;
        let authorBookTemp = myLibrary[l].author;
        let pagesBookTemp = myLibrary[l].pages;
        let isRead = myLibrary[l].read;
        let number = myLibrary[l].number;
        let titleHold = document.createElement("p");
        titleHold.textContent = titleBookTemp;
        cont.appendChild(titleHold);
        let authorHold = document.createElement("p");
        authorHold.textContent = authorBookTemp;
        cont.appendChild(authorHold);
        let pagesHold = document.createElement("p");
        pagesHold.textContent = pagesBookTemp + " pages";
        cont.appendChild(pagesHold);
        let readButton = document.createElement("button");
        readButton.textContent = 'Read';
        if (isRead == true) {
            readButton.style.backgroundColor = 'green';
        } else {
            readButton.style.backgroundColor = 'red';
        }
        cont.appendChild(readButton);
        let removeButton = document.createElement("button");
        removeButton.textContent = 'Remove';
        removeButton.style.backgroundColor = 'grey';
        cont.appendChild(removeButton);
        readButton.addEventListener('click', () => {
            if (myLibrary[l].read == false) {
                readButton.style.backgroundColor = 'green';
                myLibrary[l].read = true;
            } else {
                readButton.style.backgroundColor = 'red';
                myLibrary[l].read = false;
            }
        });
    }
}