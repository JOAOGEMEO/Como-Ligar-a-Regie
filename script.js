// =====================================================
// PROCEDURES DATA
// =====================================================

const proceduresData = {
  pt: {
    "ligar-regie": {
      title: "Ligar a Régie",
      storageKey: "infoon_ligar_v16",
      steps: [
        {
          title: "Ligar os MDU da Sala de Máquinas",
          tasks: [
            "Ligar os MDU na sala de máquinas.",
            "Confirmar os LEDs de funcionamento.",
            "Verificar que os equipamentos arrancam sem erro."
          ],
          note: "Este passo prepara a infraestrutura técnica antes da operação na régie.",
          image: "assets/imagens/Arranque/0.jpg"
        },
        {
          title: "Ligar os MDU da Régie",
          tasks: [
            "Ligar os MDU localizados na régie.",
            "Confirmar comunicação com a sala de máquinas.",
            "Verificar sinais ou indicadores de estado."
          ],
          note: "Confirmar ligação antes de avançar para mesas e fontes.",
          image: "assets/imagens/Arranque/1.jpg"
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
          note: "Não avançar se algum equipamento apresentar erro no arranque.",
          image: "assets/imagens/Arranque/2.jpg"
        },
        {
          title: "Ligar Monitores",
          tasks: [
            "Ligar os monitores da régie.",
            "Confirmar imagem nos ecrãs.",
            "Verificar se as fontes aparecem nos monitores corretos."
          ],
          note: "Os monitores devem permitir validar imagem antes de ligar câmaras."
        }
      ]
    },

    streaming: {
      title: "Streaming",
      storageKey: "infoon_streaming_v16",
      steps: [
        {
          title: "Verificar que a Régie está Operacional",
          tasks: [
            "Confirmar que o procedimento Ligar a Régie foi concluído.",
            "Confirmar sinal de vídeo das câmaras.",
            "Confirmar áudio operacional.",
            "Confirmar intercoms operacionais."
          ],
          note: "Não iniciar streaming sem validação de vídeo, áudio e comunicação."
        },
        {
          title: "Inserir a Stream Key",
          tasks: [
            "Introduzir a Stream Key fornecida para a transmissão.",
            "Confirmar que a Stream Key corresponde ao evento em curso.",
            "Exemplo de Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
          ],
          warning: "Utilizar sempre a chave correta fornecida para a transmissão.",
          image: "assets/imagens/stream-key.jpg"
        },
        {
          title: "Iniciar a Transmissão",
          tasks: [
            "Confirmar novamente áudio e vídeo.",
            "Carregar no botão ON AIR.",
            "Confirmar que o estado muda para transmissão ativa."
          ],
          note: "Após carregar em ON AIR, aguardar cerca de 3 segundos."
        },
        {
          title: "Encerrar Streaming",
          tasks: [
            "Confirmar fim do evento.",
            "Parar a gravação do programa de TV.",
            "Carregar no botão ON AIR para terminar a transmissão.",
            "Validar num segundo dispositivo que a transmissão terminou."
          ],
          note: "Este procedimento não inclui desligar a régie."
        }
      ]
    },

    "desligar-regie": {
      title: "Desligar a Régie",
      storageKey: "infoon_desligar_v16",
      steps: [
        {
          title: "Confirmar Fim da Operação",
          tasks: [
            "Confirmar que a gravação terminou.",
            "Confirmar que o streaming terminou, quando aplicável.",
            "Informar a equipa que vai iniciar o encerramento."
          ],
          warning: "Nunca desligar equipamentos antes de confirmar o fim da gravação/transmissão."
        },
        {
          title: "Desligar Equipamentos",
          tasks: [
            "Desligar câmaras.",
            "Desligar CCU.",
            "Desligar flycase de áudio.",
            "Encerrar corretamente o PC das VT's.",
            "Desligar mesas e monitores."
          ],
          note: "O encerramento segue a ordem inversa ao arranque."
        },
        {
          title: "Verificação Final",
          tasks: [
            "Confirmar que todos os equipamentos estão desligados.",
            "Confirmar que os cabos estão organizados.",
            "Reportar qualquer anomalia encontrada."
          ],
          note: "Só concluir quando o espaço estiver pronto para a próxima equipa."
        }
      ]
    }
  }
};


// =====================================================
// ENGLISH VERSION
// =====================================================

proceduresData.en = JSON.parse(JSON.stringify(proceduresData.pt));

