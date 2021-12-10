
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
    display_c5()