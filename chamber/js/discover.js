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



const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src;
    img.removeAttribute("data-src");
}

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -10px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; 
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
   imgObserver.observe(image);
});