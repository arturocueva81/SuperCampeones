const equipos = [
{
nombre: "México",
bandera: "../img/banderaMexico.png",
grupo: "Grupo A",
descripcion:
"México es uno de los anfitriones del Mundial 2026 y forma parte del Grupo A.",
pagina: "mexico.html"
},

{
nombre: "Sudáfrica",
bandera: "../img/banderaSudafrica.png",
grupo: "Grupo A",
descripcion:
"Sudáfrica representa a la CAF en el Grupo A del Mundial 2026.",
pagina: "sudafrica.html"
},

{
nombre: "Corea del Sur",
bandera: "../img/banderaCorea.png",
grupo: "Grupo A",
descripcion:
"Corea del Sur es una de las selecciones más exitosas de Asia y compite en el Grupo A.",
pagina: "corea.html"
},

{
nombre: "República Checa",
bandera: "../img/banderaRepublicaCheca.png",
grupo: "Grupo A",
descripcion:
"República Checa integra el Grupo A del Mundial 2026 representando a la UEFA.",
pagina: "republicaCheca.html"
}
];

const grupoContainer = document.getElementById("grupoContainer");
const infoPanel = document.getElementById("infoPanel");
const infoTexto = document.getElementById("infoTexto");
const cerrarInfo = document.getElementById("cerrarInfo");

equipos.forEach((equipo) => {
const card = document.createElement("article");
card.classList.add("equipo-card");

card.innerHTML = `     <img src="${equipo.bandera}" alt="Bandera de ${equipo.nombre}">     <h3>${equipo.nombre}</h3>     <span class="badge">${equipo.grupo}</span>     <a href="${equipo.pagina}" class="btn-ficha">Ver ficha mundialista</a>
  `;

card.addEventListener("click", (evento) => {

```
if (evento.target.classList.contains("btn-ficha")) {
  return;
}

infoTexto.textContent = equipo.descripcion;
infoPanel.classList.remove("oculto");
```

});

grupoContainer.appendChild(card);
});

cerrarInfo.addEventListener("click", () => {
infoPanel.classList.add("oculto");
});
