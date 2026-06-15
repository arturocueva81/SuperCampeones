const equipos = [
  {
    nombre: "ALEAMANIA",
    bandera: "../img/banderaAlemania.png",
    grupo: "Grupo E",
    descripcion: "ALEMANIA forma parte del Grupo E del Mundial 2026.",
    pagina: "Alemania.html"
  },
  {
    nombre: "CURAZAO",
    bandera: "../img/banderaCurazao.png",
    grupo: "Grupo E",
    descripcion: "CURAZAO representa a Sudamérica en el Grupo E del Mundial 2026.",
    pagina: "Curazao.html"
  },
  {
    nombre: "COSTA DE MARFIL",
    bandera: "../img/banderaCostaDeMarfil.png",
    grupo: "Grupo E",
    descripcion: "C. DE MARFIL participa como una de las selecciones mundialistas del Grupo E.",
    pagina: "CostaDeMarfil.html"
  },
  {
    nombre: "ECUADOR",
    bandera: "../img/banderaEcuador.png",
    grupo: "Grupo E",
    descripcion: "ECUADOR del Congo integra el Grupo E del Mundial 2026.",
    pagina: "Ecuador.html"
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
    <a href="${equipo.pagina}" class="btn-ficha">Ver ficha</a>
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