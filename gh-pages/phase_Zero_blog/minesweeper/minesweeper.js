document.addEventListener('DOMContentLoaded', startGame)
document.addEventListener('click',checkForWin);
document.addEventListener('contextmenu',checkForWin);

// Define your `board` object here!

var board = {

  'cells':[]

}

function resetBoard(){
  document.getElementsByClassName("board")[0].innerHTML="";
  board.cells=[];
  document.body.style.background=""
  for(var row =0; row<4;row++){
    for(var col=0; col<4;col++){
      var randomMine;
      if(Math.random()>0.9){
        randomMine=true;
      }
      else{
        randomMine=false;
      }
      var newCell = {
        row:row,
        col:col,
        hidden:true,
        isMine:randomMine,
        surroundingMines:0,
        isMarked:false
      }
      board.cells.push(newCell);
    }
  }
}

function startGame () {
  resetBoard();
  for(var i =0; i<board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  };
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for(var i=0; i< board.cells.length; i++){
    if(board.cells[i].isMine===true){// want to find any exseption to the winning rule.
      if(board.cells[i].isMarked===false){
        console.log("fred");
        return;//this returns out out of the function
      }
    }
    if(board.cells[i].hidden===true && board.cells[i].isMine===false){
      console.log('bob');
      return;
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  lib.displayMessage('You win!')
  var audio=document.getElementById("win")
  audio.play()
  document.body.style.background = 'url("images/rainbow.png")'
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
    var surrounding = lib.getSurroundingCells(cell.row, cell.col);
    var mineCount = 0;//total count of mines surrounding cells, has to be outside of for to survive each iteration
    for(var i = 0; i< surrounding.length; i++){//iterates through surrounding array
      if (surrounding[i].isMine===true){//test to see if surrounding cell has mine
        mineCount += 1;//if it is true add one to minecount
      }
    }
    return (mineCount);//has to be outside of 'for' bc it would end the for loop to early, returns the count in each cell in relation to cells which have isMine=true
 }
