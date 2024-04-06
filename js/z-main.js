// keyboard event
function keyPressEvent(e) {
  const pressedKey = e.key;
  if (pressedKey === 'Escape') {
     endGame()
  }
  const expectedKey = document.getElementById('current-alphabet').innerText.toLowerCase();

  if (expectedKey === pressedKey) {
     const previousScore = getLifeAndScore('score-span');
      
    const currentScore = previousScore + 1;
    
    updateLifeAndScore('score-span', currentScore);

    setBackgroundColorById(expectedKey, false)
    
continueGame()
  } else {
      const previousLife = getLifeAndScore('life-span');
      const currentLife = previousLife - 1;

      updateLifeAndScore('life-span', currentLife)

      if (currentLife === 0) {
        endGame()
      }
  }
  
  
}

// function to continue the game
function continueGame() {
  const randomAlphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = randomAlphabet;

  setBackgroundColorById(randomAlphabet, true);
  
}

// functions for btn click
function playGame() {
  getElement('home-screen', true);
  getElement('play-ground', false);

  continueGame()
}

function endGame() {
  getElement('play-ground', true);
  getElement('score-screen', false)
  
  const finalScore = getLifeAndScore('score-span');
  updateLifeAndScore('final-score', finalScore) 
  

}

function playAgain() {
  getElement('score-screen', true);
  getElement('play-ground', false);

    updateLifeAndScore('life-span', 5);
    updateLifeAndScore('score-span', 0);

}


// btn addEventListener
document.getElementById('btn-play-again').addEventListener('click', playAgain)

document.body.addEventListener('keyup', keyPressEvent)