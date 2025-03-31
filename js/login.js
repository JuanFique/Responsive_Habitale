document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("close-popup");

    loginBtn.addEventListener("click", () => {
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
        window.location.href = "index.html"; // Redirigir a la página principal
    });
});
