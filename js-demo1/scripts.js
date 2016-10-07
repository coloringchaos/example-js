/* write alert to check that 
my page is correctly linked */
//alert("my external js is linked!");

////////////////////////////////
//CHANGE COLOR OF BOX 1 - interaction is on mouse click
//#1 - create variable to reference ID from html
var firstBox = document.getElementById("box1");

//#2 - create event listener
//will call displayMsg function if mouseover is true
firstBox.addEventListener("mousedown", changeBg);

//#3 - write the function that we call in the eventListener
function changeBg(){
	// if background is purple, change to green
	// === checks equivalency, equal value AND equal type
	if(firstBox.style.backgroundColor === "mediumorchid"){
		
		console.log("changeBg function called!");
		//if the bg IS teal, then change it to blue:
		firstBox.style.backgroundColor="aquamarine";
		//exit out of this if statement
		return;
	}
	firstBox.style.backgroundColor="mediumorchid";
}


////////////////////////////////
//ROLLOVER MESSAGE OF SECOND BOX
var secondBox = document.getElementById("box2");

secondBox.addEventListener("mouseover", displayMsg);
function displayMsg(){
	secondBox.innerHTML = "hello";
}

secondBox.addEventListener("mouseout", hideMsg);
function hideMsg(){
	secondBox.innerHTML = "";
}


// THIRD BOX - click to show image
var thirdBox = document.getElementById("box3");

thirdBox.addEventListener("mousedown", boxImg);

function boxImg(){
	thirdBox.style.backgroundImage = "url('https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg')";
	thirdBox.style.backgroundSize = "200px 200px";
}



