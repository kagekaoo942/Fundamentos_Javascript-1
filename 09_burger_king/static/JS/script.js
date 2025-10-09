//enlace del nav
// Seleccionamos todos los elementos con la clase "enlace"
  const enlaces = document.querySelectorAll(".link-1");

  // Recorremos cada enlace y agregamos los eventos
  enlaces.forEach(function(enlace) {
    enlace.addEventListener("mouseover", function() {
      enlace.style.color = "#D62300"; // color al pasar el cursor
    });

    enlace.addEventListener("mouseout", function() {
      enlace.style.color = "#502314"; // color original
    });
  });

  // boton del nav
   const botones = document.querySelectorAll(".btn-1");

  botones.forEach(function(boton) {
    boton.addEventListener("mouseover", function() {
      boton.style.backgroundColor = "#A71B00"; // color al pasar el mouse
    });

    boton.addEventListener("mouseout", function() {
      boton.style.backgroundColor = "#d12200"; // color original
    });
  });

  //botones de cajas
 const btn = document.querySelectorAll(".btn-blanco");

  btn.forEach(function(boton) {
    boton.addEventListener("mouseover", function() {
      boton.style.backgroundColor = "#FBE9E5"; // color al pasar el mouse
    });

    boton.addEventListener("mouseout", function() {
      boton.style.backgroundColor = "#fff"; // color original
    });
  });
// boton iniciar sesion
function cerrarSesion(){
let boton = document.getElementById("cambiarTexto");
boton.addEventListener("click", function () {
   this.innerText = "Sesion cerrada";
});
}
  // contador
function contador(){
    const contador = document.querySelector("#contador");
    let cantidad = parseInt(contador.innerText);
    contador.innerText = cantidad + 1;
}

// boton de la caja 

function botonCaja(){
  alert("Bienvenido a Burger king")
}



//boton de detalles de caja ancha

const detalles = document.querySelectorAll("#detalle");

  detalles.forEach(function(btnDetalle) {
    btnDetalle.addEventListener("mouseover", function() {
      btnDetalle.style.backgroundColor = "#F0CDBB"; // color al pasar el mouse
    });

    btnDetalle.addEventListener("mouseout", function() {
      btnDetalle.style.backgroundColor = "#502314"; // color original
    });
  });






    // enlaces de el pie de pagina
  const links = document.querySelectorAll('.link-2');

  links.forEach(link => {
    // 1. Estilo del enlace
    Object.assign(link.style, {
      color: '#f5deb3',
      textDecoration: 'none',
      position: 'relative',
      display: 'inline-block',
      marginBottom: '8px',
      fontFamily: 'sans-serif',
      transition: 'color 0.3s ease'
    });

    // 2. Crear el subrayado
    const underline = document.createElement('div');
    Object.assign(underline.style, {
      position: 'absolute',
      bottom: '0',
      left: '0',
      height: '1px',
      backgroundColor: 'currentColor',
      transformOrigin: 'left',
      transform: link.classList.contains('subrayado') ? 'scaleX(1)' : 'scaleX(0)',
      transition: 'transform 0.3s ease',
      pointerEvents: 'none'
    });

    // 3. Agregarlo al enlace
    link.appendChild(underline);

    // 4. Esperar al render y luego calcular ancho exacto del texto
    requestAnimationFrame(() => {
      underline.style.width = link.clientWidth + 'px'; // usa clientWidth en vez de offsetWidth
    });

    // 5. Eventos hover solo si no tiene subrayado permanente
    if (!link.classList.contains('subrayado')) {
      link.addEventListener('mouseover', () => {
        underline.style.transform = 'scaleX(1)';
      });
      link.addEventListener('mouseout', () => {
        underline.style.transform = 'scaleX(0)';
      });
    }
  });