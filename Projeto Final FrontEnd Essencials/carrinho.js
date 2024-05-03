var carrinhoItens = [];

function adicionarAoCarrinho(produtoId) {
    alert("Produto adicionado ao carrinho");

    console.log('adicionarAoCarrinho foi chamada com', produtoId, valorId);

    // Verifique se o item existe antes de tentar analisá-lo
    var carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
        carrinho = JSON.parse(carrinho);
    } else {
        carrinho = [];
    }

    carrinho.push(produtoId);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.location.href = '../carrinho/carrinho.html';
    
    function atualizarCarrinho() {
        var itensCarrinho = document.getElementById('itens-carrinho');
        itensCarrinho.innerHTML = ''; // Limpa o conteúdo anterior
    
        if (carrinhoItens.length === 0) {
            itensCarrinho.innerHTML = '<li>O carrinho está vazio.</li>';
        } else {
            carrinhoItens.forEach(function(item) {
                var listItem = document.createElement('li');
                listItem.textContent = item;
                itensCarrinho.appendChild(listItem);
            });
        }
    }
}
