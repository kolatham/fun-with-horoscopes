var moonPhaseBtnEl = document.getElementById("moon-phases");
var displayAdvice = "";
moonPhaseBtnEl.addEventListener("click", showMoonPhase);
  
function showMoonPhase(event) {
  if (event.target.id == null){
    return
  }   
  
  if (event.target.tagName != "BUTTON"){
    return
  }
console.log(displayAdvice)
  if (displayAdvice != ""){
    var hideEl = document.getElementById(displayAdvice)
    hideEl.classList.add("hide")
  
  }
  var adviceEl = document.getElementById(event.target.id.substring(0, event.target.id.length-4)+"-p")
  adviceEl.removeAttribute("class", "hide" )
  displayAdvice = adviceEl.id
  

}

function displayTime() {
  var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

  document.getElementById('clock').textContent = time;
  setTimeout(displayTime, 1000);
}
displayTime()
