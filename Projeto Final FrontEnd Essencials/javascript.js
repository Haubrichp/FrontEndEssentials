
// Javascript de busca

const searchForm = document.querySelector('.search form');
const searchInput = searchForm.querySelector('#searchInput');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    // Perform search operation here
    const searchResults = searchContent(searchTerm);
    if (searchResults.length > 0) {
      // Redirect to the first search result
      window.location.href = searchResults[0].url;
    } else {
      alert('Não foi encontrado resultados');
    }
  }
});

function searchContent(searchTerm) {
  // Implement your search logic here
  // This is just a placeholder example
  const content = [
    { title: 'Smartphones celular telefone ', url: '../smathphones/smartphones.html' },
    { title: 'Informática pc notebook laptop desktop ', url: '../informatica/laptops.html' },
    { title: 'Acessórios headset mouse fone teclado', url: '../acessorios/acessorios.html' },
    { title: 'Tablets tablet monitor', url: '../tablets/tablet.html' },
    { title: 'Sobre empresa', url: '../sobre/sobre.html' },
    { title: 'Contato fale conosco', url: '../contato/contato.html' },
    { title: 'Inicio home pagina inicial', url: '../landingPage.html' },
    { title: 'Carrinho', url: '../carrinho/carrinho.html' },
    
  ];

  return content.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
}