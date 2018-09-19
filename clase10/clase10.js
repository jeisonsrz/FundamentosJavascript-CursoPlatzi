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

function mayordeEdad({nombre,edad}){
   
        if(edad>= 18){
            console.log(`${nombre} es MAYOR DE EDAD con ${edad} años.`);
      }else{
        console.log(`${nombre} es MENOR DE EDAD con ${edad} años.`);
      
      } 
}
mayordeEdad(jeison);


