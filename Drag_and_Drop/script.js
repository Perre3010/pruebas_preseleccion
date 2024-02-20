function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropTarget = event.target;

    if (dropTarget.classList.contains("contorno")) {
        // Limpiar el contorno antes de agregar la nueva imagen
        dropTarget.innerHTML = "";

        // Crear una nueva imagen para obtener las dimensiones naturales
        var tempImage = new Image();
        tempImage.src = draggedElement.src;

        // Ajustar el tamaño del contorno al tamaño de la imagen
        dropTarget.style.width = tempImage.naturalWidth + "px";
        dropTarget.style.height = tempImage.naturalHeight + "px";

        // Agregar la imagen al contorno
        dropTarget.appendChild(draggedElement);
    }
}

function verificarColocacion() {
    var contorno1 = document.getElementById("imagen1");
    var contorno2 = document.getElementById("imagen2");
    var contorno3 = document.getElementById("imagen3");
    var contorno4 = document.getElementById("imagen4");
    var contorno5 = document.getElementById("imagen5");
    var contorno6 = document.getElementById("imagen6");
    var contorno7 = document.getElementById("imagen7");
    var contorno8 = document.getElementById("imagen8");
    var contorno9 = document.getElementById("imagen9");
    var contorno10 = document.getElementById("imagen10");
    var contorno11 = document.getElementById("imagen11");
    var contorno12 = document.getElementById("imagen12");

    var imagen1 = contorno1.querySelector("img");
    var imagen2 = contorno2.querySelector("img");
    var imagen3 = contorno3.querySelector("img");
    var imagen4 = contorno4.querySelector("img");
    var imagen5 = contorno5.querySelector("img");
    var imagen6 = contorno6.querySelector("img");
    var imagen7 = contorno7.querySelector("img");
    var imagen8 = contorno8.querySelector("img");
    var imagen9 = contorno9.querySelector("img");
    var imagen10 = contorno10.querySelector("img");
    var imagen11 = contorno11.querySelector("img");
    var imagen12 = contorno12.querySelector("img");

    if (imagen1 && imagen2 && imagen3 && imagen4 
        && imagen5 && imagen6 && imagen7 && imagen8 
        && imagen9 && imagen10 && imagen11 && imagen12) {
        // Verificar si las imágenes están en sus contornos correspondientes
        if (imagen1.id === "drag1" && imagen2.id === "drag2" && imagen3.id === "drag3" && imagen4.id === "drag4" 
        && imagen5.id === "drag5" && imagen6.id === "drag6" && imagen7.id === "drag7" && imagen8.id === "drag8" 
        && imagen9.id === "drag9" && imagen10.id === "drag10" && imagen11.id === "drag11" && imagen12.id === "drag12") {
            reproducirAudio();
            alert("¡Las imágenes están colocadas correctamente!");
        } else {
            alert("¡Las imágenes no están en sus contornos correspondientes!");
        }
    } else {
        alert("¡Por favor, coloca las imágenes en su lugar correspondiente antes de verificar!");
    }
}

// Función para reproducir un audio 
function reproducirAudio() {
    const audio = document.getElementById('audioVeryGood');
    audio.play(); // Reproduce el audio
}

