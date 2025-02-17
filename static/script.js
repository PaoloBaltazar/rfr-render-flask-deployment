document.getElementById('prediction-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const attendance = document.getElementsByName('attendance')[0].value;
  const financialSituation = document.getElementsByName('financial_situation')[0].value;
  const learningEnvironment = document.getElementsByName('learning_environment')[0].value;
  const previousGrades = document.getElementsByName('previous_grades')[0].value;

  const data = {
      features: [attendance, financialSituation, learningEnvironment, previousGrades]
  };

  fetch('/predict', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      document.getElementById('prediction-result').innerText = 'Predicted Grade: ' + data.prediction;
  })
  .catch(error => console.error('Error:', error));
});
