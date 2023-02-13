 /* console.log ("Funciones ROLLING")

// crear una funcion, devolver la suma de dos numeros. Los numeros deben ser recibidos por parametros

let suma = function suma (numeroA, numeroB) {
    return numeroA + numeroB
}

console.log (suma (5,3))


// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar.
//  Mostrar por pantalla el resultado devuelto por la función

let num = parseInt (prompt ("Ingrese un numero"))
console.log ("el numero " + num + NumeroPar(num))


function NumeroPar(numero) {
    if (numero % 2 === 0 ) {
        return " es par"
    } else {
        return " es impar"
    }
}
*/

// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
// A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let cadena = prompt ("Ingrese un texto")

function informacion (cadena) {
    if (cadena === cadena.toUpperCase ()) {  // devuelve el valor en mayusculas
        return "todo en mayusculas" }

    else if (cadena === cadena.toLowerCase ()) { // devuelve el valor en minusculas
        return "todo en minusculas"
    } 
    else {
        return "con mayusculas y minusculas"
    }
    }

    console.log ("el texto ingresado esta escrito en " + informacion (cadena)) // es importante la funcion + variable





