function initializePlayerBox(numberElementId, resultElementId) {
  const playerName = "Tatsunori Schmidt";
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
    if (number >= 1 && number <= 81) {
      return "Walk";
    } else if (number >= 82 && number <= 262) {
      return "Strikeout";
    } else if (number >= 263 && number <= 293) {
      return "HBP";
    } else if (number >= 294 && number <= 313) {
      return "Reached on error";
    } else if (number >= 314 && number <= 426) {
      return "Flyout";
    } else if (number >= 427 && number <= 639) {
      return "Single";
    } else if (number >= 640 && number <= 752) {
      return "Groundout";
    } else if (number >= 753 && number <= 765) {
      return "Double";
    } else if (number >= 766 && number <= 878) {
      return "Lineout";
    } else if (number >= 879 && number <= 884) {
      return "Triple";
    } else if (number >= 885 && number <= 997) {
      return "Popout";
    } else if (number >= 998 && number <= 1000) {
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