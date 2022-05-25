// Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”. [utilizar alert() ]

var numero =  Math.random();
if (numero <= 0.5)
{
console.log("Lower than 0,5");
}
else{
console.log("Greater than 0,5");
}
console.log(numero);

// Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// “Menor” si la edad es menor a 18
// “Mayor” si la edad es mayor o igual a 18 Y menor que 65
// “Jubilado” si la edad es mayor o igual que 65.


var Age = Math.floor(Math.random()* 101);
if(Age <18);
{
    console.log("Menor");
}
if(Age >= 18  && Age < 65)
{
    console.log("Adulto");
}
else
(Age>=65)
{ 
    console.log("Jubilado");

}
   