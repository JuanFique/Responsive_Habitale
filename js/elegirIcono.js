document.addEventListener("DOMContentLoaded", () => {
    const selectButtons = document.querySelectorAll(".select-avatar");

    selectButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const avatarImage = event.target.closest(".avatar-option").querySelector("img").src;
            localStorage.setItem("selectedAvatar", avatarImage);
            window.location.href = "editarPerfil.html";
        });
    });
});