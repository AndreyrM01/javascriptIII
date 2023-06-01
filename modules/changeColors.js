export function changeToBlack() {
  const blackRadio = document.getElementById("black");
  const whiteRadio = document.getElementById("white");
  const blackLabel = document.querySelector('label[for="black"]');
  const whiteLabel = document.querySelector('label[for="white"]');
  
  if (blackRadio.checked) {
    document.body.classList.add("container__tarea2--black");
    blackLabel.classList.add("color--active");
    whiteLabel.classList.remove("color--active");
  }
}

export function changeToWhite() {
  const blackRadio = document.getElementById("black");
  const whiteRadio = document.getElementById("white");
  const blackLabel = document.querySelector('label[for="black"]');
  const whiteLabel = document.querySelector('label[for="white"]');
  
  if (whiteRadio.checked) {
    document.body.classList.remove("container__tarea2--black");
    whiteLabel.classList.add("color--active");
    blackLabel.classList.remove("color--active");
  }
}