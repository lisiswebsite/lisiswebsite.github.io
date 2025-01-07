function initializePlayerBox(numberElementId, toggleButtonId, resultElementId) {
  const playerName = "Nutpuck Minimick";
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
    currentNumber += 3; // Increment by 3 to make it count faster
    if (currentNumber > 1000) currentNumber = currentNumber - 1000; // Adjust to handle overflow
    numberElement.textContent = currentNumber;
  }

  function getOutcome(number) {
    if (number >= 1 && number <= 115) {
      return "Walk";
    } else if (number >= 116 && number <= 304) {
      return "Strikeout";
    } else if (number >= 305 && number <= 326) {
      return "HBP";
    } else if (number >= 327 && number <= 353) {
      return "Reached on error";
    } else if (number >= 354 && number <= 473) {
      return "Flyout";
    } else if (number >= 474 && number <= 595) {
      return "Single";
    } else if (number >= 596 && number <= 709) {
      return "Groundout";
    } else if (number >= 710 && number <= 746) {
      return "Double";
    } else if (number >= 747 && number <= 846) {
      return "Lineout";
    } else if (number >= 847 && number <= 847) {
      return "Triple";
    } else if (number >= 848 && number <= 937) {
      return "Popout";
    } else if (number >= 938 && number <= 1000) {
      return "Home run";
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