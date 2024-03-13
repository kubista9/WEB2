//----------------------
//Function declaration
function greeting(name) {
    return "Hello, " + name
}

//Function expression using the function keyword
const greeting = function (name) {
    return "Hello, " + name
}

//----------------------
//Function expression using an arrow function
const greeting = name => "Hello, " + name

for (var i = 0; i < 10; i++) {
    // Do something
}

// "i" still exists outside of the block scope
console.log(i) // → 10

//----------------------
function createGreeting(msg) {
    return name => console.log(msg + ", " + name)
}

let sayHello = createGreeting("Hello")
let sayHi = createGreeting("Hi")

sayHello("Joel") // → "Hello, Joel"
sayHi("Ellie") // → "Hi, Ellie"

//----------------------
const numbers = [1, 2, 3, 4]

const [head, ...tail] = numbers

console.log(head) // → 1
console.log(tail) // → [2, 3, 4]

//----------------------
function suggestCloth(temperature) {
    return temperature > 20 ? "T-shirt" : "Sweater"
}