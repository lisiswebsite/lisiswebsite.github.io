function initializePlayerBox(numberElementId, resultElementId) {
  const playerName = "Donnisa Chilsick";
  const playerData = players.find(player => player.name === playerName);

  const numberElement = document.getElementById(numberElementId);
  const resultElement = document.getElementById(resultElementId);
  const numberResultContainer = numberElement.parentElement;
  const gridItem = numberElement.closest('.grid-item');

  // Create a container for player info
  const playerInfoContainer = document.createElement('div');
  playerInfoContainer.className = 'player-info';
  gridItem.insertBefore(playerInfoContainer, numberResultContainer);

  // Insert player image
  const playerImageElement = document.createElement('img');
  playerImageElement.className = 'player-image';
  playerImageElement.src = playerData.image;
  playerImageElement.alt = playerData.name;
  gridItem.insertBefore(playerImageElement, playerInfoContainer);

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
    if (number >= 1 && number <= 151) {
      return "Walk";
    } else if (number >= 152 && number <= 306) {
      return "Strikeout";
    } else if (number >= 307 && number <= 356) {
      return "HBP";
    } else if (number >= 357 && number <= 381) {
      return "Reached on error";
    } else if (number >= 382 && number <= 481) {
      return "Flyout";
    } else if (number >= 482 && number <= 636) {
      return "Single";
    } else if (number >= 637 && number <= 736) {
      return "Groundout";
    } else if (number >= 737 && number <= 779) {
      return "Double";
    } else if (number >= 780 && number <= 879) {
      return "Lineout";
    } else if (number >= 880 && number <= 886) {
      return "Triple";
    } else if (number >= 887 && number <= 986) {
      return "Popout";
    } else if (number >= 987 && number <= 1000) {
      return "Home run";
    }
  }

  gridItem.addEventListener('click', () => {
    if (intervalId) {
      // If the animation is running, stop it
      clearInterval(intervalId);
      intervalId = null;
      numberResultContainer.style.visibility = 'visible'; // Show the numbers and result

      // Display the result based on the current number
      const outcome = getOutcome(currentNumber);
      resultElement.textContent = outcome;
    } else {
      // If the animation is stopped, start it
      intervalId = setInterval(animateNumbers, 1);
      numberResultContainer.style.visibility = 'hidden'; // Hide the numbers and result
    }
  });
}