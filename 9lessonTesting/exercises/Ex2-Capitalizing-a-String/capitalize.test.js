// Capitalize.test.js
const capitalize = require('./capitalize');

describe('capitalize', () => {
    it('should capitalize the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
});
