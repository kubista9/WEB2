//reverseString.test.js
const reverseString = require('./reverseString');

describe('reverseString', () => {
    it('Should reverse a string Hello -> olleH', () => {
        expect(reverseString('Hello')).toBe('olleH');
    })
})