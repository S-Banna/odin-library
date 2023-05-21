let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return (this.title + " by " + this.author + ', ' + this.pages + " pages, " + this.read)
    }
}

let formCont = document.getElementById("formCont");
let create = document.getElementById("newbook");
create.addEventListener("click", toggleForm);
function toggleForm() {
    event.preventDefault();
    formCont.classList.toggle("active");
}

let formSub = document.getElementById("add");
add.addEventListener("click", makeBook);
function makeBook() {
    event.preventDefault();
    let titleTemp = document.getElementById("title").value;     
    console.log(titleTemp);
    let authorTemp = document.getElementById("author").value;
    console.log(authorTemp);
    let pagesTemp = document.getElementById("pages").value;
    console.log(pagesTemp);
    let read = document.getElementById("is-read").checked;
    console.log(read);
}