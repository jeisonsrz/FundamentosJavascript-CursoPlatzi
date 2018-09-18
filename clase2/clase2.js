var nombre = 'Jeison' , apellido = 'Ruiz'

var nombreEnMayus = nombre.toUpperCase()
var apellidoEnMin = apellido.toLocaleLowerCase();

var primeraLetraDelNombre =  nombre.charAt(0);

var cantidadDeLetrasNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`; //inrepolar variables

var str = nombre.charAt(1) + nombre.charAt(2);

var str2 = nombre.substr(1,2);

var nombreUsuario= prompt('Cual es tu nombre?'); //pregunta cual es tu nombre del usuario

var totalLetrasNombreU= nombreUsuario.length;  //deterina cuantas letras tiene el nombre del u.

var ultimaLetraNombre = nombreUsuario.substr((totalLetrasNombreU-1),1); //ultima letra nombre del u.
