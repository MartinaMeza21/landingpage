document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("finalForm");

  const formularioBox = document.getElementById("formulario-box");

  const mensajeFinal = document.getElementById("mensaje-final");

  const textoPersonalizado = document.getElementById("texto-personalizado");

  form.addEventListener("submit", function(event){

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;

    const mail = document.getElementById("mail").value;

    formularioBox.classList.add("d-none");

    mensajeFinal.classList.remove("d-none");

    textoPersonalizado.innerHTML = `
      Gracias <strong>${nombre}</strong>.<br>
      Tu acceso fue enviado a:<br>
      <strong>${mail}</strong>
    `;

  });

});