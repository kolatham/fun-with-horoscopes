const zodiacBtnsEl = document.getElementById("zodiac-btns");

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

function showInput() {
    console.log('showInput called...')
    event.preventDefault()
    var userInput = document.getElementById("userInput").value;
    var display = document.getElementById("display");
    var theForm = document.getElementById("theForm");
    var linebreak = document.createElement("br");
    display.insertAdjacentHTML('beforeend', userInput);
    display.appendChild(linebreak);
    theForm.reset();
}

function display_ct5() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ampm;
    document.getElementById('ct5').innerHTML = x1;
    display_c5();
}

function display_c5(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct5()',refresh)
}
display_c5(); // displays the date-time, updating every second.
