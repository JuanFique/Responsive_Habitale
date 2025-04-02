const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Toggle sidebar and overlay visibility
menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
});

// Close sidebar when clicking outside of it
overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
});
