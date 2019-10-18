
function simuladorSalario() {
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_COMISSAO = 0.1;
    const META_VENDA = 1000;

    var nomeVendedor = document.getElementById("nomeVendedor").value;
    var totalVendas = document.getElementById("totalVendas").value;
    var mensagemResultado = document.getElementById("mensagemResultado");


    if (totalVendas >= META_VENDA) {
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
        exibirMensagemSucesso(nomeVendedor, salarioBruto, totalVendas * PERCENTUAL_COMISSAO);
    } else {
        exibirMensagemErro(nomeVendedor);    
    }

    console.log("Nome do vendedor: " + nomeVendedor);
    console.log("Total de vendas: " + totalVendas);
    console.log("Salário Bruto: " + salarioBruto);
}


function exibirMensagemSucesso(nome, salario, comissao) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9  pt-29">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>' + nome + ' , seu salário bruto será de ' + salario + ' reais. <br>Você recebeu ' + comissao + ' reais de comissão.</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;

}
function exibirMensagemErro(nome) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9  pt-29">' +
        '<div class="alert alert-danger" role="alert">' +
        '<h4>' + nome + ', você não atingiu o total de vendas.</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("mensagemResultado");
    mensagemResultado.className = 'row visible';
    mensagemResultado.innerHTML = html;

}