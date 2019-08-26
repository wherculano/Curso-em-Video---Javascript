let numeros = []
let num = document.querySelector('input#txtn')
let res = document.getElementById('tbln')
let resp = document.getElementById('res')

function adicionar(){
    let n = Number(num.value)
    let item = document.createElement('option')
    if(n == '' || n <= 0 || n > 100){
        alert('Valor iniválido. Valores apenas entre 1 e 100 são permitidos!')
    }
    else if (numeros.indexOf(n) == -1){
        numeros.push(n)
        item.text = `Valor ${n} foi adicionado.`
        res.appendChild(item)
    }else{        
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = '' //limpa a caixa de texto
    num.focus() //fica com o foco
    resp.innerHTML = ''  
}

function finalizar(){
    if (numeros.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = numeros.length
        resp.innerHTML = `<p>Ao todo temos ${tot} número(s) cadastrado(s).</p>`
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0
        for(n in numeros){
            if(numeros[n] > maior){
                maior = numeros[n]
            }
            if(numeros[n] < menor){
                menor = numeros[n]
            }
            soma += numeros[n]
        }
        media = soma/tot
        resp.innerHTML += `<p>O maior valor informado foi: ${maior}</p>`
        resp.innerHTML += `<p>O menor valor informado foi: ${menor}</p>`
        resp.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
        resp.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`
    }
     
    /*
        se nao tiver valores: Adicione valores antes de finalizar
    */
}