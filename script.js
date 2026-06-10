const procedures = {
  "ligar-regie": {
    title: "Ligar a Régie",
    storageKey: "regieon_ligar_regie_v8",
    steps: [
      {
        title: "Ligar os MDU da Sala de Máquinas",
        tasks: [
          "Ligar os MDU na sala de máquinas.",
          "Confirmar os LEDs de funcionamento.",
          "Verificar que os equipamentos arrancam sem erro."
        ],
        note: "Este passo prepara a infraestrutura técnica antes da operação na régie."
      },
      {
        title: "Ligar os MDU da Régie",
        tasks: [
          "Ligar os MDU localizados na régie.",
          "Confirmar comunicação com a sala de máquinas.",
          "Verificar sinais ou indicadores de estado."
        ],
        note: "Confirmar ligação antes de avançar para mesas e fontes."
      },
      {
        title: "Ligar Mesas, PC das VT's e Mesa de Som",
        tasks: [
          "Ligar a mesa da sala de máquinas.",
          "Ligar a mesa principal da régie.",
          "Ligar a mesa de som.",
          "Ligar o PC das VT's.",
          "Aguardar o arranque completo de todos os equipamentos.",
          "Confirmar que não existem mensagens de erro."
        ],
        note: "Não avançar se algum equipamento apresentar erro no arranque."
      },
      {
        title: "Ligar Monitores",
        tasks: [
          "Ligar os monitores da régie.",
          "Confirmar imagem nos ecrãs.",
          "Verificar se as fontes aparecem nos monitores corretos."
        ],
        note: "Os monitores devem permitir validar imagem antes de ligar câmaras."
      },
      {
        title: "Ligar Cabos das Câmaras",
        tasks: [
          "Ligar os cabos das câmaras.",
          "Confirmar SDI, fibra, rede ou controlo conforme aplicável.",
          "Confirmar que os cabos estão bem encaixados.",
          "Não ligar ainda o power das câmaras."
        ],
        warning: "Atenção: os cabos devem ser ligados antes de ligar a alimentação das câmaras."
      },
      {
        title: "Ligar as CCU",
        tasks: [
          "Ligar as CCU.",
          "Confirmar alimentação e comunicação.",
          "Verificar sinal recebido de cada câmara.",
          "Confirmar que cada CCU corresponde à câmara correta."
        ],
        note: "As CCU devem estar operacionais antes de ligar as câmaras."
      },
      {
        title: "Ligar as Câmaras",
        tasks: [
          "Ligar a Câmara 1 e confirmar vídeo.",
          "Ligar a Câmara 2 e confirmar vídeo.",
          "Ligar a Câmara 3 e confirmar vídeo.",
          "Confirmar tally quando aplicável.",
          "Confirmar comunicação com a régie quando aplicável."
        ],
        note: "Validar cada câmara individualmente antes de passar à seguinte."
      },
      {
        title: "Ligar a Flycase de Áudio",
        tasks: [
          "Localizar a wallbox destinada ao áudio.",
          "Ligar o cabo de rede da flycase à wallbox correta.",
          "Confirmar que a ficha está bem encaixada.",
          "Ligar a flycase.",
          "Confirmar comunicação com a mesa de som."
        ],
        note: "Usar apenas a wallbox destinada para este sistema."
      },
      {
        title: "Verificar Áudio e Intercoms",
        tasks: [
          "Testar todos os microfones necessários.",
          "Confirmar sinal na mesa de som.",
          "Verificar níveis de entrada.",
          "Confirmar retorno de áudio.",
          "Testar intercom com os operadores de câmara.",
          "Testar intercom com o assistente de realização.",
          "Confirmar que todos recebem e transmitem áudio corretamente."
        ],
        note: "A comunicação entre realização, câmaras e assistente é obrigatória antes da operação."
      },
      {
        title: "Teste Geral",
        tasks: [
          "Confirmar imagem de todas as câmaras.",
          "Confirmar funcionamento das CCU.",
          "Confirmar áudio em todos os canais necessários.",
          "Confirmar intercoms.",
          "Confirmar VT's.",
          "Confirmar que a régie está pronta para produção, gravação ou transmissão."
        ],
        note: "Só marcar concluído quando o sistema estiver validado em conjunto."
      }
    ]
  },
  "desligar-regie": {
    title: "Desligar a Régie",
    storageKey: "regieon_desligar_regie_v8",
    steps: [
      {
        title: "Confirmar Fim da Operação",
        tasks: [
          "Confirmar que a gravação terminou.",
          "Confirmar que o streaming terminou.",
          "Confirmar que não existem gravações pendentes.",
          "Informar a equipa que vai iniciar o encerramento."
        ],
        warning: "Nunca desligar equipamentos antes de confirmar o fim da gravação/transmissão."
      },
      {
        title: "Desligar as Câmaras",
        tasks: [
          "Desligar a Câmara 1.",
          "Desligar a Câmara 2.",
          "Desligar a Câmara 3.",
          "Confirmar ausência de alimentação nas câmaras."
        ],
        note: "O encerramento das câmaras deve ser feito antes de desligar as CCU."
      },
      {
        title: "Desligar as CCU",
        tasks: [
          "Desligar todas as CCU.",
          "Confirmar apagamento dos indicadores.",
          "Verificar que não fica sinal ativo indevido."
        ],
        note: "Este passo é o inverso do arranque das CCU."
      },
      {
        title: "Desligar a Flycase de Áudio",
        tasks: [
          "Desligar a flycase.",
          "Desligar o cabo de rede da wallbox destinada.",
          "Arrumar o cabo corretamente.",
          "Confirmar que a wallbox fica livre e sem tensão indevida."
        ],
        note: "Garantir que os cabos ficam acondicionados para a próxima utilização."
      },
      {
        title: "Desligar Mesa de Som, Mesas e PC das VT's",
        tasks: [
          "Encerrar corretamente o PC das VT's.",
          "Desligar a mesa de som.",
          "Desligar a mesa principal da régie.",
          "Desligar a mesa da sala de máquinas."
        ],
        warning: "O PC das VT's deve ser encerrado corretamente, não apenas desligado da alimentação."
      },
      {
        title: "Desligar Monitores",
        tasks: [
          "Desligar todos os monitores da régie.",
          "Confirmar que não existem ecrãs ativos.",
          "Verificar se não há fontes ainda em utilização."
        ],
        note: "Confirmar o estado dos monitores antes de desligar a restante infraestrutura."
      },
      {
        title: "Desligar Cabos das Câmaras",
        tasks: [
          "Desligar os cabos das câmaras.",
          "Verificar acondicionamento dos cabos.",
          "Confirmar que não existem cabos sob tensão.",
          "Arrumar cabos de forma organizada."
        ],
        note: "Os cabos devem ficar preparados para a próxima montagem."
      },
      {
        title: "Desligar os MDU da Régie",
        tasks: [
          "Desligar os MDU da régie.",
          "Confirmar apagamento dos LEDs.",
          "Verificar que a régie fica sem sinais ativos desnecessários."
        ],
        note: "Este passo deve ocorrer depois do encerramento dos equipamentos principais."
      },
      {
        title: "Desligar os MDU da Sala de Máquinas",
        tasks: [
          "Desligar os MDU da sala de máquinas.",
          "Confirmar apagamento dos indicadores.",
          "Confirmar desligamento total da infraestrutura."
        ],
        note: "Último passo técnico antes da verificação final."
      },
      {
        title: "Verificação Final",
        tasks: [
          "Confirmar que todos os equipamentos estão desligados.",
          "Confirmar que os cabos estão organizados.",
          "Confirmar que a régie está limpa e pronta para a próxima utilização.",
          "Reportar qualquer anomalia encontrada."
        ],
        note: "Só concluir quando a régie estiver pronta para a próxima equipa."
      }
    ]
  }
};

