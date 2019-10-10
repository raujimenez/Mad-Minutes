const submitAnswerButton = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const parameterID = urlParams.get('id');
    
    const answerURL = '/solutions?id=' + parameterID;
    fetch(answerURL)
    .then(response => response.json())
    .then(answerSet => {

        const wrongAnswers = [];

        for(let i = 0; i < answerSet.length; i++) {
            const userResponse = Number(document.getElementById('userResponse-' + String(i)).value);
            const answerQuestion = answerSet[i];
            if(userResponse != answerQuestion)
                wrongAnswers.push(i);
        }
        const problemCard = document.getElementById('problem-card');
        while(problemCard.hasChildNodes()){
            problemCard.removeChild(problemCard.lastChild);
        }
        problemCard.setAttribute('class', 'text-center display-4 text-success')
        problemCard.innerHTML = String(wrongAnswers.length) + ' OUT OF ' + String(answerSet.length);
    });
}