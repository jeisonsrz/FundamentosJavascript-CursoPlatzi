var jeison = {

    nombre : 'jeison',
    apellido : 'Ruiz',
    edad : 28
}

var dario = {

    nombre : 'Dario',
    apellido : 'susnisky',
    edad : 32

}
function imprimirNombreenMayusculas(persona) {
    // var nombre = persona.nombre;
    var {nombre}= persona;
   console.log(nombre.toUpperCase());

}

imprimirNombreenMayusculas(jeison);
imprimirNombreenMayusculas(dario);
imprimirNombreenMayusculas({nombre : 'pepito'});


//Solucion RETO nombre y edad

function imprimirNombreyEdad(persona) {
     var {nombre,edad} = persona;
   console.log(`Hola mi nombre es ${nombre}  y tengo ${edad} años.`);
  

}

imprimirNombreyEdad(jeison);
imprimirNombreyEdad(dario);