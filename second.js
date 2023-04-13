$(document).ready(function() {
  // Validación del formulario de contacto
  $('#contact-form').submit(function(event) {
    event.preventDefault(); 
    var nombre = $('#nombre-input').val();
    var correo = $('#correo-input').val();
    var telefono = $('#telefono-input').val();

    if (nombre === '' || correo === '' || telefono === '') {
      alert('Por favor, complete todos los campos del formulario de contacto.');
    } else {
      console.log('Nombre y Apellido: ' + nombre);
      console.log('Correo electrónico: ' + correo);
      console.log('Teléfono: ' + telefono);
      $('#nombre-input').val('');
      $('#correo-input').val('');
      $('#telefono-input').val('');
    }
  });

  // Validación del formulario de cotización
  $('#cotizacion-form').submit(function(event) {
    event.preventDefault(); 
    var producto = $('#producto-input').val();
    var correo = $('#cotizacion-correo-input').val();

    if (producto === '' || correo === '') {
      alert('Por favor, complete todos los campos del formulario de cotización.');
    } else {
      console.log('Producto a Cotizar: ' + producto);
      console.log('Correo electrónico: ' + correo);
      $('#producto-input').val('');
      $('#cotizacion-correo-input').val('');
    }
  });
});

