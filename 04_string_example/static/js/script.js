

function usarString() {
    // Uso de strings Ejemplos
let nombre = prompt("Ingrese su nombre: "); // Variable tipo texto
    // Uso de lenght --> Largo de una variale 

    let primeraLetra = nombre[0]; //Asignamos valor a primer Letra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letras es:" + primeraLetra +
        "\nUlitma letra es:" + ultimaLetra
    ); //Mostrar resultado);
}


function manipulandoApellido() {
    // Tarea: Imprimir segunda letra 
let apellido = prompt("Ingrese su apellido");
    let segundaLetra = apellido[1];
    let penultimaLetra = apellido[apellido.length - 2];
    alert("segunda letras es:" + segundaLetra + "\npenultima letra es:" + penultimaLetra

    );



}
