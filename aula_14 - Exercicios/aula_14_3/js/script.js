function tabuada(){
    let numero = document.getElementById('numero')
    if (numero.value == ""){
        alert('Por favor digite um número!')
    }else{
        let n = Number(numero.value)
        let res = document.getElementById('tabuada')
        res.innerHTML = ''
        for(let i = 1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            res.value = `${i}`
            res.appendChild(item)
        }
    }
    
}