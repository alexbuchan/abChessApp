
//Ctrl + Cmd + G ---> Select all occurences of something

function Piece(pieceType, location, image, rule) {
    this.pieceType = pieceType;
    this.location = location;
    this.image = image;
    this.rule = rule;
}



function Pawn(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);

}
Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

function Knight(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);
}
Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;


// function knightMove(currentLocation) {
//   movesArray = []
// }

function Bishop(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);
}
Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

function Rook(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);
}
Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

function Queen(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);
}
Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

function King(pieceType, location, image, rule) {
  Piece.call(this, pieceType, location, image, rule);
}
King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

var chessObjects = {
//Kings

white_king : new King("White", {row : 7, column : 4}, "./images/white-pieces/white-king.png", ""),
black_king : new King("Black", {row : 0, column : 4}, "./images/black-pieces/black-king.png", ""),
//Queens

white_queen : new Queen("White", {row : 7, column : 3}, "./images/white-pieces/white-queen.png", ""),
black_queen : new Queen("Black", {row : 0, column : 3}, "./images/black-pieces/black-queen.png", ""),
//Rooks
//Bishops
white_KsRook : new Rook("White", {row : 7, column : 7}, "./images/white-pieces/white-rook.png", ""),
white_QsRook : new Rook("White", {row : 7, column : 0}, "./images/white-pieces/white-rook.png", ""),
black_KsRook : new Rook("Black", {row : 0, column : 0}, "./images/black-pieces/black-rook.png", ""),
black_QsRook : new Rook("Black", {row : 0, column : 7}, "./images/black-pieces/black-rook.png", ""),

white_LightBishop : new Bishop("White", {row : 7, column : 5}, "./images/white-pieces/white-bishop.png", ""),
white_DarkBishop : new Bishop("White", {row : 7, column : 2}, "./images/white-pieces/white-bishop.png", ""),
black_LightBishop : new Bishop("Black", {row : 0, column : 2}, "./images/black-pieces/black-bishop.png", ""),
black_DarkBishop : new Bishop("Black", {row : 0, column : 5}, "./images/black-pieces/black-bishop.png", ""),
//Knights

white_KsKnight : new Knight("White", {row : 7, column : 6}, "./images/white-pieces/white-knight.png", ""),
white_QsKnight : new Knight("White", {row : 7, column : 1}, "./images/white-pieces/white-knight.png", ""),
black_KsKnight : new Knight("Black", {row : 0, column : 1}, "./images/black-pieces/black-knight.png", ""),
black_QsKnight : new Knight("Black", {row : 0, column : 6}, "./images/black-pieces/black-knight.png", ""),
//Pawns

white_APawn : new Pawn("White", {row : 6, column : 0}, "./images/white-pieces/white-pawn.png", ""),
white_BPawn : new Pawn("White", {row : 6, column : 1}, "./images/white-pieces/white-pawn.png", ""),
white_CPawn : new Pawn("White", {row : 6, column : 2}, "./images/white-pieces/white-pawn.png", ""),
white_DPawn : new Pawn("White", {row : 6, column : 3}, "./images/white-pieces/white-pawn.png", ""),
white_EPawn : new Pawn("White", {row : 6, column : 4}, "./images/white-pieces/white-pawn.png", ""),
white_FPawn : new Pawn("White", {row : 6, column : 5}, "./images/white-pieces/white-pawn.png", ""),
white_GPawn : new Pawn("White", {row : 6, column : 6}, "./images/white-pieces/white-pawn.png", ""),
white_HPawn : new Pawn("White", {row : 6, column : 7}, "./images/white-pieces/white-pawn.png", ""),

black_APawn : new Pawn("Black", {row : 1, column : 0}, "./images/black-pieces/black-pawn.png", ""),
black_BPawn : new Pawn("Black", {row : 1, column : 1}, "./images/black-pieces/black-pawn.png", ""),
black_CPawn : new Pawn("Black", {row : 1, column : 2}, "./images/black-pieces/black-pawn.png", ""),
black_DPawn : new Pawn("Black", {row : 1, column : 3}, "./images/black-pieces/black-pawn.png", ""),
black_EPawn : new Pawn("Black", {row : 1, column : 4}, "./images/black-pieces/black-pawn.png", ""),
black_FPawn : new Pawn("Black", {row : 1, column : 5}, "./images/black-pieces/black-pawn.png", ""),
black_GPawn : new Pawn("Black", {row : 1, column : 6}, "./images/black-pieces/black-pawn.png", ""),
black_HPawn : new Pawn("Black", {row : 1, column : 7}, "./images/black-pieces/black-pawn.png", "")
};


//console.log(chessObjects.white_king);

//
// for (var objectIndex in chessObjects) {
//   var object = chessObjects[objectIndex];
//   console.log(object.pieceType);
// }

//$('.tile[data-row=0][data-col=0]').append('<div class="piece"><img src="' + black_APawn.image + '"></div>');
//$('.tile[data-row=0][data-col=0]').append('<div class="piece"><img src="' + black_APawn.image + '"></div>');
