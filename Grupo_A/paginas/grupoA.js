const info = {
Mexico: "🇲🇽 México - Selección con 17 participaciones en Copas del Mundo y campeona de la Copa Confederaciones 1999. Clasificó por CONCACAF.",
Corea: "🇰🇷 Corea del Sur - Selección asiática con 11 participaciones mundialistas y semifinalista de la Copa del Mundo 2002. Clasificó por AFC.",
Sudafrica: "🇿🇦 Sudáfrica - Campeona de la Copa Africana de Naciones 1996 y anfitriona de la Copa del Mundo 2010. Clasificó por CAF.",
RepublicaCheca: "🇨🇿 República Checa - Subcampeona de la Eurocopa 1996 y heredera de la tradición futbolística de Checoslovaquia. Clasificó por UEFA.",
};

const cards = document.querySelectorAll(".equipo-card");
const panel = document.getElementById("info-panel");
const texto = document.getElementById("info-texto");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const equipo = card.getAttribute("data-equipo");
    texto.textContent = info[equipo];
    panel.classList.remove("oculto");
  });
});

function cerrarPanel() {
  panel.classList.add("oculto");
}