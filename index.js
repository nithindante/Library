function books(name,author,pages,read) {                        //Constructor function to create Books Object
    this.name = name;
    this.author = author;
    this.pages = pages;
}

books.prototype.info = function show() 
{
    let read= document.querySelector()
}
let myLibrary=[];                                               //initialies empty array           
function addBook(titleName,authorName,pagesnumber)              // creates function to add Book      
{            
    let newBook =  new books(titleName,authorName,pagesnumber);     // creates a object called newBook  
    myLibrary.push(newBook);                                        // pushes the NewBook object into an empty array
    addCard(newBook);                                               // calls the function to create card 
}
let cards= document.querySelector(".cards");            
function addCard(newBook)                                       // function to create new card with newbook as parameter
{
    let img = document.createElement("img");
    img.src = "trash.svg";
    let divs = document.createElement("div");                       //created a Div called "Divs"
    let texts = document.createElement("div");          
    let titlename = document.createElement("p");                    //created a p element called "Titlename"
    let authorname = document.createElement("p");
    let pagesnum = document.createElement("p");
    let deleteButton =  document.createElement("div");
    texts.classList.add("texts");                                   // added a class called texts to created text(div). 
    divs.classList.add("divs");
    deleteButton.classList.add("deleteButton");
    titlename.innerHTML=newBook.name;                               // the new created object's name is assigned to text content of titleName
    authorname.innerHTML=newBook.author;
    deleteButton=img;
    pagesnum.innerHTML = `${newBook.pages} pages`;
    texts.appendChild(titlename);                                   // add titlename(p element) as a child of texts
    texts.appendChild(authorname);                      
    texts.appendChild(pagesnum);
    texts.appendChild(deleteButton);
    divs.appendChild(texts);                                        // add texts class as child of divs
    cards.appendChild(divs);                                        // add divs class as child of cards
    img.addEventListener("click", function deletecards()
    {
        cards.removeChild(divs);
    });
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