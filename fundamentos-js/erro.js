function tratarErroELancar(erro) {
    //throw new Error('nao funfou')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUppercCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)