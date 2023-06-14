const modalModule = (() => {
  let openModalButton;
  let modal;
  let closeButton;
  let mainImgElement;
  let titleElement;
  let priceElement;
  let selectedJokeElement;
  let modalContent;
  let addToLocalStorageButton;
  let loadFromLocalStorageButton;

  const initializeModal = () => {
    openModalButton = document.getElementById("openModalButton");
    modal = document.getElementById("myModal");
    closeButton = document.getElementsByClassName("close")[0];
    mainImgElement = document.getElementById("main-img");
    titleElement = document.getElementById("title");
    priceElement = document.getElementById("price");
    selectedJokeElement = document.getElementById("selected-joke");
    modalContent = document.querySelector(".modal-content");
    addToLocalStorageButton = document.getElementById("addToLocalStorageButton");
    loadFromLocalStorageButton = document.getElementById("loadFromLocalStorageButton");

    openModalButton.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        closeModal();
      }
    });
    openModalButton.addEventListener("click", updateModalContent);
    modalContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("close")) {
        closeModal();
      }
    });
    addToLocalStorageButton.addEventListener("click", addToLocalStorage);
    loadFromLocalStorageButton.addEventListener("click", loadFromLocalStorage);
  };

  const openModal = () => {
    modal.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
  };

  const updateModalContent = () => {
    const mainImgSrc = mainImgElement.getAttribute("src");
    const title = titleElement.textContent;
    const price = priceElement.textContent;
    const selectedJoke = selectedJokeElement.textContent;

    modalContent.innerHTML = `
      <span class="close">&times;</span>
      <h2>Carrito</h2>
      <div class="modal__container">
        <img src="${mainImgSrc}" class="adapt-img"/>
        <div class="flex__container">
          <p>${title}</p>
          <p>Price: ${price}</p>
          <p>Joke: ${selectedJoke}</p>
        </div>
      </div>
    `;
  };

  const addToLocalStorage = () => {
    const mainImgSrc = mainImgElement.getAttribute("src");
    const title = titleElement.textContent;
    const price = priceElement.textContent;
    const selectedJoke = selectedJokeElement.textContent;

    let productList = localStorage.getItem("productList");
    if (!productList) {
      productList = [];
    } else {
      productList = JSON.parse(productList);
    }

    productList.push({ mainImgSrc, title, price, selectedJoke });

    localStorage.setItem("productList", JSON.stringify(productList));
  };

  const loadFromLocalStorage = () => {
    const productList = JSON.parse(localStorage.getItem("productList"));

    if (productList && productList.length > 0) {
      let modalContentHTML = `
        <span class="close">&times;</span>
        <h2>Carrito</h2>
      `;
      for (let i = 0; i < productList.length; i++) {
        const { mainImgSrc, title, price, selectedJoke } = productList[i];
        modalContentHTML += `
        <div class="flex-box">
          <div class="modal__container">
            <img src="${mainImgSrc}" class="adapt-img"/>
            <div class="flex__container">
              <p>${title}</p>
              <p>Price: ${price}</p>
              <p>Joke: ${selectedJoke}</p>
            </div>
          </div>
        </div>
        `;
      }
      modalContent.innerHTML = modalContentHTML;

      modal.style.display = "block";
    }
  };

  return {
    initializeModal,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  modalModule.initializeModal();
});

export {modalModule};
