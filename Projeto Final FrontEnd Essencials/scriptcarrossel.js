document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const carousel = document.querySelector('.carousel');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentSlide = 0;
    let intervalId; // Variável para armazenar o ID do intervalo

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Avança para o próximo slide a cada 4 segundos
    function startInterval() {
        intervalId = setInterval(nextSlide, 4000);
    }

    // Para o intervalo de mudança automática de slides
    function stopInterval() {
        clearInterval(intervalId);
    }

    // Mostra as setas quando o mouse entra no carrossel
    function showArrows() {
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
    }

    // Esconde as setas quando o mouse sai do carrossel
    function hideArrows() {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
    }

    // Inicia o intervalo quando o mouse entra no carrossel
    carousel.addEventListener('mouseenter', function() {
        stopInterval();
        showArrows();
    });

    // Para o intervalo quando o mouse sai do carrossel
    carousel.addEventListener('mouseleave', function() {
        startInterval();
        hideArrows();
    });

    // Event listeners para as setas
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    // Inicia o intervalo quando a página é carregada
    startInterval();
});
