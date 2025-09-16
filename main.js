
  let currentIndex = 0;

  function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    const totalImages = images.length;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= totalImages) currentIndex = totalImages - 1;

    const containerWidth = carousel.clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
  }

  window.addEventListener('resize', () => {
    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${currentIndex * carousel.clientWidth}px)`;
  });

