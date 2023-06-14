import { whiteOptions } from './colorOptions.js';
import { Publisher } from '../publisher/Publisher.js';

// function loadImage(url) {
//   return new Promise((resolve, reject) => {
//     const image = new Image();
//     image.onload = () => resolve(image);
//     image.onerror = () => reject(new Error(`Error loading image: ${url}`));
//     image.src = url;
//   });
// }

// export async function detailsChange() {
//   const imageContainer = document.getElementById('image-container');
//   const mainImage = document.getElementById('main-img');
//   const mainJoke = document.getElementById('main-joke');

//   const imageUrls = [
//     '../../images/product-pillow-white.jpg',
//     '../../images/product-poster-white.jpg',
//     '../../images/product-case-white.jpg'
//   ];

//   const imagePromises = imageUrls.map(url => loadImage(url));

//   try {
//     const images = await Promise.all(imagePromises);

//     images.forEach(image => {
//       image.classList.add('dynamic-image');
//       image.addEventListener('click', () => {
//         const imageUrl = image.getAttribute('src');
//         mainImage.setAttribute('src', imageUrl);

//         const productData = whiteOptions[imageUrl];
//         if (productData) {
//           const { title, price } = productData;
//           document.getElementById('title').textContent = title;
//           document.getElementById('price').textContent = price;
//         }

//         mainJoke.innerText = '';
//       });

//       imageContainer.appendChild(image);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Error loading image: ${url}`));
    image.src = url;
  });
}

export async function detailsChange() {
  const imageContainer = document.getElementById('image-container');
  const mainImage = document.getElementById('main-img');
  const mainJoke = document.getElementById('main-joke');

  const imageUrls = [
    '../../images/product-pillow-white.jpg',
    '../../images/product-poster-white.jpg',
    '../../images/product-case-white.jpg'
  ];

  const imagePromises = imageUrls.map(url => loadImage(url));

  try {
    const images = await Promise.all(imagePromises);

    const publisher = new Publisher('imageClick');

    images.forEach(image => {
      image.classList.add('dynamic-image');
      image.addEventListener('click', () => {
        const imageUrl = image.getAttribute('src');
        mainImage.setAttribute('src', imageUrl);

        const productData = whiteOptions[imageUrl];
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