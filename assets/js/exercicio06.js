
function maiorDeDoisNumeros(){

    var primeiroValor = document.getElementById("primeiroValor").value;
    var segundoValor = document.getElementById("segundoValor").value;

    if(primeiroValor>segundoValor){
        primeiroValorMaiorQueSegundoValor(primeiroValor, segundoValor);
    }else if(segundoValor>primeiroValor){
        segundoValorMaiorQuePrimeiroValor(primeiroValor, segundoValor);
    }else{
        mensagemErro();
    }
    console.log("Primeiro valor: " + primeiroValor);
    console.log("Segundo valor: " + segundoValor);
}
function primeiroValorMaiorQueSegundoValor(valor1, valor2){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9  pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>' + valor1 + ' é maior que ' + valor2 + '</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;
}
function segundoValorMaiorQuePrimeiroValor(valor1, valor2){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9  pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>' + valor2 + ' é maior que ' + valor1 + '</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;
}
function mensagemErro(){
    let html = '<div class="col-sm-12 col-md-9 col-lg-9  pt-29">' +
    '<div class="alert alert-danger" role="alert">' +
    '<h4> Não é permitido digitar valores iguais, por favor digite um valore diferente para o valor 2.</h4>' +
    '</div>' +
    '</div>';
let mensagemResultado = document.getElementById("mensagemResultado");
mensagemResultado.className = 'row visible';
mensagemResultado.innerHTML = html;
}