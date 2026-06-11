const info = {
  Francia: "🇫🇷 Francia - Campeón del mundo en 1998 y 2018. Clasificó por UEFA.",
  Senegal: "🇸🇳 Senegal - Campeón de África 2021. Clasificó por CAF.",
  Irak: "🇮🇶 Irak - Primera participación histórica en un Mundial. Clasificó por AFC.",
  Noruega: "🇳🇴 Noruega - Regresa al Mundial tras décadas de ausencia. Clasificó por UEFA."
};

const cards = document.querySelectorAll(".equipo-card");
const panel = document.getElementById("info-panel");
const texto = document.getElementById("info-texto");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const equipo = card.getAttribute("data-equipo");

    if (equipo === "Francia") {
      window.location.href = "francia.html";
    } else if (equipo === "Senegal") {
      window.location.href = "senegal.html";
    } else if (equipo === "Irak") {
      window.location.href = "irak.html";
    } else if (equipo === "Noruega") {
      window.location.href = "noruega.html";
    } else {
      texto.textContent = info[equipo];
      panel.classList.remove("oculto");
    }
  });
});

function cerrarPanel() {
  panel.classList.add("oculto");
}