proceduresData.en["ligar-regie"].title = "Power On Control Room";
proceduresData.en["ligar-regie"].steps = [
  {
    title: "Turn on the Machine Room MDUs",
    tasks: [
      "Turn on the MDUs in the machine room.",
      "Confirm the status LEDs are operational.",
      "Verify that the equipment starts without errors."
    ],
    note: "This step prepares the technical infrastructure before operating the control room.",
    image: "assets/imagens/Arranque/0.jpg"
  },
  {
    title: "Turn on the Control Room MDUs",
    tasks: [
      "Turn on the MDUs located in the control room.",
      "Confirm communication with the machine room.",
      "Verify signals or status indicators."
    ],
    note: "Confirm the connection before moving on to consoles and sources.",
    image: "assets/imagens/Arranque/1.jpg"
  },
  {
    title: "Turn on Consoles, VT PC and Audio Desk",
    tasks: [
      "Turn on the machine room console.",
      "Turn on the main control room console.",
      "Turn on the audio desk.",
      "Turn on the VT PC.",
      "Wait for all equipment to fully power up.",
      "Confirm there are no startup error messages."
    ],
    note: "Do not proceed if any equipment reports an error during startup.",
    image: "assets/imagens/Arranque/2.jpg"
  },
  {
    title: "Turn on Monitors",
    tasks: [
      "Turn on the control room monitors.",
      "Confirm image on the screens.",
      "Verify that sources appear on the correct monitors."
    ],
    note: "Monitors must allow image validation before turning on cameras."
  }
];

proceduresData.en["streaming"].steps = [
  {
    title: "Verify the Control Room is Operational",
    tasks: [
      "Confirm that the Power On Control Room procedure is complete.",
      "Confirm video signal from the cameras.",
      "Confirm audio is operational.",
      "Confirm intercoms are operational."
    ],
    note: "Do not begin streaming without validating video, audio, and communication."
  },
  {
    title: "Enter the Stream Key",
    tasks: [
      "Enter the provided Stream Key for the broadcast.",
      "Confirm the Stream Key matches the current event.",
      "Example Stream Key: 3ec3-qhu3-bp5f-2dr1-11wj"
    ],
    warning: "Always use the correct stream key provided for the broadcast.",
    image: "assets/imagens/stream-key.jpg"
  },
  {
    title: "Start the Broadcast",
    tasks: [
      "Confirm audio and video again.",
      "Press the ON AIR button.",
      "Confirm the state changes to active transmission."
    ],
    note: "After pressing ON AIR, wait about 3 seconds."
  },
  {
    title: "End the Streaming",
    tasks: [
      "Confirm the event has ended.",
      "Stop the TV program recording.",
      "Press the ON AIR button to end the transmission.",
      "Validate on a second device that the transmission has finished."
    ],
    note: "This procedure does not include shutting down the control room."
  }
];

proceduresData.en["desligar-regie"].title = "Power Off Control Room";
proceduresData.en["desligar-regie"].steps = [
  {
    title: "Confirm End of Operation",
    tasks: [
      "Confirm recording has ended.",
      "Confirm streaming has ended, when applicable.",
      "Inform the team that shutdown will begin."
    ],
    warning: "Never power off equipment before confirming the end of recording/transmission."
  },
  {
    title: "Power Off Equipment",
    tasks: [
      "Power off cameras.",
      "Power off the CCU.",
      "Power off the audio flycase.",
      "Shut down the VT PC properly.",
      "Power off consoles and monitors."
    ],
    note: "Shutdown follows the reverse order of startup."
  },
  {
    title: "Final Verification",
    tasks: [
      "Confirm all equipment is powered off.",
      "Confirm cables are organized.",
      "Report any faults found."
    ],
    note: "Only finish when the area is ready for the next team."
  }
];


// =====================================================
// UI TRANSLATIONS
// =====================================================

