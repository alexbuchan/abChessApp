

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
    var tile = $('.tile[data-row=' + object.location.row + '][data-col=' + object.location.column + ']');
    tile.append($('<img>')
      .addClass("piece")
      .attr("alive", true)
      .attr("name", object.name)
      .attr("src", object.image)
    );

    if (object.color === "White") {
      $('.piece[name="' + object.name + '"]').attr("color", "white");
      //piece.attr("color", "white");
    }
    else {
      $('.piece[name="' + object.name + '"]').attr("color", "black");
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
  var tile = $(this).parent();
  console.log("Initial Position of", $(this).attr("name"), ": [", yCoor, ",", xCoor, "]");
  console.log("tile", tile);
  console.log("End onClickInfo()");
}

function dropItemInfo(event, ui) {
  var tile = $(this);
  var chessPiece = ui.draggable;
  var tileRow = parseInt($(this).attr("data-row"));
  var tileColumn = parseInt($(this).attr("data-col"));
  console.log("tile:", tile);
  console.log("Final Position of piece: [", tileRow, ",", tileColumn, "]");
  $(this).append($(chessPiece).css({"top": 0, "left":0}));
  _findTile(tileRow, tileColumn);
  collisionDetect(ui, event, tile);
  // detectColor(tile);
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

function collisionDetect(ui, event, tile) {
  var sameColor = detectColor(tile);
  console.log("sameColor", sameColor);
  var childrenArray = tile.children();
  var victim = $(childrenArray[0]);
  var attacker = $(childrenArray[1]);
  kill(ui, event, tile, victim);
}

function kill(ui, event, tile, victim) {
  var sameColor = detectColor(tile);
  if (!sameColor) {
    victim.remove();
    ui.draggable.draggable({revert: true});
  }
}


function detectColor(tile) {
  console.log("Start Function detectColor()");
  var childrenArray = tile.children();
  if (childrenArray.length <= 1) { return "No detection needed."; }
  var victimColor = $(childrenArray[0]).attr("color");
  var attackerColor = $(childrenArray[1]).attr("color");
  console.log(victimColor === attackerColor);
  if (victimColor === attackerColor) { return true; }
  else { return false; }
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


//COLLISION DETECTION AND DEATH
//Piece color will influence whether collisionDetect will not allow it to move to the same div (and not be appended)
//If piece is different colour then allow the move and then modify the class alive to false for
//first image in tile.children() (element 0).
