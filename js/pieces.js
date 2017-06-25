
function Piece(location, image, rule) {
    this.location = location;
    this.image = image;
    this.rule = rule;
}

Piece.prototype.drag = function () {

};


function Pawn() {
  Piece.call(this, location, image, rule);

};
Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

function Knight() {
  Piece.call(this, location, image, rule);
};
Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

function Bishop() {
  Piece.call(this, location, image, rule);
};
Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

function Rook() {
  Piece.call(this, location, image, rule);
};
Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

function Queen(location, image, rule) {
  Piece.call(this, location, image, rule);
};
Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

function King(location, image, rule) {
  Piece.call(this, location, image, rule);
};
King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

//Kings
var white_king = new King({x : "d", y : 1}, "../images/white-pieces/white-king.png", "");
var black_king = new King({x : "e", y : 8}, "../images/black-pieces/black-king.png", "");

//Queens
var white_queen = new Queen({x : "e", y : 1}, "../images/white-pieces/white-queen.png", "");
var black_queen = new Queen({x : "d", y : 8}, "../images/black-pieces/black-queen.png", "");

//Rooks
var white_KsRook = new Rook({x : "a", y : 1}, "../images/white-pieces/white-rook.png", "");
var white_QsRook = new Rook({x : "h", y : 1}, "../images/white-pieces/white-rook.png", "");
var black_KsRook = new Rook({x : "h", y : 8}, "../images/black-pieces/black-rook.png", "");
var black_QsRook = new Rook({x : "a", y : 8}, "../images/black-pieces/black-rook.png", "");

//Bishops
var white_LightBishop = new Bishop({x : "c", y : 1}, "../images/white-pieces/white-bishop.png", "");
var white_DarkBishop = new Bishop({x : "f", y : 1}, "../images/white-pieces/white-bishop.png", "");
var black_LightBishop = new Bishop({x : "f", y : 8}, "../images/black-pieces/black-bishop.png", "");
var black_DarkBishop = new Bishop({x : "c", y : 8}, "../images/black-pieces/black-bishop.png", "");

//Knights
var white_KsKnight = new Knight({x : "b", y : 1}, "../images/white-pieces/white-knight.png", "");
var white_QsKnight = new Knight({x : "g", y : 1}, "../images/white-pieces/white-knight.png", "");
var black_KsKnight = new Knight({x : "g", y : 8}, "../images/black-pieces/black-knight.png", "");
var black_QsKnight = new Knight({x : "b", y : 8}, "../images/black-pieces/black-knight.png", "");

//Pawns
var white_APawn = new Pawn({x : "a", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_BPawn = new Pawn({x : "b", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_CPawn = new Pawn({x : "c", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_DPawn = new Pawn({x : "d", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_EPawn = new Pawn({x : "e", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_FPawn = new Pawn({x : "f", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_GPawn = new Pawn({x : "g", y : 2}, "../images/white-pieces/white-pawn.png", "");
var white_HPawn = new Pawn({x : "h", y : 2}, "../images/white-pieces/white-pawn.png", "");

var black_APawn = new Pawn({x : "a", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_BPawn = new Pawn({x : "b", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_CPawn = new Pawn({x : "c", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_DPawn = new Pawn({x : "d", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_EPawn = new Pawn({x : "e", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_FPawn = new Pawn({x : "f", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_GPawn = new Pawn({x : "g", y : 7}, "../images/black-pieces/black-pawn.png", "");
var black_HPawn = new Pawn({x : "h", y : 7}, "../images/black-pieces/black-pawn.png", "");
