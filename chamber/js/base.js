const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const today = new Date();
let day = days[today.getDay()] + ", " + (today.getDate()) + " " + (months[today.getMonth()]) + " " + (today.getFullYear());
document.querySelector("header div span").textContent = day;
document.querySelector("footer div span").textContent = today.getFullYear();
document.getElementById("lastupdatedate").textContent = document.lastModified;

if (today.getDay() == 1 || today.getDay == 2){
// if (today.getDay() == 4){
    const pthing = document.querySelector("header p");
    pthing.style.display = 'block';
}


function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hambugerBtn');
x.onclick = toggleMenu; 