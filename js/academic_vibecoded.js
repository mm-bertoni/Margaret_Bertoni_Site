/**
 * Vibecoded with Claude's Sonnet 4 Model
 * Educational Journey Card Flip Functionality
 * Handles card flipping interactions and responsive behavior
 */

// Main flip function for individual cards
function flipCard(card) {
  card.classList.toggle("flipped");

  // Add smooth scrolling reset when card is flipped
  if (card.classList.contains("flipped")) {
    // Reset scroll position when opening card
    const scrollableContent = card.querySelector(".scrollable-content");
    if (scrollableContent) {
      scrollableContent.scrollTop = 0;
    }
  }
}
// Handle window resize to ensure proper card heights
window.addEventListener("resize", function () {
  // Reset any ongoing animations
  const flippedCards = document.querySelectorAll(".flip-card.flipped");
  flippedCards.forEach((card) => {
    const scrollableContent = card.querySelector(".scrollable-content");
    if (scrollableContent) {
      scrollableContent.scrollTop = 0;
    }
  });
});
