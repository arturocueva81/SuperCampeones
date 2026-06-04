    const GRUPOS = [
    {
        id: "A",
        carpeta: "Grupo_A",
        paginaGrupo: "grupoA.html",
        paises: [
        { nombre: "MÉXICO", pagina: "mexico.html", cod: "mx" },
        { nombre: "SUDÁFRICA", pagina: "sudafrica.html", cod: "za" },
        { nombre: "COREA DEL SUR", pagina: "corea-del-sur.html", cod: "kr" },
        { nombre: "CZECHIA", pagina: "czechia.html", cod: "cz" }
        ]
    },
    {
        id: "B",
        carpeta: "Grupo_B",
        paginaGrupo: "grupo.html",
        paises: [
        { nombre: "CANADÁ", pagina: "canada.html", cod: "ca" },
        { nombre: "BOSNIA", pagina: "bosnia.html", cod: "ba" },
        { nombre: "QATAR", pagina: "qatar.html", cod: "qa" },
        { nombre: "SUIZA", pagina: "suiza.html", cod: "ch" }
        ]
    },
    {
        id: "C",
        carpeta: "Grupo_C",
        paginaGrupo: "grupoC.html",
        paises: [
        { nombre: "BRASIL", pagina: "brasil.html", cod: "br" },
        { nombre: "MARRUECOS", pagina: "marruecos.html", cod: "ma" },
        { nombre: "HAITÍ", pagina: "haiti.html", cod: "ht" },
        { nombre: "ESCOCIA", pagina: "escocia.html", cod: "gb-sct" }
        ]
    },
    {
        id: "D",
        carpeta: "Grupo_D",
        paginaGrupo: "grupo_d.html",
        paises: [
        { nombre: "USA", pagina: "usa.html", cod: "us" },
        { nombre: "PARAGUAY", pagina: "paraguay.html", cod: "py" },
        { nombre: "AUSTRALIA", pagina: "australia.html", cod: "au" },
        { nombre: "TURQUÍA", pagina: "turquia.html", cod: "tr" }
        ]
    },
    {
        id: "E",
        carpeta: "Grupo_E",
        paginaGrupo: "grupoE.html",
        paises: [
        { nombre: "ALEMANIA", pagina: "alemania.html", cod: "de" },
        { nombre: "CURAZAO", pagina: "curazao.html", cod: "cw" },
        { nombre: "COSTA DE MARFIL", pagina: "costa-de-marfil.html", cod: "ci" },
        { nombre: "ECUADOR", pagina: "ecuador.html", cod: "ec" }
        ]
    },
    {
        id: "F",
        carpeta: "Grupo_F",
        paginaGrupo: "grupo_f.html",
        paises: [
        { nombre: "PAÍSES BAJOS", pagina: "paises-bajos.html", cod: "nl" },
        { nombre: "JAPÓN", pagina: "japon.html", cod: "jp" },
        { nombre: "SUECIA", pagina: "suecia.html", cod: "se" },
        { nombre: "TÚNEZ", pagina: "tunez.html", cod: "tn" }
        ]
    },
    {
        id: "G",
        carpeta: "Grupo_G",
        paginaGrupo: "grupo_g.html",
        paises: [
        { nombre: "BÉLGICA", pagina: "belgica.html", cod: "be" },
        { nombre: "EGIPTO", pagina: "egipto.html", cod: "eg" },
        { nombre: "IRÁN", pagina: "iran.html", cod: "ir" },
        { nombre: "NUEVA ZELANDA", pagina: "nueva-zelanda.html", cod: "nz" }
        ]
    },
    {
        id: "H",
        carpeta: "Grupo_H",
        paginaGrupo: "grupo_h.html",
        paises: [
        { nombre: "ESPAÑA", pagina: "espana.html", cod: "es" },
        { nombre: "CABO VERDE", pagina: "cabo-verde.html", cod: "cv" },
        { nombre: "ARABIA SAUDÍ", pagina: "arabia-saudi.html", cod: "sa" },
        { nombre: "URUGUAY", pagina: "uruguay.html", cod: "uy" }
        ]
    },
    {
        id: "I",
        carpeta: "Grupo_I",
        paginaGrupo: "grupoI.html",
        paises: [
        { nombre: "FRANCIA", pagina: "francia.html", cod: "fr" },
        { nombre: "SENEGAL", pagina: "senegal.html", cod: "sn" },
        { nombre: "IRAK", pagina: "irak.html", cod: "iq" },
        { nombre: "NORUEGA", pagina: "noruega.html", cod: "no" }
        ]
    },
    {
        id: "J",
        carpeta: "Grupo_J",
        paginaGrupo: "grupoJ.html",
        paises: [
        { nombre: "ARGENTINA", pagina: "argentina.html", cod: "ar" },
        { nombre: "ARGELIA", pagina: "argelia.html", cod: "dz" },
        { nombre: "AUSTRIA", pagina: "austria.html", cod: "at" },
        { nombre: "JORDANIA", pagina: "jordania.html", cod: "jo" }
        ]
    },
    {
        id: "K",
        carpeta: "Grupo_K",
        paginaGrupo: "grupoK.html",
        paises: [
        { nombre: "PORTUGAL", pagina: "portugal.html", cod: "pt" },
        { nombre: "CONGO", pagina: "congo.html", cod: "cd" },
        { nombre: "UZBEKISTÁN", pagina: "uzbekistan.html", cod: "uz" },
        { nombre: "COLOMBIA", pagina: "colombia.html", cod: "co" }
        ]
    },
    {
        id: "L",
        carpeta: "Grupo_L",
        paginaGrupo: "grupo_l.html",
        paises: [
        { nombre: "INGLATERRA", pagina: "inglaterra.html", cod: "gb-eng" },
        { nombre: "CROACIA", pagina: "croacia.html", cod: "hr" },
        { nombre: "GHANA", pagina: "ghana.html", cod: "gh" },
        { nombre: "PANAMÁ", pagina: "panama.html", cod: "pa" }
        ]
    }
    ];

    let contenedor = document.getElementById("gridGrupos");
    let htmlGrupos = "";

    for (let i = 0; i < GRUPOS.length; i++) {
    let grupo = GRUPOS[i];
    let htmlPaises = "";

    for (let j = 0; j < grupo.paises.length; j++) {
        let pais = grupo.paises[j];

        htmlPaises += "<li>";
        htmlPaises += "<img src='https://flagcdn.com/w40/" + pais.cod + ".png' alt='" + pais.nombre + "'>";
        htmlPaises += "<a href='../../" + grupo.carpeta + "/paginas/" + pais.pagina + "'>" + pais.nombre + "</a>";
        htmlPaises += "</li>";
    }

    htmlGrupos += "<div class='card-grupo'>";
    htmlGrupos += "<div class='card-header'>";
    htmlGrupos += "<a href='../../" + grupo.carpeta + "/paginas/" + grupo.paginaGrupo + "'>GRUPO " + grupo.id + "</a>";
    htmlGrupos += "</div>";
    htmlGrupos += "<ul class='lista-paises'>";
    htmlGrupos += htmlPaises;
    htmlGrupos += "</ul>";
    htmlGrupos += "</div>";
    }

    contenedor.innerHTML = htmlGrupos;