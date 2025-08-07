let cell = document.getElementsByClassName("cell")
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
        printBoard();
    }
    const getGameBoard = () => {
        return board;
    }
    const printBoard = () => {
        let cell = document.getElementsByClassName("cell")
        let cellNumber = 0;
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[row]; column++) {
                cell[cellNumber].textContent = "X";
                cellNumber++;
            }
        }
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

    return {getGameBoard, play, init}
})();

const createPlayer = (name, symbol) => {
    return { name, symbol }
}

const gameManager = (() => {
    let player1 = null;
    let player2 = null;
    const start = (name1, name2) => {
        gameboard.init();
        playCounter = 0;
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
    return { start, play }
})();