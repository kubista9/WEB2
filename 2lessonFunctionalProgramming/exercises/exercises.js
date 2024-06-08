//02 Exercises: Functional Programming 

//1. Squaring Integers 

//using filter + map
function squareList(array){
    const positiveIntegers = squaredIntegers.filter(int => int > 0)
    const mapepdArray = positiveIntegers.map(int => int * int)
    return mapepdArray
}

const squaredIntegers = [-3, 4.8, 5, 3, -3.2]
console.log(squareList(squaredIntegers))

//solution 
function squareList(array) {
    return array.filter(x => x > 0 && x % 1 === 0).map(x => x * x)
}

//2. Flattening
let arrays = [[1, 2, 3], [4, 5], [6]]
const reducedarray = arrays.reduce((array, arrays) => [...array, ...arrays])

console.log(reducedarray)

//3. Your Own Loop
function loop(value, testFunction, updateFunction, bodyFunction){
    for(value; testFunction(value); value = updateFunction(value)){
        bodyFunction(value)
    }
}

loop(3, n => n > 0, n => n -1, console.log)

//4. Alphabetical Sorting 
const numbers = [1,5,2,3,4]
numbers.sort((a,b) => a - b)
console.log(numbers)

function alphabeticalOrder(array){
    let n = array.length 
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1; j++){
            if(array[j] > array[j + 1]){
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }
        }
    }
    return array
}

const letters = ["a", "d", "c", "a", "z", "g"]
console.log(alphabeticalOrder(letters))

//solution
function alphabeticalOrder(array) {
    return [...array].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))
}

//5. From Title to URL

function urlSlug(title){
    const slug = title.split(' ');
    return hyphendSlug = slug.map(word => word.toLowerCase()).join('-');
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))

//solution
function urlSlug(title) {
    return title.toLowerCase().trim().split(" ").join("-")
}

//6. Something
function checkPositive(array) {
    return array.some(value => value > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]))

//7. Everything 
every
function every(array, test) {
    return array.every(test)
}

function every(array, test){
    for(let i = 0; i < array.length; i++){
        if (!test(array[i])) {
            return false;
            break;
        }  
    }
    return true 
}

console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true
