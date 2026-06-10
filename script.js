const steps = [
  {
    title: "Verificar alimentação elétrica",
    description: "Confirmar que a alimentação principal está disponível e que não existem alarmes ou avisos nos equipamentos.",
    warning: "Não ligar equipamentos se houver cheiro a queimado, ruído anormal ou cabos danificados."
  },
  {
    title: "Ligar a mesa de mistura",
    description: "Ligar a mesa de mistura e aguardar alguns segundos até o sistema estabilizar.",
    warning: "Manter volumes baixos antes de ligar monitores ou amplificadores."
  },
  {
    title: "Ligar monitores e ecrãs",
    description: "Ligar os monitores da régie e confirmar que todos apresentam imagem corretamente."
  },
  {
    title: "Ligar computadores ou sistema de gravação",
    description: "Iniciar os computadores, software de gravação, streaming ou controlo, conforme o procedimento da sala."
  },
  {
    title: "Confirmar entradas de áudio",
    description: "Testar microfones, fontes externas e níveis de entrada. Garantir que não há distorção."
  },
  {
    title: "Confirmar vídeo",
    description: "Verificar câmaras, fontes HDMI/SDI, projetores ou sistemas de captura."
  },
  {
    title: "Fazer teste final",
    description: "Realizar um teste curto de áudio e vídeo antes de iniciar aula, gravação ou emissão."
  }
];

const stepsContainer = document.getElementById("steps");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const completeCard = document.getElementById("completeCard");
const resetBtn = document.getElementById("resetBtn");

function renderSteps() {
  stepsContainer.innerHTML = steps.map((step, index) => `
    <article class="card step-card">
      <div class="media-placeholder">
        <span>Adicionar foto<br>ou vídeo depois</span>
      </div>

      <div>
        <span class="step-number">Passo ${index + 1}</span>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
        ${step.warning ? `<div class="warning">${step.warning}</div>` : ""}
      </div>

      <label class="check-wrap">
        <input type="checkbox" class="step-check" data-index="${index}" />
        Concluído
      </label>
    </article>
  `).join("");

  document.querySelectorAll(".step-check").forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
  });
}

function updateProgress() {
  const checked = document.querySelectorAll(".step-check:checked").length;
  const percentage = Math.round((checked / steps.length) * 100);

  progressText.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;
  completeCard.classList.toggle("visible", checked === steps.length);
}

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".step-check").forEach((checkbox) => {
    checkbox.checked = false;
  });
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderSteps();
updateProgress();
