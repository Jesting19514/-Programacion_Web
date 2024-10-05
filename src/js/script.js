
window.onscroll = function() {
    const contactSection = document.querySelector('#contact');
    const footer = document.querySelector('footer');
    const maxScroll = contactSection.offsetTop + contactSection.offsetHeight - window.innerHeight;

    if (window.scrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
    }
};


window.onload = function() {
    const video = document.getElementById('background-video');
    video.volume = 0.01;  

    video.addEventListener('canplaythrough', function() {
        video.play();
    }, false);

    // Añadir evento click a las imágenes para reproducir el sonido
    const images = document.querySelectorAll('.sound-image');
    const sound = new Audio('../../assets/sfx/delfin.mp3'); // Archivo de sonido

    images.forEach(image => {
        image.addEventListener('click', () => {
            sound.play();  // Reproducir sonido al hacer clic en la imagen
        });
    });
};


