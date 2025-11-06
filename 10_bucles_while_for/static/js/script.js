/*
Contar numeros del 10 al 1 - ejemplo
*/
console.log("conexion exitosa.....")
// Creación función bucle while
function ejecutarWhile() {
    let resultado = "El resultado es: ";
    let count = 10;
    while (count > 0) {
        resultado += ` ${count}`;
        alert(resultado)
        count--
    }
}

// Creacion de bucle for
function ejecutarFor() {
    let resultado = "El resultado es: ";
    // Inicia bucle
    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }

    alert(resultado)
}


/*1️⃣ Bucle while: Imprimir del 1 a n (n es ingresado por teclado).
Escribe un programa que utilice un bucle while para imprimir los números del 1 al n con un solo Alert.
*/
function contarHastaN() {
    let resultado = "Contamos: "
    let n = parseInt(prompt("Ingresar numero: "));
    let contador = 1;
    while (contador <= n) {
        resultado += ` ${contador}`;
        console.log(contador)
        contador++;
    }
    alert(resultado)
}

/*2️⃣ Bucle while: Cuenta regresiva del n al 1 (n es ingresado por teclado)
Crea un programa que muestre una cuenta regresiva desde n hasta 1 utilizando un bucle while.*/

function cuentaRegresivo() {
    let contador = parseInt(prompt("Ingresar numero: "));
    let resultado = "Conteo";
    while (contador > 0) {
        resultado += ` ${contador}`;
        contador--;
    }
    alert(resultado)
}


/* 
3️⃣ Bucle while: Sumar los n primeros números
Usando un bucle while, calcula la suma de los números n primeros números  muestra el resultado en la consola.*/

function sumarNumero() {
    let suma = 0;
    let numero = parseInt(prompt("Ingresar numero: "));
    let contador = 1;
    let resultado = "Suma: 0";
    while (contador <= numero) {
        suma = suma + contador;
        resultado += ` + ${contador}`;
        contador++
    }
    alert(`${resultado} =${suma}`)
}

/*4️⃣ Bucle while: Imprimir múltiplos de 2 del 1 al n (n es el límite de números a encontrar)
Escribe un programa que use un bucle while para imprimir los múltiplos de 2 que hay entre 1 y 10 (inclusive).*/

function imprimirMultiplo() {
    let numero = parseInt(prompt("Ingresar numero: "));
    let count = 1;
    let result = "el resultado es: "
    while (count < numero) {
        count++
        if (count % 2 == 0) {
            /*concatena*/
            result += ` ${count}`
        }
    }
    alert(` ${result}`)
}
// bucles fo
/*5️⃣ Bucle for: Tabla de multiplicar
Pide un número al usuario e imprime su tabla de multiplicar del 1 al 10 en un solo alert.*/

function tablaMultiplicar() {
    let num = parseInt(prompt("Ingresar numero: "))
    let tablas = `Tabla de ${num}: `;
    // inicio de bucle for
    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x ${i} = ${num * i}`
    }
    alert(tablas);
    console.log(tablas)
}

/*6️⃣ Bucle for: Números pares hasta n
Solicita un número n e imprime todos los números pares desde 1 hasta n usando un bucle for.

Ejemplo de resultado:
2, 4, 6, 8, 10*/

function par() {
    let num = parseInt(prompt("ingresar numero: "));
    let resultado = `los numeros pares de ${num} son:`

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += ` ${i}`

        }
    }
    alert(resultado)
}

/*7️⃣ Bucle for: Contar letras de una palabra
Pide una palabra al usuario y muestra cuántas letras tiene usando un bucle for para recorrerla.*/

function contadorLetra() {
    let word = prompt("ingresar numero: ");
    let cont = 0
    for (let i = 0; i < word.length; i++) {
        cont++
    }
    alert(`La palabra "${word} tiene ${cont} letras."`)
}


/*
8️⃣ Bucle for: Calcular factorial
Solicita un número n e imprime el factorial de ese número (n × n-1 × n-2 × … × 1) usando un bucle for.*/

function numeroFactorial() {
    let numero = parseInt(prompt("ingresar numero: "));
    let factorial = 1;
    let largo = "1";
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    alert(`El factorial de ${numero} es : ${largo} = ${factorial}`)
}

/*9️⃣ Bucle for: Suma de números impares hasta n
Pide un número n y suma todos los números impares desde 1 hasta n.
Muestra el resultado con alert.*/

function impar() {
    let numero = parseInt(prompt("ingresar numero: "));
    let respuesta = 0;
    let largoImpar = "1";
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 0) {
            respuesta += i;
            largoImpar += ` + ${i}`
        }

    }
    respuesta += 1;
    alert(`Las suma de ${largoImpar} = ${respuesta} `)
}