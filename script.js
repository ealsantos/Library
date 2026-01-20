const myLibrary = []

function Book(title, author, pages, isRead, ID) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.ID = ID
}

function addBooktoLibrary(title, author, pages, isRead) {
    const bookID = crypto.randomUUID()
    const newBook = new Book(title, author, pages, isRead, bookID)
    myLibrary.push(newBook)
}

addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);

function bookDisplay() {
    const dataRows = document.querySelector('.bookData')
    for (const book of myLibrary) {
        const newBookEntry = document.createElement('tr')

        const titleInfo = document.createElement("td");
        titleInfo.textContent = book.title;
        newBookEntry.appendChild(titleInfo);

        const authorInfo = document.createElement("td");
        authorInfo.textContent = book.author;
        newBookEntry.appendChild(authorInfo);

        const pagesInfo = document.createElement("td");
        pagesInfo.textContent = book.pages;
        newBookEntry.appendChild(pagesInfo);

        const readInfo = document.createElement("td");
        readInfo.textContent = book.isRead;
        newBookEntry.appendChild(readInfo);

        const idInfo = document.createElement("td");
        idInfo.textContent = book.ID;
        newBookEntry.appendChild(idInfo);

        dataRows.append(newBookEntry)
    }
}

bookDisplay();


const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".openBookDialog");
const closeButton = document.querySelector(".closeBtn");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

const formSubmitBtn = document.querySelector('input[type="submit"]')

formSubmitBtn.addEventListener("click", () => {
    event.preventDefault();
})
