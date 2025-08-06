const gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let x = 0; x < rows; x++) {
        board[x] = [];
        for (let y = 0; y < columns; y++) {
            board[x].push(" - ");
        }
    }
    const getGameBoard = () => {
        return board;
    }
    const printBoard = () => {
        console.log(board[0]);
        console.log(board[1]);
        console.log(board[2]);
    }
    const play = (player, row,column) => {
        if (board[row][column] === " - "){
            board[row][column] = ` ${player.symbol} `
        }
        else {
            console.log(`(${row},${column}) is occupied!`)
            return "error"
        }
        printBoard();
    }

    return {getGameBoard, play}
})();

const createPlayer = (name, symbol) => {
    return { name, symbol }
}

const gameManager = (() => {
    let player1 = null;
    let player2 = null;
    const start = (name1, name2) => {
        player1 = createPlayer(name1, "X");
        player2 = createPlayer(name2, "O");
        console.log(`Player1: ${player1.name} is playing ${player1.symbol}`)
        console.log(`Player2: ${player2.name} is playing ${player2.symbol}`)
    }
    let playCounter = 0;
    const play = (x, y) => {
        playCounter++;
        if (playCounter % 2 !== 0) {
            let play = gameboard.play(player1, x, y);
            if (play == "error") {playCounter--}
        }
        else {
            let play = gameboard.play(player2, x, y);
            if (play == "error") {playCounter--}
        }
    }
    return { start, play }
})();