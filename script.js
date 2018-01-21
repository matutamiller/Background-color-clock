// The idea is in rendering time into hex color and using it as a background 

var clock = document.getElementById('clock');
var color = document.getElementById('color');


function bgColorClock() {
    var time = new Date();                          //getting current time
    var h = (time.getHours() % 24).toString();      //getting current hour and convert its value to string
    var m = time.getMinutes().toString();           //getting current minutes and convert the value to string
    var s = time.getSeconds().toString();           //getting current seconds and convert the value to string

    if (h.length < 2) {                             //adding zero in front single numbers for convenient visualization    
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }

    var clockString = h + ':' + m + ':' + s;       
    var colorString = '#' + h + m + s;              //create hex color with the data got from current time

    clock.textContent = clockString;                //setting content for clock
    color.textContent = colorString;                //setting content for color

    document.body.style.background = colorString;   //setting background color
}

bgColorClock();                                     //call the function immediately to avoid the lag of 1s
setInterval(bgColorClock, 1000);                    //caling function with the set interval