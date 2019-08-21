function verificar(){
    var data = new Date()
    var ano = data.getFullYear() //4 digitos do ano atual (2019 por exemplo)
    var formAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    //se o ano digitado estiver vazio ou o ano digitado for maior que o ano atual
    if (formAno.value.length == 0 || Number(formAno.value) > ano){
        alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        //criando elemento (tag) dinamicamente
        var img = window.document.createElement('img') //<img>
        // criando id chamado foto para a tag img
        img.setAttribute('id', 'foto')//<img id='foto'>
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './imagens/menino.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', './imagens/garoto.png')
            }else if(idade >= 21 && idade < 60){
                img.setAttribute('src', './imagens/homem.png')
            }else{
                img.setAttribute('src', './imagens/idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './imagens/menina.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', './imagens/garota.png')
            }else if(idade >= 21 && idade < 60){
                img.setAttribute('src', './imagens/mulher.png')
            }else{
                img.setAttribute('src', './imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //adiciona mais um elemento (filho) a div
    }
}
