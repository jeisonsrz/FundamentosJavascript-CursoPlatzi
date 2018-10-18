var jeison={

    nombre: 'Jeison',
    apellidod: 'Ruiz',
    edad: 22

}


function esMayordeEdad(persona){
    var mensaje
    //let mensaje
    const MAYORIA_DE_EDAD =18
   if(persona.edad > MAYORIA_DE_EDAD){
     mensaje = 'Es mayor de edad'
   }else{
    mensaje = 'Es menor de edad'
   }
   console.log(mensaje)

}

esMayordeEdad(jeison)

for( let i=0; i<10;i++){
    console.log(i)
}
console.log(`Termino el for y el valor de i es: ${i}`)