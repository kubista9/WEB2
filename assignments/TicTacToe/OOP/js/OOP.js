// script.js

//getting the variables right for my cells, reset button and I need to mark the turn
const cells = document.querySelectorAll('[data-cell]');
const resetButton = document.getElementById('reset-button');
let turn = 'X';

//once: true - making sure that the cell can be clicked only once 
//on click event calling the onClick function
cells.forEach(cell => {
    cell.addEventListener('click', onClick, { once: true });
});

resetButton.addEventListener('click', resetGame);

//
function onClick(e) {
    //e.target - stores the clicked element
    const cell = e.target;
    placeMark(cell, turn);
    if (checkWin(turn)) {
        alert(`${turn} wins!`);
        resetGame();
        //if the game is not won by the current move, the turn is switched to the other player
    } else {
        turn = turn === 'X' ? 'O' : 'X';
    }
}

function placeMark(cell, mark) {
    //classList - provides acess to the list of CSS classes currently applied to the element
    let imageUrl = mark === 'X' ? 'url("x.png")' : 'url("o.png")';
    cell.style.backgroundImage = imageUrl;
    cell.style.backgroundPosition = 'center';
    cell.styke.backgroundRepeat = 'no-repeat';
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

    //tests whether at least one element of the array fits into the winning combinations
    return winningCombinations.some(combination =>
        combination.every(index => cells[index].classList.contains(mark))
    );
}


function resetGame() {
    turn = 'X';
    cells.forEach(cell => {
        cell.classList.remove('X', 'O');
        cell.addEventListener('click', onClick, { once: true });
    });
}
