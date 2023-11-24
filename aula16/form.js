
function limpaForm(){
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}
function tam_nome(){
    nome_tam = document.getElementById('nome').value;
    if ( nome_tam.length >= 3){
        return true;
    }
    else{

        return false;
    }
}



document.addEventListener('DOMContentLoaded', function(){
    var formulario = document.querySelector('form');


    formulario.addEventListener('submit' ,function(event){
        event.preventDefault(); // não tenha um comportamento padrão
        //let n = tam_nome();
        if (tam_nome()){
            let linha = document.createElement('tr');
            let colNome = document.createElement('td');
            let colEmail = document.createElement('td');
            let colSenha = document.createElement('td');
    
            colNome.innerHTML = document.getElementById('nome').value;
            colEmail.innerHTML = document.getElementById('email').value;
            colSenha.innerHTML = document.getElementById('senha').value;
    
            linha.appendChild(colNome);
            linha.appendChild(colEmail);
            linha.appendChild(colSenha);
    
            let corpoTabela = document.querySelector('tbody');
            corpoTabela.appendChild(linha);
            limpaForm();
        }
      
        else{
            alert("Deve conter pelo menos três letras!");
        }
    })
})

/* verificar se o nome > 3;
   email não pode ser vazio
   senha deve ter numeros e letras */