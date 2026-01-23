const myLibrary = []

function Book(title, author, pages, isRead, ID) {
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.ID = ID
}

function addBooktoLibrary() {
    const title = document.querySelector('input[name="title"]').value
    const author = document.querySelector('input[name="author"]').value
    const pages = document.querySelector('input[name="pages"]').value
    const isRead = document.querySelector('input[name="isRead"').checked
    const bookID = crypto.randomUUID()
    const newBook = new Book(title, author, pages, isRead, bookID)
    myLibrary.push(newBook)
}

function bookDisplay() {
    const dataRows = document.querySelector('.bookData')

    while (dataRows.hasChildNodes()) {
        dataRows.removeChild(dataRows.firstChild);
    }

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

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn')
        deleteBtn.setAttribute('data-id', book.ID)
        newBookEntry.appendChild(deleteBtn)

        dataRows.append(newBookEntry)
    }
}

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

formSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBooktoLibrary();
    dialog.close();
    bookDisplay();
    console.log(myLibrary)
})

const bookList = document.querySelector('tbody')

bookList.addEventListener("click", (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const getBookID = event.target.getAttribute("data-id")
        const closestTD = event.target.closest('tr')
        closestTD.remove();
        const getObjectToDeleteIndex = myLibrary.findIndex((book) => book.ID === getBookID)
        myLibrary.splice(getObjectToDeleteIndex, 1);
        console.log(myLibrary);
        bookDisplay();
    }
}
)