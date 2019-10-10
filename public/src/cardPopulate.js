const showProblem = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const parameterID = urlParams.get('id');
    
    const gameURL = '/set?id=' + parameterID;
    fetch(gameURL)
    .then(response => response.json())
    .then(problemSet => {
        const problems = problemSet[0].problems;
        
        for(let i = 0; i < problems.length; i++) {
            const firstNumField = document.createElement('span');
            const secondNumField = document.createElement('span');
            const operand = document.createElement('span');
            
            const cardFooter = document.createElement('div');
            const problemInput = document.createElement('input');

            cardFooter.setAttribute('class', 'card-footer text-center border-secondary ');

            firstNumField.setAttribute('id', 'first-num-' + String(i));
            secondNumField.setAttribute('id', 'second-num-' + String(i));
            operand.setAttribute('id', 'operand-'+ String(i));

            problemInput.setAttribute('type', 'text');
            problemInput.setAttribute('name', 'answer');
            problemInput.setAttribute('id', ('userResponse-' + String(i)));
            problemInput.setAttribute('class', 'form-control mr-sm-2 mt-3');

            firstNumField.setAttribute('class', 'mr-2');
            secondNumField.setAttribute('class', 'ml-2');


            const problem = problems[i];
            firstNumField.innerHTML = problem.firstNum;
            secondNumField.innerHTML = problem.secondNum;
            operand.innerHTML = problem.operand;

            const problemField = document.getElementById('problem-card');

            const problemFieldCard = document.createElement('div');
            problemFieldCard.setAttribute('id', ('card-' + String(i)))

            problemFieldCard.setAttribute('class', 'card bg-dark text-light border-secondary');
            const problemFieldCardBody = document.createElement('div');
            problemFieldCardBody.setAttribute('class', 'card-body text-center display-4')

            problemFieldCardBody.appendChild(firstNumField);
            problemFieldCardBody.appendChild(operand); 
            problemFieldCardBody.appendChild(secondNumField);

            cardFooter.appendChild(problemInput);

            problemFieldCard.append(problemFieldCardBody);
            problemFieldCard.append(cardFooter);
            problemField.appendChild(problemFieldCard);
        }

    });
}