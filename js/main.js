import {initSearch} from './modules/jokeSearch.js';
import {initRandomJokeComponent, getJoke, jokeChange } from './modules/randomJoke.js';
import { getRandomJoke, getJokeByTerm, getJokeById  } from './services/apiUrls.js';

initRandomJokeComponent();
initSearch();

