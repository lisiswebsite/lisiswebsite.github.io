// script.js
const swipeContainer = document.getElementById('swipe-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const pages = document.querySelectorAll('.page');

let currentPageIndex = 0;

// Handle swipes and button clicks
function handleSwipe(direction) {
  console.log(`User swiped ${direction} on Page ${currentPageIndex + 1}`);

  // Check if we're on the last page
  if (currentPageIndex === pages.length - 1) {
    displayThankYouPage();
    return;
  }

  // Move to the next page
  currentPageIndex++;

  // Update the pages visually
  pages.forEach((page, index) => {
    page.style.transform = `translateX(${(index - currentPageIndex) * 100}vw)`;
  });
}

// Display the "Thank You" page
function displayThankYouPage() {
  // Clear the swipe container and buttons
  swipeContainer.innerHTML = '<div class="thank-you">Thank you for playing!</div>';
  document.getElementById('arrow-buttons').style.display = 'none';

  // Add styling for the thank you page
  const thankYouStyle = document.createElement('style');
  thankYouStyle.innerHTML = `
    .thank-you {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-size: 2rem;
      font-weight: bold;
      background-color: lightgoldenrodyellow;
      text-align: center;
    }
  `;
  document.head.appendChild(thankYouStyle);
}

// Touch events for mobile swipes
let startX = 0, endX = 0;

swipeContainer.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  startX = touch.clientX;
});

swipeContainer.addEventListener('touchend', (e) => {
  const touch = e.changedTouches[0];
  endX = touch.clientX;

  const deltaX = endX - startX;
  if (Math.abs(deltaX) > 50) {
    handleSwipe(deltaX > 0 ? 'right' : 'left');
  }
});

// Button click events for larger screens (desktop)
leftArrow.addEventListener('click', () => handleSwipe('left'));
rightArrow.addEventListener('click', () => handleSwipe('right'));

// Initialize pages to the correct positions
pages.forEach((page, index) => {
  page.style.transform = `translateX(${index * 100}vw)`;
});
