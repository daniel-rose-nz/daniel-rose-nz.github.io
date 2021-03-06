document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click', checkForWin);
document.addEventListener('contextmenu', checkForWin);

// Define your `board` object here!
var board = {
  cells: [
          //row 1
          { 
            row: 1, 
            col: 1, 
            isMine: true, 
            hidden: true 
          }, 
          { 
            row: 1, 
            col: 2, 
            isMine: false,
            hidden: true
          },
          { 
            row: 1, 
            col: 3, 
            isMine: false,
            hidden: true
          }, 
          //row 2
          { 
            row: 2, 
            col: 1, 
            isMine: true,
            hidden: true
          },
           {
            row: 2,
            col: 2,
            isMine: false,
            hidden: true
          },
          {
            row: 2,
            col: 3,
            isMine: false,
            hidden: true
          },
          //row 3
          {
            row: 3,
            col: 1,
            isMine: false,
            hidden: true
          },
          {
            row: 3,
            col: 2,
            isMine: false,
            hidden: true
          },
          {
            row: 3,
            col: 3,
            isMine: true,
            hidden: true
          }
        ],
  
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  

  for (let i = 0; i < board['cells'].length; i++) {
    var cell = board.cells[i];
    cell.surroundingMines = countSurroundingMines(cell)
  }

 

  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  let youWon = true; 
 
  for (let i = 0; i < board['cells'].length; i++) {

    if (cell.isMine && !cell.isMarked) {
      youWon = false;
    }
    
    if (!cell.isMine && cell.hidden) {
      youWon = false;
    }
   
  
  if (youWon) {
  lib.displayMessage('You win!') 
  }
  
}
}

// You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines(cell) {

  let count =0;
  let surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  
  for(i= 0; i<surroundingCells.length; i++){
    if (surroundingCells[i].isMine == true){
      count++;
    }
  
  }
  return count;
}
