document.addEventListener("DOMContentLoaded", function(){
/* escute(quando for carregado e execute esta função...) */
var formulario = document.getElementById('formulario');


    formulario.addEventListener("submit", function(event){
        event.preventDefault(); /* até aqui é padrão isso para submit em formulario */
        
        let n1= parseInt(document.getElementById('n1').value);
        let n2= parseInt(document.getElementById('n2').value);
        let n3= parseInt(document.getElementById('n3').value);
        let operacao = document.querySelector('input[type="radio"]:checked');
        let resultado = 0;
        if(operacao.value === "+"){
            resultado = n1+n2+n3;
        } else{
            resultado = n1*n2*n3;
        }
        document.getElementById('resultado').innerHTML = `Resultado: ${n1} ${operacao.value}
            ${n2} ${operacao.value} ${n3} = ${resultado}`;
    })
})  