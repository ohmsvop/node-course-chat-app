const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var nonString = 123;
        expect(isRealString(nonString)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var space = ' ';
        expect(isRealString(space)).toBe(false);
    });
    it('should allow string with non-space characters', () => {
        expect(isRealString(' abc ')).toBe(true);
    });
});
