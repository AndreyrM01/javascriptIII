import { randomAPI } from './apiUrls.js';

const randomJoke = document.getElementById("randomJoke");
const randomJokep = document.getElementById("randomJokep");
const randomJokeBtn = document.getElementById('randomJoke');
const selectedJoke = document.getElementById('selected-joke');
const mainJoke = document.getElementById('main-joke');

const getJoke = () => {
  const api = randomAPI;

  function showJoke() {
    fetch(api, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => {
        const joke = data.joke;
        randomJokep.innerHTML = joke;

        // Actualiza el contenido de los elementos
        selectedJoke.textContent = joke;
        mainJoke.textContent = joke;
      });
  }

  showJoke();
};

randomJokeBtn.addEventListener('click', () => {
  // Obtén el chiste actualmente mostrado en el elemento randomJokep
  const newJoke = randomJokep.innerText;

  // Actualiza el contenido de los elementos
  selectedJoke.textContent = newJoke;
  mainJoke.textContent = newJoke;
});

randomJoke.addEventListener("click", getJoke);

export default getJoke;
