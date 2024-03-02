function toggleAnswer(id) {
  var answer = document.getElementById(id);
  var toggleSign = document.getElementById('toggle' + id.charAt(id.length - 1));
  
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    toggleSign.textContent = '+';
  } else {
    answer.style.display = 'block';
    toggleSign.textContent = '-';
  }
}
