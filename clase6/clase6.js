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
function imprimirNombreenMayusculas({nombre}) {

   console.log(nombre.toUpperCase());

}

imprimirNombreenMayusculas(jeison);
imprimirNombreenMayusculas(dario);
imprimirNombreenMayusculas({nombre : 'pepito'});
