
 //gerar número aleatório
 var numeroAleatorio = Math.random() * 100;

 var numeroAleatorioArredondado =  Math.round(numeroAleatorio);
 
 //Determina o número de tentativas
 var tentativasRestantes = 10;
 
 function jogoAdivinhaNumero(event){

    tentativasRestantes--;

    if(tentativasRestantes === 0){
        alert('Fim de jogo! O número era: ' + numeroAleatorioArredondado + '. Um novo número foi gerado, você pode tentar novamente');
        document.getElementById("recebe_numero").value = "";
        location.reload();
        }

    //Insere o número de tentativas atual:
    var insereNumerodeTentativas = document.getElementById('tentativas');
    insereNumerodeTentativas.textContent = 'Número de tentativas: ' + tentativasRestantes;

    //Impede que a página atualize ao submeter o formulário
    event.preventDefault();

    //Pega o número digitado pelo usuário
    var recebeNumero = document.getElementById("recebe_numero").value;
   

    //Pega o parágrafo pra manipular e colocar a dica
    var insereDica = document.getElementById('dica');

        

        if(recebeNumero > numeroAleatorioArredondado){
            insereDica.textContent = 'É um número menor que ' + recebeNumero;
        }else if(recebeNumero < numeroAleatorioArredondado){
           insereDica.textContent = 'É um número maior que ' + recebeNumero;
       }else if (recebeNumero == numeroAleatorioArredondado){
            alert('Acertou! Um novo número foi gerado, você pode tentar novamente');
            document.getElementById("recebe_numero").value = "";
            location.reload();
        }     
    
}



 document.getElementById('adivinhaNumero').addEventListener('submit', jogoAdivinhaNumero)


