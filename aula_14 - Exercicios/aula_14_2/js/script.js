function contar(){
    /*
        VAR: Pode corresponder ao escopo global e local
        LET: pode corresponder ao escopo global, local e de bloco. 
    */
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar!'
    }else{
        res.innerHTML = 'Preparando a contagem ...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            res.innerHTML = '</br>Contando:</br>'
            for(let c= i; c<=f; c+=p){
            res.innerHTML += ` ${c} \u{1F449}` // EMOJIS: https://unicode.org/emoji/charts/full-emoji-list.html
            }
        }else{
            //contagem regressiva
            res.innerHTML = '</br>Contando:</br>'
            for(let c = i; c>= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
