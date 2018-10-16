
const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'


const opts = {crossDomain:true}


function obtenerPersonaje(id,callback){
    console.log(id)
   
   const url= `${API_URL}${PEOPLE_URL.replace(':id',id)}`

   $.get(url,opts,function(data){

    console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)
    if(callback){
        callback();
    }
})

}

obtenerPersonaje(1,function(){
    obtenerPersonaje(2,function(){
        obtenerPersonaje(3,function(){
            obtenerPersonaje(4);
        })
    })
})

