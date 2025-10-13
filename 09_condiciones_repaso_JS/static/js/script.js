console.log("conexion correcta");

/* 1️⃣ Edad y etapa de vida
Pide la edad de una persona.
 Si es menor a 13 → “Eres un niño”.


Si tiene entre 13 y 17 → “Eres adolescente”.


Si tiene 18 o más → “Eres adulto”.


 📘 Práctica: uso de rangos con if, else if, else.*/
function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres un adolecente")
    } else {
        alert("Eres un adulto")
    }
}

/*2️⃣ Validar contraseña exacta
Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.


Si no, muestra “Acceso denegado”.


📘 Práctica: comparación exacta (===).*/
function validarContraseña() {
    let contraseña = prompt("Ingresar contraseña: ");
    if (contraseña === 12345) {
        alert("acceso permitido")
    } else {
        alert("acceso denegado")
    }
}
/*3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.


Si no → “No contiene la letra E”.*/
function encontrarLetra() {
    let palabra = prompt("ingresar una palabra: ")
    if (palabra.toLocaleLowerCase().includes('e')) {
        alert("la palabra contiene la letra E")
    } else {
        alert("no contiene la letra e")
    }
}
/*4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.


Si el segundo es mayor → “El segundo número es mayor”.


Si son iguales → “Son iguales”.


📘 Práctica: comparaciones dobles.*/
function ingresarNumeros() {
    let num1 = parseInt(prompt("ingresar primer numero: "))
    let num2 = parseInt(prompt("ingresar segundo numero: "))
        if (num1 > num2){
alert("el primer numero es mayor que el segundo")
        }else if(num1 < num2){
            alert("el segundo numero es mayor")
        }else{
            alert("ambos valen iguales")
        }
    }
