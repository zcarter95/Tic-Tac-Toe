const gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let x = 0; x < columns; x++) {
            board[i].push(0);
        }
    }
    const getGameBoard = () => {
        return board;
    }
    return {getGameBoard}
})();

const createPlayer = (name) => {
    return {player}
}

const gameController = (player1 = "Player 1", player2 = "Player 2") => {
    const 
}