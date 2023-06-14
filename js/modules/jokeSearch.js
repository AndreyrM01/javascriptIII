import { getJokeByTerm } from "../services/apiUrls.js";
import { Publisher } from "../publisher/Publisher.js";

const searchBtn = document.querySelector('.search-btn');
const resultJokes = document.getElementById('resultJokes');

const publisher = new Publisher('jokesSearch');

async function renderJokesByTerm(event) {
  event.preventDefault();
  const searchTerm = document.getElementById('selectedWord').value.trim();

  if (!searchTerm) {
    resultJokes.innerHTML = '<li>Type something!!</li>';
    return;
  }

  const data = await getJokeByTerm(searchTerm);

  if (data.results.length === 0) {
    resultJokes.innerHTML = '<li>Dont exist this type of jokes</li>';
  } else {
    const jokes = data.results.map((result) => ({
      id: result.id,
      text: result.joke,
    }));

    resultJokes.innerHTML = jokes
      .map(
        (joke) =>
          `<li><a href="product.html?id=${joke.id}" id="${joke.id}">${joke.text}</a></li>`
      )
      .join('');

    publisher.publish(jokes);
  }
}

const initSearch = () => {
  publisher.subscribe((jokes) => {
    console.log('Received jokes:', jokes);
    // Aquí puedes realizar acciones adicionales con los chistes recibidos
  });

  searchBtn.addEventListener('click', renderJokesByTerm);
};

export { initSearch };
