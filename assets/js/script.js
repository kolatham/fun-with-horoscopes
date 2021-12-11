const zodiacBtnsEl = document.getElementById("zodiac-btns");
const lsKey = "FWH-msg-array";

zodiacBtnsEl.addEventListener("click", zodiacButtonClicked);

function zodiacButtonClicked(event) {
    if (!(event) || !(event.target.id)) {
        return; // ignore random clicks
    }

    zodiacSignBtn = event.target.id;
    if (zodiacSignBtn.substring(zodiacSignBtn.length - 4) != "-btn") {
        console.log("invalid zodiacSignBtn: " + zodiacSignBtn)
        return; //log and ignore invalid data
    }

    zodiacSign = zodiacSignBtn.substring(0,zodiacSignBtn.length - 4);

    // Now erase the zodiac text field while updating the zodiak header.
    document.getElementById("horoscope-text").textContent = "";
    document.getElementById("horoscope-header").textContent = document.getElementById(event.target.id).value;

    // now call to asynchronously set the zodiac text field.
    getHoroscope(displayHoroscopeInfo, errorMsg, zodiacSign, "today"); // asynchronous call

}


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

function displayHoroscopeInfo(data) {

    const horoscopeTextEl = document.getElementById("horoscope-text");

    horoscopeTextEl.textContent = data.description;
}

getICanHazDadJoke(displayICanHazDadJoke, errorMsg); // asynchronous call
function displayICanHazDadJoke(data) {
    
    console.log("icanhazdadjoke: ");
    console.log(data);
}

function errorMsg(msg) {
    console.log(msg);
}

function displayInputOnLoad() {
    let msgs = readLocalStorage();
    let displayEl = document.getElementById("display-msgs");

    for (msg in msgs) {
        displayEl.insertAdjacentHTML('beforeend', `<p>${msgs[msg]}</p>`)
    }
}

function showInput() {
    event.preventDefault()
    var userInputEl = document.getElementById("user-input");
    var displayEl = document.getElementById("display-msgs");

    let msg = userInputEl.value;

    if (msg == "") {
        errorMsg("Please enter a message before Submitting");
        return;
    }

    msg = moment().format("MM/DD/YY HH:mm:ss - ") + msg;
    writeLocalStorage(msg);

    displayEl.insertAdjacentHTML('afterbegin', `<p>${msg}</p>`);
    userInputEl.value = "";
}

function readLocalStorage() {
    let msgArray = JSON.parse(window.localStorage.getItem(lsKey));
    return (msgArray.reverse());
}

function writeLocalStorage(msg) {

    let msgs = JSON.parse(window.localStorage.getItem(lsKey));
    if (!msgs) {
        msgs = [];
    }

    msgs.push(msg);
    console.log(msgs);
    console.log(msg);

    window.localStorage.setItem(lsKey, JSON.stringify(msgs));
}

function displayTime() {
    var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

    $('#clock').html(time);
    setTimeout(displayTime, 1000);
}

function errorMsg(msg) {
    console.log(msg);
}

$(document).ready(function() {
    displayTime();
    displayInputOnLoad();
});
