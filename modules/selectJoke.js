const wordJoke = document.getElementById('wordJoke')
const selectedWord = document.getElementById('selectedWord')
const searchResult = document.getElementById('resultJokes') 

wordJoke.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchWord = selectedWord.value;
  lookForJoke(searchWord);
});

function lookForJoke(searchWord) {
  const api = `https://icanhazdadjoke.com/search?term=${searchWord}`;

  function lookingForJoke() {
    fetch(api, { headers: { 'Accept': 'application/json'} })
      .then(response => response.json())
      .then(data => {
        const jokes = data.results;
        let jokesText = '';

        for (let i = 0; i < 4 && i < jokes.length; i++) {
          jokesText += `${jokes[i].joke}<p></p>`;
        }

        searchResult.innerHTML = jokesText;
      })
  }

  lookingForJoke()
}

export default lookForJoke;