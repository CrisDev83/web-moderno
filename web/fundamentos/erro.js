function tratarErroLancar(erro) {
    throw new Error('.....')
}

function imprimiNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimiNomeGritado()

