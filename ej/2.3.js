// Chessboard

var area = 12;
var board = '';

for (i = 0; i < area; i++) {
  for (n = 0; n < area; n++) {
    if ( (n + i) % 2 === 0 ) { board += '#'; } 
    else { board += ' '; }
  }
  board += '\n';
}

console.log(board);