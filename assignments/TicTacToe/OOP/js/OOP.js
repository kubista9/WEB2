// script.js {}
   
class Game  {
    //An empty constructor in a class is not strictly necessary. If you don't define a constructor in a class, JavaScript automatically provides an empty constructor
    // this.cells versus const cells 
    // - this.cells, you are defining a property on the instance of the class. This means that each instance of your class will have its own separate copy of cells
    // - const cells,  If you define cells using const outside of a class, it will be scoped to the module or script where it's defined. It's not encapsulated in the 
    // class and cannot be accessed via this within class methods. If you need to access cells across different functions or classes and you don't want it to be part of a class instance, then having it as a separate constant could make sense.
    constructor() {
        this.cells = document.querySelectorAll('[data-cell]');
        this.resetButton = document.getElementById('reset-button');
        this.turn = 'X';
        this.winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        this.cells.forEach(cell => {
            cell.addEventListener('click', this.onClick.bind(this), {once: true });
        });
        
        this.resetButton.addEventListener('click', this.resetGame.bind(this));
    }

    onClick(event){
        // captures the specific cell (element) that was clicked
        const cell = event.target;
        this.placeMark(cell, this.turn);
        if(this.checkWin(this.turn)){
            alert(`${this.turn} wins!`);
            this.resetGame();
        } else {
            // ternary operator - "If this.turn is currently 'X', change it to 'O'. Otherwise, change it to 'X'
            this.turn = this.turn === 'X' ? 'O' : 'X';
        }
    }

    placeMark(cell, mark) {
        cell.classList.add(mark);
      }

    checkWin(mark){
        // used to check if any of the winning combinations has been achieved by the current player
        return this.winningCombinations.some(combination => combination.every(index => this.cells[index].classList.contains(mark)));
    }

    resetGame(){
        this.trun = 'X';
        this.cells.forEach(cell => {
            cell.classList.remove('X','O');
            cell.addEventListener('click', this.onClick.bind(this), {once: true});
        });
    }
}

document.addEventListener('DOMContentLoaded', () => new Game());

function createGame(){
    return new Game();
}

const game = createGame();

