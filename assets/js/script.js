
// synchronous calls first...since they'll display first regardless!
console.log("Lunar Info: " + getLunarPhase()); // calls the main lunarphase.js function synchronously
console.log("Today's Zodiak: " + getZodiakFromDate(new Date())); // displays zodiak info synchronously

// now for the asynchronous calls and their callback functions
getInspirational(displayInspirationalInfo, errorMsg); // asynchronous call
function displayInspirationalInfo (data) {
    console.log("Inspirational:"); // displays the main inspirational.js data
    console.log(data);
}

getKanye(displayKanyeInfo, errorMsg); // asynchronous call
function displayKanyeInfo(data) {
    console.log ("Kanye quote: "); // displays the main kanye.js data
    console.log(data);
}

getHoroscope(displayHoroscopeInfo, errorMsg); // asynchronous call
function displayHoroscopeInfo(data) {
    console.log ("Horoscope: ");
    console.log(data);
}

getICanHazDadJoke(displayICanHazDadJoke, errorMsg); // asynchronous call
function displayICanHazDadJoke(data) {
    console.log("icanhazdadjoke: ");
    console.log(data);
}

function errorMsg(msg) {
    console.log(msg);
}