//calculator.test.js

const calculator = require('./calculator');

describe('calculator', () => {
    it('Should add two numbers', () => {
        expect(calculator.add(2,2)).toBe(4);
    })
})

describe('calculator', () => {
    it('Should subtract two numbers', () => {
        expect(calculator.subtract(5,2)).toBe(3);
    })
})

describe('calculator', () => {
    it('Should divide two numbers', () => {
        expect(calculator.divide(6,2)).toBe(3);
    })
})

describe('calculator', () => {
    it('Should multiply two numbers', () => {
        expect(calculator.multiply(2,2)).toBe(4);
    })
})