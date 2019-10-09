const submitAnswerButton = () => {
    const answerURL = '/solutions?id=' + '5d9e1e6b139d719b01d14fc2';
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