const ui = {
  pt: {
    subtitle: "Plataforma de Procedimentos Técnicos do DCAM.",
    wipTitle: "Documento em work in progress",
    wipText: "Esta plataforma está em desenvolvimento e será atualizada com novos procedimentos, imagens e validações técnicas.",

    areaStudios: "Regras dos Estúdios",
    areaStudiosDesc: "Segurança · Reservas · Limpeza · Equipamentos",
    areaRegie: "Régie",
    areaRegieDesc: "Arranque · Streaming · Encerramento",
    areaRegieTitle: "Régie",
    areaVP: "VP - Produção Virtual",
    areaVPDesc: "Produção virtual e estúdios virtuais",
    areaVPTitle: "VP - Produção Virtual",
    areaVideoteca: "Videoteca",
    areaVideotecaDesc: "Acesso a vídeos e referências técnicas",
    areaVideotecaTitle: "Videoteca",
    areaReshape: "Reshape",
    areaReshapeDesc: "Área preparada para novos procedimentos",
    areaStudiosTitle: "Regras - Estúdios",

    generalProcedures: "Procedimentos Gerais",
    regieProcedures: "Procedimentos da Régie",

    backHome: "← Voltar",
    backButton: "← Voltar",

    security: "Segurança",
    bookings: "Reservas",
    cleaning: "Limpeza",
    equipment: "Equipamentos",

    securityDesc: "Regras essenciais de segurança, circulação, cabos e utilização responsável dos espaços.",
    bookingsDesc: "Marcação, confirmação, utilização e cancelamento de espaços e equipamentos.",
    cleaningDesc: "Organização, limpeza, arrumação e entrega dos estúdios após utilização.",
    equipmentDesc: "Requisição, transporte, utilização, devolução e reporte de anomalias.",

    startup: "Arranque",
    shutdown: "Encerramento",
    support: "Suporte",
    liveBadge: "Live",
    streamingTitle: "Streaming",

    powerOnRegie: "Ligar a Régie",
    powerOnRegieDesc: "Sequência de arranque dos MDU, mesas, câmaras, CCU, áudio e intercoms.",
    streamingDesc: "Procedimento para iniciar e encerrar transmissão no PC das VT's.",
    powerOffRegie: "Desligar a Régie",
    powerOffRegieDesc: "Procedimento final em ordem inversa ao arranque.",

    commonProblems: "Problemas Comuns",
    commonProblemsDesc: "Diagnóstico de imagem, áudio, sinal, intercoms e fontes.",

    activeProcedure: "Procedimento ativo",
    progressSaved: "O progresso fica guardado neste dispositivo.",
    finalValidation: "Validação final",
    finalValidationText: "Quando todos os passos estiverem concluídos, o procedimento fica validado.",
    markAllDone: "Marcar tudo como concluído",

    contribute: "Contribuir",
    suggestionsTitle: "Sugestões e correções",
    suggestionsText: "Este documento encontra-se em desenvolvimento contínuo. Para sugerir melhorias ou reportar erros, contacte:",

    vpWipTitle: "Brevemente — Área em desenvolvimento",
    vpWipText: "Esta área receberá procedimentos e orientações para produção virtual.",
    videotecaWipTitle: "Brevemente — Área em desenvolvimento",
    videotecaWipText: "Esta área receberá procedimentos e orientações para a Videoteca.",
    reshapeWipTitle: "Brevemente — Área em desenvolvimento",
    reshapeWipText: "Esta área receberá procedimentos e orientações para o Reshape.",

    stepDone: "Passo concluído",
    mediaTitle: "Imagem / vídeo",
    mediaPlaceholder: "Adicionar conteúdo depois",
    progress: "concluído",
    steps: "passos",
    exampleKey: "Exemplo de Stream Key",

    reshapeInDevelopment: "Área em desenvolvimento",
    reshapeText: "Esta área está preparada para receber procedimentos próprios de Reshape."
  },

  en: {
    subtitle: "Technical Procedures Platform for DCAM.",
    wipTitle: "Work in progress document",
    wipText: "This platform is under development and will be updated with new procedures, images and technical validations.",

    areaStudios: "Studio Rules",
    areaStudiosDesc: "Safety · Bookings · Cleaning · Equipment",
    areaRegie: "Control Room",
    areaRegieDesc: "Startup · Streaming · Shutdown",
    areaRegieTitle: "Control Room",
    areaVP: "VP - Virtual Production",
    areaVPDesc: "Virtual production and virtual studios",
    areaVPTitle: "VP - Virtual Production",
    areaVideoteca: "Film Library",
    areaVideotecaDesc: "Access to videos and technical references",
    areaVideotecaTitle: "Film Library",
    areaReshape: "Reshape",
    areaReshapeDesc: "Area prepared for new procedures",
    areaStudiosTitle: "Studio Rules",

    generalProcedures: "General Procedures",
    regieProcedures: "Control Room Procedures",

    backHome: "← Back",
    backButton: "← Back",

    security: "Safety",
    bookings: "Bookings",
    cleaning: "Cleaning",
    equipment: "Equipment",

    securityDesc: "Essential rules for safety, circulation, cables and responsible use of spaces.",
    bookingsDesc: "Booking, confirmation, use and cancellation of spaces and equipment.",
    cleaningDesc: "Organisation, cleaning, tidying and handover of studios after use.",
    equipmentDesc: "Request, transport, use, return and anomaly reporting.",

    startup: "Startup",
    shutdown: "Shutdown",
    support: "Support",
    liveBadge: "Live",
    streamingTitle: "Streaming",

    powerOnRegie: "Power On Control Room",
    powerOnRegieDesc: "Startup sequence for MDUs, consoles, cameras, CCUs, audio and intercoms.",
    streamingDesc: "Procedure to start and end broadcast from the VT PC.",
    powerOffRegie: "Power Off Control Room",
    powerOffRegieDesc: "Final procedure in reverse startup order.",

    commonProblems: "Common Issues",
    commonProblemsDesc: "Image, audio, signal, intercom and source diagnosis.",

    activeProcedure: "Active procedure",
    progressSaved: "Progress is saved on this device.",
    finalValidation: "Final validation",
    finalValidationText: "When all steps are complete, the procedure is validated.",
    markAllDone: "Mark all as complete",

    contribute: "Contribute",
    suggestionsTitle: "Suggestions and corrections",
    suggestionsText: "This document is under continuous development. To suggest improvements or report errors, contact:",

    vpWipTitle: "Coming soon — Area in development",
    vpWipText: "This area will receive procedures and guidance for virtual production.",
    videotecaWipTitle: "Coming soon — Area in development",
    videotecaWipText: "This area will receive procedures and guidance for the Film Library.",
    reshapeWipTitle: "Coming soon — Area in development",
    reshapeWipText: "This area is prepared to receive Reshape-specific procedures.",

    stepDone: "Step completed",
    mediaTitle: "Image / video",
    mediaPlaceholder: "Add content later",
    progress: "complete",
    steps: "steps",
    exampleKey: "Example Stream Key",

    reshapeInDevelopment: "Area in development",
    reshapeText: "This area is prepared to receive Reshape-specific procedures."
  }
};


