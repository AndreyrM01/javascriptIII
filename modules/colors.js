import Publisher from './publisher.js';

const colorInputs = document.querySelectorAll('.color');
const colorChange = new Publisher();

const handleColorChange = (event) => {
  // en el html usamos un data-id
  const color = event.currentTarget.dataset.id;

  // se encarga de disparar el publish con el color seleccionado
  // los subscriptores van a recibir el color
  colorChange.publish(color);
}

// Evento para los inputs que seleccionan el color
const initColors = () => {
  colorInputs.forEach(col => {
    col.addEventListener('change', handleColorChange);
  });
}

export {
  initColors,
  colorChange,
}