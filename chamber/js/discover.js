const visit = document.querySelector("#visit-message");

let visitMessage = "This is your first visit to the page.";
let tadoy = new Date();

let lastVisitString = window.localStorage.getItem("last-visit");
if (lastVisitString != null){
    let lastVisitDate = new Date(lastVisitString);
    let dateDifference = Math.floor((tadoy.getTime() - lastVisitDate.getTime()) / (24 * 60 * 60 * 1000))
    visitMessage = `You last visited the page ${dateDifference} days ago.`;
}

visit.textContent = visitMessage;
window.localStorage.setItem("last-visit", tadoy.toString());