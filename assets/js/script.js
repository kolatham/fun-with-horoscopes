const lsKey = "FWH-msg-array"; // this is the local storage key for the messages

const zodiacBtnsEl = document.getElementById("zodiac-btns");
zodiacBtnsEl.addEventListener("click", zodiacButtonClicked);

postRandomThought();

const horoscopeBtnsEl = document.getElementById("horoscope-header-btns");
horoscopeBtnsEl.addEventListener("click", horoscopeDateButtonClicked);

var zodiacSign; // used in buttons to retrieve the correct horoscope information
var zodiacDay = "today"; // used in buttons to retrieve the correct horoscope information ("today, "yesterday", "tomorrow")

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
    document.getElementById("horoscope-header-text").textContent = document.getElementById(event.target.id).value;

    // now call to asynchronously set the zodiac text field.
    getHoroscope(displayHoroscopeInfo, errorMsg, zodiacSign, zodiacDay); // asynchronous call
}

function horoscopeDateButtonClicked(event) {
    event.preventDefault();

    let buttonEl = document.getElementById(event.target.id);

    // If they simply clicked on the one already selected, do nothing.
    if (buttonEl.classList.contains("chosen-btn")) {return;}

    // Because they clicked on a new one -- remove the chosen class from the old one and set it to this new one.
    let chosenEls = buttonEl.parentElement.getElementsByClassName("chosen-btn");
    if (chosenEls) {
        chosenEls[0].classList.remove("chosen-btn");
    } else {
        errorMsg("No button was chosen!")
    }

    // now add the class to this new button
    buttonEl.classList.add("chosen-btn");

    // now update the horoscope information
    zodiacDay = buttonEl.getAttribute("name");

    if (zodiacSign) { // only call if they've already selected a zodiac
        getHoroscope(displayHoroscopeInfo, errorMsg, zodiacSign, zodiacDay);
    }
}

function displayHoroscopeInfo(data) {

    const horoscopeTextEl = document.getElementById("horoscope-text");

    horoscopeTextEl.textContent = data.description;
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

function refreshQuote() {
    event.preventDefault();
    postRandomThought();
}

function postRandomThought() {

    let quoteEl = document.getElementById("quote-text");

    quoteEl.textContent = "Random thoughts go here";

    let randomChoice = Math.random();

    displayThought("hmmm, let me think a sec...");

    if (randomChoice < 1/3) {
        getInspirational(displayInspirationalInfo, errorMsg); // asynchronous call
    } else if (randomChoice < 2/3) {
        getICanHazDadJoke(displayICanHazDadJoke, errorMsg); // asynchronous call
    } else {
        getKanye(displayKanyeInfo, errorMsg); // asynchronous call
    }
}

// here are the asynchronous "random thoughts" callbacks
function displayInspirationalInfo (data) {
    let displayMsg = "Inspirational quote of the moment: \n\n";

    displayMsg += data.text;
    displayMsg += "\n\n    - " + data.author;

    displayThought(displayMsg);
}

function displayThought(msg) {
    let textEl = document.getElementById("quote-text");

    textEl.textContent = msg;
}

function displayKanyeInfo(data) {
    displayThought("Kanye says: \n\n" + data.quote); // displays the main kanye.js data
}

function displayICanHazDadJoke(data) {
    displayThought("Best joke of the moment: \n\n" + data.joke); 
}

function showInput() {
    event.preventDefault();
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
