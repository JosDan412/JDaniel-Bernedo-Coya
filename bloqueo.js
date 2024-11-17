// Deshabilita el clic derecho
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("El clic derecho está deshabilitado en esta página.");
});

// Bloquea combinaciones de teclas comunes
document.addEventListener('keydown', function (e) {
  // Bloquear F12 (herramientas de desarrollo)
  if (e.key === "F12") {
    e.preventDefault();
    alert("Acción deshabilitada.");
  }

  // Bloquear Ctrl+U (ver código fuente)
  if (e.ctrlKey && e.key === "u") {
    e.preventDefault();
    alert("Acción deshabilitada.");
  }

  // Bloquear Ctrl+Shift+I (herramientas de inspección)
  if (e.ctrlKey && e.shiftKey && e.key === "I") {
    e.preventDefault();
    alert("Acción deshabilitada.");
  }
// Bloquear Ctrl+C (copiar)
  if (e.ctrlKey && e.key === "c") {
    e.preventDefault();
    alert("Copiar está deshabilitado en esta página.");
  }

  // Bloquear Ctrl+S (guardar página)
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    alert("Guardar página está deshabilitado.");
  }

  // Bloquear Ctrl+P (imprimir)
  if (e.ctrlKey && e.key === "p") {
    e.preventDefault();
    alert("Imprimir está deshabilitado.");
  }
});
