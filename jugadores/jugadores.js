//arreglo global vacio
const CROMOSMUNDIAL = [];

//funcion constructora
function crearJugador(
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex,
    goles,
    partidos,
    destacado,
    curiosidad = ""
) {
    return {
        id,
        nombre,
        pais,
        posicion,
        urlImagen,
        urlBandera,
        colorFondoHex,
        estadisticas: {
            goles,
            partidos
        },
        destacado: Boolean(destacado),
        curiosidad
    };
}

//funcion de renderizado inicial
function renderizarAlbum() {
    const contenedor = document.getElementById("contenedor-album");
    contenedor.innerHTML = "";

    cromosMundial.forEach(function(jugador) {
        const tarjeta = `
            <div class="card-cromo" style="background-color: ${jugador.colorFondoHex}">
                <img src="${jugador.urlBandera}" alt="Bandera ${jugador.pais}">
                <img src="${jugador.urlImagen}" alt="${jugador.nombre}">
                <h3>${jugador.nombre}</h3>
                <p>${jugador.pais}</p>
                <p>${jugador.posicion}</p>
                <p>Goles: ${jugador.estadisticas.goles}</p>
                <p>Partidos: ${jugador.estadisticas.partidos}</p>
                ${jugador.destacado ? "<span class='destacado'>Destacado</span>" : ""}
            </div>
        `;
        contenedor.innerHTML += tarjeta;
    });
}