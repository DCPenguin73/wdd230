
let cardselector = document.querySelector("#cardselect");
let listselector = document.querySelector("#listselect");
let cardview = document.querySelector("#cardview");
let listview = document.querySelector("#listview");

cardselector.addEventListener("click",() =>{
    cardview.style.display='grid';
    listview.style.display='none';
    cardselector.style.opacity=0.5;
    listselector.style.opacity=1.0;
})

listselector.addEventListener("click",() =>{
    cardview.style.display='none';
    listview.style.display='block';
    cardselector.style.opacity=1.0;
    listselector.style.opacity=0.5;
})


function displayCard(card){
    let cardview = document.querySelector("#cardview");
    let cardlt = document.createElement("div");
    cardlt.innerHTML=`
        <img src="${card.imagesURL}">
        <p>${card.street} ${card.citystatezip}</p>
        <p>${card.phone}</p>
        <p><a href="${card.websiteURL}">${card.websiteURL}</a></p>
    `;
    cardview.appendChild(cardlt);
}

function displayList(card){
    let cardview = document.querySelector("#listview");
    let cardlt = document.createElement("section");
    cardlt.innerHTML=`
        <div>${card.name}</div>
        <div>${card.street} ${card.citystatezip}</div>
        <div>${card.phone}</div>
        <div><a href="${card.websiteURL}">${card.websiteURL}</a></div>
    `;

    listview.appendChild(cardlt);
}

const requestURL = "./data/data.json";


fetch(requestURL)
.then((response) => {
    return response.json();
})
.then((jsonObject) => {
    console.table(jsonObject);
    const bizlist = jsonObject['businesses'];
    bizlist.forEach(displayCard);    
    bizlist.forEach(displayList);
});




