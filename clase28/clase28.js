
const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`

const opts = {crossDomain:true}

const onResponse = function(data){

    console.log(`Hola, yo soy ${data.name} y tengo ojos ${data.eye_color}`)

} 


$.get(lukeUrl,opts,onResponse)
