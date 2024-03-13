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
    // Clear the existing board
    boardElement.innerHTML = '';
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



// background
console.clear();
const canvas = document.createElement('canvas');
document.body.append(canvas);
canvas.style.display = 'block';
canvas.style.width = '100vw';
canvas.style.height = '100vh';

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const gl = canvas.getContext('webgl2');
if (!gl) {
    alert('require webgl 2.0, bye')
}

const vss = `#version 300 es
in vec2 p;
void main() {
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

const fss = `#version 300 es
precision mediump float;
out vec4 o;
uniform vec4 c;
void main() {
  o = c;
}
`;


// Create shader program
// # should query both shader logs and program logs
// #  only if program link's status is false.
// 
// Here's the antipattern .. keep for ref
//

const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vss);
gl.compileShader(vs);
if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(vs));
    throw 1;
}

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fss);
gl.compileShader(fs);
if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(fs));
    throw 2;
}

const prg = gl.createProgram();
gl.attachShader(prg, vs);
gl.attachShader(prg, fs);
gl.linkProgram(prg);
if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(prg));
    throw 3;
}

gl.detachShader(prg, vs);
gl.deleteShader(vs);
gl.detachShader(prg, fs);
gl.deleteShader(fs);

// ---- End of antipattern ----

const $p = gl.getAttribLocation(prg, 'p');
const $c = gl.getUniformLocation(prg, 'c');

const va = gl.createVertexArray();
gl.bindVertexArray(va);

const N = 300; // n triangles

let ps;
{    
    ps = new Float32Array(2 + N * 2 * 2);
    ps[0] = 0; // clip space center
    ps[1] = 0;
    let j = 2;
    for (let i = 0; i < N; ++i) {
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
        ps[j++] = Math.random() * 2 - 1; //x 
        ps[j++] = Math.random() * 2 - 1; //y
    }
}

const buf = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
gl.bufferData(gl.ARRAY_BUFFER, ps, gl.DYNAMIC_DRAW);
gl.enableVertexAttribArray($p);
gl.vertexAttribPointer(
    $p,
    2, gl.FLOAT, // two 32b-float (8bytes)
    false,
    0, // skip n byte to fetch next
    0  // skip n byte to fetch first
);

let idxs; 
{ 
    idxs = new Uint16Array(3 * N);
    let j = 0;
    for (let i = 0; i < N; ++i) {
        idxs[j++] = 0;
        idxs[j++] = 1 + i * 2;
        idxs[j++] = 2 + i * 2;
    }
}

const ibuf = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibuf);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, idxs, gl.STATIC_DRAW);

gl.bindVertexArray(null);

//----- render

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0.1, 0.1, 0.1, 1);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
gl.enable(gl.BLEND);
gl.disable(gl.CULL_FACE);
gl.useProgram(prg);
gl.bindVertexArray(va);



function f() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform4fv($c, [0.2, 0.2, 0.2, 0.02]);
    gl.drawElements(
        gl.TRIANGLES,
        idxs.length, // n indices
        gl.UNSIGNED_SHORT, // ui16
        0 // skip n bytes to fetch first
    );
}
f();

// ---
gl.bindBuffer(gl.ARRAY_BUFFER, buf);
document.body.onmousemove = (e) => {
    ps[0] = e.clientX / window.innerWidth * 2 - 1;
    ps[1] = -1 * (e.clientY / window.innerHeight * 2 - 1);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, ps.slice(0, 2)); // that's why DYNAMIC_DRAW
    f();
} 