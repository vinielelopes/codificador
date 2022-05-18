var cesar = document.getElementById('CC');
var base64 = document.getElementById('base64');
var quantDis = document.getElementById('quantDis');
var codifcado = document.getElementById('codificado');
var botao = document.getElementById('botao');
var texto = document.getElementById("textoUsuario");

const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


cesar.addEventListener('click', function cesarCC(){
    var seletor = document.getElementById('seletor');
    seletor.style.display = 'flex';
})
  

botao.addEventListener("click", function codificar(letra){
    letra.preventDefault()
    if(cesar.checked == true ){


    }else if (base64.checked == true){
        codificado.innerText = `${btoa(texto.value)}`;
    }
        

})
