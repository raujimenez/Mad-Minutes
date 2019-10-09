const showProblem = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const parameterID = urlParams.get('id');
    
    const gameURL = '/set?id=' + parameterID;
    fetch(gameURL)
    .then(response => response.json())
    .then(problemSet => {
        const problems = problemSet[0].problems;
        
        for(let i = 0; i < problems.length; i++) {
            const firstNumField = document.createElement('div');
            const secondNumField = document.createElement('div');
            const operand = document.createElement('div');
            const problemInput = document.createElement('input');


            firstNumField.setAttribute('id', 'first-num-' + String(i));
            secondNumField.setAttribute('id', 'second-num-' + String(i));
            operand.setAttribute('id', 'operand-'+ String(i));

            problemInput.setAttribute('type', 'text');
            problemInput.setAttribute('name', 'answer');
            problemInput.setAttribute('id', ('userResponse-' + String(i)));


            const problem = problems[i];
            firstNumField.innerHTML = problem.firstNum;
            secondNumField.innerHTML = problem.secondNum;
            operand.innerHTML = problem.operand;

            const problemField = document.getElementById('problem-card');
            
            const problemFieldCard = document.createElement('div');
            problemFieldCard.setAttribute('id', ('card-' + String(i)))

            problemFieldCard.appendChild(firstNumField);
            problemFieldCard.appendChild(secondNumField);
            problemFieldCard.appendChild(operand); 
            problemFieldCard.appendChild(problemInput);

            problemField.appendChild(problemFieldCard);
        }

    });
}