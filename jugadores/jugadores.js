//arreglo global vacio
const cromosMundial = [];

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

// cargar jugadores del estudiante B - Grupos A y B
cromosMundial.push(

    crearJugador(
        1,
        "Hirving Lozano",
        "México",
        "Delantero",
        "img/lozano.jpg",
        "img/banderaMexico.png",
        "#01a16f",
        16,
        59,
        true,
        "Marcó el gol con el que México derrotó a Alemania en el Mundial de Rusia 2018."
    ),

    crearJugador(
        2,
        "Alphonso Davies",
        "Canadá",
        "Defensa",
        "img/davies.jpg",
        "img/banderaCanada.png",
        "#D80621",
        15,
        58,
        true,
        "Marcó el primer gol de Canadá en la historia de los Mundiales."
    ),

    crearJugador(
        3,
        "Son Heung-min",
        "Corea del Sur",
        "Delantero",
        "img/son.jpg",
        "img/banderaCorea.png",
        "#CD2E3A",
        51,
        130,
        true,
        "Ha sido capitán de Corea del Sur en varias competiciones internacionales."
    ),

    crearJugador(
        4,
        "Patrik Schick",
        "República Checa",
        "Delantero",
        "img/schick.jpg",
        "img/banderaRepublicaCheca.png",
        "#D7141A",
        26,
        53,
        false,
        "Marcó uno de los goles desde mayor distancia en la historia de la Eurocopa."
    ),

    crearJugador(
        5,
        "Granit Xhaka",
        "Suiza",
        "Mediocampista",
        "img/xhaka.jpg",
        "img/banderaSuiza.png",
        "#D52B1E",
        14,
        125,
        true,
        "Es uno de los jugadores con más partidos disputados en la historia de Suiza."
    ),

    crearJugador(
        6,
        "Akram Afif",
        "Catar",
        "Delantero",
        "img/afif.jpg",
        "img/banderaCatar.png",
        "#8A1538",
        30,
        100,
        false,
        "Fue elegido mejor jugador y máximo goleador de la Copa Asiática 2023."
    )

);

// cargar jugadores del estudiante c
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
function renderizarAlbum(lista = cromosMundial) {
    const contenedor = document.getElementById("contenedor-album");
    contenedor.innerHTML = "";

    lista.forEach(function(jugador) {
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

// Filtro por nombre - Estudiante E
document.getElementById("buscador").addEventListener("input", function() {
    const texto = this.value.toLowerCase();
    const filtrados = cromosMundial.filter(j =>
        j.nombre.toLowerCase().startsWith(texto)
    );
    renderizarAlbum(filtrados);
});

// Filtro por país - Estudiante E
document.getElementById("filtroPais").addEventListener("change", function() {
    const pais = this.value;
    const filtrados = pais
        ? cromosMundial.filter(j => j.pais === pais)
        : cromosMundial;
    renderizarAlbum(filtrados);
});