let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var habilidades = document.getElementById("skills");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_habilidades >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

// Unicamente una descarga
document.getElementById('downloadLink').addEventListener('click', function (event) {
    // Deshabilitar el enlace
    document.getElementById('downloadLink').style.pointerEvents = "none"; // Deshabilita el enlace
    document.getElementById('downloadLink').style.color = "gray"; // Cambia el color del texto para indicar deshabilitación
    // Evitar que el enlace funcione después de un clic
    event.preventDefault(); // Detiene la acción predeterminada
    setTimeout(() => {
        // Permitir la descarga después de prevenir el comportamiento predeterminado
        window.location.href = 'Hoja de Vida - Estefanía Becerra Quintero.pdf';
    }, 100); // Este retardo da tiempo a deshabilitar el botón antes de la descarga
});
