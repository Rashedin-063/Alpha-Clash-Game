// get element by Id
function getElement(id, isVisible) {
  const element = document.getElementById(id);
  isVisible ? element.classList.add('hidden') : element.classList.remove('hidden');
}

// set background color
function setBackgroundColorById(randomAlphabet, isTrue) {
  const element = document.getElementById(randomAlphabet);
  //  element.style.backgroundColor = 'orange'
 isTrue? element.classList.add('bg-orange-400') : element.classList.remove('bg-orange-400')
}

// get life and score 
function getLifeAndScore(id) {
  const innerText = document.getElementById(id).innerText;
  const value = parseInt(innerText);
  return value;
}

// update life and score
function updateLifeAndScore(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
  return element;
}

// get random alphabet
function getRandomAlphabet() {
  const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetsString.split('');

  const randomIndex = Math.floor(Math.random() * alphabets.length);
  
  const randomAlphabet = alphabets[randomIndex]
  return randomAlphabet;
}