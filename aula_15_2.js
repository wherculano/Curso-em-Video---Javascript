let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

console.log('--------------------------') 

//iterando sobre o Array
for (let pos = 0; pos<valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('--------------------------')

//iterando sobre o Array de forma simplificada
for(let pos in valores){
    console.log(`[${pos}] -> ${valores[pos]}`)
}

console.log('--------------------------')

//pesquisando valor dentro do Array
console.log(`${valores.indexOf(2)}`) // retorna o indice (caso encontrado) do valor pesquisado
console.log(`${valores.indexOf(10)}`) // retorna -1 pois o array nao tem este valor dentro dele