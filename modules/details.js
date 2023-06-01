import prices from "./prices.js";
import { colorChange } from "./colors.js";

const handleColorChange = (color) => {
  // Estas dos constantes se puede mover fuera de la funcion si se
  // necesitan en más metodos dentro de este módulo
  const title = document.querySelector('#title');
  const price = document.querySelector('#price');

  // falta la logica de modificar el producto cuando se selecciona otro
  title.innerHTML = `${color} shirt with joke`;
  price.innerHTML = `${prices['shirt'][color]}`;
}

// Lo único que necesitamos exponer es que se haga el subscribe
const initDetails = ()=> {
  colorChange.subscribe(handleColorChange);
}

export { initDetails };