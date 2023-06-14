import { getRandomJoke, getJokeByTerm, getJokeById  } from './services/apiUrls.js';
import { jokeChange, initRandomJokeComponent, getJoke } from './modules/randomJoke.js';
import { initDetails } from './modules/details.js';
import { renderSelectJoke } from './modules/productsLogic.js';
import { detailsChange } from './modules/infoWhite.js';
import { detailsChangeB } from './modules/infoBlack.js';
import { changeColor } from './modules/changeByBtn.js';
import {modalModule} from './modules/modalFunction.js';

changeColor();
detailsChange();
detailsChangeB();
renderSelectJoke();
initDetails();
getJoke();
initRandomJokeComponent();
modalModule();