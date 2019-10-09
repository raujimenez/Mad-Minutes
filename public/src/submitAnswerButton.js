const checker = (firstNum, secondNum, operand) => {
    const OPERANDS = ['+', '-', '*', '/'];
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

const submitAnswerButton = () => {
    const firstNum = Number(document.getElementById('first-num').innerHTML);
    const secondNum = Number(document.getElementById('second-num').innerHTML);
    const operand = document.getElementById('operand').innerHTML;

    const correctAnswer = checker(firstNum, secondNum, operand);

    const userResponse = Number(document.getElementById('userResponse').value);
    console.log(userResponse);
    console.log(correctAnswer);
    if(userResponse == correctAnswer)
        console.log('correct');
    else 
        console.log('false');
}