document.addEventListener("DOMContentLoaded", function () {

  const overlay = document.getElementById("overlayPanel");
  const form = document.getElementById("formRegistro");
  const panelForm = document.getElementById("panelForm");
  const panelSuccess = document.getElementById("panelSuccess");
  const closeBtn = document.getElementById("closePanel");

  // abrir panel
  document.querySelector('[data-bs-target="#exampleModal"]').addEventListener("click", () => {
    overlay.classList.remove("d-none");
  });

  // cerrar panel
  closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");

    // reset
    panelForm.classList.remove("d-none");
    panelSuccess.classList.add("d-none");
    form.reset();
  });

  // submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    panelForm.classList.add("d-none");
    panelSuccess.classList.remove("d-none");

    setTimeout(() => {
      overlay.classList.add("d-none");

      panelForm.classList.remove("d-none");
      panelSuccess.classList.add("d-none");
      form.reset();
    }, 2500);
  });

});