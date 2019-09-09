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
function deleteItem(){
    alert('deleted');
}
let render = function(node, book){
    let template = `
<td>${book.title}</td>\
<td>${book.author}</td>\
<td>${book.pages}</td>\
<td>${book.isread}</td>\
<td><button type="button" class="btn btn-danger delete">DELETE</button></td>\
`;
    node.innerHTML += template;
}

 

    for (let book of books){
      
        render(document.querySelector('#books'), book);
    }
    let dButton =   document.querySelectorAll("button.delete");
    dButton.forEach(btn => btn.addEventListener('click', deleteItem));

let openForm = function() {
    let formArea = document.getElementById("formarea");
    formArea.classList.toggle("d-none");
}
let addBtn = document.querySelector("button.addButton");
addBtn.addEventListener('click', openForm);


let saveButton = document.querySelector("button.save");
let closeButton = document.querySelector("button.cancel");
closeButton.addEventListener('click', openForm)

function addAndRenderBook() {
    let bookParts = document.querySelectorAll("input[type='text']");
    let radio = document.getElementById("true");
    let isread = false;
    if (radio.checked) {
        isread = true;
    }

    let book = new Book(bookParts[0].value, bookParts[1].value, isread, bookParts[2].value );
    for (i in bookParts) {
        if (bookParts[i].value == "" ){
            alert("Please Fill The Form Properly");
            return;
        }
    }
    addBook(book);
    render(document.querySelector('#books'), book);   
}
saveButton.addEventListener('click', addAndRenderBook);


