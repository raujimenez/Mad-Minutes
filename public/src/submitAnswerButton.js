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

        console.log(wrongAnswers);
    });
}