function getInteiroAleatorioEntre(min, max) {
    const  valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao 

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcap escolhida foi ${opcao}.`)
}

console.log("Ate a proxima")
