//Función suma
function add (num1, num2) {
    return num1+ num2;
}

//Función multiplicación
function multiply (num3, num4) {
    return num3 * num4;
}

//Argumentos de la función add
const funcOne = add (9824, 777);

//Argumentos de la función multiply 
const funcResult = multiply (36325, funcOne);

//imprime resultado en el navegador
document.write('El resultado es: ' + funcResult); //385081325

