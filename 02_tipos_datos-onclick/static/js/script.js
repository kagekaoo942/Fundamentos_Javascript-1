// Declaración de variables
let numeroEntero = 2008;    // tipo numerico INT 
//En programación,( = )significa "asignar" o "igualar"
let numeroDecimal = 1.5;// numero con parte decimal FLOAT
let cadenaTexto = "Hola, tete"; // string
let valorBooleano = true; // booleano es el valor de verdadero o falso (0,1) BOOLEAN
let arreglo = [1, 2, 3, 4];// arreglo ( puede contener textos o numeros ) ARRAY
let objetoPersona = { nombre: "Ana", edad: 30 }; //objeto como un diccionario  - OBJECT
let valorIndefinido; // sin valor o tipo asignado - UNDIFINED 
let valorNulo = null;// valor nulo - NULL
const mes = "Junio";// constante - NO VARIA 

// Funciones para mostrar cada valor con alert()
function mostrarNumeroEntero() { // function es un bloque de codigo que hace una tarea especifica 
    alert("Número entero: " + numeroEntero); // el alert es como un cuadro emergente 
}

function mostrarNumeroDecimal() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}


// lo que hacen las variables es alamcenar informacion