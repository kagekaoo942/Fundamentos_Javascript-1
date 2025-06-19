//Ejercicios condiciones if-else
console.log("Conexion con js establecida");
/* Edad para votar
  Solicita la edad del usuario mediante prompt().
   Muestra con alert() si puede votar (18 años o más) o no.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad:"));//Input convercion string a número
    // condicion if - else if- else
    if (edad >= 18) {
        alert("Su edad " + edad + " aprobada para votar.");
    } else if (edad >= 0 && edad < 18) { //&& compuerta AND
        alert("Su edad " + edad + " no esta aprobada para votar.");
    } else {
        alert("Ingrese un valor válido. ");
    }
};
// Contraseña válida
//  Pide una contraseña con prompt(). Si es igual a "1234", muestra un mensaje de acceso permitido. En caso contrario, muestra acceso denegado.

function contraseñaValida() {
    let clave = "1234";
    let pass = prompt("Ingrese su contrseña: ");
    //Condicion estructura if-else
    if (pass == clave) {
        alert("Acceso permitido");
    } else {
        alert("Acceso denegado");
    }

}
function num() {
    let num = prompt("Ingrese un numero:");
    if (num % 2 == 0) {
        alert("Numero par");
    } else {
        alert("numero impar")
    }
}


// Temperatura ambiental
//  Solicita la temperatura actual. Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario muestra “Clima agradable”.
function ingresarTemperatura() {
    let temp = prompt("Ingresar Temperatura");
    if (temp >= 30 && temp <= 50) {
        alert("Hace calor");
    } else if (temp >= 15 && temp < 30) {
        alert("agradable");
    } else if (temp >= -5 && temp <= 15) {
        alert("hace frio")
    } else {
        alert("Ingrese valor valido")
    }

}
// Comparar dos números
//  Solicita dos números al usuario. Compara ambos y muestra cuál es mayor o si son iguales.
function compararNumeros() {
    let num1 = parseInt(prompt("Ingresar primer numero"));
    let num2 = parseInt(prompt("Ingresar segundo numero"));
    if (num1 < num2) {
        alert("el numero " + num1 + " es menor que " + num2);
    }
    else if (num1 == num2) {
        alert("el numero " + num1 + " es igual que " + num2);
    }
    else {
        alert("el numero " + num1 + " es mayor que " + num2);
    }
}
// Calificación escolar
//  Pide una nota entre 1 y 7. Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.

function note() {
    let ingresa = parseInt(prompt("ingresar nota"));
    if (ingresa < 4) {
        alert("desprobado");
    } else if (ingresa >= 4 && ingresa <= 7) {
        alert("aprobado");
    } else {
        alert("ingrese valor valido");
    }
}
//  Pide un nombre de usuario. Si el valor ingresado es "admin", muestra “Bienvenido, administrador”.
//  Si no, muestra “Usuario no reconocido”.
function usuarioAdmin() {
    let usuari = prompt("Ingresar usuario");
    if (usuari == "admin") {
        alert("Bienvenido, administrador");
    } else {
        alert("usuario no reconocido");
    }
}
// Verificar si una palabra empieza con "A"
//  Pide una palabra al usuario. Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.
function palabraMayuscula() {
    let letra = prompt("Ingresar palabra");
    let letraA = "A";
    if (letra[0] == letraA) {
        alert("la palabra si empieza con A");
    } else {
        alert("no empieza por A");
    }
}
//  Solicita el precio de un producto. Si el precio es mayor a 10000, muestra que aplica descuento. Si no, indica precio normal.

function precioDescuento() {
    let precio = prompt("Ingresar precio");
    if (precio > 10000) {
        alert("Descuento");
    } else {
        alert("precio normal");
    }
}

// Verificar si una persona puede conducir
//  Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.
function ingresarUsuario() {
    let = edad = parseInt(prompt("¿Cual es tu edad?"));
    let = tieneLicencia = prompt("¿Tienes licencia de conducir?");
    if (edad >= 18 && tieneLicencia == "si") {
        alert("puede conducir");
    } else {
        alert("No puede conducir");
    }
}

