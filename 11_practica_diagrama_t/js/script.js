// ejercicio 1
/*Pedir los datos de una persona (Nombre, apellidos, edad) y mostrarlos a través de una alerta.*/

function datosUsuario() {
    let nombre = prompt("Ingrese su nombre: ");
    let apellido = prompt("Ingresar apellido ");
    let edad = parseInt(prompt("Ingrese su edad: a"));
    let resultado = (`${nombre} ` + `${apellido} ` + `${edad}`)
    alert(resultado)
}

// ejercicio 2
/*Pedir un número, dividirlo en 3 partes, sumar 10 y multiplicarlo por 2, luego mostrar el resultado en una alerta.*/

function calcularNumero() {
    let num = prompt("Ingresa un número:");
    let div = 3;
    let suma = 10;
    mult = 2;
    let resultado = ((num / div) + suma) * mult;
    alert("El resultado es: " + `${resultado}`);
}

// ejercicio 3
/*Leer 2 números y deducir si están en orden creciente o decreciente. Mostrar en cada caso “Estado creciente”, “Estado Decreciente” */
function numeroCreciente() {
    let num1 = parseInt(prompt("Ingresar primer numero: "))
    let num2 = parseInt(prompt("Ingresar segundo numero: "))
    if (num1 < num2) {
        alert("los numeros " + `${num1} ` + "y " + `${num2}` + " estan ordenados de forma creciente")

    } else if (num1 > num2) {
        alert("los numeros " + `${num1} ` + "y " + `${num2}` + " estan ordenados de forma decreciente")
    }
    else {
        ("ambos numeros son iguales")
    }
}
// ejercicio 4
/*Leer 5 números (bucle), calcular su promedio y mostrar el resultado.*/
function calcularPromedio() {
    let suma = 0;
    let cantidad = 5;

    // Leer 5 números usando for
    for (let i = 1; i <= cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + `${i}` + ":"));
        suma += numero;
    }

    // Calcular promedio
    let promedio = suma / cantidad;

    // Mostrar resultado
    alert("El promedio de los " + cantidad + " números es: " + promedio);
}

// ejercicio 5
/*Calcular la suma de los N primeros números naturales. (N es ingresado por el usuario). Ejemplo: N=3 → alerta: 1 + 2 + 3 = 6 */
function numerosNaturales() {
    let N = parseInt(prompt("Ingresar numeros: "))
    let suma = 0;

    for (let i = 1; i <= N; i++) {
        suma += i;
    }
    alert("1 + 2 + 3 + 4 + 5 + " + `${N}` + " = " + `${suma}`)
}

// ejercicio 6
/*Mostrar en alerta los 100 primeros números pares. (Bucle)*/
function numerosPares() {
    let numero = parseInt(prompt("ingresar numero: "))
    let pares = "";
    for (let i = 1; i <= 100; i++) {
        pares += (i * 2);
        if (i < 100) {
            pares += ",  ";
        }
    }

    alert("Los 100 primeros números pares de " + `${numero}` + " son: " + `${pares}`);

}

// ejercicio 7
/*Mostrar en alerta los 100 primeros números impares. (Bucle)*/
function numerosImpares() {
    let numero = parseInt(prompt("ingresar numero: "))
    let pares = "";
    for (let i = 1; i <= 100; i++) {
        pares += (i * 2 - 1);
        if (i < 100) {
            pares += ",  ";
        }
    }

    alert("Los 100 primeros números impares de " + `${numero}` + " son: " + `${pares}`);
}

// ejercicio 8
/*Sumar 5 números leídos por teclado - Mostrar resultado (Bucle)*/
function numeroLeido() {
    let suma = 0;

    for (let i = 1; i <= 5; i++) {
        let num = parseFloat(prompt("Ingresa el número " + i + ":"));
        suma += num;
    }
    alert("La suma de los 5 números es: " + `${suma}`);
}

// ejercicio 9
/*Modificar el anterior para que permita sumar N números leídos por teclado. El valor de N se debe leer previamente por teclado.*/
function numeroLeidoN() {
    let cantidad = parseInt(prompt("¿Cuántos números quiere sumar?"));
    let suma = 0;

    for (let i = 1; i <= cantidad; i++) {
        let numero = parseFloat(prompt("Ingresa el número " + i + ":"));
        suma += numero;
    }

    alert("La suma de los " + `${cantidad}` + " números es: " + ` ${suma}`);
}

// ejercicio 10
/*Leer 2 números y solicitar al usuario que ingrese la opción de sumarlos, restarlos, multiplicarlos o dividirlos según elija quien ingresa.*/
function operacionMultiple() {
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    let opcion = prompt("Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n\nIngresa el número de la opción:");

    let resultado;
    let operacion;

    if (opcion === "1") {
        resultado = num1 + num2;
        operacion = "suma";
    } else if (opcion === "2") {
        resultado = num1 - num2;
        operacion = "resta";
    } else if (opcion === "3") {
        resultado = num1 * num2;
        operacion = "multiplicación";
    } else if (opcion === "4") {
        if (num2 === 0) {
            alert("Error: No se puede dividir por cero");
        } else {
            resultado = num1 / num2;
            operacion = "división";
        }
    } else {
        alert("Opción no válida");
    }

    if (resultado !== undefined) {
        alert("El resultado de la " + `${operacion}` + " es: " + `${resultado}`);
    }
}