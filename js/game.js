

//GOAL 1: Get pieces to appear on the board in the right spots.
//GOAL 2: Make them draggable.


function Game() {
  this.boardSize = 8;                             //Board size (Not going to change obviously).
  this.generateTiles();                           //Generate game board with tiles.
  //If you get a chance, when a player takes a piece, use skyrim level UP sound FX.
};

Game.prototype.generateTiles = function() {
  var generate_Div_Tag = generate_HTML_Tag("div");                                    //Create div creator function.
  for (var row = 0; row < this.boardSize; row++) {
    $("#game-board").append(generate_Div_Tag("class", "row", "id", "row" + row));     //Create a wrapper div for each row.
    for (var col = 0; col < this.boardSize; col++) {
      $("#row" + row).append(generate_Div_Tag("class", "tile",                        //Create the tile divs for each row.
                                               "data-row", row,
                                               "data-col", col));

    }
    $(".row:odd .tile:odd").addClass("blackTile");                                    //Creates the checkerboard style.
    $(".row:even .tile:even").addClass("blackTile");
    $(".row:odd .tile:even").addClass("whiteTile");
    $(".row:even .tile:odd").addClass("whiteTile");
  }
};

Game.prototype.addPieces = function (chessObjects) {
  $('.tile[data-row=' + chessObjects.black_BPawn.location.row + '][data-col=' + chessObjects.black_BPawn.location.column + ']').append('<div><img src=' + chessObjects.black_BPawn.image + '></div>');
  $('.tile[data-row=' + chessObjects.white_BPawn.location.row + '][data-col=' + chessObjects.white_BPawn.location.column + ']').append('<div><img src=' + chessObjects.black_BPawn.image + '></div>');
};

var game;

$(document).ready(function() {

  game = new Game();
  game.addPieces(chessObjects);

  //This is how to append the piece image to all tiles...
  //$(".tile").append('<img src="./images/black-king.svg">');
});

//Generic Functions


//Generates the required function for a chosen tag. Doesn't allow for more than one attribute value
//to be written per attribute (serious shortcoming!!) i.e class=tile,
//tile will be the only class able to be written for this tag at creation... try addClass()???
function generate_HTML_Tag(tagType, tagValue) {
  var counter = 0;
  return function(/*args ["attribute_name", "attribute_value"]*/) {
    var args = Array.prototype.slice.call(arguments);
    counter++;
    var openingTag = '<' + tagType;
    if (tagValue===undefined) {var value = ">"} else {var value = '>' + tagValue};
    var closingTag = '</' + tagType + '>';
    var arr1 = [openingTag];
    args.map(function(attribute, index) {
      if (index%2===0) { return arr1.push(" " + attribute + '=') }
      else { return arr1.push('"' + attribute + '"') }
    });
    arr1.push(value, closingTag);
    return arr1.join("");
  }
}
