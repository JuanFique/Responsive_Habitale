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