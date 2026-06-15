const info = {
  Brasil: "🇧🇷 Brasil - Cinco veces campeón del mundo. Clasificó por CONMEBOL.",
  Marruecos: "🇲🇦 Marruecos - Semifinalista histórico en Qatar 2022. Clasificó por CAF.",
  Haití: "🇭🇹 Haití - Regresa a una Copa del Mundo representando a CONCACAF.",
  Escocia: "🏴 Escocia - Selección histórica del Reino Unido. Clasificó por UEFA."
};

const cards = document.querySelectorAll(".equipo-card");
const panel = document.getElementById("info-panel");
const texto = document.getElementById("info-texto");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const equipo = card.getAttribute("data-equipo");

    if (equipo === "Brasil") {
      window.location.href = "brasil.html";
    } else if (equipo === "Marruecos") {
      window.location.href = "marruecos.html";
    } else if (equipo === "Haití") {
      window.location.href = "haiti.html";
    } else if (equipo === "Escocia") {
      window.location.href = "escocia.html";
    } else {
      texto.textContent = info[equipo];
      panel.classList.remove("oculto");
    }
  });
});

function cerrarPanel() {
  panel.classList.add("oculto");
}