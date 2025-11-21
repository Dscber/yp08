document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = modal.querySelector(".modal__close");

    openButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.add("active");
        });
    });

    closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });
});
