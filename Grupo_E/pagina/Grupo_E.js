const equipos = [
  {
    nombre: "ALEAMANIA",
    bandera: "../img/banderaAlemania.png",
    grupo: "Grupo E",
    descripcion: "ALEMANIA forma parte del Grupo E del Mundial 2026."
  },
  {
    nombre: "CURAZAO",
    bandera: "../img/banderaCurazao.png",
    grupo: "Grupo E",
    descripcion: "CURAZAO representa a Sudamérica en el Grupo E del Mundial 2026."
  },
  {
    nombre: "COSTA DE MARFIL",
    bandera: "../img/banderaCostaDeMarfil.png",
    grupo: "Grupo E",
    descripcion: "C. DE MARFIL participa como una de las selecciones mundialistas del Grupo E."
  },
  {
    nombre: "ECUADOR",
    bandera: "../img/banderaEcuador.png",
    grupo: "Grupo E",
    descripcion: "ECUADOR del Congo integra el Grupo E del Mundial 2026."
  }
];

const grupoContainer = document.getElementById("grupoContainer");
const infoPanel = document.getElementById("infoPanel");
const infoTexto = document.getElementById("infoTexto");
const cerrarInfo = document.getElementById("cerrarInfo");

equipos.forEach((equipo) => {
  const card = document.createElement("article");
  card.classList.add("equipo-card");

  card.innerHTML = `
    <img src="${equipo.bandera}" alt="Bandera de ${equipo.nombre}">
    <h3>${equipo.nombre}</h3>
    <span class="badge">${equipo.grupo}</span>
  `;

  card.addEventListener("click", () => {
    infoTexto.textContent = equipo.descripcion;
    infoPanel.classList.remove("oculto");
  });

  grupoContainer.appendChild(card);
});

cerrarInfo.addEventListener("click", () => {
  infoPanel.classList.add("oculto");
});