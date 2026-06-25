// 1. Datos iniciales con estado de bloqueo (Mapeamos para agregar 'desbloqueado: false' a todos automáticamente)
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
].map(jugador => ({ ...jugador, desbloqueado: false })); // <-- Truco: Todos empiezan bloqueados de forma dinámica

// 2. Captura de los elementos del DOM (HTML)
const contenedorAlbum = document.getElementById("contenedor-album");
const buscadorNombre = document.getElementById("buscador-nombre");
const filtrarPais = document.getElementById("filtrar-pais");
const contadorCromos = document.getElementById("contador-cromos");

// 3. Función para actualizar el contador en el Header
function actualizarContador() {
  const totalCromos = cromosMundial.length;
  const desbloqueados = cromosMundial.filter(j => j.desbloqueado).length;
  
  // Muestra cuántos van y el porcentaje real
  const porcentaje = totalCromos > 0 ? Math.round((desbloqueados / totalCromos) * 100) : 0;
  contadorCromos.textContent = `Cromos desbloqueados: ${desbloqueados} / ${totalCromos} (${porcentaje}%)`;
}

// 4. Función para renderizar 
function mostrarCromos(listaJugadores) {
  contenedorAlbum.innerHTML = "";
  
  if (listaJugadores.length === 0) {
    contenedorAlbum.innerHTML = `<p class="sin-resultados">No se encontraron jugadores.</p>`;
    return;
  }

  listaJugadores.forEach(jugador => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("cromo-card");
    
    // Si está bloqueado, le añadimos tu clase CSS especial
    if (!jugador.desbloqueado) {
      tarjeta.classList.add("cromo-bloqueado");
    }

    tarjeta.innerHTML = `
      <div class="cromo-pais">${jugador.pais}</div>
      <img src="${jugador.imagen}" alt="${jugador.nombre}" class="cromo-img" style="width: 100%; border-radius: 8px; margin-bottom: 10px;">
      <h3>${jugador.nombre}</h3>
      <p>Posición: ${jugador.posicion}</p>
      ${
        jugador.desbloqueado 
          ? `<span class="tag-desbloqueado" style="color: #f5c518; font-weight: bold; display: block; margin-top: 15px;">✓ Desbloqueado</span>`
          : `<button class="btn-desbloquear" onclick="desbloquearCromo('${jugador.nombre}')">Desbloquear Cromo</button>`
      }
    `;
    
    contenedorAlbum.appendChild(tarjeta);
  });
}

// 5. Función para desbloquear un cromo por nombre
window.desbloquearCromo = function(nombreJugador) {
  // Buscamos el cromo en nuestra lista principal
  const jugador = cromosMundial.find(j => j.nombre === nombreJugador);
  
  if (jugador) {
    // Cambiamos su estado a desbloqueado
    jugador.desbloqueado = true;
    
    // Actualizamos el contador y volvemos a filtrar/renderizar para ver los cambios reflejados
    actualizarContador();
    filtrarAlbum();
    
    // Opcional: Aquí podrías meter más adelante una alerta o llamar al sistema de animaciones.
    alert(`¡Has desbloqueado a ${nombreJugador}! 🎉`);
  }
}

// 6. Función principal de filtrado combinado
function filtrarAlbum() {
  const textoBusqueda = buscadorNombre.value.toLowerCase().trim();
  const paisSeleccionado = filtrarPais.value;

  const jugadoresFiltrados = cromosMundial.filter(jugador => {
    const coincideNombre = jugador.nombre.toLowerCase().includes(textoBusqueda);
    const coincidePais = paisSeleccionado === "todos" || jugador.pais === paisSeleccionado;
    return coincideNombre && coincidePais;
  });

  mostrarCromos(jugadoresFiltrados);
}

// 7. Escuchadores de eventos
buscadorNombre.addEventListener("input", filtrarAlbum);
filtrarPais.addEventListener("change", filtrarAlbum);

// 8. Carga inicial
actualizarContador(); // Ponemos el contador en 0 / 90
mostrarCromos(cromosMundial);