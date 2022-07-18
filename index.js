function books(name,author,pages,read) {                        //Constructor function to create Books Object
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

books.prototype.info = function show() 
{
    let read= document.querySelector()
}
let myLibrary=[];                                               //initialies empty array           
function addBook(titleName,authorName,pagesnumber,read)              // creates function to add Book      
{            
    let newBook =  new books(titleName,authorName,pagesnumber,read);     // creates a object called newBook  
    myLibrary.push(newBook);                                        // pushes the NewBook object into an empty array
    addCard(newBook);                                               // calls the function to create card 
}
let cards= document.querySelector(".cards");            
function addCard(newBook)                                           //function to create new card with newbook as parameter
{
    let img = document.createElement("img");                        //created a image element 
    img.src = "trash.svg";
    let divs = document.createElement("div");                       //created a Div called "Divs"
    let texts = document.createElement("div");          
    let titlename = document.createElement("p");                    //created a p element called "Titlename"
    let authorname = document.createElement("p");
    let pagesnum = document.createElement("p");

    let label1 =document.createElement("div");                      // created elements as similar to toggle switch.
    label1.classList.add("label1");                             

    let read =  document.createElement("label");
    read.classList.add("toggle");

    let readinput =  document.createElement("input");
    readinput.setAttribute("type","checkbox");
    readinput.classList.add("toggle-checkbox");
    read.appendChild(readinput);

    let toggleSwitch = document.createElement("div");
    toggleSwitch.classList.add("toggle-switch");
    read.appendChild(toggleSwitch);

    let spanToggle = document.createElement("span");
    spanToggle.classList.add("toggle-label");
    read.appendChild(spanToggle);
 
    label1.appendChild(read);

    texts.classList.add("texts");                                   // added a class called texts to created text(div). 
    divs.classList.add("divs");
    titlename.innerHTML=newBook.name;                               // the new created object's name is assigned to text content of titleName
    authorname.innerHTML=newBook.author;
    pagesnum.innerHTML = `${newBook.pages} pages`;
    texts.appendChild(label1);
    texts.appendChild(titlename);                                   // add titlename(p element) as a child of texts
    texts.appendChild(authorname);                      
    texts.appendChild(pagesnum);
    texts.appendChild(deleteButton);
    divs.appendChild(texts);                                        // add texts class as child of divs
    cards.appendChild(divs);                                        // add divs class as child of cards
    img.addEventListener("click", function deletecards()            // function to remove added cards 
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
    let read =  document.getElementById("toggle-checkbox").checked;
    addBook(titleName,authorName,pagesnumber,read);                   //calls the function to add book 
    e.preventDefault();
    form.reset();
    cards.style.display="";                                      // reverting the display of cards to default, so that it is visible afte the submit switch is pressed
});