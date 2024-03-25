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

solution 
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

solution 
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