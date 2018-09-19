const MAYORIA_DE_EDAD = 18;

var jeison = {
    nombre : 'jeison',
    apellido : 'Ruiz',
    edad : 22,
    ingenierio : true,
    cocinero: false,
    cantante: false,
    dj : false,
    guitarrista : false,
    drone : true,
}
var daniel = {
    nombre : 'daniel',
    apellido : 'casas',
    edad : 13,
    cantante:true,
    dj : true,
}


function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);
    
    if (persona.ingenierio)
    {
        console.log('Ingeniero');
    } else {console.log('NO es Ingeniero');}
    if (persona.cocinero)
    {
        console.log('Cocinero');
    }
    if (persona.cantante)
    {
        console.log('Cantante');
    }
    if (persona.guitarrista)
    {
        console.log('Guitarrista');
    }
    if (persona.drone)
    {
        console.log('Dron');
    }
    if (persona.dj)
    {
        console.log('DJ');
    }
       

}

imprimirProfesiones(jeison);

var esMayordeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD;


function mayordeEdadClase(persona){
   
        if(esMayordeEdad){
            console.log(`${persona.nombre} es MAYOR DE EDAD con ${persona.edad} años.`);
      }else{
        console.log(`${persona.nombre} es MENOR DE EDAD con ${persona.edad} años.`);
      
      } 
}
mayordeEdadClase(jeison);
mayordeEdadClase(daniel);


function permitirAcceso(persona){

    if(!esMayordeEdad(persona)){
        console.log('Acceso DENEGADO');
    }

}
