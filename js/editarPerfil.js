const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const avatarContainer = document.getElementById("current-avatar");
    const selectedAvatar = localStorage.getItem("selectedAvatar");

    if (selectedAvatar) {
        avatarContainer.src = selectedAvatar;
    }
});
