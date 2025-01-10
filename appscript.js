// script.js
const swipeContainer = document.getElementById('swipe-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const pages = document.querySelectorAll('.page');

let startX, endX, currentPageIndex = 0;

// Handle touch swipe for mobile
function handleSwipe(direction) {
  console.log(`Swipe ${direction} on Page ${currentPageIndex + 1}`);
  pages[currentPageIndex].style.transform = direction === 'right' ? 'translateX(100vw)' : 'translateX(-100vw)';
  pages[currentPageIndex].style.transition = 'transform 0.3s ease-in-out';
  currentPageIndex = Math.min(Math.max(currentPageIndex + (direction === 'right' ? 1 : -1), 0), pages.length - 1);
}

// Touch events
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

// Button click events for larger screens
leftArrow.addEventListener('click', () => handleSwipe('left'));
rightArrow.addEventListener('click', () => handleSwipe('right'));
