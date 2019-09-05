const OPERANDS = ['+', '-', '*', '/'];
const MAX = 10;

/**
 * This takes in an operand and generates a problem. 
 * Returns an object with 3 attributes.
 * @param {String} operand 
 */
const problemGenerator = (operand) => {
    let sanatizedOperand = '';
    if(OPERANDS.indexOf(operand) == -1) 
        sanatizedOperand = OPERANDS[Math.floor(Math.random() * OPERANDS.length)];
    else 
        sanatizedOperand = operand;
    
    firstNumber = String(Math.floor(Math.random() * MAX));
    secondNumber = String(Math.floor(Math.random() * MAX));

    const problem =  {
        firstNum : firstNumber,
        secondNum : secondNumber,
        operand : sanatizedOperand
    };
    
    return problem;
}

module.exports = problemGenerator;