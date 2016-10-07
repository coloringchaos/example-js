// alert('javascript is working.');


//Global Variables. Accessible by anything.
var firstName = 'Arielle';
var lastName = 'Hein';
var favNumber = 23;
var gpa = 4.0;
var imAwesome = true;


//This is a debugging statement
console.log(firstName + ' ' + lastName);

//Define a function. Defining does NOT run the code.
function addGreeting() {
    //do stuff here.
    // local variable. Only accessible inside the function.
    var headerBox = document.getElementById('greeting');
    headerBox.innerHTML = 'Hey there, ' + firstName + ' ' + lastName;

    console.log('addGreeting() just ran its code');
}

// call the function. This runs the code that lives inside the function.
// addGreeting();


function getFormData() {
    // getting things from HTML
    var fNameField = document.getElementById('fName');
    var lNameField = document.getElementById('lName');
    var favNumField = document.getElementById('favNum');

    // user input values
    var fNameData = fNameField.value;
    var lNameData = lNameField.value;
    var favNumData = favNumField.value;

    //tie all the info together into a message
    var message = "My name is " + fNameData + " " + lNameData + ". My favorite number is " + favNumData + ".";

    //inject into the html
    var headerBox = document.getElementById('form-greeting');
    headerBox.innerHTML = message;

    //trigger the css animation
    headerBox.className += ' fadeIn';
}
