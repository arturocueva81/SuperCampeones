//arreglo global vacio
const CROMOSMUNDIAL = [];

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