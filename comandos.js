var cesar = document.getElementById('CC');
var base64 = document.getElementById('base64');
var quantDis = document.getElementById('quantDis').value % 26;
var codifcado = document.getElementById('codificado');
var botaoC = document.getElementById('botaoC');
var texto = document.getElementById("textoUsuario");

const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var novaString = " "

 // colocar display de contagem distanciamento quando cesar é clicado
cesar.addEventListener('click', function cesarCC(){
    var seletor = document.getElementById('seletor');
    seletor.style.display = 'flex';

})

 // tirar display de contagem quando base64 for selecionada
base64.addEventListener('click', function base64(){
        var seletor = document.getElementById('seletor');
        seletor.style.display = 'none';
} )

 // ao clicar botao de codificar, codificar de acordo com qual criptografia escolhida
botaoC.addEventListener("click", function codificar(letra){
    letra.preventDefault()
    if(cesar.checked == true){
        for (let i = 0; i <texto.length; i++){
            var texLetra = texto[i];
        }
        var primeira = alfabeto.indexOf(texLetra);
        var novaPrim = primeira + quantDis;
        if (novaPrim > 25){
            novaPrim = novaPrim - 26
        } else if(novaPrim < 0) {
            novaPrim =novaPrim + 26

        } else{
            novaString += alfabeto[novaPrim];
            codifcado.innerText += novaString
        }

    

    }else if (base64.checked == true){
        codificado.innerText = `${btoa(texto.value)}`;
    }
})

 // ao clicar botao de decodificar, decodificar de acordo com a criptografia escolhida
botaoD.addEventListener("click", function decodificar(letra){
    letra.preventDefault()
    if(cesar.checked == true){


    }else if (base64.checked == true){
        codificado.innerText = `${atob(texto.value)}`;
    }   
})
