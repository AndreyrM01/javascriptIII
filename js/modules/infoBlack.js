import { blackOptions } from './colorOptions.js';
import { Publisher } from '../publisher/Publisher.js';

function loadImageB(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Error loading image: ${url}`));
    image.src = url;
  });
}

export async function detailsChangeB() {
  const imageContainer = document.getElementById('image-container');
  const mainImage = document.getElementById('main-img');
  const mainJoke = document.getElementById('main-joke');

  const imageUrls = [
    '../../images/product-pillow-black.jpg',
    '../../images/product-poster-black.jpeg',
    '../../images/product-case-black.jpg'
  ];

  const imagePromises = imageUrls.map(url => loadImageB(url));

  try {
    const images = await Promise.all(imagePromises);

    const publisher = new Publisher('imageClick');

    images.forEach(image => {
      image.classList.add('dynamic-image');
      image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src');
        mainImage.setAttribute('src', imageUrl);

        const productData = blackOptions[imageUrl];
        if (productData) {
          const { title, price } = productData;
          document.getElementById('title').textContent = title;
          document.getElementById('price').textContent = price;
        }

        mainJoke.innerText = '';

        publisher.publish(imageUrl); // Publish the image URL
      });

      imageContainer.appendChild(image);
    });
  } catch (error) {
    console.error(error);
  }
}