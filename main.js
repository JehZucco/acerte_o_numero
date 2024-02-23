
 function testaLogica(){

    var recebeNumero = document.getElementById("recebe_numero");

    var numeroAleatorio = Math.random() * 10;
    
   
    var numeroAleatorioArredondado =  Math.round(numeroAleatorio);

    if(recebeNumero.value == numeroAleatorioArredondado){
        alert("Acertou!");
    }else{
        alert("Errou... o número era " + numeroAleatorioArredondado + " / Você digitou " + recebeNumero.value);
   }
 }


