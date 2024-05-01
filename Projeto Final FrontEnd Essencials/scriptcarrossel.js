document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentSlide = 0;
    let isPaused = false;
    let pauseTimeout;

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

    function pauseSlideShow() {
        if (!isPaused) {
            isPaused = true;
            clearTimeout(pauseTimeout);
        } else {
            isPaused = false;
            autoAdvance();
        }
    }

    function autoAdvance() {
        if (!isPaused) {
            pauseTimeout = setTimeout(function () {
                nextSlide();
                autoAdvance();
            }, 3000);
        }
    }

    // Event listeners para controlar o carrossel com as setas do teclado quando o mouse está sobre o carrossel
    carouselContainer.addEventListener('mouseenter', function () {
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                prevSlide();
            } else if (event.key === 'ArrowRight') {
                nextSlide();
            }
        });
    });

    // Avança para o próximo slide a cada 3 segundos
    autoAdvance();

    // Event listeners para as setas
    arrowLeft.addEventListener('click', prevSlide);
    arrowRight.addEventListener('click', nextSlide);

    // Torna as setas visíveis quando o mouse está sobre o carrossel
    carouselContainer.addEventListener('mouseenter', function() {
        arrowLeft.style.display = 'block';
        arrowRight.style.display = 'block';
    });

    // Esconde as setas quando o mouse sai do carrossel
    carouselContainer.addEventListener('mouseleave', function() {
        arrowLeft.style.display = 'none';
        arrowRight.style.display = 'none';
    });
});
