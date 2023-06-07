import { logErrors } from "./errors.js";

const apiUrl = 'https://icanhazdadjoke.com/';
const headers = {
  Accept: 'application/json',
};

// random
async function getRandomJoke() {
  return fetch(apiUrl, {
    headers: headers,
  })
    .then((response) => {
      return response.json()
    })
    .catch(logErrors());
}

// search
async function getJokeByTerm(searchTerm) {
  if (!searchTerm) {
    return;
  }

  return fetch(`${apiUrl}search?term=${searchTerm}`, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch(logErrors());
}

// byId
async function getJokeById(id) {
  if (!id) {
    return;
  }

  return fetch(`${apiUrl}j/${id}`, {
    headers: headers,
  })
    .then((response) => response.json())
    .catch((error) => {
      logErrors();
    });
}

export { getRandomJoke, getJokeByTerm, getJokeById }
