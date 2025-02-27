const sliderImages = document.querySelectorAll('.slider-image');
let currentImageIndex = 0;

function changeImage() {
  sliderImages.forEach((image, index) => {
    image.classList.remove('active');
    if (index === currentImageIndex) {
      image.classList.add('active');
    }
  });
  currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
}

setInterval(changeImage, 3000); // change image every 3 seconds