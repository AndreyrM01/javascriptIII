import { getRandomJoke, getJokeByTerm, getJokeById  } from './services/apiUrls.js';
import { jokeChange, initRandomJokeComponent, getJoke } from './modules/randomJoke.js';
import { addImagesToContainer } from "./modules/dinamicImages.js";
import { initDetails } from './modules/details.js';
import { renderSelectJoke } from './modules/productsLogic.js';

renderSelectJoke();
initRandomJokeComponent();
initDetails();

document.addEventListener('DOMContentLoaded', addImagesToContainer);

