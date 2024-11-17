// Bloquea el arrastre de imágenes
document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault(); // Previene el arrastre de imágenes
  }
});
