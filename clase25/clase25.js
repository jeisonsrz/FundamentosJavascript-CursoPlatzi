class Persona{

    constructor(nombre,apellido,altura){

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        
    }

    saludar (){
        console.log(`Hola, yo me llamo ${this.nombre} ${this.apellido}.`)

    }

    soyAlto () {
        if(this.altura>1.89)
        console.log(`Soy ${this.nombre} y soy Alto, yo mido ${this.altura} mts`)
        else{
            console.log(`No soy alto, yo mido ${this.altura} mts`)
    
        }
    }

}

class Desarrollador extends Persona{

    constructor(nombre,apellido,altura){

        super(nombre,apellido,altura)
            
    }
    
    saludar(){

        console.log(`Hola ke ace, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)

    }

}


/*var jeison = new Persona('Jeison', 'Ruiz',1.92);
var camilo = new Persona('camilo', 'casas',1.43);
var julian = new Persona('julian', 'perez',1.65);
*/

