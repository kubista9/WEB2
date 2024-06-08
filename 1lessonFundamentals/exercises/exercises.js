//1 lesson fundamentals 

//2. Looping a Triangle
for(var i = 0; i < 8; i++){
    console.log("#".repeat(i))
}

//solution
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line)
}

//3: FizzBuzz
for(let i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    
    else {
        console.log(i)
    }
}
//solution
for (let n = 1; n <= 100; n++) {
    let output = ""
    if (n % 3 == 0) output += "Fizz"
    if (n % 5 == 0) output += "Buzz"
    console.log(output || n)
}

//4. Minimum
function minimum(a, b){
    if (a < b) return a
    else return b
}

//5 Bean Counting
function countBs(string){
    var count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'B'){
            count++;
        }
        
    }
    return count;
}

function countChar(string, char){
    var count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] ==  char){
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak","k"));

//solution 
function countChar(string, ch) {
    let counted = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1
        }
    }
    return counted
}

function countBs(string) {
    return countChar(string, "B")
}

//6. The Sum Of Range
function range(start, end){
    var array = [];
    for(let i = start; i <= end; i++){
        array.push(i);
    }
    return array;
}
console.log(range(1, 10))

function range(start, end, step){
    var array = [];
    for(let i = start; i <= end; i += step){
        array.push(i);
    }
    return array;
}
console.log(range(1, 10, 2))

//solution 
function range(start, end, step = start < end ? 1 : -1) {
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55

// 7. Currying 
function range(start){
    return function(end){
        if(end === undefined){
            return function(end){
                return range(start)(end);
            };
        }
        let result = [];
        for(let i = start; i <= end; i++){
            result.push(i);
        }
        return result;
    }
}

let rangeFrom3To = range(3);
let rangeFrom7To = range(7);

console.log(rangeFrom3To(3));
console.log(rangeFrom3To(8));
console.log(rangeFrom7To(9));

//8. Reversing an Array 
function reverseArray(array){
    let newArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length / 2); i++){
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]

//solution 
function reverseArray(array) {
    let output = []
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i])
    }
    return output
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}

console.log(reverseArray(["A", "B", "C"]))
// → ["C", "B", "A"];
let arrayValue2 = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue2)
console.log(arrayValue2)
// → [5, 4, 3, 2, 1]

//9. A List

//building linked list -> array
function arrayToList(inputArray) {
    if (!inputArray.length) {
       return null;
    }
    const [head, ...tail] = inputArray;
    return { value: head, rest: arrayToList(tail) };
   }
   

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
       array.push(node.value);
    }
    return array;
}
   
function prepend(value, list) {
    return {value: value, rest: list};
}
   
// iterates over the list, decrementing the index until it reaches zero, 
// at which point it returns the current node's value.
function nth(list, index) {
    let node = list;
    for (let i = 0; i < index; i++) {
       if (node) {
         node = node.rest;
       } else {
         return undefined;
       }
    }
    return node ? node.value : undefined;
}
   
console.log(arrayToList([10, 20]));
   // → {value: 10, rest: {value: 20, rest: null}}
   
console.log(listToArray(arrayToList([10, 20, 30])));
   // → [10, 20, 30]
   
console.log(prepend(10, prepend(20, null)));
   // → {value: 10, rest: {value: 20, rest: null}}
   
console.log(nth(arrayToList([10, 20, 30]), 1));
   // → 20

// solution 
function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list
}

function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array
}

function prepend(value, list) {
    return { value, rest: list }
}

function nth(list, n) {
    if (!list) return undefined
    else if (n == 0) return list.value
    else return nth(list.rest, n - 1)
}

// 10. Deep Comparison
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
       return true;
    }
   
    if (typeof obj1 == "object" && obj1 != null && typeof obj2 == "object" && obj2 != null) {
       if (Object.keys(obj1).length != Object.keys(obj2).length) {
         return false;
       }
   
       for (let prop in obj1) {
         if (obj1.hasOwnProperty(prop)) {
           if (!obj2.hasOwnProperty(prop) || !deepEqual(obj1[prop], obj2[prop])) {
             return false;
           }
         }
       }
   
       return true;
    }
   
    return false;
   }

   let obj = { here: { is: "an" }, object: 2 }
   console.log(deepEqual(obj, obj))
   // → true
   console.log(deepEqual(obj, { here: 1, object: 2 }))
   // → false
   console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
   // → true

   //solution
   function deepEqual(a, b) {
    if (a === b) return true

    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false

    let keysA = Object.keys(a),
        keysB = Object.keys(b)

    if (keysA.length != keysB.length) return false

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
    }

    return true
}