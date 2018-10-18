const jeison ={

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 22
}

//const cumpleaños = persona => persona.edad++


const cumpleañosInnmutable =persona => ({
    ...persona,
    edad: persona.edad+1
})