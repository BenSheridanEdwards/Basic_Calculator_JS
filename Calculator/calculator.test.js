const calculator = require('./calculator');

describe('calculator', () => {
  describe('when the sum is addition', () => {
    it('takes in a sum of 1 + 1 and returns the sum with the answer, 2', () => {
      expect(calculator('1 + 1')).toEqual(['1 + 1', 2]);
    });
  });
});
