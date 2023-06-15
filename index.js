
const formulario = document.querySelector('#ticketform');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  guardarDatos();
});

function guardarDatos() {
  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const mensaje = document.querySelector('#mensaje').value;

  localStorage.setItem('nombre', nombre);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('mensaje', mensaje);

  redireccionar();
}

function redireccionar() {
  const nombreGuardado = localStorage.getItem('nombre');
  const emailGuardado = sessionStorage.getItem('email');
  const mensajeGuardado = sessionStorage.getItem('mensaje');

  const url = `datos.html?nombre=${encodeURIComponent(nombreGuardado)}&email=${encodeURIComponent(emailGuardado)}&mensaje=${encodeURIComponent(mensajeGuardado)}`;
  window.location.href = url;
}


///////////////////////////////////////////

// Inicio de sesión
const form = document.querySelector('#formularioInicioSesion');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailInput = document.querySelector('#emailInput');
  const passwordInput = document.querySelector('#passwordInput');

  const email = emailInput.value;
  const password = passwordInput.value;
  const userType = document.querySelector('input[name="userType"]:checked').value;

  if (userType === 'cliente') {
    if (email === 'cliente@rk.com' && password === 'cliente123') {
      alert('Inicio de sesión exitoso como Cliente.');
      window.location.href = 'cliente.html'; 
    } else {
      alert('Credenciales incorrectas para Cliente.');
    }
  } else if (userType === 'empleado') {
    if (email === 'empleado@rk.com' && password === 'empleado123') {
      alert('Inicio de sesión exitoso como Empleado.');
      window.location.href = 'empleado.html'; 
    } else {
      alert('Credenciales incorrectas para Empleado.');
    }
  } else if (userType === 'coordinador') {
    if (email === 'coordinador@rk.com' && password === 'coordinador') {
      alert('Inicio de sesión exitoso como Coordinador.');
      window.location.href = 'coordinador.html'; 
    } else {
      alert('Credenciales incorrectas para Coordinador.');
    }
  } else {
    alert('Seleccione un tipo de usuario válido.');
  }
});
