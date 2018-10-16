
const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'


const opts = {crossDomain:true}


function obtenerPersonaje(id,callback){
    console.log(id)
   
   const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`

   $
   .get(url,opts,callback)
   .fail(function(){
       console.log(`Error, no se pudo obtener el personaje ${id}`)
   })

}

obtenerPersonaje(1,function(data){

    
    console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)


    obtenerPersonaje(2,function(data){
        console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)

        obtenerPersonaje(3,function(data){
       
            console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)

            obtenerPersonaje(4,function(data){
               
                console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)

            });
        })
    })
})

