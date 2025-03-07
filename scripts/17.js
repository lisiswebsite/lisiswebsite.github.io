function initializePlayerBox(numberElementId, resultElementId) {
  const playerName = "Griffin Kuntz";
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
    if (number >= 1 && number <= 48) {
      return "Walk";
    } else if (number >= 49 && number <= 190) {
      return "Strikeout";
    } else if (number >= 191 && number <= 202) {
      return "HBP";
    } else if (number >= 203 && number <= 208) {
      return "Reached on error";
    } else if (number >= 209 && number <= 334) {
      return "Flyout";
    } else if (number >= 335 && number <= 528) {
      return "Single";
    } else if (number >= 529 && number <= 654) {
      return "Groundout";
    } else if (number >= 655 && number <= 706) {
      return "Double";
    } else if (number >= 707 && number <= 832) {
      return "Lineout";
    } else if (number >= 833 && number <= 847) {
      return "Triple";
    } else if (number >= 848 && number <= 973) {
      return "Popout";
    } else if (number >= 974 && number <= 1000) {
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