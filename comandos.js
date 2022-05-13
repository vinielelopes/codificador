var cesar = document.getElementById('CC');
var base64 = document.getElementById('base64');
var quantDis = document.getElementById('quantDis');
var codifcado = document.getElementById('codificado');


cesar.addEventListener('click', function cesarCC(){
    var seletor = document.getElementById('seletor');
    seletor.style.display = 'flex';
})

var textoNormal = document.getElementById('texto').value;
var botao = document.getElementById('botao');

botao.addEventListener("click", function codificar(event){
    event.preventDefault()
    if(cesar.checked && quantDis === 1){
        codificado += textoNormal;

    }

})
