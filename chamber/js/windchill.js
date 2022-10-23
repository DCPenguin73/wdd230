    // let temp = 49;
    // let windspeed = 10;
    let temp = document.querySelector('#tem').textContent;
    let windspeed = document.querySelector('#windspeed').textContent;
    let windchillobj = document.querySelector("#windchill");

    let windchillmsg = "N/A";

    if ((temp <= 50) && (windspeed > 3)){
        let chill = Math.round((35.74 + (0.6215 * temp)) - (35.75 * Math.pow(windspeed,0.16)) + (0.4275 * temp * Math.pow(windspeed,0.16)));
        windchillmsg = `${chill}&deg; F`;
    }
    windchillobj.innerHTML = windchillmsg;