// =====================================================
// STUDIO RULES
// =====================================================

const studioRules = {
  pt: {
    seguranca: [
      "Manter corredores, acessos e zonas técnicas livres de obstáculos.",
      "Garantir que cabos no chão ficam protegidos e organizados.",
      "Não alterar ligações elétricas ou técnicas sem autorização.",
      "Comunicar imediatamente qualquer situação de risco, dano ou anomalia."
    ],
    reservas: [
      "Confirmar a reserva do espaço antes da utilização.",
      "Respeitar o horário atribuído para montagem, utilização e desmontagem.",
      "Cancelar ou alterar reservas com antecedência sempre que possível.",
      "Não ocupar espaços sem autorização ou confirmação prévia."
    ],
    limpeza: [
      "Entregar o estúdio limpo, organizado e sem resíduos.",
      "Arrumar cadeiras, mesas, cabos, tripés e restantes materiais utilizados.",
      "Remover objetos pessoais e materiais temporários no final da utilização."
    ],
    equipamentos: [
      "Utilizar apenas equipamentos autorizados ou requisitados.",
      "Confirmar o estado do equipamento antes e depois da utilização.",
      "Transportar equipamentos com cuidado e proteção adequada.",
      "Reportar imediatamente avarias, danos, perdas ou funcionamento anómalo."
    ]
  },

  en: {
    seguranca: [
      "Keep corridors, access points and technical areas clear.",
      "Ensure floor cables are protected and organised.",
      "Do not change electrical or technical connections without authorisation.",
      "Immediately report any risk, damage or anomaly."
    ],
    reservas: [
      "Confirm the space booking before use.",
      "Respect the assigned setup, use and teardown schedule.",
      "Cancel or change bookings in advance whenever possible.",
      "Do not occupy spaces without prior confirmation."
    ],
    limpeza: [
      "Return the studio clean, organised and free of waste.",
      "Store chairs, tables, cables, tripods and all used materials.",
      "Remove personal items after use."
    ],
    equipamentos: [
      "Use only authorised or requested equipment.",
      "Check equipment condition before and after use.",
      "Transport equipment carefully.",
      "Immediately report faults, damage, loss or abnormal operation."
    ]
  }
};

