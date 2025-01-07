function initializePlayerBox(numberElementId, toggleButtonId, resultElementId) {
  const playerName = "Beau Alvarez";
  const playerData = players.find(player => player.name === playerName);

  const numberElement = document.getElementById(numberElementId);
  const toggleButton = document.getElementById(toggleButtonId);
  const resultElement = document.getElementById(resultElementId);
  const numberResultContainer = numberElement.parentElement;

  // Create a container for player info
  const playerInfoContainer = document.createElement('div');
  playerInfoContainer.className = 'player-info';
  numberResultContainer.parentElement.insertBefore(playerInfoContainer, toggleButton);

  // Insert player image
  const playerImageElement = document.createElement('img');
  playerImageElement.className = 'player-image';
  playerImageElement.src = playerData.image;
  playerImageElement.alt = playerData.name;
  playerInfoContainer.appendChild(playerImageElement);

  // Insert player name
  const playerNameElement = document.createElement('div');
  playerNameElement.className = 'player-name';
  playerNameElement.textContent = playerData.name;
  playerInfoContainer.appendChild(playerNameElement);

  let currentNumber = 1;
  let intervalId = null; // To store the interval ID

  function animateNumbers() {
    numberElement.textContent = currentNumber;
    currentNumber++;
    if (currentNumber > 1000) currentNumber = 1; // Reset to 1 when reaching 1000
  }

  function getOutcome(number) {
    if (number >= 1 && number <= 300) {
      return "Hit";
    } else if (number >= 301 && number <= 500) {
      return "Strikeout";
    } else if (number >= 501 && number <= 600) {
      return "Walk";
    } else if (number >= 601 && number <= 800) {
      return "Groundout";
    } else if (number >= 801 && number <= 1000) {
      return "Fly Out";
    }
  }

  toggleButton.addEventListener('click', () => {
    if (intervalId) {
      // If the animation is running, stop it
      clearInterval(intervalId);
      intervalId = null;
      toggleButton.textContent = 'Start'; // Change button text to Start
      numberResultContainer.style.visibility = 'visible'; // Show the numbers and result

      // Display the result based on the current number
      const outcome = getOutcome(currentNumber);
      resultElement.textContent = outcome;
    } else {
      // If the animation is stopped, start it
      intervalId = setInterval(animateNumbers, 1);
      toggleButton.textContent = 'Stop'; // Change button text to Stop
      numberResultContainer.style.visibility = 'hidden'; // Hide the numbers and result
    }
  });
}