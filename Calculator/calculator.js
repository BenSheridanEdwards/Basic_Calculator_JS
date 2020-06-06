const calculator = sum => {
  const evaluate = () => {
    const operator = sum.split(' ')[1];
    const output = [sum];
    const firstNumber = Number(sum.split(' ')[0]);
    const secondNumber = Number(sum.split(' ')[sum.split(' ').length - 1]);

    switch (operator) {
      case '+':
        output.push(firstNumber + secondNumber);
        break;
      case '-':
        output.push(firstNumber - secondNumber);
        break;
      case '*':
        output.push(firstNumber * secondNumber);
        break;
      case 'x':
        output.push(firstNumber * secondNumber);
        break;
      case '/':
        output.push(firstNumber / secondNumber);
        break;
      default:
        throw new Error(`ArgumentError: Invalid operator, ${operator}`)
        break;
    }
    return output;
  };
  return evaluate();
};

module.exports = calculator;
