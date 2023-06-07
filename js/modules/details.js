import { jokeChange } from './randomJoke.js';

const initDetails = () => {
  jokeChange.subscribe(handleChange);
};

const handleChange = ({ detail }) => {
  const preview = document.getElementById('main-joke');
  const renderJoke = document.getElementById('selected-joke');

  preview.innerHTML = detail;
  renderJoke.innerHTML = detail;
};

export { initDetails };
