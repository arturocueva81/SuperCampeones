const EDICIONES = [
  { num: 1,  anio: 1930, sede: "Uruguay",     campeon: "Uruguay",      logo: "1930.jpg" },
  { num: 2,  anio: 1934, sede: "Italia",       campeon: "Italia",       logo: "1934.jpg" },
  { num: 3,  anio: 1938, sede: "Francia",      campeon: "Italia",       logo: "1938.jpg" },
  { num: 4,  anio: 1950, sede: "Brasil",       campeon: "Uruguay",      logo: "1950.jpg" },
  { num: 5,  anio: 1954, sede: "Suiza",        campeon: "Alemania",     logo: "1954.jpg" },
  { num: 6,  anio: 1958, sede: "Suecia",       campeon: "Brasil",       logo: "1958.jpg" },
  { num: 7,  anio: 1962, sede: "Chile",        campeon: "Brasil",       logo: "1962.jpg" },
  { num: 8,  anio: 1966, sede: "Inglaterra",   campeon: "Inglaterra",   logo: "1966.jpg" },
  { num: 9,  anio: 1970, sede: "Mexico",       campeon: "Brasil",       logo: "1970.jpg" },
  { num: 10, anio: 1974, sede: "Alemania",     campeon: "Alemania",     logo: "1974.jpg" },
  { num: 11, anio: 1978, sede: "Argentina",    campeon: "Argentina",    logo: "1978.jpg" },
  { num: 12, anio: 1982, sede: "España",       campeon: "Italia",       logo: "1982.jpg" },
  { num: 13, anio: 1986, sede: "Mexico",       campeon: "Argentina",    logo: "1986.jpg" },
  { num: 14, anio: 1990, sede: "Italia",       campeon: "Alemania",     logo: "1990.jpg" },
  { num: 15, anio: 1994, sede: "USA",          campeon: "Brasil",       logo: "1994.jpg" },
  { num: 16, anio: 1998, sede: "Francia",      campeon: "Francia",      logo: "1998.jpg" },
  { num: 17, anio: 2002, sede: "Japon/Corea",  campeon: "Brasil",       logo: "2002.jpg" },
  { num: 18, anio: 2006, sede: "Alemania",     campeon: "Italia",       logo: "2006.jpg" },
  { num: 19, anio: 2010, sede: "Sudafrica",    campeon: "España",       logo: "2010.jpg" },
  { num: 20, anio: 2014, sede: "Brasil",       campeon: "Alemania",     logo: "2014.jpg" },
  { num: 21, anio: 2018, sede: "Rusia",        campeon: "Francia",      logo: "2018.jpg" },
  { num: 22, anio: 2022, sede: "Qatar",        campeon: "Argentina",    logo: "2022.jpg" },
  { num: 23, anio: 2026, sede: "USA/CAN/MEX",  campeon: "Por definir",  logo: "2026.png" }
];

// 1. Generar tabla
let cuerpo = document.getElementById("cuerpoTabla");
let html = "";

for (let i = 0; i < EDICIONES.length; i++) {
  let ed = EDICIONES[i];
  let clase = "";

  if (ed.anio === 2026) {
    clase = "fila-destacada";
  }

  html = html + "<tr class='" + clase + "'>";
  html = html + "<td>" + ed.num + "</td>";
  html = html + "<td>" + ed.anio + "</td>";
  html = html + "<td>" + ed.sede + "</td>";
  html = html + "<td>" + ed.campeon + "</td>";
  html = html + "<td><img src='../../images/logos/" + ed.logo + "' alt='" + ed.anio + "' data-index='" + i + "'></td>";
  html = html + "</tr>";
}

cuerpo.innerHTML = html;

// 2. Modal
let modal = document.getElementById("modal");
let modalImg = document.getElementById("modalImg");
let modalTitulo = document.getElementById("modalTitulo");
let modalCampeon = document.getElementById("modalCampeon");
let modalCerrar = document.getElementById("modalCerrar");

let imagenes = document.querySelectorAll("#cuerpoTabla img");

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener("click", function() {
    let idx = parseInt(this.getAttribute("data-index"));
    let ed = EDICIONES[idx];

    modalImg.src = this.src;
    modalTitulo.textContent = ed.sede + " " + ed.anio;
    modalCampeon.textContent="Campeon: " + ed.campeon;
    modal.classList.add("activo");
  });
}

modalCerrar.addEventListener("click", function() {
  modal.classList.remove("activo");
  modalImg.src = "";
});

modal.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.classList.remove("activo");
    modalImg.src = "";
  }
});