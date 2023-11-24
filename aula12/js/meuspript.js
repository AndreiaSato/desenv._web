
function displayRadioValue(){
    var elementos = document.getElementsByName('gender');
    for( i=0; i < elementos.length; i++){
        if (elementos[i].checked){
            document.getElementById('result').innerHTML =
            "o gênero selecionado é " + elementos [i].value;
        }
    }
}