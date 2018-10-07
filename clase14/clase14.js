var jeison = {

    nombre: 'Jeison',
    apellido: 'Ruiz',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${jeison.nombre} pesa ${jeison.peso} kg`);

const aumentardePeso=persona => persona.peso += INCREMENTO_PESO; 
const adelgazar= persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const INCREMENTO_PESO = 0.3;

const META = jeison.peso - 3
var dias = 0

while(jeison.peso > META ){

if(comeMucho()){
//Aumentar de peso
aumentardePeso(jeison);
}

if(realizaDeporte()){
adelgazar(jeison);
}

dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${jeison.nombre} llegara a la meta de 3kg`);


