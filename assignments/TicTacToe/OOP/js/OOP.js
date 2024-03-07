// script.js

const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('reset-button');
let turn = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

resetButton.addEventListener('click', resetGame);

function handleClick(e) {
    const cell = e.target;
    placeMark(cell, turn);
    if (checkWin(turn)) {
        alert(`${turn} wins!`);
        resetGame();
    } else {
        turn = turn === 'X' ? 'O' : 'X';
    }
}

function placeMark(cell, mark) {
    cell.classList.add(mark);
}

function checkWin(mark) {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination =>
        combination.every(index => cells[index].classList.contains(mark))
    );
}

function resetGame() {
    turn = 'X';
    cells.forEach(cell => {
        cell.classList.remove('X', 'O');
        cell.addEventListener('click', handleClick, { once: true });
    });
}
