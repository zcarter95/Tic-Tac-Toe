if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}else {
    ready();
}

function ready() {
    updateUI();
    getPlayerNames();
    addEventListenersCells();
}

function highlightWinningCells(winningCells) {
    console.log(toString(winningCells[0]))
    let cell1 = document.getElementById(winningCells[0]);
    let cell2 = document.getElementById(winningCells[1]);
    let cell3 = document.getElementById(winningCells[2]);
    cell1.style.backgroundColor = "lightgray";
    cell2.style.backgroundColor = "lightgray";
    cell3.style.backgroundColor = "lightgray";
}
function getPlayerNames() {
    let submit = document.getElementsByClassName("start_game")[0];
    submit.addEventListener('submit', function(event) {
        event.preventDefault();
        let formData = new FormData(submit);
        gameManager.start(Object.fromEntries(formData).player1, Object.fromEntries(formData).player2)
    });
}

function addEventListenersCells() {
    let cells = document.getElementsByClassName("cell");
    console.log(gameManager.getGameStatus)
    if (gameManager.getGameStatus) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener("click", processTurn)
        }
    }
    else {
        for (let i = 0; i < cells.length; i++) {
            cells[i].removeEventListener("click", processTurn)
        }
    }
}
function processTurn() {
    let cellCoord = (event.target.id).split(",");
    gameManager.play(cellCoord[0],cellCoord[1]);
}
function updateUI() {
    let cell = document.getElementsByClassName("cell");
    let board = gameboard.getGameBoard();
    cellNumber = 0
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board[row].length; column++) {
            cell[cellNumber].textContent = board[row][column];
            cellNumber++
        }
    }
}

const gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];
    
    const init = () => {
        for (let row = 0; row < rows; row++) {
            board[row] = [];
            for (let column = 0; column < columns; column++) {
                board[row].push(" - ");
            }
        }
    }
    const getGameBoard = () => {
        return board;
    }
    const play = (player, row,column) => {
        if (board[row][column] === " - "){
            board[row][column] = `${player.symbol}`
        }
        else {
            console.log(`(${row},${column}) is occupied!`)
            return "error"
        }
    }

    return {getGameBoard, play, init}
})();

const createPlayer = (name, symbol) => {
    return { name, symbol }
}

const gameManager = (() => {
    let player1 = null;
    let player2 = null;
    let gamestarted = false;
    const start = (name1, name2) => {
        gameboard.init();
        updateUI();
        playCounter = 0;
        player1 = createPlayer(name1, " X ");
        player2 = createPlayer(name2, " O ");
        gamestarted = true;
    }
    const getGameStatus = () => {
        return gamestarted;
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
        updateUI();
        checkWin()
    }
    const checkWin = () => {
        const board = gameboard.getGameBoard()
        //row 1
        if (board[0][0] === board[0][1] && board[0][1] === board[0][2]) {
            switch(board[0][0]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    gamestarted = false;
                    highlightWinningCells(["0,0","0,1","0,2"]);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //row 2
        else if (board[1][0] === board[1][1] && board[1][1] === board[1][2]) {
            switch(board[1][0]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //row 3
        else if (board[2][0] === board[2][1] && board[2][1] === board[2][2]) {
            switch(board[2][0]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //column 1
        else if (board[0][0] === board[1][0] && board[1][0] === board[2][0]) {
            switch(board[0][0]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //column 2
        else if (board[0][1] === board[1][1] && board[1][1] === board[2][1]) {
            switch(board[0][1]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //column 3
        else if (board[0][2] === board[1][2] && board[1][2] === board[2][2]) {
            switch(board[0][2]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //diaganol 1
        else if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            switch(board[0][0]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
        //diaganol 2
        else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            switch(board[0][2]) {
                case(" - "):
                    break;
                case(" X "):
                    console.log(`${player1.name} wins!`);
                    break;
                case(" O "):
                    console.log(`${player2.name} wins!`)
            }
        }
    }
    return { start, play, getGameStatus }
})();