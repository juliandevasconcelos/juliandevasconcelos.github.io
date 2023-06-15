document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
        
    if (this.checkValidity()) {
    alert('Formulario completado exitosamente');
        
    window.location.href = 'index.html';
    } else {
    alert('Por favor complete todos los campos requeridos');
    }
    });