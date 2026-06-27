// 1. Datos iniciales (El arreglo cromosMundial con tu grupo asignado)
const cromosMundial = [
  { nombre: "Santiago Giménez", pais: "México", posicion: "Delantero", imagen: "gimenez.jpg" },
  { nombre: "Edson Álvarez", pais: "México", posicion: "Centrocampista", imagen: "alvarez.jpg" },
  { nombre: "Luis Chávez", pais: "México", posicion: "Centrocampista", imagen: "chavez.jpg" },
  { nombre: "César Montes", pais: "México", posicion: "Defensa", imagen: "montes.jpg" },
  { nombre: "Luis Malagón", pais: "México", posicion: "Portero", imagen: "malagon.jpg" },

  { nombre: "Percy Tau", pais: "Sudáfrica", posicion: "Delantero", imagen: "tau.jpg" },
  { nombre: "Teboho Mokoena", pais: "Sudáfrica", posicion: "Centrocampista", imagen: "mokoena.jpg" },
  { nombre: "Ronwen Williams", pais: "Sudáfrica", posicion: "Portero", imagen: "rwilliams.jpg" },
  { nombre: "Khuliso Mudau", pais: "Sudáfrica", posicion: "Defensa", imagen: "mudau.jpg" },
  { nombre: "Themba Zwane", pais: "Sudáfrica", posicion: "Centrocampista", imagen: "zwane.jpg" },

  { nombre: "Son Heung-min", pais: "Corea del Sur", posicion: "Delantero", imagen: "son.jpg" },
  { nombre: "Kim Min-jae", pais: "Corea del Sur", posicion: "Defensa", imagen: "kim.jpg" },
  { nombre: "Lee Kang-in", pais: "Corea del Sur", posicion: "Centrocampista", imagen: "lee.jpg" },
  { nombre: "Hwang Hee-chan", pais: "Corea del Sur", posicion: "Delantero", imagen: "hwang.jpg" },
  { nombre: "Kim Seung-gyu", pais: "Corea del Sur", posicion: "Portero", imagen: "seunggyu.jpg" },

  { nombre: "Patrik Schick", pais: "República Checa", posicion: "Delantero", imagen: "schick.jpg" },
  { nombre: "Tomas Soucek", pais: "República Checa", posicion: "Centrocampista", imagen: "soucek.jpg" },
  { nombre: "Vladimir Coufal", pais: "República Checa", posicion: "Defensa", imagen: "coufal.jpg" },
  { nombre: "Adam Hlozek", pais: "República Checa", posicion: "Delantero", imagen: "hlozek.jpg" },
  { nombre: "Jindrich Stanek", pais: "República Checa", posicion: "Portero", imagen: "stanek.jpg" },

  { nombre: "Florian Wirtz", pais: "Alemania", posicion: "Centrocampista", imagen: "wirtz.jpg" },
  { nombre: "Jamal Musiala", pais: "Alemania", posicion: "Centrocampista", imagen: "musiala.jpg" },
  { nombre: "Kai Havertz", pais: "Alemania", posicion: "Delantero", imagen: "havertz.jpg" },
  { nombre: "Antonio Rüdiger", pais: "Alemania", posicion: "Defensa", imagen: "rudiger.jpg" },
  { nombre: "Marc-André ter Stegen", pais: "Alemania", posicion: "Portero", imagen: "terstegen.jpg" },

  { nombre: "Juninho Bacuna", pais: "Curazao", posicion: "Centrocampista", imagen: "bacuna.jpg" },
  { nombre: "Leandro Bacuna", pais: "Curazao", posicion: "Defensa", imagen: "Ibacuna.jpg" },
  { nombre: "Rangelo Janga", pais: "Curazao", posicion: "Delantero", imagen: "janga.jpg" },
  { nombre: "Gervane Kastaneer", pais: "Curazao", posicion: "Delantero", imagen: "kastanner.jpg" },
  { nombre: "Eley Room", pais: "Curazao", posicion: "Portero", imagen: "room.jpg" },

  { nombre: "Franck Kessié", pais: "Costa de Marfil", posicion: "Centrocampista", imagen: "kessie.jpg" },
  { nombre: "Sébastien Haller", pais: "Costa de Marfil", posicion: "Delantero", imagen: "haller.jpg" },
  { nombre: "Simon Adingra", pais: "Costa de Marfil", posicion: "Delantero", imagen: "adingra.jpg" },
  { nombre: "Evan Ndicka", pais: "Costa de Marfil", posicion: "Defensa", imagen: "ndicka.jpg" },
  { nombre: "Yahia Fofana", pais: "Costa de Marfil", posicion: "Portero", imagen: "fofana.jpg" },

  { nombre: "Piero Hincapié", pais: "Ecuador", posicion: "Defensa", imagen: "hincapie.jpg" },
  { nombre: "Moisés Caicedo", pais: "Ecuador", posicion: "Centrocampista", imagen: "caicedo.jpg" },
  { nombre: "Kendry Páez", pais: "Ecuador", posicion: "Centrocampista", imagen: "paez.jpg" },
  { nombre: "Enner Valencia", pais: "Ecuador", posicion: "Delantero", imagen: "enner.jpg" },
  { nombre: "Hernán Galíndez", pais: "Ecuador", posicion: "Portero", imagen: "galindez.jpg" },

  { nombre: "Lionel Messi", pais: "Argentina", posicion: "Delantero", imagen: "messi.jpg" },
  { nombre: "Lautaro Martínez", pais: "Argentina", posicion: "Delantero", imagen: "martinez.jpg" },
  { nombre: "Alexis Mac Allister", pais: "Argentina", posicion: "Centrocampista", imagen: "macallister.jpg" },
  { nombre: "Rodrigo De Paul", pais: "Argentina", posicion: "Centrocampista", imagen: "depaul.jpg" },
  { nombre: "Emiliano Martínez", pais: "Argentina", posicion: "Portero", imagen: "emartinez.jpg" },

  { nombre: "Riyad Mahrez", pais: "Argelia", posicion: "Delantero", imagen: "mahrez.jpg" },
  { nombre: "Amine Gouiri", pais: "Argelia", posicion: "Delantero", imagen: "gouiri.jpg" },
  { nombre: "Ismaël Bennacer", pais: "Argelia", posicion: "Centrocampista", imagen: "bennacer.jpg" },
  { nombre: "Rayyan Aït-Nouri", pais: "Argelia", posicion: "Defensa", imagen: "aitnouri.jpg" },
  { nombre: "Anthony Mandrea", pais: "Argelia", posicion: "Portero", imagen: "mandrea.jpg" },

  { nombre: "Nestory Irankunda", pais: "Australia", posicion: "Delantero", imagen: "irakunda.jpg" },
  { nombre: "Craig Goodwin", pais: "Australia", posicion: "Delantero", imagen: "goodwin.jpg" },
  { nombre: "Jackson Irvine", pais: "Australia", posicion: "Centrocampista", imagen: "irvine.jpg" },
  { nombre: "Harry Souttar", pais: "Australia", posicion: "Defensa", imagen: "souttar.jpg" },
  { nombre: "Mathew Ryan", pais: "Australia", posicion: "Portero", imagen: "ryan.jpg" },

  { nombre: "Musa Al-Taamari", pais: "Jordania", posicion: "Delantero", imagen: "altamari.jpg" },
  { nombre: "Yazan Al-Naimat", pais: "Jordania", posicion: "Delantero", imagen: "alnaimat.jpg" },
  { nombre: "Nizar Al-Rashdan", pais: "Jordania", posicion: "Centrocampista", imagen: "alrashdan.jpg" },
  { nombre: "Yazan Al-Arab", pais: "Jordania", posicion: "Defensa", imagen: "alarab.jpg" },
  { nombre: "Yazeed Abulaila", pais: "Jordania", posicion: "Portero", imagen: "abulaila.jpg" },

  { nombre: "Cristiano Ronaldo", pais: "Portugal", posicion: "Delantero", imagen: "ronaldo.jpg" },
  { nombre: "Bruno Fernandes", pais: "Portugal", posicion: "Centrocampista", imagen: "fernandes.jpg" },
  { nombre: "Rafael Leão", pais: "Portugal", posicion: "Delantero", imagen: "leao.jpg" },
  { nombre: "Ruben Dias", pais: "Portugal", posicion: "Defensa", imagen: "dias.jpg" },
  { nombre: "Diogo Costa", pais: "Portugal", posicion: "Portero", imagen: "costa.jpg" },

  { nombre: "Eldor Shomurodov", pais: "Uzbekistán", posicion: "Delantero", imagen: "shomurodov.jpg" },
  { nombre: "Abboshbek Fayzullaev", pais: "Uzbekistán", posicion: "Centrocampista", imagen: "fayzullaev.jpg" },
  { nombre: "Otabek Shukurov", pais: "Uzbekistán", posicion: "Centrocampista", imagen: "shukurov.jpg" },
  { nombre: "Abdukodir Khusanov", pais: "Uzbekistán", posicion: "Defensa", imagen: "khusanov.jpg" },
  { nombre: "Utkir Yusupov", pais: "Uzbekistán", posicion: "Portero", imagen: "yusupov.jpg" },

  { nombre: "Luis Díaz", pais: "Colombia", posicion: "Delantero", imagen: "diaz.jpg" },
  { nombre: "James Rodríguez", pais: "Colombia", posicion: "Centrocampista", imagen: "rodriguez.jpg" },
  { nombre: "Jhon Durán", pais: "Colombia", posicion: "Delantero", imagen: "duran.jpg" },
  { nombre: "Daniel Muñoz", pais: "Colombia", posicion: "Defensa", imagen: "munoz.jpg" },
  { nombre: "Camilo Vargas", pais: "Colombia", posicion: "Portero", imagen: "vargas.jpg" },

  { nombre: "Vinicius Junior", pais: "Brasil", posicion: "Delantero", imagen: "vinicius.jpg" },
  { nombre: "Rodrygo Goes", pais: "Brasil", posicion: "Delantero", imagen: "rodrygo.jpg" },
  { nombre: "Bruno Guimarães", pais: "Brasil", posicion: "Centrocampista", imagen: "guimaraes.jpg" },
  { nombre: "Gabriel Magalhães", pais: "Brasil", posicion: "Defensa", imagen: "magalhaes.jpg" },
  { nombre: "Alisson Becker", pais: "Brasil", posicion: "Portero", imagen: "alisson.jpg" },

  { nombre: "Achraf Hakimi", pais: "Marruecos", posicion: "Defensa", imagen: "hakimi.jpg" },
  { nombre: "Brahim Díaz", pais: "Marruecos", posicion: "Delantero", imagen: "bdiaz.jpg" },
  { nombre: "Hakim Ziyech", pais: "Marruecos", posicion: "Centrocampista", imagen: "ziyech.jpg" },
  { nombre: "Nayef Aguerd", pais: "Marruecos", posicion: "Defensa", imagen: "aguerd.jpg" },
  { nombre: "Yassine Bounou", pais: "Marruecos", posicion: "Portero", imagen: "bounou.jpg" },

  { nombre: "Frantzdy Pierrot", pais: "Haití", posicion: "Delantero", imagen: "pierrot.jpg" },
  { nombre: "Duckens Nazon", pais: "Haití", posicion: "Delantero", imagen: "nazon.jpg" },
  { nombre: "Danley Jean Jacques", pais: "Haití", posicion: "Centrocampista", imagen: "jeanjacques.jpg" },
  { nombre: "Carlens Arcus", pais: "Haití", posicion: "Defensa", imagen: "arcus.jpg" },
  { nombre: "Johny Placide", pais: "Haití", posicion: "Portero", imagen: "placide.jpg" },

  { nombre: "Scott McTominay", pais: "Escocia", posicion: "Centrocampista", imagen: "mctominay.jpg" },
  { nombre: "John McGinn", pais: "Escocia", posicion: "Centrocampista", imagen: "mcginn.jpg" },
  { nombre: "Andrew Robertson", pais: "Escocia", posicion: "Defensa", imagen: "robertson.jpg" },
  { nombre: "Che Adams", pais: "Escocia", posicion: "Delantero", imagen: "cadams.jpg" },
  { nombre: "Angus Gunn", pais: "Escocia", posicion: "Portero", imagen: "gunn.jpg" }
]; 


