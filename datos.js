

    // Obtener los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const nombreGuardado = urlParams.get('nombre');
    const emailGuardado = urlParams.get('email');
    const mensajeGuardado = urlParams.get('mensaje');

    const nombreElement = document.querySelector('#nombreGuardado');
    const emailElement = document.querySelector('#emailGuardado');
    const mensajeElement = document.querySelector('#mensajeGuardado');

    nombreElement.textContent = nombreGuardado;
    emailElement.textContent = emailGuardado;
    mensajeElement.textContent = mensajeGuardado;
