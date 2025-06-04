let edad = 18;// Valor numerico Edad
let anioNacimiento = 2008;    // tipo numerico INT //En programación,( = )significa "asignar" o "igualar"
let numeroDecimal = 1.5;// numero con parte decimal FLOAT
let malChiste = "que le dijo un poste a otro poste, portate bien"; // string
let esMujer = true; // booleano es el valor de verdadero o falso (0,1) BOOLEAN
let cuentaregresiva = [1, 2, 3, 4];// arreglo ( puede contener textos o numeros ) ARRAY
let objetoUsuario = { nombre: "tete", edad: 17 }; //objeto como un diccionario  - OBJECT
let genero; // sin valor o tipo asignado - UNDIFINED 
let voto = null;// valor nulo - NULL
const mes = "enero";// constante - NO VARIA 

// Funciones para mostrar cada valor con alert()
function mostraredad(){
    alert("mostrar la edad  : " + edad);
}

function mostrarAnioNaciomiento() { // function es un bloque de codigo que hace una tarea especifica 
    alert("Año de nacimiento: " + anioNacimiento); // el alert es como un cuadro emergente 
}

function mostrarvalorEurler() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarMalChiste() {
    alert("Mal chiste: " + malChiste);
}

function mostraresMujer() {
    alert("Moatrar es Mujer?: " + esMujer);
}

function mostrarcuentaregresiva() {
    alert("Cuenta regresiva: " + cuentaregresiva);
}

function mostrarobjetoUsuario() {
    alert("Objeto usuario: " + JSON.stringify(objetoUsuario));
}

function mostrargenero() {
    alert("genero: " + genero);
}

function mostrarvoto() {
    alert("Voto: " + voto);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}