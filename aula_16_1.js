function par_impar(numero){
   if(numero%2 ==0){
       return 'Par!'
   }else{
       return 'Impar!'
   }
}

console.log(`O numero digitado é ${par_impar(2)}`)