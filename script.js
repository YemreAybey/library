function Book(title, author, isRead, pages){
    this.title = title;
    this.author = author;
    this.isread = isRead;
    this.pages = pages;
}

const book1 =new Book("Yemre", "Yemre", "Unread", 255);
const book2 = new Book("Afani", "Afani", "Unread", 122);
const book3 =new Book("Ebuka", "Ebuka", "Unread", 245);


let books = [book1, book2, book3];

function addBook(book) {
    books.push(book);
}
function deleteItem(event){
    event.path[0].parentNode.parentNode.remove();
}

let render = function(node, book){
    let template = `
    <td>${book.title}</td>\
    <td>${book.author}</td>\
    <td>${book.pages}</td>\
    <td><button type="button" id="${books.indexOf(book)}" class="btn btn-primary read" data-text-swap="${book.isread}">${book.isread}</button></td>\
    <td><button type="button" id="${books.indexOf(book)}" class="btn btn-danger delete">DELETE</button></td>\
    `;
    node.innerHTML += template;
    let dButton =   document.querySelectorAll("button.delete");
    dButton.forEach(btn => btn.addEventListener('click', deleteItem));

    let readBtn = document.querySelectorAll("button.read");
    readBtn.forEach(btn => btn.addEventListener('click', function(){
        if(book.isread == "Read"){
            book.isread = "Unread";
            btn.innerHTML = `${book.isread}`;
        }else{
            book.isread = "Read";
           btn.innerHTML = `${book.isread}`;
        }
    }));
}

for (let book of books){
    render(document.querySelector('#books'), book);
}
    
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
    let isread = "Read";
    if (radio.checked) {
        isread = "Unread";
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


