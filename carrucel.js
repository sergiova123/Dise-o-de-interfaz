window.addEventListener('load', function () {
    const currentUrl = (window.location.href.split('/')[window.location.href.split('/').length-1]).split('.')[0];
    if (currentUrl == "index") {
        var glider = new Glider(document.querySelector('.lista-1'), {
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,
            dots: '.indicadores-1',
            arrows: {
                prev: 'btn-carrusel-ant-1',
                next: '.btn-carrusel-sig-1'
            },
            scrollLock: true
        });

        // Función para iniciar el auto-desplazamiento
        function startAutoGlide() {
            return setInterval(() => {
                glider.scrollItem(glider.slide + 1);
            }, 3000); // Cambia cada 3000 milisegundos (3 segundos)
        }

        let autoGlide = startAutoGlide();

        // Opcional: Detener el auto-desplazamiento al interactuar con el carrusel
        document.querySelector('.lista-1').addEventListener('mouseover', () => {
            clearInterval(autoGlide);
        });

        document.querySelector('.lista-1').addEventListener('mouseout', () => {
            autoGlide = startAutoGlide();
        });
    }
});
