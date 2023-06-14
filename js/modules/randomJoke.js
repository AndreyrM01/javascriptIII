import { Publisher } from "../publisher/Publisher.js";
import { getRandomJoke } from "../services/apiUrls.js";

const jokeChange = new Publisher('joke.change');

const randomJoke = document.getElementById("randomJoke");
const randomJokep = document.getElementById("randomJokep");
const selectedJoke = document.getElementById('selected-joke');
const mainJoke = document.getElementById('main-joke');

async function getJoke() {
  const data = await getRandomJoke();
  const { joke } = data;
  randomJokep.innerHTML = joke;

  selectedJoke.textContent = joke;
  mainJoke.textContent = joke;
  jokeChange.publish(joke);
}

randomJoke.addEventListener("click", getJoke);

randomJoke.addEventListener('click', () => {
  const newJoke = randomJokep.innerText;

  selectedJoke.textContent = newJoke;
  mainJoke.textContent = newJoke;
});

const initRandomJokeComponent = () => {
  randomJoke.addEventListener('click', getJoke);
}

export { jokeChange, initRandomJokeComponent };
export {getJoke};

