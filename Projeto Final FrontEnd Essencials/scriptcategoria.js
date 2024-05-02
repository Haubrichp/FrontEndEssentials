// Função para estilizar o texto quando o mouse passa por cima
function stylizeText() {
    const titles = document.querySelectorAll('.category-slider__card-title');
    titles.forEach(title => {
        title.style.fontWeight = 'bold';
        title.style.textTransform = 'uppercase';
        title.style.transition = 'font-size 0.3s ease'; // Adiciona uma transição suave
    });
}

// Função para aumentar o ícone quando o mouse passa por cima
function enlargeIcon() {
    const icons = document.querySelectorAll('.category-slider__card-img-wrap img');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.3)'; // Aumenta o tamanho do ícone em 10%
            icon.style.transition = 'transform 0.3s ease'; // Adiciona uma transição suave
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)'; // Retorna ao tamanho original quando o mouse sai
        });
    });
}

// Executa as funções quando o documento HTML estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    stylizeText();
    enlargeIcon();
});
