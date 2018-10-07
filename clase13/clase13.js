var jeison = {

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${jeison.nombre} pesa ${jeison.peso} kg`);


const INCREMENTO_PESO = 0.2;

const aumentardePeso=persona => persona.peso += INCREMENTO_PESO; 
const adelgazar= persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i<=365 ; i++){

    var ramdom = Math.random();

    if (ramdom < 0.25){
        //aumenta de peso
        aumentardePeso(jeison);
    }
    else if(ramdom <0.5){
        //adelgazar
        adelgazar(jeison);
    
    } 

}

console.log(`Al final del año ${jeison.nombre} pesa ${jeison.peso.toFixed(1)} kg`);
