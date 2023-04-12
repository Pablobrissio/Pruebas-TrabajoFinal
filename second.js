// Variables para pruebas
var nombre = "";
var correo = "";
var telefono = "";
var producto = "";
var correoCotizacion = "";

// Obtenemos los elementos del DOM correspondientes a cada formulario
var contactoForm = document.getElementById("contact-form");
var cotizacionForm = document.getElementById("cotizacion-form");

$(document).ready(function() {
  // Form. Contacto
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    // Actualizo variables para los datos
    var nombre = $('#nombre-input').val();
    var correo = $('#correo-input').val();
    var telefono = $('#telefono-input').val();
    //muestro los datos que se ingresan al formulario
    console.log('Nombre: ' + nombre);
    console.log('Correo electrónico: ' + correo);
    console.log('Teléfono: ' + telefono);
    // Blanqueo de los camos
    $('#nombre-input').val('');
    $('#correo-input').val('');
    $('#telefono-input').val('');
  });

// Form. Cotizacion
$('#cotizacion-form').submit(function(event) {
  event.preventDefault();
  // Actualizacion de variables para guardar los datos
  var producto = $('#producto-input').val();
  var correo = $('#cotizacion-correo-input').val();
  //muestro datos ingresados
  console.log('Producto: ' + producto);
  console.log('Correo electrónico: ' + correo);
  // Blanquo de los campos
  $('#producto-input').val('');
  $('#cotizacion-correo-input').val('');
});
});
