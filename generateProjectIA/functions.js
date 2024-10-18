let saldo = 1000; // Saldo inicial
let usuarioValido = "usuario";
let pinValido = "1234";

function validarUsuario() {
    let usuario = document.getElementById("usuario").value;
    let pin = document.getElementById("pin").value;
    
    if (usuario === usuarioValido && pin === pinValido) {
        document.getElementById("login").style.display = "none";
        document.getElementById("operaciones").style.display = "block";
        document.getElementById("resultado").innerHTML = "Bienvenido al cajero automático";
    } else {
        document.getElementById("resultado").innerHTML = "Usuario o PIN incorrecto";
    }
}

function consultarSaldo() {
    document.getElementById("resultado").innerHTML = `Su saldo actual es: $${saldo}`;
}

function retirar() {
    let cantidad = prompt("Ingrese la cantidad a retirar:");
    cantidad = parseFloat(cantidad);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cantidad válida";
    } else if (cantidad > saldo) {
        document.getElementById("resultado").innerHTML = "Saldo insuficiente";
    } else {
        saldo -= cantidad;
        document.getElementById("resultado").innerHTML = `Retiro exitoso. Su nuevo saldo es: $${saldo}`;
    }
}

function consignar() {
    let cantidad = prompt("Ingrese la cantidad a consignar:");
    cantidad = parseFloat(cantidad);
    
    if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cantidad válida";
    } else {
        saldo += cantidad;
        document.getElementById("resultado").innerHTML = `Consignación exitosa. Su nuevo saldo es: $${saldo}`;
    }
}

function salir() {
    document.getElementById("login").style.display = "block";
    document.getElementById("operaciones").style.display = "none";
    document.getElementById("resultado").innerHTML = "Gracias por usar nuestro cajero automático. ¡Hasta pronto!";
    document.getElementById("usuario").value = "";
    document.getElementById("pin").value = "";
}