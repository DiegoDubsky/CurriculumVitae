// Obtiene una referencia al elemento de imagen por su ID
var profileImage = document.getElementById("profile_photo");
// Obtiene una referencia al contenedor del perfil
var container = document.querySelector(".profile_center");

var move = false;

// Agrega un evento 'mousemove' a la ventana para detectar cuando el mouse se mueve dentro de él
window.addEventListener("mousemove", function (event) {
    // Si no está activado el movimiento, salimos...
    if (!move) return;
    // Obtiene la posición del contenedor en relación con el viewport
    var rect = container.getBoundingClientRect();

    // Calcula las coordenadas del puntero relativas al centro del contenedor
    var x = event.clientX - rect.left - container.offsetWidth / 2;
    var y = event.clientY - rect.top - container.offsetHeight / 2;

    // Calcula el ángulo de rotación basado en las coordenadas del puntero utilizando la función Math.atan2
    var rotation = Math.atan2(y, x) * (180 / Math.PI) + 10;
    // Actualiza la propiedad 'transform' del elemento de imagen con el ángulo de rotación calculado
    profileImage.style.transform = "rotate(" + rotation + "deg)";
});

// Cuando se clickea en cualquier parte vuelve a 0deg e invierte 'move'
window.addEventListener("click", function () {
    profileImage.style.transform = "rotate(0deg)"; // Restablece la rotación a cero cuando el mouse se sale del contenedor
    move = !move;
});;