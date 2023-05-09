let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showNextCarouselItem() {
  carouselItems[carouselIndex].classList.remove('active');
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  carouselItems[carouselIndex].classList.add('active');
}

// 设置轮播图切换间隔，例如：3000毫秒（3秒）
setInterval(showNextCarouselItem, 3000);