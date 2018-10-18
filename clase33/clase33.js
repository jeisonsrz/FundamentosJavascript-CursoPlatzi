
const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'


const opts = {crossDomain:true}


function obtenerPersonaje(id){
  
    return new Promise((resolve,reject) => {

        const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`

        $
        .get(url,opts,function(data){
            console.log('examen')
            console.log(data.name)
            resolve(data)
        })
        
        .fail(() => reject(id))
   
         })
         
    }
    console.log('jeison')
  


function onError(id){

    console.log(`Error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
.then(personaje =>{


    console.log(`Hola, yo soy ${personaje.name} y tengo ojos ${personaje.eye_color}`)

    return obtenerPersonaje(2)

})
.then(personaje =>{


    console.log(`Hola, yo soy ${personaje.name} y tengo ojos ${personaje.eye_color}`)

    return obtenerPersonaje(3)

})

.then(personaje =>{


    console.log(`Hola, yo soy ${personaje.name} y tengo ojos ${personaje.eye_color}`)

    return obtenerPersonaje(4)

})

.catch(onError)


