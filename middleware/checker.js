/**
 * Performs operation based on string operand
 * @param {int} firstNum
 * @param {int} secondNum 
 * @param {string} operand 
 */
const checker = (firstNum, secondNum, operand) => {
    const OPERANDS = ['+', '-', '*', '/'];
    if(OPERANDS.indexOf(operand) == -1)
        return null;

    switch (operand) {
        case OPERANDS[0]:
            return Math.floor(firstNum + secondNum);
        case OPERANDS[1]:
            return Math.floor(firstNum - secondNum);
        case OPERANDS[2]:   
            return Math.floor(firstNum * secondNum);
        case OPERANDS[3]:
            return Math.floor(firstNum / secondNum);
    }
}

module.exports = checker;