document.addEventListener('DOMContentLoaded', function(){
  let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showNextCarouselItem() {
  carouselItems[carouselIndex].classList.remove('active');
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  carouselItems[carouselIndex].classList.add('active');
}

setInterval(showNextCarouselItem, 3000);    
});