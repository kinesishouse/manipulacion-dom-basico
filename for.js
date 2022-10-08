for (let i = 0; i < 5; i++){
    console.log("el valor de i es:" + i);
}
// ciclo for permite declarar las variables dentro del ciclo

let i = 0;
while (i < 5){
    console.log("el valor de i es:" + i);  //hasta aqui por si solo genera un ciclo loop infinito
    i++; // esto permite cambiar el ciclo infinito loop

} // ciclo while pide declarar antes las variables

for (let i = 10; i >= 2; i--){
    console.log("el valor de i es:" + i);
}

let respuestita = prompt("cuanto es 2 + 2"); //permite enviar un mensaj epor el navegador

let respuesta;

while (respuesta == "4") {
    let pregunta = prompt("cuanto es 2 + 2")
    respuesta = pregunta;
}

// array es una lista  de elementos
// objeto son lista de elementos pero cada elemento con nombres clases

