import { getJokeId } from "../utils/getParamsValues.js";
import { getJokeById } from "../services/apiUrls.js";

const renderSelectJoke = async () => {
  try {
    const selectedJoke = await getJokeId();
    const jokeData = await getJokeById(selectedJoke);
    
    const readContainer = document.getElementById('randomJokep');
    const readImageText = document.getElementById('main-joke');
    const readTextDetails = document.getElementById('selected-joke');
    
    if (jokeData && jokeData.joke) {
      readContainer.innerText = jokeData.joke;
      readImageText.innerText = jokeData.joke;
      readTextDetails.innerText = jokeData.joke;
    } else {
      // Manejo del caso en que jokeData es undefined o jokeData.joke es undefined
    }
    
  } catch (error) {
    console.error(error);
  }
};

export { renderSelectJoke };
