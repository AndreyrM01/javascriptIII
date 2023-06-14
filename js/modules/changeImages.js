import { addImagesToContainer } from "./dinamicImages";

function swapImages() {
  const mainImage = document.getElementById('main-img');
  const imageContainer = document.getElementById('image-container');
  const firstDynamicImage = imageContainer.querySelector('.dynamic-image');

  if (firstDynamicImage && mainImage && mainImage.parentNode) {
    const clonedMainImage = mainImage.cloneNode(true);
    const clonedClickedImage = firstDynamicImage.cloneNode(true);

    mainImage.parentNode.replaceChild(clonedClickedImage, mainImage);
    firstDynamicImage.parentNode.replaceChild(clonedMainImage, firstDynamicImage);

    clonedMainImage.addEventListener('click', swapImages);
    clonedClickedImage.addEventListener('click', swapImages);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addImagesToContainer();
  swapImages();
});
