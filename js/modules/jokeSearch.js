import { getJokeByTerm } from "../services/apiUrls.js";

const searchBtn = document.querySelector('.search-btn');
const resultJokes = document.getElementById('resultJokes');

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

    resultJokes.innerHTML = jokes.map(joke => `<li><a href="product.html?id=${joke.id}" id="${joke.id}">${joke.text}</a></li>`).join('');
  }
}

const initSearch = () => {
  searchBtn.addEventListener('click', renderJokesByTerm);
}

export { initSearch };
