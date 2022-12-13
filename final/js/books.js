

   // First check to see if we need to initialize local storage with an empty array
    const LIKES_KEY = "book-likes";

    function initBookLikes(){
        let likes_string = localStorage.getItem(LIKES_KEY);
        if (likes_string==null){
            likes_string="[]";
            localStorage.setItem(LIKES_KEY, likes_string);
        }
    }
    
    // Turn the string value from local storage into a Java array
    // let likeslist = JSON.parse(likes_string);
    
    // This displays the book card as before
    function displayBook(book){
        let main = document.querySelector("main");
        let newsection = document.createElement("section");
        newsection.innerHTML = `<h2>${book.title}</h2>
                 <h3>Published in: <span id="published-date">${book.published}</span></h3>
                 <img src="${book.imagesURL}">
                 <input class="mycheck" id="check-${book.id}" type="checkbox" onclick="likeBook(this);"> Like This Book!`;
        main.appendChild(newsection);
    }
    
    // This function handles when a user checks an individual checkbox
    // First, it updates the list of "liked" books by either adding or removing it
    // depending on if the box is checked or unchecked.
    // push adds an item to a list
    // splice removes an item from a list.
    // Finally, the new list is put into local storage for later use. 
    function likeBook(item){
        let likes_string = localStorage.getItem(LIKES_KEY);
        let likeslist = JSON.parse(likes_string);
        if (item.checked){
            if (!likeslist.includes(item.id)){
                likeslist.push(item.id);
            }
        }
        else{
            if (likeslist.includes(item.id)){
                likeslist.splice(likeslist.indexOf(item.id), 1);
            }
        }
        localStorage.setItem(LIKES_KEY, JSON.stringify(likeslist));
    }
    
    // Upon page reload, the list of individual items (by id) is checked.
    function displayLike(item){
        let obj = document.getElementById(item);
        obj.checked = true;
    }
    
    // books.forEach(displayBook);
    // likeslist.forEach(displayLike);
    
    




let requestURL = "/final/data/books.json";

// Call the init function when the page loads
initBookLikes();

// Fetch the temple data and display the cards,
// Then display the likes after the cards are built
fetch(requestURL)
        .then((response) => {            
            return response.json();
        })
        .then((jsonObject) => {          
          let books = jsonObject['books'];
            // Upon page load, display the temples
            books.forEach(displayBook);
        })
        .then(() => {
            // Turn the string value from local storage into a Java array
            let likes_string = localStorage.getItem(LIKES_KEY);
            let likeslist = JSON.parse(likes_string);            

            // Set the likes
            likeslist.forEach(displayLike);
        });
