//Crear tres funciones

function nombre(dato) {
    console.log(dato);
}
function saludar(p1) {
    console.log(p1);
}
function finalizar(){
    console.log("La clase finalizó...")
}
function despedir() {
    console.log("Adios, nos vemos el lunes");
}
let dato = prompt("Escriba su nombre:");
nombre(dato);
saludar("Hola, cómo estas?")
finalizar();
despedir();
