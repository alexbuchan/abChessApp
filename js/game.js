

//GOAL 1: Get pieces to appear on the board in the right spots. DONE
//GOAL 2: Make them draggable. DONE
//GOAL 3: Draggable pieces must adhere to $tiles. KINDA
//GOAL 4: No more than one piece should be present in a $tile at once.
//GOAL 5: Implement piece rules.

//Game object.
function Game() {
  this.boardSize = 8;                                                           //Board size (Not going to change obviously).
  this.generateTiles();                                                         //Generate game board with $tiles.
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
        .attr("hosting", false)
        .attr("data-row", row)
        .attr("data-col", col));
    }
    createCheckerboardDesign();
  }
};

function createCheckerboardDesign() {
  $(".row:odd .tile:odd").addClass("blackTile");                                //Creates the checkerboard style.
  $(".row:even .tile:even").addClass("blackTile");
  $(".row:odd .tile:even").addClass("whiteTile");
  $(".row:even .tile:odd").addClass("whiteTile");
}


Game.prototype.addPieces = function (chessObjects) {
  for (var objectIndex in chessObjects) {
    var object = chessObjects[objectIndex];
    var $tile = $('.tile[data-row=' + object.location.row + '][data-col=' + object.location.column + ']');
    $tile.append($('<img>')
      .addClass("piece")
      .attr("alive", true)
      .attr("name", object.name)
      .attr("src", object.image)
      .attr("data-row", object.location.row).attr("data-col", object.location.column)
    );
    $tile.attr("hosting", true);
    if (object.color === "White") {
      $('.piece[name="' + object.name + '"]').attr("color", "white");
      //piece.attr("color", "white");
    }
    else {
      $('.piece[name="' + object.name + '"]').attr("color", "black");
    }
  }
};

function movePieces() {
  $(".piece").draggable({
    containment: $("#game-board"),
    start: onClickInfo
  });
  $(".tile").droppable({
    // hoverClass : "hover",
    drop : dropItemInfo,
  });
}

function onClickInfo(event, ui) {
  var xCoor = $(this).parent().attr("data-col");
  var yCoor = $(this).parent().attr("data-row");
  var $tile = $(this).parent();
  $(this).data('previousTile', $tile);
}

function dropItemInfo(event, ui) {
  var $tile = $(this);
  var chessPiece = ui.draggable;
  var chessPieceRow = chessPiece.attr("data-row");
  var chessPieceColumn = chessPiece.attr("data-col");
  console.log("chessPieceRow", chessPieceRow);
  console.log("chessPieceColumn", chessPieceColumn);
  var $tileRow = parseInt($(this).attr("data-row"));
  var $tileColumn = parseInt($(this).attr("data-col"));
  if ($tile.children().length < 1) {
    $tile.append($(chessPiece).css({"top": 0, "left":0}));
    $($tile).attr("hosting", true);
    var previousTile = $(ui.draggable).data("previousTile");
    console.log(previousTile.children().length);
    previousTile.attr("hosting", false);
  }
  else {
    if (detectColor(event, ui, $tile, chessPiece)) {
      moveInvalid(event, ui, $tile);
    }
    else {
      removePiece(event, ui, $tile, chessPiece);
    }
  }
}

function moveInvalid(event, ui, $tile) {
  $tile.droppable({
    drop: function() {
        ui.draggable.draggable({"revert": true});
    }
  });
  ui.draggable.css({position: "relative", top: "0px", left: "0px"});
}

function removePiece(event, ui, $tile, chessPiece) {
  var childrenArray = $tile.children();
  var victim = $(childrenArray[0]);
  var victimColor = victim.attr("color");
  switch (victimColor) {
    case "white":
      $(".whiteGraveyard").append($(victim));
      break;
    case "black":
      $(".blackGraveyard").append($(victim));
      break;
  }

  victim.css({position: "relative"});
  victim.removeClass("piece");
  $tile.append($(chessPiece).css({"top": 0, "left":0}));
}

function detectColor(event, ui, $tile, chessPiece) {
  var childrenArray = $tile.children();
  var victimColor = $(childrenArray[0]).attr("color");
  var attackerColor = chessPiece.attr("color");
  if (victimColor === attackerColor) { return true; }
  else { return false; }
}

function _findTile(row, col) {
  var $tile =  $(".tile[data-row=" + row + "][data-col=" + col + "]");
  var $tileLength =  $(".tile[data-row=" + row + "][data-col=" + col + "] > img").length;
  console.log("Tile Object:", $tile);
  console.log("Pieces within tile [", row, ",", col, "] =>", $tileLength);
}

var game;
var $allAvailableTiles = [];
$(document).ready(function() {
  game = new Game();
  game.addPieces(chessObjects);
  movePieces();
  $allAvailableTiles = findFreeTiles();
  // console.log("$allAvailableTiles", JSON.stringify($allAvailableTiles));
  // var pieceMoves = findPieceMovePossibilities();
  // console.log("pieceMoves", JSON.stringify(pieceMoves));
  // var x = filterTilesForPiece($allAvailableTiles, pieceMoves);
  // console.log("x", JSON.stringify(x));
});


function findFreeTiles() {
  var freeTiles = [];
  console.log($(".tile").attr("data-row"));
  // freeTiles = $(".tile[hosting="+false+"]");
  //   console.log("freeTiles", freeTiles);
  $(".tile[hosting="+false+"]").each(function () {
    var $this = $(this);
    var row = parseInt($this.attr("data-row")); //or this.value
    var col = parseInt($this.attr('data-col')); //or $this.data('X')
    freeTiles.push([row, col]);
});

  return freeTiles;
}
//
// function findPieceMovePossibilities() {
//   var knightRow = $('[name="White Kingside Knight"]').parent().attr("data-row");
//   var knightCol = $('[name="White Kingside Knight"]').parent().attr("data-col");
//   knightRow = parseInt(knightRow);
//   knightCol = parseInt(knightCol);
//   var knightLocation = [knightRow, knightCol];
//
//   var y = knightMoves(knightLocation);
//   return y;
// }
//
// function filterTilesForPiece(masterArray, arrayFilter) {
//   $(".tile").droppable({disable: true});
//   $(".tile").removeClass("hover");
//   arrayFilter.forEach(function (coordinates, index) {
//     var tileSelector = "[data-row=" + coordinates[0] + "][data-col=" + coordinates[1] + "]";
//     var pieceSelector = [];
//     $(".piece").draggable({
//       containment: $("#game-board"),
//       start: onClickInfo,
//       revert: true
//     });
//     $(tileSelector).droppable({
//       hoverClass : "hover",
//       drop : dropItemInfo,
//     });
//     // $(selector).addClass("hover");
//     // $(selector).on("click", )
//   });
// }
//
//
// function toMatrix(arr, width) {
//   return arr.reduce(function (rows, key, index) {
//     return (index % width == 0 ? rows.push([key])
//       : rows[rows.length-1].push(key)) && rows;
//   }, []);
// }

//COLLISION DETECTION AND DEATH
//Piece color will influence whether collisionDetect will not allow it to move to the same div (and not be appended)
//If piece is different colour then allow the move and then modify the class alive to false for
//first image in $tile.children() (element 0).
