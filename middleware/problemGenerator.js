/**
 * This takes in an operand and generates a problem. 
 * Returns an object with 3 attributes.
 * @param {String} operand 
 */
const problemGenerator = (operand) => {
    const OPERANDS = ['+', '-', '*', '/'];
    const MAX = 10;
    
    let sanatizedOperand = '';
    if(OPERANDS.indexOf(operand) == -1) 
        sanatizedOperand = OPERANDS[Math.floor(Math.random() * OPERANDS.length)];
    else 
        sanatizedOperand = operand;

    let firstNumber = Math.floor(Math.random() * MAX);
    let secondNumber = Math.floor(Math.random() * MAX) + 1;
    
    if(sanatizedOperand == OPERANDS[3]){
        do{
            firstNumber = Math.floor(Math.random() * MAX);
            secondNumber = Math.floor(Math.random() * MAX) + 1;
        }
        while(firstNumber % secondNumber != 0);
    }
    firstNumber = String(firstNumber);
    secondNumber = String(secondNumber);
    
    const problem =  {
        firstNum : firstNumber,
        secondNum : secondNumber,
        operand : sanatizedOperand
    };
    
    return problem;
}

module.exports = problemGenerator;