class Persona{

    constructor(nombre,apellido,altura){

        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
        
    }

    saludar (fn){
            /*  var nombre=this.nombre;
        var apellido=this.apellido; */

        var {nombre,apellido} = this;

        console.log(`Hola, yo me llamo ${this.nombre} ${this.apellido}.`)

        if(fn){

            fn(nombre,apellido,false)
        }
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
    
    saludar(fn){

      /*  var nombre=this.nombre;
        var apellido=this.apellido; */

        var {nombre,apellido} = this;

        console.log(`Hola ke ace, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)

        if(fn){
            fn(nombre,apellido,true)
        }
   
    }

}


function responderSaludo(nombre,apellido,esDev){
    console.log(`Buen día ${nombre} ${apellido} `)

    if(esDev){
        console.log(`Baia baia, no sabia que eras desarrollador/a`)
    }

}

var jeison = new Persona('Jeison', 'Ruiz',1.92);
var camilo = new Persona('camilo', 'casas',1.43);
var julian = new Desarrollador('julian', 'perez',1.65);

jeison.saludar()
camilo.saludar(responderSaludo)
julian.saludar(responderSaludo)

