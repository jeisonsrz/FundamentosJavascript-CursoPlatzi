function Persona(nombre,apellido,altura) {
    
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
    
}

Persona.prototype.saludar = function (){
    console.log(`Hola, yo me llamo ${this.nombre} ${this.apellido}.`)
}

Persona.prototype.soyAlto = function(){

    if(this.altura>1.89)
    console.log(`Soy ${this.nombre} y soy Alto, yo mido ${this.altura} mts`)
    else{
        console.log(`No soy alto, yo mido ${this.altura} mts`)

    }
}

var jeison = new Persona('Jeison', 'Ruiz',1.92);
var camilo = new Persona('camilo', 'casas',1.43);
var julian = new Persona('julian', 'perez',1.65);


