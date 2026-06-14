const equipos = [
  {
    nombre: "Portugal",
    bandera: "../img/banderaPortugal.png",
    grupo: "Grupo K",
    descripcion: "Portugal forma parte del Grupo K del Mundial 2026.",
    pagina: "portugal.html"
  },
  {
    nombre: "Colombia",
    bandera: "../img/banderaColombia.png",
    grupo: "Grupo K",
    descripcion: "Colombia representa a Sudamérica en el Grupo K del Mundial 2026.",
    pagina: "colombia.html"
  },
  {
    nombre: "Uzbekistán",
    bandera: "../img/banderaUzbekistan.png",
    grupo: "Grupo K",
    descripcion: "Uzbekistán participa como una de las selecciones mundialistas del Grupo K.",
    pagina: "uzbekistan.html"
  },
  {
    nombre: "República Democrática del Congo",
    bandera: "../img/banderaRdCongo.png",
    grupo: "Grupo K",
    descripcion: "República Democrática del Congo integra el Grupo K del Mundial 2026.",
    pagina: "congo.html"
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
    <a href="${equipo.pagina}" class="btn-ficha">Ver ficha mundialista</a>
  `;

  card.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("btn-ficha")) {
      return;
    }

    infoTexto.textContent = equipo.descripcion;
    infoPanel.classList.remove("oculto");
  });

  grupoContainer.appendChild(card);
});

cerrarInfo.addEventListener("click", () => {
  infoPanel.classList.add("oculto");
});