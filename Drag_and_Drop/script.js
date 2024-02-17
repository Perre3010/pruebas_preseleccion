// Selecciona todas las piezas y contornos del rompecabezas
const piezas = document.querySelectorAll('.pieza');
const contornos = document.querySelectorAll('.contorno');

// Añade eventos de arrastrar y soltar a las piezas
piezas.forEach(pieza => {
    pieza.addEventListener('dragstart', dragStart);
    pieza.addEventListener('dragend', dragEnd);
});

// Añade eventos de arrastrar y soltar a los contornos
contornos.forEach(contorno => {
    contorno.addEventListener('dragover', dragOver);
    contorno.addEventListener('dragenter', dragEnter);
    contorno.addEventListener('dragleave', dragLeave);
    contorno.addEventListener('drop', drop);
});

let piezaArrastrada = null;

// Función para el inicio del arrastre
function dragStart() {
    piezaArrastrada = this;
    setTimeout(() => (this.style.display = 'none'), 0);
}

// Función para el final del arrastre
function dragEnd() {
    this.style.display = 'block';
    piezaArrastrada = null;
}

// Evita el comportamiento predeterminado y permite soltar las piezas en los contornos
function dragOver(e) {
    e.preventDefault();
}

// Marca un contorno como "hovered" cuando una pieza entra en él
function dragEnter() {
    this.classList.add('hovered');
}

// Elimina la marca "hovered" cuando una pieza sale de un contorno
function dragLeave() {
    this.classList.remove('hovered');
}

// Coloca la pieza arrastrada en un contorno si este último está marcado como "hovered"
function drop() {
    if (this.classList.contains('hovered')) {
        this.appendChild(piezaArrastrada);
        this.classList.remove('hovered');
    }
}

// Función para verificar si todas las piezas están en su lugar
function verificar() {
    let todasEnSuLugar = true;

    contornos.forEach(contorno => {
        const piezaEnContorno = contorno.querySelector('.pieza');

        // Verifica si una pieza está en el contorno correcto
        if (!piezaEnContorno || piezaEnContorno.id !== contorno.id.replace('contorno', 'pieza')) {
            todasEnSuLugar = false;
        }
    });

    // Muestra un mensaje según si todas las piezas están en su lugar o no
    if (todasEnSuLugar) {
        reproducirAudio();
        alert('¡Todas las piezas están en su lugar!');
    } else {
        alert('No todas las piezas están en su lugar. Inténtalo de nuevo.');
    }
}

// Función para reproducir un audio
function reproducirAudio() {
    const audio = document.getElementById('audioVeryGood');
    audio.play();
}

