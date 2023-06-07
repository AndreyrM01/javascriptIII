import { getJokeId } from "../utils/getParamsValues.js";
import { getJokeById } from "../services/apiUrls.js";

const renderSelectJoke = async () => {
  const selectedJoke = await getJokeId();
  const jokeData = await getJokeById(selectedJoke);
  const readContainer = document.getElementById('randomJokep');
  const readImageText = document.getElementById('main-joke');
  const readTextDetails = document.getElementById ('selected-joke');

  readContainer.innerText = jokeData.joke;
  readImageText.innerText = jokeData.joke;
  readTextDetails.innerText = jokeData.joke;
};

export { renderSelectJoke };
