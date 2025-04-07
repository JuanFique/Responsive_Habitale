document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register-btn");
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const closePopup = document.getElementById("close-popup");

    registerBtn.addEventListener("click", () => {
        popup.style.display = "block";
        overlay.style.display = "block";
    });

    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        overlay.style.display = "none";
        window.location.href = "pagos.html"; // Redirect to login page
    });

    // Removed overlay click event
});
