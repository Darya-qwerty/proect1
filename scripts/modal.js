//3.4(2)
const welcоmeButtonModal = document.querySelector(".welcome__button ");
const modalApplication = document.querySelector(".applications");

if (welcоmeButtonModal && modalApplication) {
    welcоmeButtonModal.addEventListener("click", () => {
      modalApplication.removeAttribute("hidden");
    });
}

window.addEventListener("click", (event) => {
    if (event.target === modalApplication) {
        modalApplication.setAttribute("hidden", true);
    }
});
const closeModalButton = document.querySelector(".application__close");

closeModalButton.addEventListener("click", () => {
    modalApplication.setAttribute("hidden", true);
});

