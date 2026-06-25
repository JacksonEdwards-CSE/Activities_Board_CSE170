
const card = document.querySelector(".card");

const modal = document.querySelector("dialog");
const modalImage = document.querySelector("#modal-img")
const modalTitle = document.querySelector("#modal-title")
const modalDescription = document.querySelector("#modal-description")

card.addEventListener("click", toggleModal);

function toggleModal(){

    const image = card.querySelector(".card-img");
    const title = card.querySelector(".card-title");
    const description = card.querySelector(".card-description");

    modalImage.src = image.src;

    modalTitle.textContent = title.textContent;
    modalDescription.textContent = description.textContent;
    console.log(modalTitle.textContent, modalDescription.textContent);

    modal.showModal();
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});