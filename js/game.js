

//GOAL 1: Get pieces to appear on the board in the right spots. DONE
//GOAL 2: Make them draggable. DONE
//GOAL 3: Draggable pieces must adhere to tiles. KINDA
//GOAL 4: No more than one piece should be present in a tile at once.
//GOAL 5: Implement piece rules.


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
    var piece = $('.tile[data-row=' + object.location.row + '][data-col=' + object.location.column + ']');
    piece.append($('<img>').addClass("piece").attr("src", object.image)
    );
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
    snap: '.tile'
  });
  $(".tile").droppable({
    accept: function(element) {
      return element.hasClass("acceptable");
    }
  });
  $("a").bind("click", function(event) {
    event.preventDefault();
    $(".draggable").toggleClass("acceptable");
  });
}

//Generic Functions

function createCheckerboardDesign() {
  $(".row:odd .tile:odd").addClass("blackTile");                                //Creates the checkerboard style.
  $(".row:even .tile:even").addClass("blackTile");
  $(".row:odd .tile:even").addClass("whiteTile");
  $(".row:even .tile:odd").addClass("whiteTile");
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
  // $("html").on("dragover", function() {
  //   $(this).addClass("dragging");
  // });
  // $("html").on("dragleave", function() {
  //   $(this).removeClass("dragging");
  // });
  // $("html").on("drop", function(event){
  //   event.preventDefault();
  //   event.stopPropagation();
  //   console.log("Dropped!");
  // });


  // while (run) {
  //   if (whiteTurn === true) {
  //     $("[pieceType=black]").droppable("disable");
  //   }
  //   if (blackTurn === true) {
  //     $("[pieceType=white]").droppable("disable");
  //   }
  //   run = false;
  // }

});
