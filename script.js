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

let downloadCount = 0; // Contador de descargas

document.getElementById('downloadLink').addEventListener('click', function (event) {
    // Evitar la acción predeterminada del enlace
    event.preventDefault();

    if (downloadCount < 2) {  // Permite hasta 2 descargas
        downloadCount++;  // Incrementa el contador de descargas

        // Inicia la descarga en una nueva ventana
        window.open('Hoja de Vida - Estefanía Becerra Quintero.pdf', '_blank');  
    } else {
        // Mostrar el mensaje de alerta cuando se alcanza el límite
        alert("¡Has alcanzado el máximo de descargas permitidas para la Hoja de Vida!");

        // Deshabilitar el botón y cambiar su estilo para indicar que ya no se puede descargar
        document.getElementById('downloadButton').disabled = true;  // Deshabilita el botón
        document.getElementById('downloadButton').style.backgroundColor = "gray";  // Cambiar color de fondo a gris
        document.getElementById('downloadButton').style.cursor = "not-allowed";  // Cambiar el cursor a 'no permitido'
    }
});