let activeProcedureId = null;
let activeProcedure = null;

function scrollToProcedures() {
  document.getElementById("procedures").scrollIntoView({ behavior: "smooth" });
}

function openProcedure(id) {
  activeProcedureId = id;
  activeProcedure = procedures[id];
  document.getElementById("home").classList.add("hidden");
  document.getElementById("procedures").classList.add("hidden");
  document.getElementById("sugestoes").classList.add("hidden");
  document.getElementById("procedure-view").classList.remove("hidden");
  document.getElementById("procedure-title").textContent = activeProcedure.title;
  renderSteps();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProcedure() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("procedures").classList.remove("hidden");
  document.getElementById("sugestoes").classList.remove("hidden");
  document.getElementById("procedure-view").classList.add("hidden");
  updateMiniProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSaved() {
  if (!activeProcedure) return [];
  return JSON.parse(localStorage.getItem(activeProcedure.storageKey) || "[]");
}

function saveState() {
  const checks = [...document.querySelectorAll(".step-check")].map(input => input.checked);
  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(checks));
  updateProgress();
}

function renderSteps() {
  const saved = getSaved();
  const container = document.getElementById("steps");
  container.innerHTML = "";

  activeProcedure.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "step-card";

    const tasks = step.tasks.map(task => `<li>${task}</li>`).join("");
    const note = step.warning
      ? `<div class="warning">${step.warning}</div>`
      : step.note
        ? `<p class="step-note">${step.note}</p>`
        : "";

    card.innerHTML = `
      <div>
        <div class="step-header">
          <div class="step-number">${index + 1}</div>
          <div>
            <h3 class="step-title">${step.title}</h3>
            ${note}
          </div>
        </div>
        <ul>${tasks}</ul>
        <label class="check-row">
          <input class="step-check" type="checkbox" data-index="${index}" ${saved[index] ? "checked" : ""}>
          Passo concluído
        </label>
      </div>
      <div class="media-box">
        <div>
          <strong>Imagem / vídeo</strong>
          <span>Adicionar conteúdo depois</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll(".step-check").forEach(input => {
    input.addEventListener("change", saveState);
  });

  updateProgress();
}

function updateProgress() {
  if (!activeProcedure) return;
  const checks = [...document.querySelectorAll(".step-check")];
  const done = checks.filter(input => input.checked).length;
  const total = checks.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  checks.forEach(input => {
    input.closest(".step-card").classList.toggle("done", input.checked);
  });

  document.getElementById("progress-text").textContent = `${percent}% concluído · ${done}/${total} passos`;
  document.getElementById("progress-bar").style.width = `${percent}%`;
  updateMiniProgress();
}

function updateMiniProgress() {
  Object.entries(procedures).forEach(([id, proc]) => {
    const saved = JSON.parse(localStorage.getItem(proc.storageKey) || "[]");
    const done = saved.filter(Boolean).length;
    const percent = Math.round((done / proc.steps.length) * 100);
    const mini = document.getElementById(`mini-${id}`);
    if (mini) mini.style.width = `${percent}%`;
  });
}

function markAllDone() {
  if (!activeProcedure) return;
  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(activeProcedure.steps.map(() => true)));
  renderSteps();
}

function resetAllProgress() {
  Object.values(procedures).forEach(proc => localStorage.removeItem(proc.storageKey));
  updateMiniProgress();
  if (activeProcedure) renderSteps();
}

updateMiniProgress();
