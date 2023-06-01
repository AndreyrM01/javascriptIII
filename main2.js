import getJoke from './modules/randomJoke.js';
import { searchAPI, randomAPI } from './modules/apiUrls.js';

import { initColors } from './modules/colors.js';
import { initMainImage } from './modules/mainImage.js';
import { initDetails } from './modules/details.js';
import { addImagesToContainer } from "./modules/html_tarea2.js";

initMainImage();
initColors();
initDetails();

document.addEventListener('DOMContentLoaded', addImagesToContainer);
