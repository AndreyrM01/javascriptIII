const randomJoke = document.getElementById("randomJoke");
const randomJokep = document.getElementById("randomJokep");

randomJoke.addEventListener("click", getJoke);

function getJoke() {
  const api = 'https://icanhazdadjoke.com/';

  function showJoke() {
    fetch(api, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => {
        const joke = data.joke
        randomJokep.innerHTML = joke
      })
  }

  showJoke()
}

export default getJoke;