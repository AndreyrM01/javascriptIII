import { whiteOptions, blackOptions } from './colorOptions.js';
import { detailsChangeB } from './infoBlack.js';
import { detailsChange } from './infoWhite.js';
import { Publisher } from '../publisher/Publisher.js';


const whiteMainI = {
  imageSrc: '../../images/product-shirt-white.jpg',
  title: 'Camisa blanca',
  price: '$10',
};

const blackMainI = {
  imageSrc: '../../images/product-shirt-black.jpg',
  title: 'Camisa negra',
  price: '$13',
};

function changeColor() {
  const blackRadio = document.getElementById('black');
  const whiteRadio = document.getElementById('white');
  const mainImage = document.getElementById('main-img');
  const titleElement = document.getElementById('title');
  const priceElement = document.getElementById('price');
  const mainJoke = document.getElementById('main-joke');
  const imageContainer = document.getElementById('image-container');

  let currentOptions = whiteOptions;
  let currentMainI = whiteMainI;

  const publisher = new Publisher('colorChange');

  publisher.subscribe((options) => {
    currentOptions = options;
  });

  blackRadio.addEventListener('change', () => {
    if (blackRadio.checked) {
      const imageContainers = document.getElementsByClassName('btn__container');
      Array.from(imageContainers).forEach(container => {
        container.classList.remove('white');
        container.classList.add('black');
      });

      mainImage.src = blackMainI.imageSrc;
      titleElement.textContent = blackMainI.title;
      priceElement.textContent = blackMainI.price;

      currentOptions = blackOptions;
      currentMainI = blackMainI;

      while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
      }

      publisher.publish(blackOptions);
      detailsChangeB();

      mainJoke.style.color = 'white';
    }
  });

  whiteRadio.addEventListener('change', () => {
    if (whiteRadio.checked) {
      const imageContainers = document.getElementsByClassName('btn__container');
      Array.from(imageContainers).forEach(container => {
        container.classList.remove('black');
        container.classList.add('white');
      });

      mainImage.src = whiteMainI.imageSrc;
      titleElement.textContent = whiteMainI.title;
      priceElement.textContent = whiteMainI.price;

      currentOptions = whiteOptions;
      currentMainI = whiteMainI;

      while (imageContainer.firstChild) {
        imageContainer.firstChild.remove();
      }

      publisher.publish(whiteOptions);
      detailsChange();

      mainJoke.style.color = '';
    }
  });
}

export { changeColor };



// En el código modificado, he agregado un array subscribers al Publisher para almacenar las funciones suscritas. Luego, he creado el método subscribe que agrega la función suscrita al array subscribers.

// Además, he agregado la línea publisher.subscribe((options) => { currentOptions = options; }); para suscribir una función que actualiza las currentOptions cuando se produce un cambio en el evento "colorChange".

// Ahora, puedes suscribir otras funciones al evento "colorChange" utilizando publisher.subscribe(subscriberFunction) y recibir las opciones de color actualizadas cuando se produzca un cambio.
