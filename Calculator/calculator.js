const calculator = sum => {
  const evaluate = () => {
    const operator = sum.split(' ')[1];
    const output = [sum];

    if (operator === '+') {
      output.push(
        Number(sum.split(' ')[0]) +
          Number(sum.split(' ')[sum.split(' ').length - 1])
      );
    }
    return output;
  };
  return evaluate();
};

module.exports = calculator;
