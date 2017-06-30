
//Check if tile has a piece on it. Class Hosting = true/false
//DONE. Tile will be (hosting=true) if piece is on it. (hosting=false) otherwise.

//If hosting is true, append to array called allAvailableTiles.
//DONE. Located in the document.ready function.

//Create a function which calculates the moves a chess piece can execute
//Store in array possibleMoves
//DONE for KNIGHT PIECE.

//Filter through allAvailableTiles and find all tiles compatible with piece moves
//located in possibleMoves. Store in result in array piecePossibleTiles

//Add a class to each tile in piecePossibleTiles and it will be the name of the piece.
//i.e: piece Knight will add a class .knight to all possible tiles.

//All other tiles will now reject the piece (because they haven't got the new class)

//Move the piece to a possible tile

//Remove the new tile class and repeat process.
//
// var knightRow = $('[name="White Kingside Knight"]').parent().attr("data-row");
// var knightCol = $('[name="White Kingside Knight"]').parent().attr("data-col");
// knightRow = parseInt(knightRow);
// knightCol = parseInt(knightCol);
// var knightLocation = [knightRow, knightCol];
// // var knightLocation = {row: 7, column: 1};
// function knightMoves(knightLocation) {
//
//   var move0 = [knightLocation[0] - 2, knightLocation[1] - 1];
//   var move1 = [knightLocation[0] - 2, knightLocation[1] + 1];
//   var move2 = [knightLocation[0] + 1, knightLocation[1] - 2];
//   var move3 = [knightLocation[0] + 1, knightLocation[1] + 2];
//   var move4 = [knightLocation[0] - 1, knightLocation[1] - 2];
//   var move5 = [knightLocation[0] - 1, knightLocation[1] + 2];
//   var move6 = [knightLocation[0] + 2, knightLocation[1] - 1];
//   var move7 = [knightLocation[0] + 2, knightLocation[1] + 1];
//
//   var knightMoves = [move0, move1, move2, move3, move4, move5, move6, move7];
//
//   var possibleMoves = knightMoves.filter(function(moveArray) {
//     if (!(moveArray[0] < 0 || moveArray[0] > 7 || moveArray[1] < 0 || moveArray[1] > 7)) {
//       return moveArray;
//     }
//   });
//
//   return possibleMoves;
//
// }
