// Función para determinar si un número es primo
function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Retorna falso si el número tiene algún divisor distinto de 1 y sí mismo
        }
    }
    return numero > 1; // Retorna verdadero si el número es mayor que 1 (los números primos son mayores que 1)
}

// Función principal para verificar los números ingresados por el usuario
function verificar() {
    const numerosIngresados = document.getElementsByName('numeros[]');
    let numerosPrimosCorrectos = [];

    // Genera un array con los números primos del 1 al 100
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            numerosPrimosCorrectos.push(i.toString());
        }
    }

    // Itera sobre los campos de entrada de números ingresados por el usuario
    for (let i = 0; i < numerosIngresados.length; i++) {
        const valorIngresado = numerosIngresados[i].value;

        // Verifica si el campo está vacío o no es un número
        if (!valorIngresado || isNaN(valorIngresado)) {
            alert('Todos los campos deben estar llenos y contener un número válido.');
            return;
        }

        // Obtiene el valor correcto para el número actual según la lista de primos generada anteriormente
        const valorCorrecto = numerosPrimosCorrectos[i];

        // Compara el valor ingresado con el valor correcto
        if (valorIngresado !== valorCorrecto) {
            alert('Incorrecto. Verifica los números ingresados.');
            return;
        }
    }

    // Llama a la función para reproducir audio indicando que los números son correctos
    reproducirAudio();

    // Muestra un mensaje de éxito
    alert('¡Correcto! Los números son correctos.');
}

// Genera los campos de entrada y muestra los números del 1 al 100 en la página
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        document.write("<div class='numero-container'>");
        document.write("<label for='numero" + i + "'>" + "</label>");
        document.write("<input type='text' id='numero" + i + "' name='numeros[]' maxlength='3' required>");
        document.write("</div>");
    } else {
        document.write("<div class='numero-no-primo'>");
        document.write(i);
        document.write("</div>");
    }
}

// Función para reproducir un audio 
function reproducirAudio() {
    const audio = document.getElementById('audioVeryGood');
    audio.play(); // Reproduce el audio
}
