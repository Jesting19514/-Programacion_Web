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
