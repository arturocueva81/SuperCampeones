const info = {
Argentina: "🇦🇷 Argentina - Tricampeón del mundo (1978, 1986, 2022) y vigente defensor del título. Clasificó por CONMEBOL.",
Argelia: "🇩🇿 Argelia - Bicampeón de África (1990, 2019) y un clásico del fútbol magrebí. Clasificó por CAF.",
Austria: "🇦🇹 Austria - Histórico del fútbol europeo que busca revivir sus viejas glorias en el torneo. Clasificó por UEFA.",
Jordania: "🇯🇴 Jordania - Primera participación histórica en un Mundial, tras una eliminatoria asiática memorable. Clasificó por AFC.",
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