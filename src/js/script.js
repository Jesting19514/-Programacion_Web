window.onload = function() {
    const soundImages = document.querySelectorAll('.sound-image');
    const sound = new Audio('../../assets/sfx/delfin.mp3'); // Archivo de sonido

    soundImages.forEach(image => {
        image.addEventListener('click', () => {
            sound.currentTime = 0; // Reinicia el sonido al inicio
            sound.play();  // Reproducir sonido al hacer clic en la imagen
        });
    });
};

function showImage(imageId) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const imageElement = document.getElementById(imageId);
    
    modalImage.src = imageElement.src; // Asigna la imagen al modal
    modal.style.display = 'flex'; // Muestra el modal
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Oculta el modal al hacer clic
}
