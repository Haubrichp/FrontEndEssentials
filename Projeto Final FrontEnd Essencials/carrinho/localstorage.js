window.onload = function() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var lista = document.getElementById('itensCarrinho');
    var totalCarrinho = document.getElementById('totalCarrinho');
    var resumoCarrinho = document.getElementById('resumoCarrinho');
    var valorTotalElemento = document.getElementById('valorTotal');
    var quantidadeItensElemento = document.getElementById('quantidadeItens');

    var totalCompra = 0; // Variável para calcular o total da compra
    var quantidadeItens = carrinho.length; // Quantidade de itens no carrinho

    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];
        var novoItem = document.createElement('div');

        // Adicione a lógica para exibir os itens do carrinho como desejar
        // ...

        lista.appendChild(novoItem);

        // Calcula o total da compra
        totalCompra += item.valor;
    }

    // Exibe o total da compra na segunda coluna
    valorTotalElemento.textContent = 'Valor Total: R$ ' + totalCompra.toFixed(2);
    quantidadeItensElemento.textContent = 'Quantidade de Itens: ' + quantidadeItens;

    // Adiciona um botão ou link para finalizar a compra
    var botaoFinalizarCompra = document.getElementById('botaoFinalizarCompra');
    botaoFinalizarCompra.onclick = function() {
        finalizarCompra(); // Chama a função para finalizar a compra
    };
};
