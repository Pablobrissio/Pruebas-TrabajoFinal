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



/*--------------------
Vars
--------------------*/
let progress = 50
let startX = 0
let active = 0
let isDown = false

/*--------------------
Contants
--------------------*/
const speedWheel = 0.02
const speedDrag = -0.1

/*--------------------
Get Z
--------------------*/
const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

/*--------------------
Items
--------------------*/
const $items = document.querySelectorAll('.carousel-item')
const $cursors = document.querySelectorAll('.cursor')

const displayItems = (item, index, active) => {
  const zIndex = getZindex([...$items], active)[index]
  item.style.setProperty('--zIndex', zIndex)
  item.style.setProperty('--active', (index-active)/$items.length)
}

/*--------------------
Animate
--------------------*/
const animate = () => {
  progress = Math.max(0, Math.min(progress, 100))
  active = Math.floor(progress/100*($items.length-1))
  
  $items.forEach((item, index) => displayItems(item, index, active))
}
animate()

/*--------------------
Click on Items
--------------------*/
$items.forEach((item, i) => {
  item.addEventListener('click', () => {
    progress = (i/$items.length) * 100 + 10
    animate()
  })
})

/*--------------------
Handlers
--------------------*/
const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

/*--------------------
Listeners
--------------------*/
document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)
