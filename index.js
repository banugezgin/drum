//document.querySelector("button").addEventListener("click", handleClick)
//function handleClick (){
//alert ("I got clicked!");
//}

var tom1= new Audio('sounds/tom-1.mp3');
function tom1Play () {
    tom1.play();
}

var tom2= new Audio('sounds/tom-2.mp3');
function tom2Play () {
    tom2.play();
}

var tom3= new Audio('sounds/tom-3.mp3');
function tom3Play () {
    tom3.play();
}

var tom4= new Audio('sounds/tom-4.mp3');
function tom4Play () {
    tom4.play();
}

var snare= new Audio('sounds/snare.mp3');
function snarePlay () {
    snare.play();
}

var kickBass= new Audio('sounds/kick-bass.mp3');
function kickBassPlay () {
    kickBass.play();
}

var crash = new Audio('sounds/crash.mp3');
function crashPlay () {
    crash.play();
}

var numberoOfButtons=document.querySelectorAll(".drum").length;
for (var i=0; i<numberoOfButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var innerCase= this.innerHTML;
    switch (innerCase) {
        case "w":
            tom1Play ();
            break;
    
        case "a":
            tom2Play ();
            break;
        
        case "s":
            tom3Play ();
            break;

        
        case "d":
            tom4Play ();
            break;

        case "j":
            snarePlay ();
            break;

        case "k":
            crashPlay ();
            break;

        case "l":
            kickBassPlay ();
            break;

        default: console.log(innerCase)
            break;
    }


    });
}

document.addEventListener("keypress" , function (key) {

    switch (event.key) {
        case "w":
            tom1Play ();
            break;
    
        case "a":
            tom2Play ();
            break;
        
        case "s":
            tom3Play ();
            break;

        
        case "d":
            tom4Play ();
            break;

        case "j":
            snarePlay ();
            break;

        case "k":
            crashPlay ();
            break;

        case "l":
            kickBassPlay ();
            break;

        default: console.log(innerCase)
            break;


    
        }


    });