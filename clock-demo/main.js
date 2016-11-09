var isTwelveHour = true;

// KEY CONCEPTS OF THIS DEMO
// Minor HTML organization
// CSS
// Javascript Object management and mainpulation
// arrays and accessing info in arrays
// HMTL injection
// conditionals
// setInterval
// global variables vs local variables
// functions
// functions with parameters
// lots of logical cases to test:
// midnight, noon, xx:01-09, am//pm, 12hr//24hr etc.



//HTML references
var hourContainer = document.getElementById('hour');
var separatorContainer = document.getElementById('separator');
var minuteContainer = document.getElementById('minute');
var meridiemContainer = document.getElementById('meridiem');
var weekdayContainer = document.getElementById('weekday');
var monthContainer = document.getElementById('month');
var dayContainer = document.getElementById('day');

//Analog only
var hHand = document.getElementById('hHand');
var mHand = document.getElementById('mHand');
var sHand = document.getElementById('sHand');

//hand movements for analog clock
function handleMovements(dateObject) {

    var rotation = 360 / 60;    //convert seconds to degrees
    var hRotation = 360 / 12;   //convert hours to degrees.
    seconds = dateObject.getSeconds();
    minutes = dateObject.getMinutes();
    hours = dateObject.getHours();

    hoursPrefix = "translateY(40px) rotate(";
    minutesPrefix = "translateY(20px) rotate(";
    secondsPrefix = "translateY(10px) rotate(";

    hHand.style.transform = hoursPrefix + hours % 12 * hRotation + "deg)";
    mHand.style.transform = minutesPrefix + minutes * rotation + "deg)";
    sHand.style.transform = secondsPrefix + seconds * rotation + "deg)";
}

function startTime() {
    // Date components
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var weekday = today.getDay();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var monthsOfTheYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];



    if(minute < 10){
        minute = "0" + minute;
    }

    //12 hour specific
    if (isTwelveHour) {
        if (hour > 12) {
            hour = hour % 12;
            meridiem = 'pm';
        } else {
            meridiem = 'am';
        }
    }
    //24 hour specific
    if (!isTwelveHour) {
        meridiem = null;
        if (hour < 10) {
            hour = parseInt("0" + hour);
        }
    }

    handleMovements(today);

    //HTML Assignments
    hourContainer.innerHTML = hour;
    minuteContainer.innerHTML = minute;
    meridiemContainer.innerHTML = meridiem;
    weekdayContainer.innerHTML = daysOfTheWeek[weekday];
    monthContainer.innerHTML = monthsOfTheYear[month];
    dayContainer.innerHTML = day;
}


startTime();

//Run the script continually
setInterval(startTime, 500);
