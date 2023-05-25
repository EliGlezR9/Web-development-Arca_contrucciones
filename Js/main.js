document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 1500,
        dist: -80,
        shift: 2,
        padding: 5,
        numVisible: 3,
        indicators: true,
        noWrap: true,
    });



});

