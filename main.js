let result = document.getElementById('result');

function addToResult(value) {
  result.value += value;
}

function calculate(operator) {
  let expression = result.value;
  
  if (operator === '=') {
    result.value = eval(expression);
  } else if (operator === 'C') {
    result.value = '';
  } else if (operator === 'backspace') {
    result.value = result.value.slice(0, -1);
  } else {
    result.value += operator;
  }
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}
