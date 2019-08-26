//declaração de objetos (dict no Python)
let amigo = {
    'nome':'João',
    'idade':30,
    'sexo':'M',
    'peso':82.10,
    engordar(p=0){
        console.log(`Engordou ${p}Kg.`)
        this.peso += p //this está referenciando o proprio atributo peso do objeto
    }
}

console.log(amigo)
console.log('------------------')
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)
console.log('------------------')
amigo.engordar(2)
console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg.`)
