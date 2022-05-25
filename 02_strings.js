// 02.1
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var cadenaNueva;
var cadena = 'Totalmente';
cadenaNueva = cadena.substring(0,5);
console.log("palabra =",cadenaNueva);


// 02.2
// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var cadenaNueva;
var cadena = 'palabraLarga';
cadenaNueva = cadena.substring(0,1).toUpperCase() + cadena.substring(1,12).toLowerCase();
console.log(cadenaNueva);


//02.3

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var cadena = "palabra larga";
var cadenaNueva;
cadenaNueva=cadena.indexOf();
console.log(cadenaNueva)

