let estadios = [

    {
        nombre: "Estadio Azteca",
        ciudad: "Ciudad de México, México",
        imagen: "estadioAzteca.jpg",
        descripcion:
            "Primer estadio en albergar tres Copas del Mundo. Uno de los recintos más históricos del fútbol mundial."
    },

    {
        nombre: "Estadio BBVA",
        ciudad: "Monterrey, México",
        imagen: "estadioBBVA.png",
        descripcion:
            "Moderno estadio rodeado por las montañas de Monterrey. Es considerado uno de los mejores de América."
    },

    {
        nombre: "Estadio Akron",
        ciudad: "Guadalajara, México",
        imagen: "estadioAkron.jpg",
        descripcion:
            "Su diseño exterior está inspirado en la forma de un volcán. Será sede de varios partidos del torneo."
    },

    {
        nombre: "MetLife Stadium",
        ciudad: "Nueva York, Estados Unidos",
        imagen: "estadioMetlife.jpg",
        descripcion:
            "Será el escenario de la final del Mundial 2026. Tiene capacidad para más de 80 mil espectadores."
    },

    {
        nombre: "AT&T Stadium",
        ciudad: "Dallas, Estados Unidos",
        imagen: "estadioAtt.jpg",
        descripcion:
            "Reconocido por su gigantesca pantalla central. Es uno de los estadios más avanzados del mundo."
    },

    {
        nombre: "SoFi Stadium",
        ciudad: "Los Ángeles, Estados Unidos",
        imagen: "estadioSofi.jpg",
        descripcion:
            "Recinto de última generación con arquitectura futurista. Albergará importantes encuentros."
    },

    {
        nombre: "Mercedes-Benz Stadium",
        ciudad: "Atlanta, Estados Unidos",
        imagen: "estadioMercedez.jpg",
        descripcion:
            "Destaca por su techo retráctil y diseño innovador. Es una de las joyas deportivas de Estados Unidos."
    },

    {
        nombre: "Hard Rock Stadium",
        ciudad: "Miami, Estados Unidos",
        imagen: "estadioHard.jpg",
        descripcion:
            "Escenario habitual de grandes eventos deportivos. Será una de las sedes más importantes del torneo."
    },

    {
        nombre: "NRG Stadium",
        ciudad: "Houston, Estados Unidos",
        imagen: "estadioNrg.jpg",
        descripcion:
            "Cuenta con techo retráctil y gran capacidad. Ha recibido numerosos eventos internacionales."
    },

    {
        nombre: "Lincoln Financial Field",
        ciudad: "Filadelfia, Estados Unidos",
        imagen: "estadioLincoln.jpg",
        descripcion:
            "Hogar de los Eagles de la NFL. Ofrece modernas instalaciones para los aficionados."
    },

    {
        nombre: "Lumen Field",
        ciudad: "Seattle, Estados Unidos",
        imagen: "estadioLumen.jpg",
        descripcion:
            "Famoso por el ruido generado por sus aficionados. Es uno de los estadios más intimidantes del país."
    },

    {
        nombre: "Levi's Stadium",
        ciudad: "San Francisco, Estados Unidos",
        imagen: "estadioLevis.jpg",
        descripcion:
            "Combina tecnología y sostenibilidad. Será una de las principales sedes del Mundial."
    },

    {
        nombre: "BC Place",
        ciudad: "Vancouver, Canadá",
        imagen: "estadioBcplace.jpg",
        descripcion:
            "Cuenta con techo retráctil y una larga tradición deportiva. Representará a Vancouver en el torneo."
    },

    {
        nombre: "BMO Field",
        ciudad: "Toronto, Canadá",
        imagen: "estadioBmo.jpg",
        descripcion:
            "Será ampliado para recibir partidos mundialistas. Es el principal estadio de fútbol de Toronto."
    }

];

function pintarEstadios() {

    let contenedor =
        document.getElementById("contenedorEstadios");

    let html = "";

    for(let i = 0; i < estadios.length; i++){

        let estadio = estadios[i];

        html += `
                <div
                    class="card-estadio"
                    onclick="abrirEstadio(${i})"
                >

                    <img
                        src="${estadio.imagen}"
                        alt="${estadio.nombre}"
                    >

                    <div class="estadio-info">

                        <h3>${estadio.nombre}</h3>

                    </div>

                </div>
                `;
    }

    contenedor.innerHTML = html;
}

pintarEstadios();

let tarjetas =
    document.querySelectorAll(".card-estadio");

for(let tarjeta of tarjetas){

    tarjeta.addEventListener("click", function(){

        tarjeta.classList.toggle("abierto");

    });

}

function abrirEstadio(indice){

    let estadio = estadios[indice];

    document.getElementById("modalImagen").src =
        estadio.imagen;

    document.getElementById("modalNombre").textContent =
        estadio.nombre;

    document.getElementById("modalCiudad").textContent =
        estadio.ciudad;

    document.getElementById("modalDescripcion").textContent =
        estadio.descripcion;

    document.getElementById("modalEstadio")
        .classList.add("activo");
}

function cerrarEstadio(){

    document.getElementById("modalEstadio")
        .classList.remove("activo");
}

document.getElementById("cerrarModal")
    .addEventListener(
        "click",
        cerrarEstadio
    );