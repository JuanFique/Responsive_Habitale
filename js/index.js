document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.querySelector(".cookie-banner");
    const cookieButton = document.querySelector(".cookie-button");

    // Ocultar el banner al hacer clic en el botón
    cookieButton.addEventListener("click", function () {
        cookieBanner.style.display = "none";
    });

    // Agregar atributo data-section a los enlaces del menú para enlazar con las secciones correspondientes
    const navLinks = document.querySelectorAll(".nav-options a[data-section]");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionClass = link.getAttribute("data-section");
            const section = document.querySelector(`.${sectionClass}`);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    const navOptions = document.querySelector(".nav-options");

    menuToggle.addEventListener("click", function () {
        navOptions.classList.toggle("open");
    });
});