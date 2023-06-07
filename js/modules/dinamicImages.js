export function addImagesToContainer() {
  const imageContainer = document.getElementById('image-container');
  const mainImage = document.getElementById('main-img');

  const imageUrls = [
    { id: 'image-1', url: '../images/product-pillow-white.jpg' },
    { id: 'image-2', url: '../images/product-poster-white.jpg' },
    { id: 'image-3', url: '../images/product-case-white.jpg' }
  ];

  let selectedImageUrl = mainImage.src; // Guardar la URL inicial de mainImage

  imageUrls.forEach(({ id, url }) => {
    const imgElement = new Image();
    imgElement.src = url;
    imgElement.classList.add('dynamic-image', 'custom-image');
    imgElement.setAttribute('id', id);
    imgElement.addEventListener('click', () => {
      const tempUrl = mainImage.src;
      mainImage.src = url;
      mainImage.alt = 'Nuevo texto alternativo';

      // Asignar la URL anterior de mainImage a la imagen seleccionada
      url = tempUrl;
      selectedImageUrl = url;
    });
    imageContainer.appendChild(imgElement);
  });

  // Actualizar la URL de mainImage con la URL inicial
  mainImage.src = selectedImageUrl;
}

document.addEventListener('DOMContentLoaded', addImagesToContainer);
