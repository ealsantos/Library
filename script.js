const myLibrary = []

function Book (title, author, pages, isRead, ID){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
    this.ID = ID
}

function addBooktoLibrary(title, author, pages, isRead){
    const bookID = crypto.randomUUID()
    const newBook = new Book(title, author, pages, isRead, bookID)
    myLibrary.push(newBook)
}

 addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
 addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
 addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
 addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
 addBooktoLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);

 

function bookDisplay(){
    const dataTableHeader = document.querySelector('.bookData')
    for (const book of myLibrary) {
        const newBookEntry = document.createElement('tr')
        dataTableHeader.append(newBookEntry)

        const name = book.title
        const author = book.author
        const pages = book.pages
        const isRead = book.isRead
        const bookID = book.ID

        const bookTitle = document.createElement('td')
        bookTitle.textContent = name
        newBookEntry.append(bookTitle)

        const bookAuthor = document.createElement('td')
        bookAuthor.textContent = author
        newBookEntry.append(bookAuthor)
    } 
}

bookDisplay();



/*
** USAR CODIGO ABAIXO NUM PROTOTIPO **
this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`;
    }


console.log(theHobbit.info());*/
