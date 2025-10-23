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

function imprimirMultiplo(){
let numero = parseInt(prompt("Ingresar numero: "));
let count = 1;
    let result = "el resultado es: "
    while(count <= numero){
        count++
        if(count%2 == 0){
            result += ` ${count}`
        }
    }
alert(` ${result}`)
}