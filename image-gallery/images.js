var imageGallery = [
  "http://i26.tinypic.com/2hwx3c.jpg",      
  "http://i43.tinypic.com/2iqxpg1.jpg",
  "http://i40.tinypic.com/2agls15.jpg",
  "http://i41.tinypic.com/2ym9f01.jpg",
  "http://i32.tinypic.com/14aa4o7.jpg"
];

var imgCount = 0;
var totalImgs = imageGallery.length - 1;

function next() {
  imgCount++ ;
  if(imgCount > totalImgs) imgCount = 0
   
  document.getElementById("gallery").src = imageGallery[imgCount] ;
}

function previous() {
  imgCount--;
  if(imgCount < 0) imgCount = totalImgs ;
    document.getElementById("gallery").src = imageGallery[imgCount] ;
}    

function playSlideshow() {
  //first argument is function to call, and second is interval time in milliseconds
  setInterval(next, 3000);
}

playSlideshow();
