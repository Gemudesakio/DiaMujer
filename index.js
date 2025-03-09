document.addEventListener("DOMContentLoaded", function () {
    const heartIcon = document.getElementById("heart-icon");
    const title = document.getElementById("title");

    // Ocultar el título al inicio
    title.style.display = "none";

    heartIcon.addEventListener("click", function () {
        if (title.classList.contains("fadeIn")) {
            // Aplicar fadeOut y ocultar después de la animación
            title.classList.remove("fadeIn");
            title.classList.add("fadeOut");

            setTimeout(() => {
                title.style.display = "none"; // Ocultar después de animar
            }, 1500); // 1.5s = duración de fadeOut
        } else {
            // Mostrar y aplicar fadeIn
            title.style.display = "block";
            title.classList.remove("fadeOut");
            title.classList.add("fadeIn");
        }
    });
});

