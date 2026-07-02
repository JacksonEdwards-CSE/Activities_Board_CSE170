
const card = document.querySelector(".card");

const modal = document.querySelector("dialog");
const modalImage = document.querySelector("#modal-img")
const modalTitle = document.querySelector("#modal-title")
const modalDescription = document.querySelector("#modal-description")

const image = card.querySelector(".card-img");
const title = card.querySelector(".card-title");
const description = card.querySelector(".card-description");

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

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", (event) => {
        console.log("clicked")
        const clickedCard = event.currentTarget;

        modalImage.src = clickedCard.querySelector(".card-img").src;
        modalTitle.textContent = clickedCard.querySelector(".card-title").textContent;
        modalDescription.textContent = clickedCard.querySelector(".card-description").textContent;

        modal.showModal();
    });
});