async function getJokeId() {
  const id = new URLSearchParams(window.location.search).get('id')
  
  return id;
}

export { getJokeId }