// 2. Captura de los elementos del DOM (HTML)
const contenedorAlbum = document.getElementById("contenedor-album");
const buscadorNombre = document.getElementById("buscador-nombre");
const filtrarPais = document.getElementById("filtrar-pais");

// 3. Función para renderizar 
function mostrarCromos(listaJugadores) {
  // Limpiamos 
  contenedorAlbum.innerHTML = "";

  // Si no hay resultados coincidentes
  if (listaJugadores.length === 0) {
    contenedorAlbum.innerHTML = `<p class="sin-resultados">No se encontraron jugadores.</p>`;
    return;
  }

  // Recorremos el arreglo filtrado y creamos el HTML de cada tarjeta
  listaJugadores.forEach(jugador => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cromo-card");
    
    tarjeta.innerHTML = `
      <div class="cromo-pais">${jugador.pais}</div>
      <img src="${jugador.imagen}" alt="${jugador.nombre}" class="cromo-img" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
      <h3>${jugador.nombre}</h3>
      <p>Posición: ${jugador.posicion}</p>
    `;
    
    contenedorAlbum.appendChild(tarjeta);
  });
}

// 4. Función principal de filtrado combinado
function filtrarAlbum() {
  const textoBusqueda = buscadorNombre.value.toLowerCase().trim();
  const paisSeleccionado = filtrarPais.value;

  // Aplicamos una función de orden superior (.filter)
  const jugadoresFiltrados = cromosMundial.filter(jugador => {
    // Condición 1: El nombre debe incluir lo que el usuario escribe
    const coincideNombre = jugador.nombre.toLowerCase().includes(textoBusqueda);
    
    // Condición 2: El país debe coincidir o mostrar "todos"
    const coincidePais = paisSeleccionado === "todos" || jugador.pais === paisSeleccionado;

    // Solo se mantiene en el nuevo arreglo si cumple AMBAS condiciones
    return coincideNombre && coincidePais;
  });

  // Volvemos a dibujar las tarjetas con el nuevo arreglo reducido
  mostrarCromos(jugadoresFiltrados);
}

// 5. Escuchadores de eventos (Escuchan en tiempo real)
buscadorNombre.addEventListener("input", filtrarAlbum);
filtrarPais.addEventListener("change", filtrarAlbum);

// 6. Carga inicial: Mostrar todos los jugadores al abrir la página
mostrarCromos(cromosMundial);