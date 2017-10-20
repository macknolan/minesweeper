const generatePlayerBoard = (numberOfRows,numberOfColumns) => {
  let board = []
  for(let playerBoard = 0; playerBoard < numberOfColumns; playerBoard++){

    let row = []
    for(let playerRow=0; playerRow < numberOfRows; playerRow++){
      row.push(' ');
    }
    board.push(row);
  };
  return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = []
    for(let test = 0; test < numberOfColumns; test++){

      let row = []
    for(let testtest=0; testtest < numberOfRows; testtest++){
      row.push(null);
    }
    board.push(row);
  };
  let numberOfBombsPlaced = 0;
  while(numberOfBombsPlaced < numberOfBombs){
    // This may create Bombs on top of Bombs
    let randomRowIndex = Math.floor(Math.random() * numberOfBombs);
    let randomColumnIndex = Math.floor(Math.random() * numberOfBombs);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
  };
  return board;
};

const printBoard = (board) =>  {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);
console.log(printBoard(playerBoard));
console.log(printBoard(bombBoard));
