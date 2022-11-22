function showWeather(obj){
    let tempobj = document.querySelector('#tem');
    let windspeedobj = document.querySelector('#windspeed');
    let windchillobj = document.querySelector("#windchill");
    let weatherdesc = document.querySelector(".wf");
    let weathericon = document.querySelector(".w");
    const iconURL = `http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`;

    // calculate windspeed
    let windchillmsg = "N/A";

    let temp = obj.main.temp;
    let windspeed = obj.wind.speed;

    if ((temp <= 50) && (windspeed > 3)){
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg; F`;
    }

    // populate dom stuff
    tempobj.textContent = temp;
    windspeedobj.textContent = windspeed;
    windchillobj.innerHTML = windchillmsg;
    weatherdesc = obj.weather[0].main;
    weathericon.setAttribute("src", iconURL);
    weathericon.setAttribute("alt", obj.weather[0].description);
}

const LAT = "78.053";
const LON = "17.710";
const APIKEY = "1799c93bd8ed89a254a602f24cfc8859";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=imperial&appid=${APIKEY}`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        showWeather(jsObject);
    });