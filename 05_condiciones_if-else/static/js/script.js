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
function ingresarPrecio() { // Creación de la función
    //Añadir un porcentaje de descuento e IVA y mostrar.
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20"));
    descuento /= 100; // operación para llevar a decimal
    let precio = parseFloat(prompt("Ingrese el precio del producto"));
    if (precio > 10000) {
        alert(`El valor ingresado fue: ${precio}\n
          IVA: ${precio * iva}\n
          Precio Total:${precio * 1.19}\n
          `);
    } else {
        alert("Precio normal");
    }
}

// Verificar si una persona puede conducir
//  Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”.
function licenciaEdad() {
    let = edad = parseInt(prompt("¿Cual es tu edad?"));
    if (edad > 100) {
        alert("Su edad es incompatible")
    }
    else if (edad >= 18 && licencia == "si") {
        alert("puede conducir");
        let = licencia = prompt("Ingresar si tiene licencia si/no");
        if (licencia == "si") {
            alert("Usted puede conducir");
        } else if (licencia == "no") {
            alert("No puede conducir");
        }
    } else {
        alert("Ingresar valores válidos")
    }
}

// segunda parte

//Comparar la longitud de dos palabras
//Solicita dos palabras con prompt(). Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.
function ingresarPalabra() {
    let = palabraUno = prompt("ingresar primera palabra");
    let = palabraDos = prompt("ingresar segunda palabra");
    const lengthUno = palabraUno.length;
    const lengthDos = palabraDos.length;
    if (lengthUno > lengthDos) {
        alert("la primera palabra es la mas larga")
    } else if (lengthUno == lengthDos) {
        alert("ambas palabras miden lo mismo")
    } else
        alert("la segundo palabra es la mas larga")
}

//Validar correo electrónico
//Pide al usuario que ingrese un correo. Verifica si el texto contiene el símbolo @. Si lo tiene, muestra "Correo válido", si no, "Correo inválido".
function ingresarCorreo() {
    let = correoElectronico = prompt("ingresar correo electronico:");
    if (correoElectronico.includes('@')) {
        alert("correo valido")
    } else {
        alert("correo invalido")
    }
}
//Verificar si un número es positivo o negativo
//Solicita un número. Muestra si es positivo, negativo o cero.
function ingresarNumero() {
    let = numero = parseInt(prompt("ingresar numero"));
    if (numero > 0) {
        alert("numero positivo")
    } else {
        alert("numero negativo");
    }
}
 //Saludo personalizado según hora
//Pide la hora actual (en formato 24 horas). Si es antes de las 12, muestra "Buenos días", si es entre 12 y 18, "Buenas tardes", y si es mayor a 18, "Buenas noches".
