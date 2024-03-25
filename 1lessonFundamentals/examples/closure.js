function createGreeting(msg) {
    return name => console.log(msg + ", " + name)
}

let sayHello = createGreeting("Hello")
let sayHi = createGreeting("Hi")

sayHello("Joel") // → "Hello, Joel"
sayHi("Ellie") // → "Hi, Ellie"

function multiplier(factor) {
    return number => number * factor
}

const twice = multiplier(2)
const thrice = multiplier(3)

console.log(twice(5)) // → 10
console.log(thrice(5)) // → 15