// Arreglo de objetos con las secciones del menú
const TARJETAS = [
  { nombre: "Historia",  ruta: "menuPaginas/historia.html",  lista: true  },
  { nombre: "Estadios",  ruta: "menuPaginas/estadios.html",  lista: false },
  { nombre: "Grupos",    ruta: "menuPaginas/grupos.html",    lista: true  },
  { nombre: "Acerca de", ruta: "menuPaginas/acerca.html",    lista: false }
];

// Recorremos el arreglo para verificar qué páginas están listas
for (let i = 0; i < TARJETAS.length; i++) {
  let tarjeta = TARJETAS[i];

  if (tarjeta.lista === false) {
    console.log(tarjeta.nombre + " — página en construcción");
  } else {
    console.log(tarjeta.nombre + " — disponible en: " + tarjeta.ruta);
  }
}