const ruleNames = {
  pt: {
    seguranca: "Segurança",
    reservas: "Reservas",
    limpeza: "Limpeza",
    equipamentos: "Equipamentos"
  },
  en: {
    seguranca: "Safety",
    reservas: "Bookings",
    limpeza: "Cleaning",
    equipamentos: "Equipment"
  }
};


// =====================================================
// ABOUT TEXTS
// =====================================================

const aboutTexts = {
  pt: `
    <p class="eyebrow">Projeto</p>
    <p>O INFO-ON é um guia interativo desenvolvido para apoiar a operação técnica da régie do Departamento de Cinema e Artes dos Media da Universidade Lusófona.</p>

    <h3>Histórico de versões</h3>
    <ul class="version-list">
      <li><strong>v1-v4</strong> — Estrutura inicial e protótipos.</li>
      <li><strong>v5</strong> — Primeira versão profissional.</li>
      <li><strong>v6</strong> — Procedimentos completos.</li>
      <li><strong>v7</strong> — Melhorias de navegação.</li>
      <li><strong>v8</strong> — Documento Work in Progress.</li>
      <li><strong>v9</strong> — Streaming dedicado.</li>
      <li><strong>v10</strong> — Estrutura centrada.</li>
      <li><strong>v11</strong> — Melhorias organizacionais.</li>
      <li><strong>v12</strong> — Consolidação técnica.</li>
      <li><strong>v13</strong> — Sistema de imagens locais.</li>
      <li><strong>v14</strong> — Português / Inglês.</li>
      <li><strong>v15</strong> — Responsividade e identidade visual.</li>
      <li><strong>v16</strong> — Evolução para INFO-ON.</li>
    </ul>
  `,

  en: `
    <p class="eyebrow">Project</p>
    <p>INFO-ON is an interactive guide developed to support the technical operation of the control room of the Cinema and Media Arts Department at Universidade Lusófona.</p>

    <h3>Version History</h3>
    <ul class="version-list">
      <li><strong>v1-v4</strong> — Initial structure and prototypes.</li>
      <li><strong>v5</strong> — First professional release.</li>
      <li><strong>v6</strong> — Complete procedures.</li>
      <li><strong>v7</strong> — Navigation improvements.</li>
      <li><strong>v8</strong> — Work In Progress document.</li>
      <li><strong>v9</strong> — Dedicated streaming.</li>
      <li><strong>v10</strong> — Centered structure.</li>
      <li><strong>v11</strong> — Organizational improvements.</li>
      <li><strong>v12</strong> — Technical consolidation.</li>
      <li><strong>v13</strong> — Local image system.</li>
      <li><strong>v14</strong> — Portuguese / English.</li>
      <li><strong>v15</strong> — Responsiveness and visual identity.</li>
      <li><strong>v16</strong> — Evolution to INFO-ON.</li>
    </ul>
  `
};


// =====================================================
// STATE
// =====================================================

let currentLanguage = localStorage.getItem("infoon_language") || "pt";
let procedures = proceduresData[currentLanguage];
let activeProcedure = null;
let activeProcedureId = null;


// =====================================================
// LANGUAGE
// =====================================================

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("infoon_language", lang);

  procedures = proceduresData[lang];
  document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";

  applyTranslations();
  updateMiniProgress();

  if (activeProcedureId) {
    activeProcedure = procedures[activeProcedureId];
    document.getElementById("procedure-title").textContent = activeProcedure.title;
    renderSteps();
  }
}

function applyTranslations() {
  const t = ui[currentLanguage];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });

  document.getElementById("lang-pt")?.classList.toggle("active", currentLanguage === "pt");
  document.getElementById("lang-en")?.classList.toggle("active", currentLanguage === "en");
}


// =====================================================
// NAVIGATION
// =====================================================

function hideAll() {
  [
    "home",
    "area-estudios",
    "rule-view",
    "area-regie",
    "procedure-view",
    "area-vp",
    "area-videoteca",
    "area-reshape"
  ].forEach((id) => {
    document.getElementById(id)?.classList.add("hidden");
  });
}

