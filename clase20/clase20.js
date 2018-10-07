var jeison = {

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 28,
    peso: 75,
    altura: 23,
    cLibros: 24
}

var camilo = {

    nombre: 'camilo',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 65,
    cLibros: 98
}
var lina = {

    nombre: 'lina',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 1.33,
    cLibros: 4
}
var maria = {

    nombre: 'maria',
    apellido: 'adada',
    edad: 28,
    peso: 75,
    altura: 1.2,
    cLibros: 21
}

var personas = [jeison,camilo,lina,maria];

const esAlta = (personas) => personas.altura > 1.8 
const esBaja = persona => persona.altura < 1.8

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log(personasAltas);
console.log(personasBajas);


const pasarAlturaCms= personas => (


{
    //persona.altura= persona.altura * 100

        ...personas,
        altura: personas.altura *100

})

var personasCms = personas.map(pasarAlturaCms)

console.log(personasCms);

const reducer = (acum,personas) =>  acum + personas.cLibros;

var totalLibros = personas.reduce(reducer,0);

console.log(`En total todos tiene ${totalLibros} libros`);