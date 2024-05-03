window.onload = function(){
    exibirCarrinho();
};

function exibirCarrinho() {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    var lista = document.getElementById('itensCarrinho');
    lista.innerHTML = '';

    if (carrinho.length === 0) {
        lista.innerHTML = '<li>O carrinho está vazio.</li>';
    } else {
        var totalCompra = 0;
        for (var i = 0; i < carrinho.length; i++) {
            var item = carrinho[i];
            var listItem = document.createElement('li');
            // Aqui vamos garantir que o preço do item seja exibido corretamente
            listItem.textContent = 'Produto: ' + item.produtoId + ', Preço: R$' + item.preco.toFixed(2);
            
            // Aqui vamos adicionar um botão de exclusão para cada item
            var botaoExcluir = document.createElement('button');
            botaoExcluir.textContent = 'Excluir';
            (function(index) {
                botaoExcluir.onclick = function() {
                    excluirItem(index);
                };
            })(i);
            listItem.appendChild(botaoExcluir);

            lista.appendChild(listItem);
            totalCompra += item.preco;
        }

        var quantidadeItens = carrinho.length;

        // Atualizamos os elementos HTML com os valores calculados
        document.getElementById('valorTotal').querySelector('span').textContent = totalCompra.toFixed(2);
        document.getElementById('quantidadeItens').querySelector('span').textContent = quantidadeItens;
    }
}

function excluirItem(index) {
    var carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho(); // Atualiza a exibição do carrinho após a exclusão
}

function adicionarAoCarrinho(produtoId, preco) {
    alert("Produto adicionado ao carrinho");

    console.log('adicionarAoCarrinho foi chamada com', produtoId);

    // Verifique se o carrinho existe antes de tentar analisá-lo
    var carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
        carrinho = JSON.parse(carrinho);
    } else {
        carrinho = [];
    }

    // Adiciona o item ao carrinho
    carrinho.push({ produtoId: produtoId, preco: preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.location.href = '../carrinho/carrinho.html';
}
