  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



//Track current unicorn image iteration. 
let imageCount = [0, 0, 0];
//Array to track which unicorn is targeted. 
let unicornNum = ["first", "second", "third"];

function changeImage(unicornPar) {
//Iterating the unicorn images (+1 each click). 
imageCount[unicornPar]++;
//If count goes above 3 then alert is displayed.
if (imageCount[unicornPar] > 3) {
imageCount[unicornPar] = 3;
//Variable to display correct message for each of the 3 unicorns. 
let message = ++unicornPar;  
alert("Be kind to unicorn " + message);
}
    //Code to target and update each unicorn image when clicked. 
    let elem = document.getElementById(unicornNum[unicornPar]);
    let imagePath = "./images/unicorn-" + imageCount[unicornPar] + ".png";
    elem.src = imagePath;

console.log(imageCount);
}

