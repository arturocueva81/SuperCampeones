//arreglo global vacio
const cromosMundial = [];

//funcion constructora
function crearJugador(id, nombre, pais, posicion, urlImagen, urlBandera, colorFondoHex, goles, partidos, destacado) {
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
        destacado: Boolean(destacado)
    };
}

// cargar jugadores del estudiante B
cromosMundial.push(

    crearJugador(
        7,
        "Lionel Messi",
        "Argentina",
        "Delantero",
        "img/messi.jpg",
        "img/banderaArgentina.png",
        "#898d91",
        106,
        190,
        true
    ),

    crearJugador(
        8,
        "Julián Álvarez",
        "Argentina",
        "Delantero",
        "img/alvarez.jpg",
        "img/banderaArgentina.png",
        "#b1b8be",
        25,
        50,
        false
    ),

    crearJugador(
        9,
        "Kylian Mbappé",
        "Francia",
        "Delantero",
        "img/mbappe.jpg",
        "img/banderaFrancia.png",
        "#0055A4",
        48,
        90,
        true
    ),

    crearJugador(
        10,
        "Antoine Griezmann",
        "Francia",
        "Mediocampista",
        "img/griezmann.jpg",
        "img/banderaFrancia.png",
        "#0055A4",
        44,
        135,
        false
    ),

    crearJugador(
        11,
        "Christian Eriksen",
        "Dinamarca",
        "Mediocampista",
        "img/eriksen.jpg",
        "img/banderaDinamarca.png",
        "#c60c316c",
        43,
        145,
        false
    ),

    crearJugador(
        12,
        "Raúl Jiménez",
        "México",
        "Delantero",
        "img/jimenez.jpg",
        "img/banderaMexico.png",
        "#01a16f",
        33,
        110,
        false
    )

);

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

renderizarAlbum();