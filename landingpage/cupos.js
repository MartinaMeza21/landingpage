// cupos.js

const sala = document.getElementById("sala");
const restantes = document.getElementById("restantes");

const TOTAL = 100;

// cargar datos guardados
let ocupados = JSON.parse(localStorage.getItem("ocupados")) || [];

// crear asientos
function renderSala() {
  sala.innerHTML = "";

  for (let i = 0; i < TOTAL; i++) {
    const asiento = document.createElement("div");
    asiento.classList.add("asiento");

    if (ocupados.includes(i)) {
      asiento.classList.add("ocupado");
    }

    sala.appendChild(asiento);
  }

  actualizarContador();
}

// ocupar uno nuevo automáticamente
function ocuparAsiento() {
  if (ocupados.length >= TOTAL) return;

  for (let i = 0; i < TOTAL; i++) {
    if (!ocupados.includes(i)) {
      ocupados.push(i);
      break;
    }
  }

  localStorage.setItem("ocupados", JSON.stringify(ocupados));
  renderSala();
}

// contador
function actualizarContador() {
  restantes.textContent = TOTAL - ocupados.length;
}

// ejemplo: cada vez que abrís suma uno (simula inscripción)
ocuparAsiento();

renderSala();