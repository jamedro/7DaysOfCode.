let numeroAdivinar = 9
let numeroSugerido = prompt("Hola buenas, favor ingrese un numero del 1 al 10")
let intentos = 0;
numeroSugerido = Number(numeroSugerido);
console.log (numeroSugerido);


while (numeroSugerido != numeroAdivinar) {
    numeroSugerido = prompt (`Me indicas un número diferente por favor, llevas ${intentos} intentos fallidos`)
}

intentos++;
console.log(intentos);

if (numeroSugerido == numeroAdivinar) {
    alert(`Que bien, si era el número ${numeroAdivinar} que indicaste`)
}






