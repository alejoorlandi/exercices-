// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras
var arreglo= ["Pato", "Gato", "Perro", "Loro", "Pez"];
for( var i = 0; i < arreglo.length; i ++)
{
      console.log(arreglo [i]);
}


// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var arreglo= ["pato", "gato", "perro", "loro", "pez"];
for( var i = 0; i < arreglo.length; i ++)
{
    cadenaNueva = cadena.substring(0,1).toUpperCase() + cadena.substring(1,4).toLowerCase()
+                cadena.substring(4,5).toUpperCase() + cadena.substring(5,8).toLowerCase()
+                cadena.substring(9,10).toUpperCase() + cadena.substring(10,13).toLowerCase()
+                 cadena.substring(14,15).toUpperCase() + cadena.substring(15,18).toLowerCase()
+                 cadena.substring(19,20).toUpperCase() + cadena.substring(20,21).toLowerCase();
   console.log(arreglo [i]);
}

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
var arreglo = [];
for( var i = 0; i < 10 ; i ++)
{
    console.log(`${i}`);
}
