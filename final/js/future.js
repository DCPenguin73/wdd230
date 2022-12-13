function displayBook(book){
    let main = document.querySelector("main");
    let newsection = document.createElement("section");
    // <img src="${book.imagesURL}"></img>
    newsection.innerHTML = `<h2>${book.title}</h2>
            <div class="percent" style="width: ${book.work};">${book.work}</div>`;
    main.appendChild(newsection);
}

let requestURL = "./data/future.json";


fetch(requestURL)
        .then((response) => {            
            return response.json();
        })
        .then((jsonObject) => {          
          let books = jsonObject['futures'];
            // Upon page load, display the temples
            books.forEach(displayBook);
        });
