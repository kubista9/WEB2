//----------------------
//Imperative
let greeting = "Hi, "
let user = "Kasper"
greeting += user
console.log(greeting) // → "Hi, Kasper"

//functional
function greet(user) {
    return "Hi, " + user
}
console.log(greet("Kasper")) // → "Hi, Kasper"

//----------------------
//Objects are mutable
const animal = { type: "dog" }
animal.type = "cat"

//Primitive values are not
const animal2 = "dog"
animal2 = "cat" //ERROR - Assignment to constant variable

//Records & Tuples - objects and arrays as primitive values (not in JS yet!)
//"#" in front of object or array literal
const animal3 = { type: "dog" }
animal3.type = "cat" //ERROR - Assignment to constant variable

//----------------------
const pokemon = [
    { name: "Pikachu", type: "electric", hp: 35 },
    { name: "Charmander", type: "fire", hp: 39 },
    { name: "Squirtle", type: "water", hp: 44 },
    { name: "Jigglypuff", type: "normal", hp: 115 },
    { name: "Bulbasaur", type: "grass", hp: 45 },
    { name: "Vulpix", type: "fire", hp: 38 },
    { name: "Growlithe", type: "fire", hp: 55 },
]

//Imperative
for (let i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i].name)
}

//With HOF
pokemon.forEach(pokemon => console.log(pokemon.name))

//----------------------
const pokemon2 = [
    { name: "Pikachu", type: "electric", hp: 35 },
    { name: "Charmander", type: "fire", hp: 39 },
    { name: "Squirtle", type: "water", hp: 44 },
    { name: "Jigglypuff", type: "normal", hp: 115 },
    { name: "Bulbasaur", type: "grass", hp: 45 },
    { name: "Vulpix", type: "fire", hp: 38 },
    { name: "Growlithe", type: "fire", hp: 55 },
]

//Imperative filter and map for fire pokemon names
let result = []
for (let i = 0; i < pokemon2.length; i++) {
    if (pokemon2[i].type === "fire") result.push(pokemon2[i].name)
}

//Functional style filter
function isFire(pokemon2) {
    return pokemon2.type === "fire"
}

//map
const firePokemonNames = pokemon2.filter(isFire).map(p => p.name)

//----------------------
//Simple reduce example
const numbers = [10, 20, 30, 40, 50]

console.log(numbers.reduce(sum)) // → 150

function sum(result, element) {
    console.log(result) // → 10, 30, 60, 100
    return result + element
}

//Pokemon example
const pokemon3 = [
    { name: "Pikachu", type: "electric", hp: 35 },
    { name: "Charmander", type: "fire", hp: 39 },
    { name: "Squirtle", type: "water", hp: 44 },
    { name: "Jigglypuff", type: "normal", hp: 115 },
    { name: "Bulbasaur", type: "grass", hp: 45 },
    { name: "Vulpix", type: "fire", hp: 38 },
    { name: "Growlithe", type: "fire", hp: 55 },
]

//Imperative calculate total
let total = 0
for (let i = 0; i < pokemon3.length; i++) {
    total += pokemon3[i].hp
}

//Functional style
const totalHp = pokemon3.reduce((total, { hp }) => total + hp, 0)

//----------------------
const ingredients = ["🐮", "🥔", "🐔", "🌽"]

const poop = ingredients
    .map(cook) // → [🍔, 🍟, 🍗, 🍿]
    .filter(isVegetarian) // → [🍟, 🍿]
    .reduce(eat) // → 💩

function cook() {
    /**/
}

function isVegetarian() {
    /**/
}

function eat() {
    /**/
}