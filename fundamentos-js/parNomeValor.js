// par nome/valor
const saudacao ='opa' // contexto léxico 1 

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao 
}

// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua bacana',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)