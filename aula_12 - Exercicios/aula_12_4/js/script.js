function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var rodape = window.document.getElementById('rodape')
    var cabecalho = document.getElementById('cabecalho')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 9 //variavel para testes
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FDEFB7'
        rodape.style.color = 'rgba(90, 90, 90, 0.904)'
        cabecalho.style.color = 'rgba(90, 90, 90, 0.904)'
    }else if(hora >= 12 && hora <= 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#D75F69'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background='#556471'
    }
}
