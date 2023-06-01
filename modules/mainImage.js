import { colorChange} from './colors.js';

const mainImage = document.querySelector('#main-img');

const handleColorChange = (color)=> {
  // Actualizamos el main image
  mainImage.setAttribute('src', `img/product-shirt-${color}.jpg`);

  // falta la logica de agregar un class para que el texto sea negro
  // cuando la imagen es blanca
}

const initMainImage = () => {
  colorChange.subscribe(handleColorChange);
}

export {initMainImage}


