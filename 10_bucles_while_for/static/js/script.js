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

function contadorRegresivo() {
    let resultado = "Contamos: "
    let n = parseInt(prompt("Ingresar numero: "));
    let contador = 1;
    while (contador <= n) {
        resultado += ` ${contador}`;
        console.log(contador)
        contador--;
    }
    alert(resultado)
}