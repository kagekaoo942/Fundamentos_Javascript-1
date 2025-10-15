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
    if (num1 > num2) {
        alert("el primer numero es mayor que el segundo")
    } else if (num1 < num2) {
        alert("el segundo numero es mayor")
    } else if (num1 == num2) {
        alert("ambos numeros valen lo mismo")
    } else {
        alert("Error")
    }
}
/*5️⃣ Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.


Si no → “Número impar”.


📘 Práctica: uso del operador módulo %.*/
function parImpar() {
    let par = parseInt(prompt("Ingrese un número: "));
    if (par % 2 == 0) {
        alert("Es par")
    } else {
        alert("Es impar")
    }
}

/*6️⃣ Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.


Si no → “No empieza con A”.


💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... }*/
function palabraInicial() {
    let palabra = prompt("Ingrese una palabra:")
    if (palabra[0].toLowerCase().includes('a')) {
        alert("Empieza con la letra a ")
    } else {
        alert("No empieza con la letra a ")
    }
}

/*7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.


Si es entre 10 y 25 → “Clima templado”.


Si es mayor o igual a 26 → “Hace calor”.


📘 Práctica: comparaciones encadenadas.*/
function tempAmbiente() {
    let temp = parseInt(prompt("Ingresar temperatura: "))
    if (temp <= 10) {
        alert("Hace frio")
    } else if (temp >= 10 && temp <= 25) {
        alert("Clima temblado")
    } else {
        alert("Hace calor")
    }
}
/*8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.


Si el nombre es “Ely” → “Hola, mamá 🌷”.


En cualquier otro caso → “Hola, visitante”.


📘 Práctica: varias condiciones exclusivas.*/
function pedirNombre() {
    let nombre = prompt("Ingresar nombre: ");
    nombre = nombre.toUpperCase();
    if (nombre == "DANY") {
        alert("Hola, profesor")
    } else if (nombre == "ELY") {
        alert("Hola, mamá")
    } else {
        alert("Hola, visitante")
    }
}
/*9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.


Si es menor que 4 → “Reprobado”.


Si está fuera del rango 1–7 → “Nota inválida”.


📘 Práctica: validaciones con límites.*/
function pedirNota() {
    let nota = parseFloat(prompt("Ingresar nota:"))
    if (nota <= 3.9 && nota >= 1.0) {
        alert("Reprobado")
    } else if (nota <= 4.0 && nota <= 7.0) {
        alert("Aprobado")
    } else {
        alert("Nota invalida")
    }
}
/*🔟 Verificar si contiene una palabra clave
Pide una frase.
Si incluye la palabra “Jesús” (mayúscula o minúscula) → “Tu frase tiene la palabra clave 🙌”.


Si no → “No contiene la palabra clave”.


💡 Usa:
if (frase.toLowerCase().includes('jesús')) { ... }*/
function palabraClave() {
    let clave = prompt("Ingresar clave: ")
    if (clave.toLowerCase().includes('jesus')) {
        alert("Tu frase tiene la palabra clave")
    } else {
        alert("Tu frase no contiene la palabra clave")
    }
}