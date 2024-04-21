//array.js

function throwException(array){
    if(array.length === 0 || array === null) throw new Exception("Array is null or has 0 elements");
}

function average(array){
    throwException(array);
    let sum = 0;
    let length = array.length;
    for(let i = 0; i < length; i++){
        sum += array[i];
    } 
    let average = sum / length;
    return average;
}

function min(array){
    throwException(array);
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(min > array[i]) min = array[i];
    }
    return min;
}

function max(array){
    throwException(array);
    let max = array[0];
    for(let i = 1; i < array.length; i++){
        if(max < array[i]) max = array[i];
    }
    return max;
}

function length(array){
    throwException(array);
    return array.length;
}

module.exports = { throwException, average, min, max, length };