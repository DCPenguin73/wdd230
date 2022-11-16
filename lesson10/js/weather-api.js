const LAT = "64.8378";
const LON = "-147.7164";
const APIKEY = "1799c93bd8ed89a254a602f24cfc8859";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=imperial&appid=${APIKEY}`;
function showWeather(obj){
    let currenttemp = document.querySelector("#current-temp");
    let iconpath = document.querySelector("#icon-src");
    let weathericon = document.querySelector("#weathericon");
    let figurecaption = document.querySelector("#figcaption");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;
    currenttemp.textContent = obj.main.temp;
    iconpath.textContent = iconURL;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
    figurecaption.textContent = obj.weather[0].main;
}

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        showWeather(jsObject);
    });
