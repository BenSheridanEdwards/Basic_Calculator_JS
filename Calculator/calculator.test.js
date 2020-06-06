const calculator = require('./calculator');

describe('calculator', () => {
  describe('when the sum is addition', () => {
    it("takes in a sum of '1 + 1' and returns the sum with the correct answer, 2", () => {
      expect(calculator('1 + 1')).toEqual(['1 + 1', 2]);
    });
  });
  describe('when the sum is subtraction', () => {
    it("takes in a sum of '5 - 1' and returns the sum with the correct answer, 4", () => {
      expect(calculator('5 - 1')).toEqual(['5 - 1', 4]);
    });
  });
  describe('when the sum is multiplication', () => {
    it("takes in a sum of '2 * 3' and returns the sum with the correct answer, 6", () => {
      expect(calculator('2 * 3')).toEqual(['2 * 3', 6]);
    });

    it("takes in a sum of '2 x 3' with the traditional times operator and returns the sum with the correct answer, 6", () => {
      expect(calculator('2 x 3')).toEqual(['2 x 3', 6])
    });
  });
  describe('when the sum is division', () => {
    it("takes in a sum of '16 / 2' and returns the sum with the correct answer, 8", () => {
      expect(calculator('16 / 2')).toEqual(['16 / 2', 8]);
    });
  });
});
