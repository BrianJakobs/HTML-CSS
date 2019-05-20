var head = document.querySelector("svg #man #head"),
    headArea = document.querySelector("svg #man #head-fill"),
    headArea = document.querySelector("svg #man #ca-head"),
    manArea = document.querySelector("svg #man-fill"),
    manStrokes = document.querySelector("svg #man g"),
    womanArea = document.querySelector("svg #woman-fill"),
    womanStrokes = document.querySelector("svg #woman g"),
    flowersArea = document.querySelector("svg #flowers-fill"),
    flowersStrokes = document.querySelector("svg #flowers g"),
    carArea = document.querySelector("svg #car-fill"),
    carStrokes = document.querySelector("svg #car g"),
    
//    https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    dashArraySlider = document.querySelector(".controls .sliders-container #dashArray"),
    strokes = document.querySelector("svg g"),
    
//    https://vanseodesign.com/css/custom-properties-and-javascript/
    strokeStyles = window.getComputedStyle(strokes),
    dashArrayValue = strokeStyles.getPropertyValue("--dasharray-num)"),
    headerStyles = window.getComputedStyle(document.querySelector(".textbox h1")),
    colorValue  = headerStyles.getPropertyValue("--color"),
    colorPick = document.querySelector(".controls .sliders-container #colorPick"),
    headerOne = document.querySelector("body");


colorPick.addEventListener("change", function() {
    headerOne.style.setProperty("--color",this.value);
})

manArea.addEventListener('click', function() {
    console.log("test");
    head.classList.toggle("flipHead");
    headArea.classList.toggle("flipHeadFill");
    headCA.classList.toggle("flipHeadFill");
});

manArea.addEventListener('click', function() {
    console.log("stop");
    manStrokes.classList.add("stop-animation");
});

womanArea.addEventListener('click', function() {
    womanStrokes.classList.add("stop-animation");
});

strokeStyles.setProperty(dashArrayValue, dashArraySlider.nodeValue);