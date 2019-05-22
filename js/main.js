    //Variabele voor Headflip
var man = document.querySelector("svg #man"),
    head = document.querySelector("svg #man #head"),
    headArea = document.querySelector("svg #man #head-fill"),
    headCa = document.querySelector("svg #man #ca-man #ca-head"),
    
    //Variabele voor de Arm
    woman = document.querySelector("svg #woman"),
    womanArm = document.querySelector("svg #woman #arm-front"),
    womanArmCa = document.querySelector("svg #woman #ca-arm-front"),
    
    //Variabele voor de Auto
    car = document.querySelector("svg #car"),
    
    //Variabele voor de Bloemen
    flowers = document.querySelector("svg #flowers"),
    flowerSBellOpen = document.querySelector("svg #flowers #bell-open"),
    flowersBellClosed = document.querySelector("svg #flowers #bell-closed"),
    flowerSBellOpenCa = document.querySelector("svg #flowers #ca-bell-open"),
    flowersBellClosedCa = document.querySelector("svg #flowers #ca-bell-closed"),
    flowerSBellOpenArea = document.querySelector("svg #flowers #bell-open-fill"),
    flowersBellClosedArea = document.querySelector("svg #flowers #bell-closed-fill"),
    
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
    //Variabele vor de slider
    dashArraySlider = document.querySelector(".controls .sliders-container #dashArray"),
    strokes = document.querySelectorAll("svg g"),
    
    //https://vanseodesign.com/css/custom-properties-and-javascript/
    //Variabele voor de Kleuren
    headerStyles = window.getComputedStyle(document.querySelector(".textbox h1")),
    colorValue  = headerStyles.getPropertyValue("--color"),
    colorPick = document.querySelector(".controls .sliders-container #colorPick"),
    headerOne = document.querySelector("body");


colorPick.addEventListener("change", function() {
    headerOne.style.setProperty("--color",this.value);
});

dashArraySlider.addEventListener("change", function() {
    for (var i=0; i < strokes.length; i++) {
    var strokeStyles = window.getComputedStyle(strokes[i]),
        dashArrayValue = strokeStyles.getPropertyValue("--dasharray-num)");
        strokes[i].style.setProperty("--dasharray-num",this.value);
    }
});

//Click events
man.addEventListener('click', function() {
    head.classList.toggle("flipHead");
    headArea.classList.toggle("flipHeadFill");
    headCa.classList.toggle("flipHead");
});

woman.addEventListener('click', function() {
    womanArm.classList.toggle("rotateArm");
    womanArmCa.classList.toggle("rotateArm");
});

car.addEventListener('click', function() {
    car.classList.toggle("carLeft");
});

flowers.addEventListener('click', function() {
    flowerSBellOpen.classList.toggle("flowerDingleOpen");
    flowersBellClosed.classList.toggle("flowerDingleClosed");
    flowerSBellOpenCa.classList.toggle("flowerDingleOpen");
    flowersBellClosedCa.classList.toggle("flowerDingleClosed");
    flowerSBellOpenArea.classList.toggle("flowerDingleOpenFill");
    flowersBellClosedArea.classList.toggle("flowerDingleClosedFill");
});

//Keypress events
//https://keycode.info/
document.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) {
        console.log("he");
        car.classList.toggle("carLeft");
    }
    else if (e.keyCode == 39) {
        head.classList.toggle("flipHead");
        headArea.classList.toggle("flipHeadFill");
        headCa.classList.toggle("flipHead");
    }
    else if (e.keyCode == 38) {
        womanArm.classList.toggle("rotateArm");
        womanArmCa.classList.toggle("rotateArm");
    }
    else if (e.keyCode == 40) {
        flowerSBellOpen.classList.toggle("flowerDingleOpen");
        flowersBellClosed.classList.toggle("flowerDingleClosed");
        flowerSBellOpenCa.classList.toggle("flowerDingleOpen");
        flowersBellClosedCa.classList.toggle("flowerDingleClosed");
        flowerSBellOpenArea.classList.toggle("flowerDingleOpenFill");
        flowersBellClosedArea.classList.toggle("flowerDingleClosedFill");
    }
});