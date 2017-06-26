
//Ctrl + Cmd + G ---> Select all occurences of something

function Piece(name, location, image, rule) {
    this.name = name;
    this.location = location;
    this.image = image;
    this.rule = rule;
}



function Pawn(name, location, image, rule) {
  Piece.call(this, name, location, image, rule);

};
Pawn.prototype = Object.create(Piece.prototype);
Pawn.prototype.constructor = Pawn;

function Knight(name, location, image, rule) {
  Piece.call(this, name, location, image, rule);
};
Knight.prototype = Object.create(Piece.prototype);
Knight.prototype.constructor = Knight;

function Bishop(name, location, image, rule) {
  Piece.call(this, name, location, image, rule);
};
Bishop.prototype = Object.create(Piece.prototype);
Bishop.prototype.constructor = Bishop;

function Rook(name, location, image, rule) {
  Piece.call(this, name, location, image, rule);
};
Rook.prototype = Object.create(Piece.prototype);
Rook.prototype.constructor = Rook;

function Queen(name, location, image, rule) {
  Piece.call(this, name, location, image, rule);
};
Queen.prototype = Object.create(Piece.prototype);
Queen.prototype.constructor = Queen;

function King(name, location, image, rule) {
  Piece.call(this, location, image, rule);
};
King.prototype = Object.create(Piece.prototype);
King.prototype.constructor = King;

var chessObjects = {
//Kings

white_king : new King("white_king", {row : 0, column : 3}, "./images/white-pieces/white-king.png", ""),
black_king : new King("black_king", {row : 7, column : 4}, "./images/black-pieces/black-king.png", ""),
//Queens

white_queen : new Queen("white_queen", {row : 0, column : 4}, "./images/white-pieces/white-queen.png", ""),
black_queen : new Queen("black_queen", {row : 7, column : 3}, "./images/black-pieces/black-queen.png", ""),
//Rooks
//Bishops
white_KsRook : new Rook("white_KsRook", {row : 0, column : 0}, "./images/white-pieces/white-rook.png", ""),
white_QsRook : new Rook("white_QsRook", {row : 0, column : 7}, "./images/white-pieces/white-rook.png", ""),
black_KsRook : new Rook("black_KsRook", {row : 7, column : 7}, "./images/black-pieces/black-rook.png", ""),
black_QsRook : new Rook("black_QsRook", {row : 7, column : 0}, "./images/black-pieces/black-rook.png", ""),

white_LightBishop : new Bishop("white_LightBishop", {row : 0, column : 2}, "./images/white-pieces/white-bishop.png", ""),
white_DarkBishop : new Bishop("white_DarkBishop", {row : 0, column : 5}, "./images/white-pieces/white-bishop.png", ""),
black_LightBishop : new Bishop("black_LightBishop", {row : 7, column : 5}, "./images/black-pieces/black-bishop.png", ""),
black_DarkBishop : new Bishop("black_DarkBishop", {row : 7, column : 2}, "./images/black-pieces/black-bishop.png", ""),
//Knights

white_KsKnight : new Knight("white_KsKnight", {row : 0, column : 1}, "./images/white-pieces/white-knight.png", ""),
white_QsKnight : new Knight("white_QsKnight", {row : 0, column : 6}, "./images/white-pieces/white-knight.png", ""),
black_KsKnight : new Knight("black_KsKnight", {row : 7, column : 6}, "./images/black-pieces/black-knight.png", ""),
black_QsKnight : new Knight("black_QsKnight", {row : 7, column : 1}, "./images/black-pieces/black-knight.png", ""),
//Pawns

white_APawn : new Pawn("white_APawn", {row : 1, column : 0}, "./images/white-pieces/white-pawn.png", ""),
white_BPawn : new Pawn("white_BPawn", {row : 1, column : 1}, "./images/white-pieces/white-pawn.png", ""),
white_CPawn : new Pawn("white_CPawn", {row : 1, column : 2}, "./images/white-pieces/white-pawn.png", ""),
white_DPawn : new Pawn("white_DPawn", {row : 1, column : 3}, "./images/white-pieces/white-pawn.png", ""),
white_EPawn : new Pawn("white_EPawn", {row : 1, column : 4}, "./images/white-pieces/white-pawn.png", ""),
white_FPawn : new Pawn("white_FPawn", {row : 1, column : 5}, "./images/white-pieces/white-pawn.png", ""),
white_GPawn : new Pawn("white_GPawn", {row : 1, column : 6}, "./images/white-pieces/white-pawn.png", ""),
white_HPawn : new Pawn("white_HPawn", {row : 1, column : 7}, "./images/white-pieces/white-pawn.png", ""),

black_APawn : new Pawn("black_APawn", {row : 6, column : 0}, "./images/black-pieces/black-pawn.png", ""),
black_BPawn : new Pawn("black_BPawn", {row : 6, column : 1}, "./images/black-pieces/black-pawn.png", ""),
black_CPawn : new Pawn("black_CPawn", {row : 6, column : 2}, "./images/black-pieces/black-pawn.png", ""),
black_DPawn : new Pawn("black_DPawn", {row : 6, column : 3}, "./images/black-pieces/black-pawn.png", ""),
black_EPawn : new Pawn("black_EPawn", {row : 6, column : 4}, "./images/black-pieces/black-pawn.png", ""),
black_FPawn : new Pawn("black_FPawn", {row : 6, column : 5}, "./images/black-pieces/black-pawn.png", ""),
black_GPawn : new Pawn("black_GPawn", {row : 6, column : 6}, "./images/black-pieces/black-pawn.png", ""),
black_HPawn : new Pawn("black_HPawn", {row : 6, column : 7}, "./images/black-pieces/black-pawn.png", "")
};

for (var object in chessObjects) {
  console.log(object);
}



//$('.tile[data-row=0][data-col=0]').append('<div class="piece"><img src="' + black_APawn.image + '"></div>');
//$('.tile[data-row=0][data-col=0]').append('<div class="piece"><img src="' + black_APawn.image + '"></div>');
