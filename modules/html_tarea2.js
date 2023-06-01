export function addImagesToContainer() {
  const imageContainer = document.getElementById('image-container');

  const imageUrls = [
    '../images/product-pillow-white.jpg',
    '../images/product-poster-white.jpg',
    '../images/product-case-white.jpg'
  ];

  imageUrls.forEach(url => {
    const imageElement = new Image();
    imageElement.src = url;
    imageElement.classList.add('dynamic-image', 'custom-image');
    imageContainer.appendChild(imageElement);
  });
}

document.addEventListener('DOMContentLoaded', addImagesToContainer);
