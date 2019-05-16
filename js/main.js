//var head = document.querySelector("svg #man #man-head");
//
//document.onmmousemove = function(){
//    var x = event.clientX + 100 / window.innerWidth + "%";
//    var y = event.clientY + 100 / window.innerHeight + "%";
//    
//    head.style.left = x;
//    head.style.top = y;
//    head.style.transform = "translate( -"+x+", -"+y+")";
//}
var head = document.querySelector("svg #man #head");
var headArea = document.querySelector("svg #man #head-fill");

headArea.addEventListener('mouseover', function() {
    console.log("he");
    head.classList.add("flipHead");
    headArea.classList.add("flipHeadFill");
});