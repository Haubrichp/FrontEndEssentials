document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentSlide = 0;

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

    // Avança para o próximo slide a cada 3 segundos
    setInterval(nextSlide, 3000);

    // Event listeners para as setas
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    // Event listeners para controlar o carrossel com as setas do teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            prevSlide();
        } else if (event.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Torna as setas invisíveis
    arrowLeft.style.display = 'none';
    arrowRight.style.display = 'none';

    // Esconde as setas quando o mouse não estiver sobre o carrossel
    carousel.addEventListener('mouseout', function() {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
    });
});
