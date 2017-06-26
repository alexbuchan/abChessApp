

//GOAL 1: Get pieces to appear on the board in the right spots.
//GOAL 2: Make them draggable.


function Game() {
  this.boardSize = 8;                                                           //Board size (Not going to change obviously).
  this.generateTiles();                                                         //Generate game board with tiles.
                                                                                //If you get a chance, when a player takes a piece, use skyrim level UP sound FX.
}

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
    console.log(object.name);
    $('.tile[data-row=' + object.location.row + '][data-col=' + object.location.column + ']')
      .append($('<img>')
      .addClass("piece")
      .attr("src", object.image)
    );
  }
};

function whattaDrag() {
    $(".piece").draggable();
    $(".tile").droppable();
}

//Generic Functions

function createCheckerboardDesign() {
  $(".row:odd .tile:odd").addClass("blackTile");                                //Creates the checkerboard style.
  $(".row:even .tile:even").addClass("blackTile");
  $(".row:odd .tile:even").addClass("whiteTile");
  $(".row:even .tile:odd").addClass("whiteTile");
}


var game;
$(document).ready(function() {

  game = new Game();
  game.addPieces(chessObjects);
  whattaDrag();


});
