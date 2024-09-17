function volta(){
  window.location.href = "index.html"
}

function calculamedia(){
   
  /*let numero = Number(prompt("digite um numero"));
  let sequencia = 0;
  while(sequencia <= numero){
    if (sequencia % 2==0){
        alert (sequencia);
    }
    sequencia ++;
        */

    
    
        let qtdyotal = Number(prompt("digite a quantidade que deseja cadastrar!"));
        let map = Number(prompt("digite a media  necessaria para aprovação!"));
        let media = 0;
        let totalpeso =0;
        for (let qtdcad= 0;qtdcad < qtdyotal;qtdcad++){
              let atv =  Number(prompt("digite a nota da atividade"));
            let peso =   Number(prompt("digite a peso da atividade"));
            totalpeso += peso; // totalpeso =totalpeso + peso
            media=media  + (atv*peso);// media = media + (atv * peso)
            //qtdcad = qtdcad + 1;



        }
        media /=  totalpeso; //media = media /totalpeso
        let mensagem = media + ",portanto esta reprovado!";
        if(media>= map){
            mensagem = media + ",portanto esta aprovado!";
        }
        else if(media >= map-0.5){
            mensagem = media + ",portanto esta reprovado pelo conselho de classe!";

        }
        alert(mensagem);

    }
  

  
