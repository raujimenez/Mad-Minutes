const showProblem = () => {
    const gameURL = '/set?id='
    fetch(gameURL)
    .then(response => response.json())
    .then(problemSet => {
        const firstNumField = document.createElement('div');
        const secondNumField = document.createElement('div');
        const operand = document.createElement('div');

        firstNumField.setAttribute('id', 'first-num');
        secondNumField.setAttribute('id', 'second-num');
        operand.setAttribute('id', 'operand');
        
        const problem = problemSet[0];
        firstNumField.innerHTML = problem.firstNum;
        secondNumField.innerHTML = problem.secondNum;
        operand.innerHTML = problem.operand;

        const problemField = document.getElementById('problem-card');
        problemField.appendChild(firstNumField);
        problemField.appendChild(secondNumField);
        problemField.appendChild(operand);
    });
}