// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Site éco-conçu chargé avec succès");
// });




document.addEventListener('DOMContentLoaded', function() {
  // Slideshow functionality
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  function showSlide(index) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
  }

  nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
  prevButton.addEventListener('click', () => showSlide(currentSlide - 1));

  showSlide(currentSlide);

  // Responsive menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
  });
});