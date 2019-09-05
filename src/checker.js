let OPERANDS = ['+', '-', '*', '/'];

/**
 * Performs operation based on string operand
 * @param {int} firstNum
 * @param {int} secondNum 
 * @param {string} operand 
 */

 const checker = (firstNum, secondNum, operand) => {
    if(OPERANDS.indexOf(operand) == -1)
        return null;

    switch (operand) {
        case OPERANDS[0]:
            return firstNum + secondNum;
        case OPERANDS[1]:
            return firstNum - secondNum;
        case OPERANDS[2]:
            return firstNum * secondNum;
        case OPERANDS[3]:
            return firstNum / secondNum;
    }
}

module.exports = checker;