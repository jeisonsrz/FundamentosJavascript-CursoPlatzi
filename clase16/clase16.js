var signo = prompt('Cual es tu signo?');
console.log(signo);

switch(signo){

case 'acuario':
console.log('Si pretende alcanzar con efectividad todas las metas, sepa que es el momento de enfocar todas sus energías. Recuerde que tendrá que hacerlo en cosas viables y positivas.');

break;

case 'cancer':
console.log('Seguramente en este día se despierte con muy pocas ganas de cumplir con las responsabilidades diarias. Entienda que no es momento para decaer.');
break;

case 'tauro':

console.log('Esté muy atento, ya que ciertas fuerzas opuestas en su interior le provocarán algunas contradicciones en sus pensamientos. No se desespere y piense bien.');
break;

default:
console.log('No se ha encontrado el signo zoodiacal');
break
}
