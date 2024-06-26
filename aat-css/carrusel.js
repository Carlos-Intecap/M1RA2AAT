let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-images img');
  
  if (index >= slides.length) { slideIndex = 0; }
  if (index < 0) { slideIndex = slides.length - 1; }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  showSlide(--slideIndex);
}

function nextSlide() {
  showSlide(++slideIndex);
}

showSlide(slideIndex);