

//GOAL 1: Get pieces to appear on the board in the right spots. DONE
//GOAL 2: Make them draggable. DONE
//GOAL 3: Draggable pieces must adhere to tiles. KINDA
//GOAL 4: No more than one piece should be present in a tile at once.
//GOAL 5: Implement piece rules.

//Game object.
function Game() {
  this.boardSize = 8;                                                           //Board size (Not going to change obviously).
  this.generateTiles();                                                         //Generate game board with tiles.
                                                                                //If you get a chance, when a player takes a piece, use skyrim level UP sound FX.
}

//Generates board squares.
Game.prototype.generateTiles = function() {
  for (var row = 0; row < this.boardSize; row++) {
    $("#game-board").append($('<div>')
      .addClass("row")
      .attr("id", "row" + row)
    ); //Create a wrapper div for each row.
    for (var col = 0; col < this.boardSize; col++) {
      $("#row" + row).append($('<div>')
        .addClass("tile")
        .attr("data-row", row)
        .attr("data-col", col));
    }
    createCheckerboardDesign();
  }
};

Game.prototype.addPieces = function (chessObjects) {
  for (var objectIndex in chessObjects) {
    var object = chessObjects[objectIndex];
    var piece = $('.tile[data-row=' + object.location.row + '][data-col=' + object.location.column + ']');
    piece.append($('<img>').addClass("piece").attr("src", object.image).attr("name", object.name));
    if (object.pieceType === "White") {
      piece.attr("pieceType", "white");
    }
    else {
      piece.attr("pieceType", "black");
    }
  }
};

function movePieces(turn) {
  $(".piece").draggable({
    //snap: '.tile',
    start: onClickInfo
  });
  $(".tile").droppable({
    hoverClass : "hover",
    drop : dropItemInfo,
  });
}

//Generic Functions
// it's just too hard, give up....
// Do a rock paper scissors console game-board
//In a giant switch statement???
// BUT OF COURSE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


function onClickInfo(event, ui) {
  var xCoor = $(this).parent().attr("data-col");
  var yCoor = $(this).parent().attr("data-row");
  var tileLength = $(this).length;
  console.log("Initial Position of", $(this).attr("name"), ": [", yCoor, ",", xCoor, "]");
  //ui.helper.remove();
}

function dropItemInfo(event, ui) {
  var chessPiece = ui.draggable;
  var tile = $(this);
  var tileRow = parseInt($(this).attr("data-row"));
  var tileColumn = parseInt($(this).attr("data-col"));
  console.log("tile:", tile);
  console.log("Final Position of piece: [", tileRow, ",", tileColumn, "]");
  // console.log(chessPiece.attr("name"), "has been received by tile", tileXCoor, tileYCoor);
  $(this).append($(chessPiece).css({"top": 0, "left":0}));
  _findTile(tileRow, tileColumn);
  //.append($('<img>').addClass("piece").attr("src", object.image).attr("name", object.name));
}


function createCheckerboardDesign() {
  $(".row:odd .tile:odd").addClass("blackTile");                                //Creates the checkerboard style.
  $(".row:even .tile:even").addClass("blackTile");
  $(".row:odd .tile:even").addClass("whiteTile");
  $(".row:even .tile:odd").addClass("whiteTile");
}


function _findTile(row, col) {
  var tile =  $(".tile[data-row=" + row + "][data-col=" + col + "]");
  var tileLength =  $(".tile[data-row=" + row + "][data-col=" + col + "] > img").length;
  console.log("Tile Object:", tile);
  console.log("Pieces within tile [", row, ",", col, "] =>", tileLength);
}

function collisionDetect() {

}

var game;
var run = true;
var whiteTurn = true;
var blackTurn = false;
var turn = [];
$(document).ready(function() {
  game = new Game();
  game.addPieces(chessObjects);
  movePieces(turn);

});


//Create piece
//Piece is an object with various attributes
//Each piece is draggable on chess board tiles.
//Each piece should be aware of which tile they are on. (Necessary for legitimate moves by pieces)
//Tile should keep a count of pieces it has on it.  (Necessary when taking an opponenets pieces)


//Make a clone of the image when it lands on the tile.
//This will surely be on top or under the original piece. Then just remove the original piece.
//Have an "active" class representing dead or alive. If it is dead, whisk it to the side in your premade graveyards
