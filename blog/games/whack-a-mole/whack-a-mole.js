  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//Sound variable for when mole is clicked
var audio = new Audio();
audio.src = "./whack-audio.wav";

//Taget a table cell
var cells = document.getElementsByTagName("TD");
//Select random cell within the table (cells variable)
var randomIndex = Math.floor(Math.random() * cells.length);

//Show content of the selected random cell within the table
var randomCell = cells[randomIndex];

//mole image appears in random cell
var mole = document.createElement('img');
mole.src = './mole.PNG';
mole.id = "mole";
randomCell.appendChild(mole);


mole.onclick = function () {
//reassign mole to new random cell
randomIndex = Math.floor(Math.random() * cells.length);
randomCell = cells[randomIndex];
randomCell.appendChild(mole);
audio.play();
console.log ("Whack the mole")
};

