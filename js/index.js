const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const slides = document.querySelector('.slides');
let slideIndex = 0;

nextButton.addEventListener('click', () => {
  slideIndex++;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  slideIndex--;
  updateCarousel();
});

function updateCarousel() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
