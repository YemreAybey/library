function Book(title, author, isRead, pages){
    this.title = title;
    this.author = author;
    this.isread = isRead;
    this.pages = pages;
}

let book1 =new Book("Yemre", "Yemre", false, 255);
let book2 = new Book("Afani", "Afani", false, 122);
let book3 =new Book("Ebuka", "Ebuka", false, 245);

let books = [book1, book2, book3];

// let p1 = document.getElementById("1");
// p1.innerHTML = `${book1.title} is written by ${book1.author} and has ${book1.pages} pages`;

function addBook(book) {
    books.push(book);
}