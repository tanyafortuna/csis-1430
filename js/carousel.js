var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName('slides');
  var dots = document.getElementsByClassName('dot');

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    dots[i].classList.remove('active');
  }

  if (slideIndex == slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length }

  slides[slideIndex].classList.add('active');
  dots[slideIndex].classList.add('active');

  slideIndex++;
  setTimeout(showSlides, 5000);
}