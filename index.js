function books(name,author,pages,read) {                        //Constructor function to create Books Object
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

let myLibrary=[];                                               //initialies empty array 
                
function addBook(titleName,authorName,pagesnumber)              // creates function to add Book      
{            
let newBook =  new books(titleName,authorName,pagesnumber);     // creates a object called newBook  
myLibrary.push(newBook);                                        // pushes the NewBook object into an empty array
addCard(newBook);                                               // calls the function to create card 
}

let cards= document.querySelector(".cards");            

function addCard(newBook)                                       // function to create new card
{
let titlename = document.createElement("header");               // creates a header element inside Document
let authorname =  document.createElement("p");
let pagesnum = document.createElement("p");
let text = document.createTextNode(newBook.name);               // creates a text node which has the content "name"
let text1 = document.createTextNode(newBook.author);
let text2 = document.createTextNode(newBook.pages);
titlename.appendChild(text);                                    // adds the text node to the header element
authorname.appendChild(text1);
pagesnum.appendChild(text2);
cards.appendChild(titlename);                                   //adds the header element as a child node with Cards
cards.appendChild(authorname);
cards.appendChild(pagesnum);
}

let button = document.querySelector('button');                   // calls the button selector from HTML 
button.addEventListener('click',function show(e) {               // a click generates a form to enter the new book details by changing the form style to default   
        document.getElementById('form').style.display= "";
});

let form= document.querySelector("form");                        // calls the form 
form.addEventListener('submit',function (e){                     //when the submit button is clicked
    let titleName= document.getElementById("title").value;       // titlename is assigned to the Form's title value entered
    let authorName= document.getElementById("Author").value;
    let pagesnumber= document.getElementById("Pages").value;
    addBook(titleName,authorName,pagesnumber);                   //calls the function to add book 
    e.preventDefault();
    form.reset();
    cards.style.display="";                                      // reverting the display of cards to default, so that it is visible afte the submit switch is pressed
});