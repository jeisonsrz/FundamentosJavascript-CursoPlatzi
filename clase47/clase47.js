const jeison={
    nombre:'Jeison',
    apellido:'ruiz',

}

const jessica={
    nombre:'jessica',
    apellido:'zemanate',

}

function saludar(saludo = 'Hola'){
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/*
const saludarAJeison=saludar.bind(jeison,'Holita')
const saludarAJessica=saludar.bind(jessica)

setTimeout(saludar.bind(jeison,'Hola wey'),1000)*/

//saludar.call(jeison,'Hola che')

saludar.apply(jeison,['Hola ke ace'])