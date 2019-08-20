//pegar a hora e minutos do sistema
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()

console.log(`Agora são extamente ${hora}h${minutos}min`)

if (hora > 5 && hora <= 11){
    console.log('Bom dia!')
}else if (hora > 11 && hora <= 18){
    console.log('Boa tarde!')
}else if(hora >=19 && hora <= 23){
    console.log('Boa noite!')
}else{
    console.log('Boa madrugada!')
}