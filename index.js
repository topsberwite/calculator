const computationsDisplay = document.getElementById('computations');
const outputDisplay = document.getElementById('output');
const buttons = document.querySelectorAll('.key');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;
    
    if (value === '=') {
   
      const result = evaluateExpression(computationsDisplay.textContent);
      outputDisplay.textContent = result;
    } else if (value === 'AC') {

      computationsDisplay.textContent = '';
      outputDisplay.textContent = '';
    } else if (value === 'DE') {

      computationsDisplay.textContent = computationsDisplay.textContent.slice(0, -1);
    } else {

      computationsDisplay.textContent += value;
    }
  });
});

function evaluateExpression(expression) {
  try {
    const result = eval(expression);
    return result;
  } catch (error) {
    return 'Error';
  }
}
