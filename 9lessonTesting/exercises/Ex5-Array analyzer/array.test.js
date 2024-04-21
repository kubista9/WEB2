//array.test.js

const arrayTest = require('./array');
const array = [1, 8, 3, 4, 2, 6];

describe('array analyzer', () => {
    it('Should return average of elements in the array', () => {
        expect(arrayTest.average(array)).toBe(4);
    })
});

describe('array analyzer', () => {
    it('Should return min element of the array', () => {
        expect(arrayTest.min(array)).toBe(1);
    })
});

describe('array analyzer', () => {
    it('Should return max element of the array', () => {
        expect(arrayTest.max(array)).toBe(8);
    })
});

describe('array analyzer', () => {
    it('Should return length of the array', () => {
        expect(arrayTest.length(array)).toBe(6);
    })
});

