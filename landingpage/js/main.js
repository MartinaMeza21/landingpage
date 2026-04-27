document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegistro");
  const mensaje = document.getElementById("mensajeExito");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // mostrar mensaje
    mensaje.classList.remove("d-none");

    // cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
    modal.hide();

    // resetear form
    form.reset();

    // ocultar mensaje después
    setTimeout(() => {
      mensaje.classList.add("d-none");
    }, 4000);
  });
});