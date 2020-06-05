const calculator = require('./calculator');

describe('calculator', () => {
  describe('when the sum is addition', () => {
    it('takes in a sum of 1 + 1 and returns the sum with the correct answer, 2', () => {
      expect(calculator('1 + 1')).toEqual(['1 + 1', 2]);
    });
  });
  describe('when the sum is subtraction', () => {
    it('takes in a sum of 5 - 1 and returns the sum with the correct answer, 4', () => {
      expect(calculator('5 - 1')).toEqual(['5 - 1', 4]);
    });
  });
});
