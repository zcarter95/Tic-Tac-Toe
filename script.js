const gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let x = 0; x < rows; x++) {
        board[x] = [];
        for (let y = 0; y < columns; y++) {
            board[x].push(`${x},${y}`);
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
        board[row][column] = player.symbol
    }

    return {getGameBoard, play, printBoard}
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
    }
    return { start }

});