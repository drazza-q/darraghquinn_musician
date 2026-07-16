// Vanilla replacement for Bootstrap's carousel component.
// Auto-advances through .carousel-item elements inside the given
// carousel id, crossfading between slides.
function initCarousel(carouselId, intervalMs = 5000) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;

  const items = carousel.querySelectorAll('.carousel-item');
  if (items.length < 2) return;

  let index = Array.prototype.findIndex.call(items, (item) =>
    item.classList.contains('active')
  );
  if (index === -1) {
    index = 0;
    items[0].classList.add('active');
  }

  setInterval(() => {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
  }, intervalMs);
}

document.addEventListener('DOMContentLoaded', () => {
  initCarousel('carouselExampleControls');
});
