const wordJoke = document.getElementById('wordJoke');
const selectedWord = document.getElementById('selectedWord');
const searchResult = document.getElementById('resultJokes');

const lookForJoke = (searchWord) => {
  const api = `https://icanhazdadjoke.com/search?term=${searchWord}`;

  fetch(api, { headers: { 'Accept': 'application/json'} })
    .then(response => response.json())
    .then(data => {
      const jokes = data.results;
      let jokesText = '';

      for (let i = 0; i < jokes.length; i++) {
        jokesText += `<li id="joke-${i + 1}">
          <a href="/pages/tarea2.html">${jokes[i].joke}</a>
        <li>`;
      }

      searchResult.innerHTML = jokesText;
    });
};

wordJoke.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchWord = selectedWord.value;
  lookForJoke(searchWord);
});

export default lookForJoke;