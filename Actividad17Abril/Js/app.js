// Ejercicio #1
function obtenerPI() {
    return Math.PI.toFixed(2);
}

document.getElementById("resultado1").innerText = obtenerPI();

// Ejercicio #2
function calcularPrecioConIVA(precio, iva = 19) {
    return precio * (1 + iva / 100);
}

function mostrarPrecioConIVA() {
    var precio = parseFloat(document.getElementById("precio").value);
    var iva = parseFloat(document.getElementById("iva").value);
    
    if (isNaN(iva)) {
        iva = 19;
    }
    
    var precioConIVA = calcularPrecioConIVA(precio, iva);
    document.getElementById("resultado2").innerText = "Precio con IVA: $" + precioConIVA.toFixed(2);
}

// Ejercicio #3
function revertirTexto(texto) {
    return texto.split('').reverse().join('');
}

function revertir() {
    var texto = document.getElementById('texto').value;
    var textoRevertido = revertirTexto(texto);
    document.getElementById('resultado3').innerText = "Texto revertido: " + textoRevertido;
}

// Ejercicio #4
function generarNumeroAleatorio(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarNumeroAleatorio() {
    var numero = generarNumeroAleatorio();
    document.getElementById("resultado4").textContent = "Número Aleatorio: " + numero;
}

// Ejercicio #5
function generarNumerosAleatorios() {
    var numeros = [];
    var resultado = document.getElementById("resultado5");
    resultado.innerHTML = "";

    while (numeros.length < 100) {
        var numero = Math.floor(Math.random() * 1000) + 1;
        if (!numeros.includes(numero)) {
            numeros.push(numero);
            var elemento = document.createElement("div");
            elemento.textContent = numero; // Cambio 'textContenido' a 'textContent'
            resultado.appendChild(elemento);
        }
    }
}