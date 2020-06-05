const calculator = require('./calculator');

describe('calculator', () => {
  it('takes in a sum and returns it', () => {
    expect(calculator('1 + 1')).toEqual('1 + 1');
  });
});
