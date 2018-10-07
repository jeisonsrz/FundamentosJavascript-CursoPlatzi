var jeison = {

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 28,
    peso: 75,
    altura: 23
}

var camilo = {

    nombre: 'camilo',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 65
}
var lina = {

    nombre: 'lina',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 16
}
var maria = {

    nombre: 'maria',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 13
}

var personas = [jeison,camilo,lina,maria];

for(var i=0; i< personas.length;i++){

    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} mts`);

}
