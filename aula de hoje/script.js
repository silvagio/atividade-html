
function calcularimc(){
    let peso = document. getElementById('inpPeso').value
    let altura =  document. getElementById('inpAltura').value
  
    let imc = peso / (altura**2)
    document. getElementById('inpResultado').innerHTML = "seu IMC é: é"  + imc

} 
 function idade(){
    let idadeCachorro= document.getElementById('idadeDoCachorro').value
    let calculo= idadeCachorro *7
    if(calculo<=45){
        document. getElementById('idadeCachorro').innerHTML = "idade do cachorro e mais novo: é"  + calculo

    }   else{
        document. getElementById('idadeCachorro').innerHTML = "idade do cachorro e mais velho: é"  + calculo

    }
 }


