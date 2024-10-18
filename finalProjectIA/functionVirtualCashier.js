let saldo = 1000; // Saldo inicial
let usuarioValido = "usuario";
let pinValido = "1234";

// Funcion para inicializar los botones
function inicializarBotones() {
    const botones = document.querySelectorAll('#operaciones button');
    botones.forEach(boton => {
        boton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#243642';
            this.style.transform = 'scale(1.1)';
            this.style.color = '#ffffff';
        });
        boton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.transform = 'scale(1)';
        });
        boton.addEventListener('click', function() {
            this.style.backgroundColor = '#66cc66';
        });
    });
}

function validarUsuario() {
    let usuario = document.getElementById("usuario").value;
    let pin = document.getElementById("pin").value;
    
    if (usuario === usuarioValido && pin === pinValido) {
        document.getElementById("login").style.display = "none";
        document.getElementById("operaciones").style.display = "flex";
        document.getElementById("resultado").innerHTML = "Bienvenido al cajero virtual";
        
        // Cambiar los textos
        document.getElementById("titulo-principal").innerHTML = "¿Qué desea hacer el día de hoy?";
        // document.getElementById("titulo-principal").style.margin = "50px";
        document.getElementById("titulo-principal").style.fontSize = "30px";
        document.getElementById("subtitulo").innerHTML = "Elija una opción:";
        document.getElementById("subtitulo").style.marginTop = "0px";
        document.getElementById("subtitulo").style.fontSize = "20px";
        
        inicializarBotones(); // Llamar a la función después de mostrar los botones
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
    document.getElementById("resultado").innerHTML = "Gracias por usar nuestro cajero virtual. ¡Hasta pronto!";
    document.getElementById("usuario").value = "";
    document.getElementById("pin").value = "";
    
    // Restaurar los textos originales
    document.getElementById("titulo-principal").innerHTML = "Bienvenidos al cajero virtual";
    document.getElementById("subtitulo").innerHTML = "Ingrese sus datos:";
}
