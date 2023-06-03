// Obtener los elementos del DOM
var botonEncriptar = document.getElementById('boton-encrip');
var botonDesencriptar = document.getElementById('boton-desencrip');
var botonCopiar = document.getElementById('boton-copiar');
var inputTexto = document.getElementById('input');
var areaRespuesta = document.querySelector('.respuesta');

// Manejar el evento de clic del botón
botonEncriptar.addEventListener('click', function () {
    // Obtener el valor del campo de entrada
    var texto = inputTexto.value;

    // Encriptar el texto
    var textoEncriptado = encriptarTexto(texto);

    // Mostrar el texto encriptado en el área de respuesta
    areaRespuesta.value = textoEncriptado;

    inputTexto.value = '';
});

botonDesencriptar.addEventListener('click', function () {
    // Obtener el valor del campo de entrada
    var texto = inputTexto.value;

    // Desencriptar el texto
    var textoDesencriptado = desencriptarTexto(texto);

    // Mostrar el texto desencriptado en el área de respuesta
    areaRespuesta.value = textoDesencriptado;

    inputTexto.value = '';
});

botonCopiar.addEventListener('click', function () {
    // Seleccionar el área de respuesta
    areaRespuesta.select();
    areaRespuesta.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Deseleccionar el área de respuesta
    areaRespuesta.setSelectionRange(0, 0);
});

// Función de encriptación
function encriptarTexto(texto) {
    // Lista de vocales a encriptar
    var vocalesEncriptadas = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    // Convertir el texto a minúsculas
    var textoEnMinusculas = texto.toLowerCase();

    // Encriptar las vocales encontradas
    var textoEncriptado = '';
    for (var i = 0; i < textoEnMinusculas.length; i++) {
        var caracter = textoEnMinusculas[i];
        if (vocalesEncriptadas.hasOwnProperty(caracter)) {
            textoEncriptado += vocalesEncriptadas[caracter];
        } else {
            textoEncriptado += caracter;
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(texto) {
    // Lista de secuencias encriptadas y su desencriptación correspondiente
    var secuenciasDesencriptadas = {
        'ober': 'o',
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ufat': 'u'
    };

    // Construir una expresión regular que coincida con todas las secuencias encriptadas
    var expresionRegular = new RegExp(Object.keys(secuenciasDesencriptadas).join('|'), 'gi');

    // Reemplazar todas las coincidencias de secuencias encriptadas por su desencriptación correspondiente
    var textoDesencriptado = texto.replace(expresionRegular, function (match) {
        return secuenciasDesencriptadas[match.toLowerCase()];
    });

    return textoDesencriptado;
}















