var cesar = document.getElementById('CC');
var base64 = document.getElementById('base64');
var quantDis = document.getElementById('quantDis');
var codifcado = document.getElementById('codificado');
var botaoC = document.getElementById('botaoC');
var texto = document.getElementById("textoUsuario");

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
        return codC()
    }else if (base64.checked == true){
        codificado.innerText = `${btoa(texto.value)}`;
    }
})

 // ao clicar botao de decodificar, decodificar de acordo com a criptografia escolhida
botaoD.addEventListener("click", function decodificar(letra){
    letra.preventDefault()
    if(cesar.checked == true){
        return decodC()
    }else if (base64.checked == true){
        codificado.innerText = `${atob(texto.value)}`;
    }   
})


 // funcao para codificar com a cifra de cesar
function codC (textoUsuario, distanciamento) {
    textoUsuario = texto.value;
    distanciamento = Number (quantDis.value);

    if (distanciamento < 0) {
      return codificar(textoUsuario, distanciamento + 26);
    }
  
    let resposta = " ";
    for (let i = 0; i < textoUsuario.length; i++) {
        let texLetra = textoUsuario[i];
  
        if (texLetra.match(/[a-z]/i)) {
            let code = Number(textoUsuario.charCodeAt(i));
    
        if (code >= 65 && code <= 90) {
            texLetra = String.fromCharCode(((code - 65 + distanciamento) % 26) + 65);
        }
    
        else if (code >= 97 && code <= 122) {
            texLetra = String.fromCharCode(((code - 97 + distanciamento) % 26) + 97);
        }
    }    
    resposta += texLetra;
}
    codificado.innerText += resposta;
};

 // funcao para decodificar a cifra de cesar
function decodC (textoUsuario, distanciamento) {
    textoUsuario = texto.value  
    distanciamento = quantDis.value;

    if (distanciamento < 0) {
      return decodificar(textoUsuario, distanciamento + 26);
    }
  
    let resposta = " ";
    for (let i = 0; i < textoUsuario.length; i++) {
        let texLetra = textoUsuario[i];
  
        if (texLetra.match(/[a-z]/i)) {
            let code = textoUsuario.charCodeAt(i);
    
        if (code >= 65 && code <= 90) {
            console.log(code)
            texLetra = (code - 65 - distanciamento < 0)? String.fromCharCode(((code - 65 - distanciamento + 26)%26)+65):String.fromCharCode(((code - 65 - distanciamento)%26)+65)
        
        }
    
        else if (code >= 97 && code <= 122) {
            console.log(code)
            texLetra = String.fromCharCode(((code - 97 - distanciamento + 26) % 26) + 97)
        }
    }    
    resposta += texLetra;
}
    codificado.innerText += resposta;
};