function goHome() {
  hideAll();
  document.getElementById("home").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openArea(area) {
  hideAll();
  const target = document.getElementById(`area-${area}`);
  if (!target) {
    console.warn(`openArea: missing section area-${area}, returning home`);
    document.getElementById("home")?.classList.remove("hidden");
    return;
  }
  target.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// =====================================================
// RULES
// =====================================================

function openRule(id) {
  const title = ruleNames[currentLanguage][id];
  const rules = studioRules[currentLanguage][id];

  hideAll();

  document.getElementById("rule-view").classList.remove("hidden");
  document.getElementById("rule-title").textContent = title;

  document.getElementById("rule-content").innerHTML = `
    <article class="step-card">
      <div>
        <h3>${title}</h3>
        <ul>
          ${rules.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>

      <div class="media-box">
        <div>
          <strong>${ui[currentLanguage].mediaTitle}</strong>
          <span>${ui[currentLanguage].mediaPlaceholder}</span>
        </div>
      </div>
    </article>
  `;
}


// =====================================================
// PROCEDURES
// =====================================================

function openProcedure(id) {
  activeProcedureId = id;
  activeProcedure = procedures[id];

  hideAll();

  document.getElementById("procedure-view").classList.remove("hidden");
  document.getElementById("procedure-title").textContent = activeProcedure.title;

  renderSteps();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeProcedure() {
  activeProcedure = null;
  activeProcedureId = null;
  openArea("regie");
}

function getSaved() {
  if (!activeProcedure) return [];
  return JSON.parse(localStorage.getItem(activeProcedure.storageKey) || "[]");
}

function saveState() {
  const checks = [...document.querySelectorAll(".step-check")];
  const state = checks.map((input) => input.checked);

  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(state));

  updateProgress();
}

function renderSteps() {
  const t = ui[currentLanguage];
  const saved = getSaved();
  const container = document.getElementById("steps");

  container.innerHTML = "";

  activeProcedure.steps.forEach((step, index) => {
    const card = document.createElement("article");
    card.className = "step-card";

    const tasks = step.tasks
      .map((task) => {
        if (task.includes("3ec3")) {
          return `<li>${t.exampleKey}: <span class="key-example">3ec3-qhu3-bp5f-2dr1-11wj</span></li>`;
        }

        return `<li>${task}</li>`;
      })
      .join("");

    const note = step.warning
      ? `<div class="warning">${step.warning}</div>`
      : step.note
        ? `<p class="step-note">${step.note}</p>`
        : "";

    const media = step.image
      ? `<img src="${step.image}" class="step-image" onclick="openImage(this.src)">`
      : `
        <div>
          <strong>${t.mediaTitle}</strong>
          <span>${t.mediaPlaceholder}</span>
        </div>
      `;

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
          <input class="step-check" type="checkbox" ${saved[index] ? "checked" : ""}>
          ${t.stepDone}
        </label>
      </div>

      <div class="media-box">
        ${media}
      </div>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll(".step-check").forEach((input) => {
    input.addEventListener("change", saveState);
  });

  updateProgress();
}

function markAllDone() {
  const state = activeProcedure.steps.map(() => true);
  localStorage.setItem(activeProcedure.storageKey, JSON.stringify(state));
  renderSteps();
}


// =====================================================
// PROGRESS
// =====================================================

function updateProgress() {
  const t = ui[currentLanguage];
  const checks = [...document.querySelectorAll(".step-check")];

  const done = checks.filter((input) => input.checked).length;
  const total = checks.length;
  const percent = total ? Math.round((done / total) * 100) : 0;

  checks.forEach((input) => {
    input.closest(".step-card").classList.toggle("done", input.checked);
  });

  document.getElementById("progress-text").textContent =
    `${percent}% ${t.progress} · ${done}/${total} ${t.steps}`;

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


// =====================================================
// MODALS
// =====================================================

function openImage(src) {
  document.getElementById("modalImage").src = src;
  document.getElementById("imageModal").classList.add("show");
}

function closeImage() {
  document.getElementById("imageModal").classList.remove("show");
}

function openAboutModal() {
  document.getElementById("aboutModal").classList.add("show");
  setAboutLanguage(currentLanguage);
}

function closeAboutModal() {
  document.getElementById("aboutModal").classList.remove("show");
}

function setAboutLanguage(lang) {
  document.getElementById("about-content").innerHTML = aboutTexts[lang];

  document.getElementById("about-pt").classList.toggle("active", lang === "pt");
  document.getElementById("about-en").classList.toggle("active", lang === "en");
}


// =====================================================
// EVENTS
// =====================================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImage();
    closeAboutModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  updateMiniProgress();

  document.getElementById("imageModal").addEventListener("click", (event) => {
    if (event.target.id === "imageModal") closeImage();
  });

  document.getElementById("aboutModal").addEventListener("click", (event) => {
    if (event.target.id === "aboutModal") closeAboutModal();
  });
});
