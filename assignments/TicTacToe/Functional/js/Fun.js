//Fun.js {}

// Pure Functions: Functions that given the same input, will always return the same output and do not have any side effects (e.g., modifying external data).
// Immutability: Data is not modified. Instead, operations on data return new copies of the data with the desired changes.
// Higher-Order Functions: Functions that can take other functions as arguments or return them as results.

let gameState = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    winner: null, // 'X', 'O', or 'draw', null if the game is ongoing
};

function renderBoard(state) {
    const boardElement = document.getElementById('board');
    state.board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cellElement);
    });
}

//check if the cell is empty and checks for win or draw
function handleCellClick(index){
    // to prevent a player from making a move in an occupied cell or making any moves after the game has already been decided.
    if (gameState.board[index] !== '' || gameState.winner) return;
    gameState = makeMove(gameState, index);
    renderBoard(gameState);
    checkWin(gameState);
}

function makeMove(state, index){
    const newBoard = [...state.board];
    newBoard[index] = state.currentPlayer;
    return { 
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
    };
}

function checkWin(state) {
    // Define winning combinations
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    // Check for a win
    let winner = null;
    winningCombinations.forEach((combo) => {
        // state.board[combo[0]] === state.board[combo[1]]: Checks if the first cell in the combination is the same as the second cell. 
        // This is part of determining if all cells in a winning combination are occupied by the same player's mark.
        // state.board[combo[1]] === state.board[combo[2]]: Checks if the second cell in the combination is the same as the third cell. 
        // Along with the previous condition, this ensures that all three cells in the combination are occupied by the same mark.
        if (state.board[combo[0]] && state.board[combo[0]] === state.board[combo[1]] && state.board[combo[1]] === state.board[combo[2]]) {
            winner = state.board[combo[0]];
        }
    });

    // Check for a draw, true if draw || false if not draw
    const isDraw = state.board.every(cell => cell) && !winner;

    gameState = {
        // to copy properties from the current state 
        ...state,
        //updates the game state to reflect the current outcome of the game
        winner: winner || (isDraw ? 'draw' : null),
    };

    if (gameState.winner) {
        alert(gameState.winner === 'draw' ? 'Draw!' : `${gameState.winner} wins!`);
        resetGame();
    }
}

function resetGame() {
    gameState = {
        board: ['', '', '', '', '', '', '', '', ''],
        currentPlayer: 'X',
        winner: null,
    };
    renderBoard(gameState);
}

document.addEventListener('DOMContentLoaded', () => {
    renderBoard(gameState);
});


