function imprimirHolaMundoAsyncrono(callback) {
    console.log('Imprimiendo Hola Mundo ...')
    setTimeout(() => {
        callback('Hola, mundo')
    }, 2000)
}

imprimirHolaMundoAsyncrono((mensaje) => {
    console.log(mensaje)
})




