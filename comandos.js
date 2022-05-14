var cesar = document.getElementById('CC');
var base64 = document.getElementById('base64');
var quantDis = document.getElementById('quantDis');
var codifcado = document.getElementById('codificado');
var form = document.forms[0];
var botao = document.getElementById('botao');
const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


cesar.addEventListener('click', function cesarCC(){
    var seletor = document.getElementById('seletor');
    seletor.style.display = 'flex';
})
  

form.addEventListener('submit', function codificar(letra){
    letra.preventDefault()
        

})
