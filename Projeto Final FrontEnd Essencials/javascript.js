
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
    { title: 'Smartphones', url: '../smathphones/smartphones.html' },
    { title: 'Informática', url: 'computing.html' },
    { title: 'Acessórios', url: 'accessories.html' },
    { title: 'Tablets', url: 'desktops.html' },
    { title: 'Sobre', url: 'sobre.html' },
    { title: 'Contato', url: 'contato.html' },
    { title: 'Inicio', url: 'landingPage.html' },
    { title: 'Home', url: 'landingPage.html' },
    { title: 'Carrinho', url: 'carrinho.html' },
    
  ];

  return content.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
}