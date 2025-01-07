function initializePlayerBox(numberElementId, toggleButtonId, resultElementId) {
  const playerName = "Lexy Adnhea";
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
    if (number >= 1 && number <= 184) {
      return "Walk";
    } else if (number >= 185 && number <= 316) {
      return "Strikeout";
    } else if (number >= 317 && number <= 355) {
      return "HBP";
    } else if (number >= 356 && number <= 387) {
      return "Reached on error";
    } else if (number >= 388 && number <= 482) {
      return "Flyout";
    } else if (number >= 483 && number <= 617) {
      return "Single";
    } else if (number >= 618 && number <= 697) {
      return "Groundout";
    } else if (number >= 698 && number <= 762) {
      return "Double";
    } else if (number >= 763 && number <= 828) {
      return "Lineout";
    } else if (number >= 829 && number <= 831) {
      return "Triple";
    } else if (number >= 832 && number <= 881) {
      return "Popout";
    } else if (number >= 882 && number <= 1000) {
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